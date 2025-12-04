import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "./components/PageTransition";
import LaunchCard from "./components/LaunchCard";
import RocketCard from "./components/RocketCard";
import { UPCOMING_LAUNCHES } from "./data/launches";
import { ROCKETS } from "./data/rockets";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <section className="hero-layout" aria-label="Launch overview">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow">Orbital launch operations</p>
          <h1
            style={{
              fontSize: "2.4rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "6px 0 8px",
            }}
          >
            Monitor every launch window.
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 420, fontSize: "0.95rem" }}>
            Professional dashboard for upcoming and historical orbital missions. Track
            vehicles, launch sites and status in a clean, mission‑focused interface.
          </p>

          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              className="pill-button"
              onClick={() => navigate("/launches")}
              style={{ paddingInline: 22 }}
            >
              View launch manifest
            </button>
            <button
              className="chip"
              style={{
                borderRadius: "999px",
                borderColor: "rgba(255, 255, 255, 0.4)",
              }}
              onClick={() => navigate("/launches")}
            >
              Starship flights
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-grid-card"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Upcoming missions</p>
              <h2 className="section-title" style={{ fontSize: "1.1rem" }}>
                Next launch windows
              </h2>
            </div>
            <button
              className="subtle-link"
              onClick={() => navigate("/launches")}
            >
              View full schedule ↗
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            {UPCOMING_LAUNCHES.slice(0, 3).map((launch) => (
              <LaunchCard key={launch.id} launch={launch} />
            ))}
          </div>
        </motion.div>
      </section>

      <section aria-label="Explore filters">
        <div className="section-header">
          <p className="section-eyebrow">Filters</p>
          <button className="subtle-link" onClick={() => navigate("/launches")}>
            Open detailed manifest →
          </button>
        </div>
        <div className="chips-row">
          <button className="chip chip-active" onClick={() => navigate("/launches")}>
            All missions
          </button>
          <button className="chip" onClick={() => navigate("/launches")}>
            Starship
          </button>
          <button className="chip" onClick={() => navigate("/launches")}>
            Falcon 9
          </button>
          <button className="chip" onClick={() => navigate("/launches")}>
            Crew
          </button>
          <button className="chip" onClick={() => navigate("/launches")}>
            Starlink
          </button>
        </div>
      </section>

      <section
        aria-label="Fleet overview"
        style={{ marginTop: 32 }}
        className="hero-grid-card"
      >
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Fleet</p>
            <h2 className="section-title" style={{ fontSize: "1rem" }}>
              Starship & Falcon family
            </h2>
          </div>
          <button className="subtle-link" onClick={() => navigate("/rockets")}>
            Open rocket details →
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {ROCKETS.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;


