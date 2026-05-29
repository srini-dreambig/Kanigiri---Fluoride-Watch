import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  ShieldCheck,
  Clock,
  Truck,
  Filter,
  Droplets,
  HeartPulse,
  Stethoscope,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Construction,
  FileText,
  BarChart3,
  BookOpen,
} from "lucide-react";
import { getSolutionsCopy, type MeasureStatus, type ProjectMilestone } from "../data/solutionsPage";
import { getUiLabels } from "../data/uiLabels";

const measureIcons: Record<string, React.ElementType> = {
  tankers: Truck,
  ro: Filter,
  dialysis: HeartPulse,
  "health-camps": Stethoscope,
};

const statusColors: Record<MeasureStatus, string> = {
  active: "text-green-400 bg-green-400/10 border-green-400/20",
  partial: "text-brand-amber bg-brand-amber/10 border-brand-amber/20",
  proposed: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

const milestoneColors: Record<ProjectMilestone["statusKey"], string> = {
  critical: "text-brand-crimson bg-brand-crimson/10 border-brand-crimson/20",
  progress: "text-green-400 bg-green-400/10 border-green-400/20",
  pending: "text-brand-amber bg-brand-amber/10 border-brand-amber/20",
};

const statToneClass: Record<string, string> = {
  amber: "text-brand-amber",
  crimson: "text-brand-crimson",
  blue: "text-blue-400",
};

export const Solutions = () => {
  const { t, language } = useLanguage();
  const copy = getSolutionsCopy(language);
  const ui = getUiLabels(language);
  const [activeTab, setActiveTab] = useState<"immediate" | "permanent">("immediate");

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-brand-amber leading-[1.1]">
          {t.solutions.title}
        </h1>
        <p className="max-w-3xl opacity-60 leading-relaxed">{copy.subtitle}</p>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-brand-crimson/10 border border-brand-crimson/20">
          <AlertTriangle size={16} className="text-brand-crimson shrink-0" />
          <span className="text-sm font-semibold text-brand-crimson">{copy.urgency_stat}</span>
          <span className="text-[10px] opacity-50 max-w-md">{copy.urgency_label}</span>
        </div>
      </div>

      <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10 w-fit">
        <button
          onClick={() => setActiveTab("immediate")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            activeTab === "immediate" ? "bg-brand-amber text-black" : "text-white/40 hover:text-white"
          }`}
        >
          <Clock size={16} /> {copy.immediate_btn}
        </button>
        <button
          onClick={() => setActiveTab("permanent")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold tracking-wide transition-all ${
            activeTab === "permanent" ? "bg-brand-amber text-black" : "text-white/40 hover:text-white"
          }`}
        >
          <ShieldCheck size={16} /> {copy.permanent_btn}
        </button>
      </div>

      {activeTab === "immediate" ? (
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.immediate.title}</h2>
            <p className="max-w-3xl text-sm opacity-55 leading-relaxed">{copy.immediate.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.immediate.measures.map((m) => {
              const Icon = measureIcons[m.id] ?? Droplets;
              return (
                <div key={m.id} className="glass-card p-8 border-white/5 bg-white/[0.02] flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-brand-amber/15 flex items-center justify-center text-brand-amber shrink-0">
                      <Icon size={28} />
                    </div>
                    <span
                      className={`text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full border ${statusColors[m.status]}`}
                    >
                      {copy.status_labels[m.status]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-2">{m.title}</h3>
                  <p className="text-sm opacity-55 leading-relaxed mb-4">{m.description}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {m.bullets.map((b, i) => (
                      <li key={i} className="text-xs opacity-50 leading-relaxed flex gap-2">
                        <ChevronRight size={12} className="text-brand-amber shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-[10px] opacity-40 font-semibold mb-0.5">{m.statLabel}</div>
                      <div className="text-lg font-semibold text-brand-amber">{m.statValue}</div>
                    </div>
                    <div>
                      <div className="text-[10px] opacity-40 font-semibold mb-0.5">{ui.solutions.source_label}</div>
                      <div className="text-[10px] opacity-50 leading-relaxed">{m.source}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start p-3 rounded-lg bg-brand-crimson/5 border border-brand-crimson/10">
                    <XCircle size={14} className="text-brand-crimson shrink-0 mt-0.5" />
                    <p className="text-[10px] opacity-60 leading-relaxed">{m.limitation}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-8 border-brand-crimson/20 bg-brand-crimson/[0.03]">
            <h3 className="text-sm font-semibold tracking-wide text-brand-crimson mb-4 flex items-center gap-2">
              <AlertTriangle size={16} /> {copy.immediate.limitation_title}
            </h3>
            <ul className="space-y-3">
              {copy.immediate.limitation_points.map((p, i) => (
                <li key={i} className="text-sm opacity-60 leading-relaxed flex gap-2">
                  <span className="text-brand-crimson shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          <div className="glass-card p-10 md:p-12 border-brand-amber/20 bg-brand-amber/[0.02]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-[10px] font-semibold tracking-wide mb-6">
              <Construction size={12} /> {copy.permanent.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{copy.permanent.project_name}</h2>
            <p className="max-w-3xl text-sm opacity-55 leading-relaxed mb-8">{copy.permanent.project_desc}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {copy.permanent.stats.map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <div className="text-[10px] opacity-45 font-semibold mb-1">{s.label}</div>
                  <div className={`text-xl font-semibold ${statToneClass[s.tone] ?? "text-white"}`}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold tracking-tight">{copy.permanent.milestones_title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {copy.permanent.milestones.map((ms) => (
                <div key={ms.id} className="glass-card p-6 border-white/5 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="font-semibold text-sm">{ms.name}</h4>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${milestoneColors[ms.statusKey]}`}
                    >
                      {copy.milestone_status[ms.statusKey]}
                    </span>
                  </div>
                  <p className="text-xs opacity-50 leading-relaxed">{ms.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8 border-white/5 space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-brand-amber">{copy.permanent.why_title}</h3>
              <ul className="space-y-3">
                {copy.permanent.why_points.map((p, i) => (
                  <li key={i} className="text-sm opacity-60 leading-relaxed flex gap-2">
                    <CheckCircle2 size={14} className="text-brand-amber shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 border-brand-crimson/15 bg-brand-crimson/[0.02] space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-brand-crimson">{copy.permanent.gaps_title}</h3>
              <ul className="space-y-3">
                {copy.permanent.gaps.map((g, i) => (
                  <li key={i} className="text-sm opacity-60 leading-relaxed flex gap-2">
                    <span className="text-brand-crimson shrink-0">•</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <section className="glass-card p-8 md:p-10 border-white/5 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">{copy.compare.title}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[560px]">
            <thead>
              <tr className="border-b border-white/10 text-[10px] uppercase tracking-wide opacity-50">
                <th className="py-3 pr-4">{copy.compare.headers.aspect}</th>
                <th className="py-3 pr-4">{copy.compare.headers.interim}</th>
                <th className="py-3">{copy.compare.headers.permanent}</th>
              </tr>
            </thead>
            <tbody>
              {copy.compare.rows.map((row) => (
                <tr key={row.aspect} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium opacity-80">{row.aspect}</td>
                  <td className="py-3 pr-4 opacity-55">{row.interim}</td>
                  <td className="py-3 opacity-55 text-brand-amber/90">{row.permanent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 border-white/5 space-y-5">
          <h2 className="text-lg font-semibold tracking-tight">{copy.advocacy.title}</h2>
          <p className="text-sm opacity-55 leading-relaxed">{copy.advocacy.desc}</p>
          <ul className="space-y-3">
            {copy.advocacy.actions.map((a, i) => (
              <li key={i} className="text-sm opacity-65 leading-relaxed flex gap-2">
                <CheckCircle2 size={14} className="text-green-400 shrink-0 mt-0.5" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-8 border-brand-amber/15 bg-brand-amber/[0.02] space-y-5">
          <h2 className="text-lg font-semibold tracking-tight">{copy.policy.title}</h2>
          <div className="space-y-4">
            {copy.policy.asks.map((ask) => (
              <div key={ask.title} className="p-4 rounded-xl bg-black/25 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-brand-amber/15 text-brand-amber">
                    {ask.tag}
                  </span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{ask.title}</h4>
                <p className="text-xs opacity-55 leading-relaxed">{ask.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/memorandum"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-5 py-3 rounded-lg bg-brand-amber text-black hover:scale-[1.02] transition-transform"
          >
            <FileText size={16} /> {copy.policy.memo_cta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 border-white/5 space-y-4">
          <h2 className="text-sm font-semibold tracking-wide">{copy.sources_title}</h2>
          <ul className="space-y-2">
            {copy.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-65 hover:text-brand-amber hover:opacity-100 transition-colors inline-flex items-center gap-2"
                >
                  {s.label}
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/research"
            className="glass-card p-5 border-white/5 hover:border-blue-500/30 transition-colors flex items-center gap-3 group"
          >
            <BookOpen size={20} className="text-blue-400" />
            <span className="text-sm font-semibold flex-1">{copy.cta_research}</span>
            <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
          <Link
            to="/dashboard"
            className="glass-card p-5 border-white/5 hover:border-brand-crimson/30 transition-colors flex items-center gap-3 group"
          >
            <BarChart3 size={20} className="text-brand-crimson" />
            <span className="text-sm font-semibold flex-1">{copy.cta_dashboard}</span>
            <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </section>
    </div>
  );
};
