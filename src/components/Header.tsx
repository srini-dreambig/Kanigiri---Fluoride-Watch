import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Droplets, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getUiLabels } from "../data/uiLabels";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const ui = getUiLabels(language);
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: t.nav.realities, path: "/realities" },
    { name: t.nav.watch, path: "/watch" },
    { name: t.nav.dashboard, path: "/dashboard" },
    { name: t.nav.solutions, path: "/solutions" },
    { name: t.research.title, path: "/research" },
    { name: t.nav.memo, path: "/memorandum" },
    { name: t.nav.gallery, path: "/gallery" },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between gap-3 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-16 bg-zinc-950/75 backdrop-blur-md border-b border-white/10 pointer-events-none" />

        <Link to="/" className="relative flex items-center gap-2 sm:gap-3 group pointer-events-auto min-w-0 shrink">
          <div className="p-2 rounded-xl bg-brand-crimson/90 group-hover:bg-brand-crimson transition-colors group-hover:scale-[1.03] transition-transform shrink-0">
            <Droplets className="text-white" size={22} />
          </div>
          <div className="flex flex-col -space-y-1 min-w-0">
            <span className="font-semibold text-lg sm:text-xl tracking-tight text-white truncate">Kanigiri</span>
            <span className="text-[10px] doc-chapter text-white/70 truncate">{ui.brand.tagline}</span>
          </div>
        </Link>

        <nav
          className="relative hidden lg:flex items-center gap-8 px-6 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md pointer-events-auto"
          aria-label={ui.footer.navigation}
        >
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

        <div className="relative flex items-center gap-2 pointer-events-auto shrink-0">
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? ui.header.menu_close : ui.header.menu_open}
          >
            {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/10">
            {(["en", "te", "hi"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`px-2.5 sm:px-3 py-1 rounded text-[10px] font-semibold transition-all ${
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

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-[55] bg-black/60 backdrop-blur-sm pointer-events-auto lg:hidden"
              aria-label={ui.header.menu_close}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-nav-panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-x-0 top-16 z-[60] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/10 bg-zinc-950/98 backdrop-blur-xl pointer-events-auto lg:hidden"
              aria-label={ui.footer.navigation}
            >
              <ul className="px-4 py-3 sm:px-6 sm:py-4 flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center min-h-[48px] px-4 rounded-xl text-base font-medium transition-colors ${
                          active
                            ? "bg-brand-crimson/20 text-white border border-brand-crimson/40"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
