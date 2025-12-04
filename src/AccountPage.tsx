import React from "react";
import PageTransition from "./components/PageTransition";

const AccountPage: React.FC = () => {
  return (
    <PageTransition>
      <header className="section-header">
        <div>
          <p className="section-eyebrow">Account</p>
          <h1 className="section-title">Mission control</h1>
        </div>
      </header>
      <p style={{ color: "var(--muted)", maxWidth: 420 }}>
        This is where order history, saved addresses and launch notifications would
        live in a full build.
      </p>
    </PageTransition>
  );
};

export default AccountPage;


