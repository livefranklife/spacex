import React, { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <header className="nav">
        <div className="nav-inner">
          <button
            className="nav-logo"
            onClick={() => navigate("/")}
            aria-label="Go to home"
          >
            <span className="nav-logo-mark" />
            <span>ORBITAL LAUNCH</span>
          </button>

          <nav className="nav-links" aria-label="Primary navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Overview
            </NavLink>
            <NavLink
              to="/rockets"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Rockets
            </NavLink>
            <NavLink
              to="/launches"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Launches
            </NavLink>
            <NavLink
              to="/launches?tab=recent"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Mission Log
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              FAQ
            </NavLink>
          </nav>

          <div className="nav-right">
            <div className="nav-search">
              <span className="nav-search-icon">⌕</span>
              <input
                placeholder="Search missions"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(
                      `/search?q=${encodeURIComponent(
                        (e.target as HTMLInputElement).value
                      )}`
                    );
                  }
                }}
              />
            </div>
            <button
              className="pill-button"
              onClick={() => navigate("/launches")}
              aria-label="Open launch schedule"
            >
              <span>Launch schedule</span>
            </button>
          </div>
        </div>
        <div className="header-strip">
          <span className="header-strip-label">Rocket insight</span>
          <span className="header-strip-text">
            Starship, Falcon 9 and Falcon Heavy data shown here is for a live‑style
            mission dashboard demo built in React.
          </span>
        </div>
      </header>

      <main className="main-shell">{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-title">Mission updates</div>
            <div className="footer-headline">
              Stay ahead of the next launch window.
            </div>
            <p className="footer-copy">
              Subscribe for launch schedules, vehicle milestones and recovery
              summaries across the Starship and Falcon fleets.
            </p>
          </div>
          <div>
            <div className="footer-newsletter">
              <input placeholder="you@lowearthorbit.com" />
              <button className="pill-button" style={{ padding: "7px 18px" }}>
                Subscribe
              </button>
            </div>
            <div className="footer-bottom">
              <span className="footer-link">FAQ</span>
              <span className="footer-link">Privacy</span>
              <span className="footer-link">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;


