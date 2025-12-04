import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "./components/PageTransition";
import { ROCKETS } from "./data/rockets";

const RocketDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const rocket = ROCKETS.find((r) => r.id === id);
  if (!rocket) {
    return (
      <PageTransition>
        <p style={{ color: "var(--muted)" }}>Rocket not found.</p>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
          gap: 32,
        }}
      >
        <div className="hero-grid-card">
          <p className="section-eyebrow">Launch vehicle</p>
          <h1 className="section-title" style={{ fontSize: "1.7rem" }}>
            {rocket.name}
          </h1>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>
            {rocket.family} · {rocket.role}
          </p>
          <p style={{ color: "var(--muted)", marginTop: 4 }}>
            First flight {rocket.firstFlight}
          </p>

          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: "0.88rem" }}>
            {rocket.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
              gap: 12,
              marginTop: 20,
            }}
          >
            <div className="metric-card">
              <div className="section-eyebrow">Height</div>
              <div className="metric-value">{rocket.heightMeters} m</div>
              <div className="metric-label">Stacked on pad</div>
            </div>
            <div className="metric-card">
              <div className="section-eyebrow">Diameter</div>
              <div className="metric-value">{rocket.diameterMeters} m</div>
              <div className="metric-label">Core stage</div>
            </div>
            <div className="metric-card">
              <div className="section-eyebrow">Mass</div>
              <div className="metric-value">{rocket.massTons} t</div>
              <div className="metric-label">Fully fueled</div>
            </div>
            <div className="metric-card">
              <div className="section-eyebrow">Thrust</div>
              <div className="metric-value">
                {rocket.thrustKn.toLocaleString()} kN
              </div>
              <div className="metric-label">Sea level</div>
            </div>
            <div className="metric-card">
              <div className="section-eyebrow">Payload to LEO</div>
              <div className="metric-value">{rocket.payloadLeoTons} t</div>
              <div className="metric-label">Low Earth Orbit</div>
            </div>
            {rocket.payloadMarsTons && (
              <div className="metric-card">
                <div className="section-eyebrow">Payload to Mars</div>
                <div className="metric-value">{rocket.payloadMarsTons} t</div>
                <div className="metric-label">Trans‑Mars injection</div>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 20,
              fontSize: "0.8rem",
              color: "var(--muted)",
            }}
          >
            <div className="status-pill">
              <span className="pulse-dot" />
              <span>
                {rocket.status === "operational" && "Operational fleet vehicle"}
                {rocket.status === "in-development" && "Flight test campaign active"}
                {rocket.status === "retired" && "Retired vehicle"}
              </span>
            </div>
            <button className="subtle-link" onClick={() => navigate("/rockets")}>
              Back to fleet ←
            </button>
          </div>
        </div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="product-media" style={{ height: 280, marginBottom: 18 }}>
            <div className="product-media-inner" />
            <div className="product-media-orbit" />
            <div className="product-media-ship" />
          </div>
          <p className="section-eyebrow">Why it inspires</p>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: 8 }}>
            {rocket.inspiration}
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: 10 }}>
            Imagine this vehicle clearing the tower: engines ramping to full thrust,
            guidance steering through max‑Q, stages separating, and payload fairings
            opening to reveal satellites, crewed spacecraft, or cargo bound for
            deep space.
          </p>
        </motion.div>
      </motion.section>
    </PageTransition>
  );
};

export default RocketDetailPage;


