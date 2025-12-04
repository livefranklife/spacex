import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import ProductCard from "../components/ProductCard";
import { ALL_PRODUCTS } from "../data/products";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage: React.FC = () => {
  const query = useQuery();
  const q = query.get("q")?.toLowerCase() ?? "";
  const navigate = useNavigate();

  const results = ALL_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(q)
  );

  return (
    <PageTransition>
      <header className="section-header">
        <div>
          <p className="section-eyebrow">Search</p>
          <h1 className="section-title">
            {q ? `Results for “${q}”` : "Try searching for “Starbase”"}
          </h1>
        </div>
        <button className="subtle-link" onClick={() => navigate("/trending")}>
          Browse trending instead →
        </button>
      </header>

      {q && results.length === 0 && (
        <p style={{ color: "var(--muted)" }}>No matches found.</p>
      )}

      {results.length > 0 && (
        <div className="products-grid">
          {results.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => navigate(`/product/${p.id}`)}
            />
          ))}
        </div>
      )}
    </PageTransition>
  );
};

export default SearchPage;


