import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Launch } from "../data/launches";

type Props = {
  launch: Launch;
};

const statusColor: Record<Launch["status"], string> = {
  upcoming: "var(--accent)",
  success: "#4ade80",
  failure: "#fb7185",
};

const LaunchCard: React.FC<Props> = ({ launch }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      className="hero-grid-card"
      style={{ cursor: "pointer" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      onClick={() => navigate(`/launches/${launch.id}`)}
    >
      <div className="product-tag-row">
        <span>{launch.vehicle}</span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.7rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "999px",
              background: statusColor[launch.status],
              boxShadow: `0 0 0 4px ${statusColor[launch.status]}22`,
            }}
          />
          {launch.status === "upcoming" && "Upcoming"}
          {launch.status === "success" && "Completed"}
          {launch.status === "failure" && "Test Flight"}
        </span>
      </div>

      <h3 className="product-title" style={{ fontSize: "1rem" }}>
        {launch.name}
      </h3>
      <p className="product-meta">
        {launch.missionType} · {launch.site}
      </p>
      <div className="product-price-row" style={{ marginTop: 10 }}>
        <span className="product-price" style={{ fontSize: "0.9rem" }}>
          {launch.date}
        </span>
        <span className="product-cta">View mission ↗</span>
      </div>
    </motion.article>
  );
};

export default LaunchCard;


