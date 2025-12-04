import React from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import ProductCard from "../components/ProductCard";
import {
  TRENDING,
  MENS,
  WOMENS,
  KIDS,
  ACCESSORIES,
  FLIGHT_SHIRTS,
} from "../data/products";

type Props = {
  type: "trending" | "mens" | "womens" | "kids" | "accessories" | "flight";
};

const map = {
  trending: { title: "Trending", data: TRENDING },
  mens: { title: "Mens", data: MENS },
  womens: { title: "Womens", data: WOMENS },
  kids: { title: "Kids", data: KIDS },
  accessories: { title: "Accessories", data: ACCESSORIES },
  flight: { title: "Flight Shirts", data: FLIGHT_SHIRTS },
};

const CategoryPage: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  const { title, data } = map[type];

  return (
    <PageTransition>
      <header className="section-header" style={{ marginBottom: 18 }}>
        <div>
          <p className="section-eyebrow">SpaceX‑inspired collection</p>
          <h1 className="section-title">{title}</h1>
        </div>
        <span className="subtle-link">{data.length} items</span>
      </header>

      <div className="products-grid">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </PageTransition>
  );
};

export default CategoryPage;


