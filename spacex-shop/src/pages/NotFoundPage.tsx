import React from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <header className="section-header">
        <div>
          <p className="section-eyebrow">404</p>
          <h1 className="section-title">Trajectory off‑course</h1>
        </div>
      </header>
      <p style={{ color: "var(--muted)", marginBottom: 16 }}>
        The page you’re looking for drifted out of orbit.
      </p>
      <button className="pill-button" onClick={() => navigate("/")}>
        Back to home
      </button>
    </PageTransition>
  );
};

export default NotFoundPage;


