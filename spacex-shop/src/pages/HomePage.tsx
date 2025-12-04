import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ProductCard from "../components/ProductCard";
import { TRENDING } from "../data/products";
import { UPCOMING_LAUNCHES } from "../data/launches";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <section className="hero-layout" aria-label="Featured collection">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow">Spacefaring apparel</p>
          <h1
            style={{
              fontSize: "2.4rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "6px 0 8px",
            }}
          >
            Shop the next launch window.
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 420, fontSize: "0.95rem" }}>
            Inspired by the official SpaceX Store but reimagined in a new orbital
            palette. Flight shirts, mission patches and collectibles crafted for
            deep‑space fans.
          </p>

          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              className="pill-button"
              onClick={() => navigate("/trending")}
              style={{ paddingInline: 22 }}
            >
              Shop trending
            </button>
            <button
              className="chip"
              style={{
                borderRadius: "999px",
                borderColor: "rgba(148, 163, 184, 0.75)",
              }}
              onClick={() => navigate("/flight-shirts")}
            >
              Flight shirts
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
              <p className="section-eyebrow">Trending now</p>
              <h2 className="section-title" style={{ fontSize: "1.1rem" }}>
                Orbit‑ready picks
              </h2>
            </div>
            <button
              className="subtle-link"
              onClick={() => navigate("/trending")}
            >
              View all ↗
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            {TRENDING.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <section aria-label="Explore categories">
        <div className="section-header">
          <p className="section-eyebrow">Explore</p>
          <button className="subtle-link" onClick={() => navigate("/Vehicles")}>
            View all vehicles →
          </button>
        </div>
        <div className="chips-row">
          <button className="chip chip-active" onClick={() => navigate("/trending")}>
            Trending
          </button>
          <button className="chip" onClick={() => navigate("/Vehicles")}>
            Vehicles
          </button>
          <button className="chip" onClick={() => navigate("/Human Spaceflight")}>
            Spaceflight
          </button>
          <button className="chip" onClick={() => navigate("/Rideshare")}>
            Rideshare
          </button>
          <button className="chip" onClick={() => navigate("/accessories")}>
            Accessories
          </button>
          <button className="chip" onClick={() => navigate("/flight-shirts")}>
            Flight Shirts
          </button>
        </div>
      </section>

      <section
        aria-label="Next launch"
        style={{ marginTop: 32 }}
        className="hero-grid-card"
      >
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Next launch</p>
            <h2 className="section-title" style={{ fontSize: "1rem" }}>
              {UPCOMING_LAUNCHES[0]?.name}
            </h2>
          </div>
          <button className="subtle-link" onClick={() => navigate("/launches")}>
            View launch manifest →
          </button>
        </div>
        <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
          {UPCOMING_LAUNCHES[0]?.vehicle} · {UPCOMING_LAUNCHES[0]?.missionType} ·{" "}
          {UPCOMING_LAUNCHES[0]?.site} · {UPCOMING_LAUNCHES[0]?.date}
        </p>
      </section>
    </PageTransition>
  );
};

export default HomePage;


