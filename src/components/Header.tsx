import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Droplets, Globe } from "lucide-react";
import { motion } from "motion/react";
import { getUiLabels } from "../data/uiLabels";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const ui = getUiLabels(language);
  const location = useLocation();

  const navItems = [
    { name: t.nav.realities, path: "/realities" },
    { name: t.nav.watch, path: "/watch" },
    { name: t.nav.dashboard, path: "/dashboard" },
    { name: t.nav.solutions, path: "/solutions" },
    { name: t.research.title, path: "/research" },
    { name: t.nav.memo, path: "/memorandum" },
    { name: t.nav.gallery, path: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="px-6 py-4 flex items-center justify-between pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-16 bg-zinc-950/75 backdrop-blur-md border-b border-white/10 pointer-events-none" />

        <Link to="/" className="relative flex items-center gap-3 group pointer-events-auto">
        <div className="p-2 rounded-xl bg-brand-crimson/90 group-hover:bg-brand-crimson transition-colors group-hover:scale-[1.03] transition-transform">
          <Droplets className="text-white" size={24} />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="font-semibold text-xl tracking-tight text-white">Kanigiri</span>
          <span className="text-[10px] doc-chapter text-white/70">{ui.brand.tagline}</span>
        </div>
      </Link>

      <nav className="relative hidden lg:flex items-center gap-8 px-6 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-[11px] font-semibold tracking-[0.12em] transition-colors hover:text-white ${
              location.pathname === item.path ? "text-white" : "text-white/60"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="relative flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/10">
          {(["en", "te", "hi"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded text-[10px] font-semibold transition-all ${
                language === lang 
                  ? "bg-white text-black shadow-lg" 
                  : "text-white/40 hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
      </div>
    </header>
  );
};
