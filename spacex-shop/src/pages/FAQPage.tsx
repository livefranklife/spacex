import React from "react";
import PageTransition from "../components/PageTransition";

const FAQPage: React.FC = () => {
  return (
    <PageTransition>
      <header className="section-header">
        <div>
          <p className="section-eyebrow">FAQ</p>
          <h1 className="section-title">Pre‑launch questions</h1>
        </div>
      </header>
      <div style={{ maxWidth: 600 }}>
        <details style={{ marginBottom: 12 }}>
          <summary>Do you ship interplanetary?</summary>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>
            This UI is a demo only, but yes, we’re thinking ahead.
          </p>
        </details>
        <details>
          <summary>Is this the official SpaceX Store?</summary>
          <p style={{ color: "var(--muted)", marginTop: 6 }}>
            No. This is a custom React UI inspired by the official{" "}
            <a
              href="https://shop.spacex.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--accent)" }}
            >
              SpaceX Store
            </a>{" "}
            and{" "}
            <a
              href="https://www.spacex.com/launches"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--accent)" }}
            >
              Launches
            </a>{" "}
            page with a different design direction.
          </p>
        </details>
      </div>
    </PageTransition>
  );
};

export default FAQPage;


