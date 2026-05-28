import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  AlertTriangle,
  Droplets,
  Users,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  CloudRain,
  Skull,
  TrendingDown,
} from "lucide-react";
import { motion } from "motion/react";

type Tab = "drought" | "fluoride" | "migration";

const tabConfig: { id: Tab; icon: React.ReactNode; color: string; border: string; bg: string }[] = [
  {
    id: "drought",
    icon: <CloudRain size={20} />,
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-sky-500/10",
  },
  {
    id: "fluoride",
    icon: <Skull size={20} />,
    color: "text-brand-crimson",
    border: "border-brand-crimson/30",
    bg: "bg-brand-crimson/10",
  },
  {
    id: "migration",
    icon: <Users size={20} />,
    color: "text-brand-amber",
    border: "border-brand-amber/30",
    bg: "bg-brand-amber/10",
  },
];

export const Realities = () => {
  const { t } = useLanguage();
  const r = t.realities;
  const [activeTab, setActiveTab] = useState<Tab>("drought");

  const sectionData = {
    drought: r.drought,
    fluoride: r.fluoride,
    migration: r.migration,
  };

  const active = sectionData[activeTab];
  const activeCfg = tabConfig.find((c) => c.id === activeTab)!;

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-brand-crimson/50" />
          <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-crimson">
            {t.hero.emergency}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight"
        >
          {r.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl text-lg font-light opacity-60 leading-relaxed"
        >
          {r.subtitle}
        </motion.p>

        {/* Fact-check badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400"
        >
          <CheckCircle size={14} />
          <span className="text-xs font-bold uppercase tracking-widest">
            {r.factcheck_label} — Sources: Deccan Chronicle · The Hindu · ReliefWeb · NIH · Fluoride Action Network
          </span>
        </motion.div>
      </div>

      {/* 3-crisis overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tabConfig.map((cfg) => {
          const sec = sectionData[cfg.id];
          return (
            <motion.button
              key={cfg.id}
              onClick={() => setActiveTab(cfg.id)}
              whileHover={{ scale: 1.02 }}
              className={`text-left p-8 rounded-2xl border transition-all ${
                activeTab === cfg.id
                  ? `${cfg.border} ${cfg.bg} shadow-lg`
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div className={`mb-4 ${cfg.color}`}>{cfg.icon}</div>
              <span
                className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-3 inline-block ${cfg.bg} ${cfg.color}`}
              >
                {sec.badge}
              </span>
              <h3 className="text-2xl font-black uppercase italic leading-snug mb-2">
                {sec.title}
              </h3>
              <p className="text-xs opacity-50 leading-relaxed line-clamp-3">
                {sec.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Active section detail */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-16"
      >
        {/* Description */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6">
            <div className={`inline-flex items-center gap-2 ${activeCfg.color}`}>
              {activeCfg.icon}
              <span className="text-sm font-black uppercase tracking-widest">
                {active.title}
              </span>
            </div>
            <p className="text-lg font-light opacity-75 leading-relaxed border-l-4 border-brand-crimson/40 pl-6">
              {active.description}
            </p>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {active.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`p-5 rounded-xl border ${activeCfg.border} ${activeCfg.bg}`}
              >
                <div className={`text-2xl font-black ${activeCfg.color}`}>{stat.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-50 mt-1 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline — only for drought */}
        {activeTab === "drought" && "timeline" in active && (
          <div className="space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40">
              Crisis Timeline
            </h3>
            <div className="relative border-l-2 border-white/10 ml-4 space-y-0">
              {(active as typeof r.drought).timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sky-500/20 border-2 border-sky-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>
                  <div className="text-xs font-black text-sky-400 mb-1">{item.year}</div>
                  <p className="text-sm opacity-70 leading-relaxed">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Fact-checked articles */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40">
              {r.factcheck_label} — Real News Articles
            </h3>
            <div className="flex items-center gap-2 text-green-400 text-[10px] font-bold uppercase tracking-widest">
              <CheckCircle size={12} /> Verified Sources
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {active.articles.map((article, i) => (
              <motion.a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className={`group flex flex-col justify-between p-8 rounded-2xl border transition-all ${activeCfg.border} ${activeCfg.bg} hover:shadow-lg`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span
                        className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${activeCfg.bg} ${activeCfg.color}`}
                      >
                        {article.source}
                      </span>
                      <div className="text-[10px] font-mono opacity-40">{article.year}</div>
                    </div>
                    <CheckCircle size={14} className="text-green-400 shrink-0 mt-1" />
                  </div>

                  <h4 className="text-base font-black uppercase italic leading-snug group-hover:opacity-80 transition-opacity">
                    {article.title}
                  </h4>

                  <p className="text-xs opacity-50 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${activeCfg.color} group-hover:gap-4 transition-all`}
                >
                  {r.read_more} <ExternalLink size={12} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom call to action bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/10">
        <div className="p-8 bg-sky-500/10 border-r border-white/10 space-y-3">
          <CloudRain className="text-sky-400" size={24} />
          <h4 className="font-black uppercase italic text-lg">{r.drought.title}</h4>
          <div className="flex items-center gap-2 text-sky-400 text-[10px] font-bold uppercase tracking-widest">
            <TrendingDown size={12} /> 5+ Drought Years
          </div>
        </div>
        <div className="p-8 bg-brand-crimson/10 border-r border-white/10 space-y-3">
          <Droplets className="text-brand-crimson" size={24} />
          <h4 className="font-black uppercase italic text-lg">{r.fluoride.title}</h4>
          <div className="flex items-center gap-2 text-brand-crimson text-[10px] font-bold uppercase tracking-widest">
            <AlertTriangle size={12} /> 700+ Villages Poisoned
          </div>
        </div>
        <div className="p-8 bg-brand-amber/10 space-y-3">
          <Users className="text-brand-amber" size={24} />
          <h4 className="font-black uppercase italic text-lg">{r.migration.title}</h4>
          <div className="flex items-center gap-2 text-brand-amber text-[10px] font-bold uppercase tracking-widest">
            <ChevronRight size={12} /> 24+ Villages Deserted
          </div>
        </div>
      </div>
    </div>
  );
};
