import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Rocket } from "../data/rockets";

type Props = {
  rocket: Rocket;
};

const RocketCard: React.FC<Props> = ({ rocket }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      className="hero-grid-card"
      style={{ cursor: "pointer", overflow: "hidden", position: "relative" }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.18 }}
      onClick={() => navigate(`/rockets/${rocket.id}`)}
    >
      <div className="product-tag-row">
        <span>{rocket.family}</span>
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {rocket.role}
        </span>
      </div>

      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <div
          style={{
            position: "relative",
            width: 60,
            height: 160,
            borderRadius: 999,
            background:
              "linear-gradient(to top, rgba(15,23,42,0.9), rgba(15,23,42,0.6))",
            border: "1px solid rgba(148,163,184,0.65)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "55%",
              height: "60%",
              borderRadius: 999,
              background:
                "linear-gradient(160deg, #e5e7eb, #cbd5f5 40%, #22d3ee 80%)",
              boxShadow: "0 18px 40px rgba(15,23,42,0.95)",
            }}
          />
          <div
            style={{
              position: "absolute",
              insetInline: "10%",
              bottom: -10,
              height: 20,
              background:
                "radial-gradient(circle at 50% 0, rgba(251,191,36,0.8), transparent 65%)",
              opacity: 0.8,
              filter: "blur(3px)",
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 className="product-title" style={{ fontSize: "1.05rem" }}>
            {rocket.name}
          </h3>
          <p className="product-meta" style={{ marginBottom: 6 }}>
            {rocket.stages} stages · {rocket.engines}
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--muted)",
              maxWidth: 320,
            }}
          >
            {rocket.inspiration}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          fontSize: "0.75rem",
          color: "var(--muted)",
        }}
      >
        <span>
          {rocket.heightMeters} m · {rocket.payloadLeoTons} t to LEO
        </span>
        <span className="product-cta">Vehicle details ↗</span>
      </div>
    </motion.article>
  );
};

export default RocketCard;


