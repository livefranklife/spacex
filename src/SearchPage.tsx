import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import LaunchCard from "./components/LaunchCard";
import RocketCard from "./components/RocketCard";
import { ALL_LAUNCHES } from "./data/launches";
import { ROCKETS } from "./data/rockets";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage: React.FC = () => {
  const query = useQuery();
  const q = query.get("q")?.toLowerCase() ?? "";
  const navigate = useNavigate();

  const matchingLaunches = ALL_LAUNCHES.filter(
    (launch) =>
      launch.name.toLowerCase().includes(q) ||
      launch.vehicle.toLowerCase().includes(q) ||
      launch.site.toLowerCase().includes(q)
  );

  const matchingRockets = ROCKETS.filter(
    (rocket) =>
      rocket.name.toLowerCase().includes(q) ||
      rocket.family.toLowerCase().includes(q)
  );

  const hasQuery = q.trim().length > 0;

  return (
    <PageTransition>
      <header className="section-header">
        <div>
          <p className="section-eyebrow">Search</p>
          <h1 className="section-title">
            {hasQuery ? `Results for “${q}”` : "Search missions or rockets"}
          </h1>
        </div>
        <button className="subtle-link" onClick={() => navigate("/launches")}>
          Browse launches instead →
        </button>
      </header>

      {hasQuery && matchingLaunches.length === 0 && matchingRockets.length === 0 && (
        <p style={{ color: "var(--muted)" }}>No missions or vehicles matched.</p>
      )}

      {matchingRockets.length > 0 && (
        <section style={{ marginBottom: 24 }}>
          <p className="section-eyebrow">Rockets</p>
          <div className="products-grid">
            {matchingRockets.map((rocket) => (
              <RocketCard key={rocket.id} rocket={rocket} />
            ))}
          </div>
        </section>
      )}

      {matchingLaunches.length > 0 && (
        <section>
          <p className="section-eyebrow">Launches</p>
          <div className="products-grid">
            {matchingLaunches.map((launch) => (
              <LaunchCard key={launch.id} launch={launch} />
            ))}
          </div>
        </section>
      )}
    </PageTransition>
  );
};

export default SearchPage;

