import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { LanguageProvider } from "./context/LanguageContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Solutions } from "./pages/Solutions";
import { Research } from "./pages/Research";
import { Memorandum } from "./pages/Memorandum";
import { Gallery } from "./pages/Gallery";
import { Realities } from "./pages/Realities";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/memorandum" element={<Memorandum />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/realities" element={<Realities />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
