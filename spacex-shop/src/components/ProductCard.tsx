import React from "react";
import { motion } from "framer-motion";

export type Product = {
  id: string;
  name: string;
  price: number;
  tag?: string;
  category: string;
  badge?: "new" | "limited" | "soldout";
};

type Props = {
  product: Product;
  onClick?: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 230, damping: 18 }}
      onClick={onClick}
      layout
    >
      <div className="product-tag-row">
        <span>{product.tag ?? product.category}</span>
        {product.badge && (
          <span className="product-pill-badge">
            {product.badge === "new" && "New Orbit"}
            {product.badge === "limited" && "Limited Burn"}
            {product.badge === "soldout" && "Sold Out"}
          </span>
        )}
      </div>

      <div className="product-media">
        <div className="product-media-inner" />
        <div className="product-media-orbit" />
        <div className="product-media-ship" />
      </div>

      <div className="product-content-top">
        <div>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-meta">Unisex · Orbital Collection</p>
        </div>
      </div>

      <div className="product-price-row">
        <span className="product-price">${product.price}</span>
        <span className="product-cta">View details ↗</span>
      </div>
    </motion.article>
  );
};

export default ProductCard;


