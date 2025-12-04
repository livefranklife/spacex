import React from "react";
import PageTransition from "../components/PageTransition";

const CartPage: React.FC = () => {
  return (
    <PageTransition>
      <header className="section-header">
        <div>
          <p className="section-eyebrow">Cart</p>
          <h1 className="section-title">Your orbit is empty</h1>
        </div>
      </header>
      <p style={{ color: "var(--muted)" }}>
        Add flight shirts, mission patches and collectibles from the Trending tab to
        see your cart in action.
      </p>
    </PageTransition>
  );
};

export default CartPage;


