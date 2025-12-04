import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { ALL_LAUNCHES } from "../data/launches";

const LaunchDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const launch = ALL_LAUNCHES.find((l) => l.id === id);

  if (!launch) {
    return (
      <PageTransition>
        <p style={{ color: "var(--muted)" }}>Launch not found.</p>
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
          <p className="section-eyebrow">Mission</p>
          <h1 className="section-title" style={{ fontSize: "1.7rem" }}>
            {launch.name}
          </h1>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>
            {launch.vehicle} · {launch.missionType}
          </p>
          <p style={{ color: "var(--muted)", marginTop: 4 }}>
            {launch.site} · {launch.date}
          </p>

          <div style={{ marginTop: 20, fontSize: "0.85rem", color: "var(--muted)" }}>
            <p>
              This card represents a mission entry similar in spirit to those found
              on the official launches page, but in the custom Orbital theme UI.
            </p>
            <p style={{ marginTop: 8 }}>
              In a production app, this area would include mission description,
              payload details, reusability info, and imagery.
            </p>
          </div>

          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {launch.webcast && (
              <a
                href={launch.webcast}
                target="_blank"
                rel="noreferrer"
                className="pill-button"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Watch webcast
              </a>
            )}
            <button className="subtle-link" onClick={() => navigate("/launches")}>
              Back to launches ←
            </button>
          </div>
        </div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="product-media" style={{ height: 240, marginBottom: 16 }}>
            <div className="product-media-inner" />
            <div className="product-media-orbit" />
            <div className="product-media-ship" />
          </div>
          <p className="section-eyebrow">Telemetry</p>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: 6 }}>
            Here you could visualize ascent profile, stage separation, landing attempts
            and other live data as seen on many{" "}
            <a
              href="https://www.spacex.com/launches"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--accent)" }}
            >
              SpaceX launches
            </a>
            .
          </p>
        </motion.div>
      </motion.section>
    </PageTransition>
  );
};

export default LaunchDetailPage;


