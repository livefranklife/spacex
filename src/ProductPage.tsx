import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "./components/PageTransition";
import { ALL_PRODUCTS } from "./data/products";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = ALL_PRODUCTS.find((p) => p.id === id);
  if (!product) {
    return (
      <PageTransition>
        <p>Product not found.</p>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <motion.section
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
          gap: 32,
        }}
      >
        <div className="hero-grid-card">
          <p className="section-eyebrow">{product.category}</p>
          <h1 className="section-title" style={{ fontSize: "1.8rem" }}>
            {product.name}
          </h1>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>
            Inspired by official SpaceX flight gear and reimagined in our Orbital
            palette. Premium cotton blend, tailored for launch days and live streams.
          </p>

          <div style={{ marginTop: 24 }}>
            <p className="section-eyebrow">Colors</p>
            <div className="chips-row">
              <span className="chip chip-active">Vacuum Black</span>
              <span className="chip">Ion Teal</span>
              <span className="chip">Lunar Ash</span>
            </div>

            <p className="section-eyebrow" style={{ marginTop: 8 }}>
              Size
            </p>
            <div className="chips-row">
              {["S", "M", "L", "XL"].map((size) => (
                <span key={size} className="chip">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <button className="pill-button">Add to cart · ${product.price}</button>
            <button className="subtle-link" onClick={() => navigate(-1)}>
              Back to {product.category.toLowerCase()} ←
            </button>
          </div>
        </div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="product-media" style={{ height: 260, marginBottom: 18 }}>
            <div className="product-media-inner" />
            <div className="product-media-orbit" />
            <div className="product-media-ship" />
          </div>
          <p className="section-eyebrow">Details</p>
          <ul style={{ fontSize: "0.85rem", color: "var(--muted)", paddingLeft: 18 }}>
            <li>Premium mid‑weight cotton blend with soft hand‑feel</li>
            <li>Printed with water‑based inks for a zero‑glare finish</li>
            <li>Designed to pair with Starship & Starbase collections</li>
          </ul>
        </motion.div>
      </motion.section>
    </PageTransition>
  );
};

export default ProductPage;


