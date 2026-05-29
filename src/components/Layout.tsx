import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();

  return (
    <div
      className={[
        "min-h-screen font-sans overflow-x-hidden selection:bg-brand-crimson selection:text-white film-grain",
        language === "te" ? "telugu-text" : "",
        language === "hi" ? "hindi-text" : "",
      ].join(" ")}
    >
      <div className="fixed inset-0 -z-10 bg-zinc-950" />
      <div className="fixed inset-0 -z-10 bg-pattern opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
      <div className="fixed inset-0 -z-10 bg-radial-gradient from-white/[0.06] via-transparent to-transparent opacity-70 pointer-events-none" />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
