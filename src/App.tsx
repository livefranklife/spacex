import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./HomePage";
import FAQPage from "./FAQPage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import LaunchesPage from "./LaunchesPage";
import LaunchDetailPage from "./LaunchDetailPage";
import RocketsPage from "./RocketsPage";
import RocketDetailPage from "./RocketDetailPage";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<LaunchesPage />} />
        <Route path="/launches/:id" element={<LaunchDetailPage />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/rockets/:id" element={<RocketDetailPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;


