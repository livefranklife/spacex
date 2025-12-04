import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import LaunchCard from "../components/LaunchCard";
import {
  UPCOMING_LAUNCHES,
  PAST_LAUNCHES,
  ALL_LAUNCHES,
} from "../data/launches";

type Tab = "upcoming" | "recent" | "all";

const LaunchesPage: React.FC = () => {
  const [tab, setTab] = useState<Tab>("upcoming");

  const { title, launches } =
    tab === "upcoming"
      ? { title: "Upcoming launches", launches: UPCOMING_LAUNCHES }
      : tab === "recent"
      ? { title: "Recent missions", launches: PAST_LAUNCHES.slice(0, 4) }
      : { title: "All missions", launches: ALL_LAUNCHES };

  return (
    <PageTransition>
      <header className="section-header" style={{ marginBottom: 14 }}>
        <div>
          <p className="section-eyebrow">Launches</p>
          <h1 className="section-title">{title}</h1>
        </div>
        <span className="subtle-link">
          Inspired by{" "}
          <a
            href="https://www.spacex.com/launches"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--accent)" }}
          >
            spacex.com/launches
          </a>
        </span>
      </header>

      <div className="chips-row" style={{ marginBottom: 18 }}>
        <button
          className={`chip ${tab === "upcoming" ? "chip-active" : ""}`}
          onClick={() => setTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`chip ${tab === "recent" ? "chip-active" : ""}`}
          onClick={() => setTab("recent")}
        >
          Recent
        </button>
        <button
          className={`chip ${tab === "all" ? "chip-active" : ""}`}
          onClick={() => setTab("all")}
        >
          All missions
        </button>
      </div>

      <div className="products-grid">
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </PageTransition>
  );
};

export default LaunchesPage;


