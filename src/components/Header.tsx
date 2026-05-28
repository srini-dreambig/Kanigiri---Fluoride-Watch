import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Droplets, Globe } from "lucide-react";
import { motion } from "motion/react";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { name: t.nav.realities, path: "/realities" },
    { name: t.nav.dashboard, path: "/dashboard" },
    { name: t.nav.solutions, path: "/solutions" },
    { name: t.research.title, path: "/research" },
    { name: t.nav.memo, path: "/memorandum" },
    { name: t.nav.gallery, path: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
      <Link to="/" className="flex items-center gap-3 group pointer-events-auto">
        <div className="p-2 rounded-xl bg-brand-crimson group-hover:scale-110 transition-transform">
          <Droplets className="text-white" size={24} />
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="font-black text-2xl tracking-tighter uppercase italic">Kanigiri</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Fluoride Watch</span>
        </div>
      </Link>

      <nav className="hidden lg:flex items-center gap-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-brand-crimson ${
              location.pathname === item.path ? "text-brand-crimson" : "text-white/60"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
          {(["en", "te", "hi"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded text-[10px] font-bold uppercase transition-all ${
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
    </header>
  );
};
