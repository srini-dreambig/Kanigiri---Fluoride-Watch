import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FlaskConical,
  Database,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Globe,
  Scale,
} from "lucide-react";
import { motion } from "motion/react";
import { getResearchCopy } from "../data/researchPage";
import { getUiLabels } from "../data/uiLabels";

const typeColors: Record<string, string> = {
  journal: "text-blue-400 bg-blue-400/10",
  news: "text-brand-amber bg-brand-amber/10",
  government: "text-green-400 bg-green-400/10",
  review: "text-purple-400 bg-purple-400/10",
};

export const Research = () => {
  const { t, language } = useLanguage();
  const copy = getResearchCopy(language);
  const ui = getUiLabels(language);

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-24">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-blue-500">
          {t.research.title}
        </h1>
        <p className="max-w-3xl opacity-60 leading-relaxed">{copy.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-card p-10 border-blue-500/20 bg-blue-500/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-blue-500/20 text-blue-400">
              <Database size={32} />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">{copy.geology_title}</h2>
          </div>
          <p className="text-sm opacity-60 leading-relaxed italic mb-8">"{copy.geology_desc}"</p>
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold tracking-wide text-blue-400">
              {ui.research.geology_evidence_heading}
            </h4>
            <ul className="space-y-4">
              {copy.geology_evidence.map((item, i) => (
                <li key={i} className="text-xs opacity-60 leading-relaxed">
                  <div className="flex gap-2">
                    <ChevronRight size={14} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                  <p className="mt-1 ml-5 text-[10px] opacity-40 font-mono">{item.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card p-10 border-pink-500/20 bg-pink-500/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-pink-500/20 text-pink-400">
              <FlaskConical size={32} />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">{copy.health_title}</h2>
          </div>
          <p className="text-sm opacity-60 leading-relaxed italic mb-8">"{copy.health_desc}"</p>
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold tracking-wide text-pink-400">
              {ui.research.health_risks_heading}
            </h4>
            <ul className="space-y-4">
              {copy.health_risks.map((item, i) => (
                <li key={i} className="text-xs opacity-60 leading-relaxed">
                  <div className="flex gap-2">
                    <ChevronRight size={14} className="text-pink-400 shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                  <p className="mt-1 ml-5 text-[10px] opacity-40 font-mono">{item.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card p-8 border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Scale size={20} className="text-brand-amber" />
          <h3 className="text-lg font-semibold tracking-tight">{copy.standards_title}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.standards.map((s) => (
            <div key={s.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <p className="text-[10px] uppercase tracking-wide opacity-40 mb-1">{s.label}</p>
              <p className="text-sm font-medium opacity-80">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide opacity-60">{copy.articles_heading}</h3>
          <span className="text-[10px] font-mono opacity-30">{copy.articles_sub}</span>
        </div>

        <div className="space-y-12">
          {copy.articles.map((article) => (
            <motion.article
              key={`${language}-${article.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 group border-b border-white/5 pb-12 last:border-0"
            >
              <div className="space-y-4">
                <div className="flex gap-2 items-center flex-wrap">
                  <span className="text-[10px] font-semibold tracking-wide text-brand-amber bg-brand-amber/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono opacity-40">{article.date}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug group-hover:text-brand-amber transition-colors">
                  {article.title}
                </h4>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-semibold text-xs">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wide leading-normal">
                      {article.author}
                    </p>
                    <p className="text-[10px] opacity-50 tracking-tight leading-tight mt-0.5">
                      {article.publisher}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <p className="text-xl font-light opacity-80 leading-relaxed italic border-l-2 border-brand-amber pl-8">
                  {article.excerpt}
                </p>
                <p className="text-sm opacity-50 leading-relaxed font-light">{article.content}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-wide text-brand-amber hover:gap-4 transition-all"
                >
                  {copy.read_article}
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide opacity-60">{copy.citations_heading}</h3>
          <span className="text-[10px] font-mono opacity-30">{copy.citations_sub}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.citations.map((cite) => (
            <motion.a
              key={`${language}-${cite.id}`}
              href={cite.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="glass-card p-8 flex flex-col justify-between border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group min-h-[280px]"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded ${typeColors[cite.type] ?? typeColors.journal}`}
                    >
                      {cite.source}
                    </span>
                    <div className="text-[10px] font-mono opacity-40">{cite.year}</div>
                  </div>
                  <Globe size={16} className="opacity-20 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>

                <h4 className="text-lg font-bold leading-snug group-hover:text-blue-400 transition-colors">
                  {cite.title}
                </h4>

                <div className="space-y-2">
                  {cite.highlights.map((h, j) => (
                    <div key={j} className="text-xs opacity-50 flex gap-2 leading-relaxed">
                      <span className="text-blue-500 shrink-0">•</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-semibold tracking-wide opacity-50 group-hover:opacity-100 transition-opacity">
                <span>{copy.access_publication}</span>
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center space-y-6">
        <ShieldCheck className="mx-auto text-green-500" size={48} />
        <h3 className="text-2xl font-semibold tracking-tight">{copy.verified_title}</h3>
        <p className="max-w-2xl mx-auto text-xs opacity-50 leading-relaxed font-light">
          {copy.verified_body}
        </p>
      </div>
    </div>
  );
};
