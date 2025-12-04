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
            <span>ORBITAL SUPPLY</span>
          </button>

          <nav className="nav-links" aria-label="Primary navigation">
            <NavLink
              to="/trending"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Trending
            </NavLink>
            <NavLink
              to="/Vehicles"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              
            </NavLink>
            <NavLink
              to="/Human Spaceflight"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
             Spaceflight 
            </NavLink>
            <NavLink
              to="/Rideshare"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Rideshare
            </NavLink>
            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Accessories
            </NavLink>
            <NavLink
              to="/flight-shirts"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Flight Shirts
            </NavLink>
            <NavLink
              to="/launches"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              Launches
            </NavLink>
          </nav>

          <div className="nav-right">
            <div className="nav-search">
              <span className="nav-search-icon">⌕</span>
              <input
                placeholder="Search orbital gear"
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
              onClick={() => navigate("/cart")}
              aria-label="Open cart"
            >
              <span>Cart</span>
              <span style={{ fontSize: "0.8rem" }}>0</span>
            </button>
          </div>
        </div>
      </header>

      <main className="main-shell">{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-title">Newsletter</div>
            <div className="footer-headline">
              Stay ahead of the next launch window.
            </div>
            <p className="footer-copy">
              Be the first to know when limited‑run flight shirts, mission
              patches and collectibles drop.
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


