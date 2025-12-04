import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import FAQPage from "./pages/FAQPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import LaunchesPage from "./pages/LaunchesPage";
import LaunchDetailPage from "./pages/LaunchDetailPage";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<CategoryPage type="trending" />} />
          <Route path="/mens" element={<CategoryPage type="mens" />} />
          <Route path="/womens" element={<CategoryPage type="womens" />} />
          <Route path="/kids" element={<CategoryPage type="kids" />} />
          <Route path="/accessories" element={<CategoryPage type="accessories" />} />
          <Route path="/flight-shirts" element={<CategoryPage type="flight" />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/launches" element={<LaunchesPage />} />
          <Route path="/launches/:id" element={<LaunchDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;


