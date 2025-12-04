import React from "react";
import PageTransition from "./components/PageTransition";
import RocketCard from "./components/RocketCard";
import { ROCKETS } from "./data/rockets";

const RocketsPage: React.FC = () => {
  return (
    <PageTransition>
      <header className="section-header" style={{ marginBottom: 18 }}>
        <div>
          <p className="section-eyebrow">Launch vehicles</p>
          <h1 className="section-title">Rocket fleet</h1>
        </div>
        <span className="subtle-link">
          High‑level technical overview of Starship and Falcon vehicles.
        </span>
      </header>

      <section style={{ marginBottom: 24 }}>
        <div className="chips-row">
          <span className="chip chip-active">All vehicles</span>
          <span className="chip">Heavy‑lift</span>
          <span className="chip">Fully reusable</span>
          <span className="chip">Operational</span>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: 24,
          alignItems: "flex-start",
        }}
      >
        <div className="products-grid">
          {ROCKETS.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))}
        </div>

        <aside className="hero-grid-card">
          <p className="section-eyebrow">Why rockets matter</p>
          <h2 className="section-title" style={{ fontSize: "1.1rem" }}>
            From first stage to frontier
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.86rem", marginTop: 8 }}>
            Every launch vehicle in this fleet is a stepping stone toward routine,
            affordable access to orbit and beyond. Falcon 9 proved that boosters
            can land and fly again; Falcon Heavy extends that capability to heavy
            payloads; Starship aims for fully reusable transport to Mars.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.86rem", marginTop: 10 }}>
            Scroll through the fleet, dive into specs, and imagine how rapidly
            iterative hardware pushes rocketry closer to aircraft‑like operations.
          </p>
        </aside>
      </section>
    </PageTransition>
  );
};

export default RocketsPage;


