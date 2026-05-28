import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

/* ─── Reusable animated section wrapper ────────────────────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Pull-quote block ──────────────────────────────────────────────────── */
const PullQuote = ({
  text,
  color,
}: {
  text: string;
  color: string;
}) => (
  <FadeIn>
    <blockquote
      className={`doc-pull-quote text-center px-6 md:px-24 py-16 ${color} leading-tight`}
    >
      &ldquo;{text}&rdquo;
    </blockquote>
  </FadeIn>
);

/* ─── Testimony card ────────────────────────────────────────────────────── */
const Testimony = ({
  quote,
  person,
}: {
  quote: string;
  person: string;
}) => (
  <FadeIn>
    <div className="doc-testimony max-w-2xl mx-auto my-12 space-y-4">
      <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-xs font-black uppercase tracking-[0.3em] opacity-40">
        — {person}
      </p>
    </div>
  </FadeIn>
);

/* ─── Chapter marker ────────────────────────────────────────────────────── */
const ChapterMarker = ({
  chapter,
  title,
  subtitle,
  color,
  bgAccent,
}: {
  chapter: string;
  title: string;
  subtitle: string;
  color: string;
  bgAccent: string;
}) => (
  <div className={`w-full py-24 px-6 md:px-20 ${bgAccent} border-b border-white/5`}>
    <FadeIn>
      <div className="max-w-5xl mx-auto space-y-6">
        <span className={`doc-chapter text-xs font-bold ${color} opacity-70`}>
          {chapter}
        </span>
        <h2
          className={`text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none ${color}`}
        >
          {title}
        </h2>
        <p className="text-lg md:text-2xl font-light opacity-50 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </FadeIn>
  </div>
);

/* ─── Mandal story card ─────────────────────────────────────────────────── */
const MandalCard = ({
  mandal,
  index,
}: {
  mandal: {
    name: string;
    crisis: string;
    headline: string;
    story: string;
    quote: string;
    person: string;
    stat_value: string;
    stat_label: string;
  };
  index: number;
}) => {
  const colors = [
    { accent: "text-brand-crimson", border: "border-brand-crimson/30", bg: "bg-brand-crimson/5" },
    { accent: "text-sky-400", border: "border-sky-400/30", bg: "bg-sky-400/5" },
    { accent: "text-amber-400", border: "border-amber-400/30", bg: "bg-amber-400/5" },
    { accent: "text-pink-400", border: "border-pink-400/30", bg: "bg-pink-400/5" },
    { accent: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/5" },
    { accent: "text-emerald-400", border: "border-emerald-400/30", bg: "bg-emerald-400/5" },
  ];
  const c = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.15 }}
      className={`rounded-3xl border ${c.border} ${c.bg} p-10 flex flex-col justify-between gap-8`}
    >
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded ${c.bg} ${c.accent}`}
            >
              {mandal.crisis}
            </span>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-black ${c.accent}`}>{mandal.stat_value}</div>
            <div className="text-[9px] uppercase font-bold tracking-widest opacity-40 leading-tight">
              {mandal.stat_label}
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-black uppercase italic leading-tight">{mandal.name}</h3>
        <p className={`text-xs font-bold uppercase tracking-wider ${c.accent} opacity-70`}>
          {mandal.headline}
        </p>
      </div>

      {/* Story */}
      <p className="text-sm font-light opacity-60 leading-relaxed flex-1">{mandal.story}</p>

      {/* Voice */}
      <div className="border-t border-white/10 pt-6 space-y-2">
        <p className="text-base italic font-light opacity-80">
          &ldquo;{mandal.quote}&rdquo;
        </p>
        <p className="text-[10px] font-black uppercase tracking-widest opacity-30">
          — {mandal.person}
        </p>
      </div>
    </motion.div>
  );
};

/* ════════════════════════════════════════════════════════════════════════
   MAIN DOCUMENTARY COMPONENT
═══════════════════════════════════════════════════════════════════════ */
export const Realities = () => {
  const { t } = useLanguage();
  const d = t.documentary;

  return (
    <div className="film-grain min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">

      {/* ── OPENING TITLE CARD ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Red vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-brand-crimson/15 via-transparent to-transparent pointer-events-none" />
        {/* Horizontal rule top */}
        <div className="absolute top-28 left-0 right-0 h-px bg-white/5" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-2"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-crimson opacity-70">
              {d.badge}
            </p>
            <div className="h-px w-16 bg-white/20 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-1"
          >
            <p className="font-mono text-xs text-white/30 tracking-widest">
              {d.opening_year}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              {d.opening_location}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-tight"
          >
            {d.opening_tagline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-2xl font-light opacity-50 leading-relaxed max-w-2xl mx-auto">
              {d.opening_stat}
            </p>

            {/* Three crisis pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Drought", color: "text-sky-400 border-sky-400/30 bg-sky-400/10" },
                { label: "Fluoride", color: "text-brand-crimson border-brand-crimson/30 bg-brand-crimson/10" },
                { label: "Migration", color: "text-amber-400 border-amber-400/30 bg-amber-400/10" },
              ].map((p) => (
                <span
                  key={p.label}
                  className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${p.color}`}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-20"
          >
            ↓ {d.scroll_prompt} ↓
          </motion.p>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
      </section>

      {/* ── ACT I: DROUGHT ─────────────────────────────────────────────── */}
      <ChapterMarker
        chapter={d.act1_chapter}
        title={d.act1_title}
        subtitle={d.act1_subtitle}
        color="text-sky-400"
        bgAccent="bg-sky-950/30"
      />

      <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-lg md:text-xl font-light leading-[1.9] opacity-75 whitespace-pre-line">
            {d.act1_narrative}
          </p>
        </FadeIn>
      </section>

      {/* Stats bar — Act I */}
      <div className="bg-sky-950/20 border-y border-sky-500/10 py-12 px-6 overflow-x-auto">
        <div className="flex gap-12 justify-center min-w-max mx-auto px-6">
          {[
            { v: "5+", l: "Drought Years" },
            { v: "280+", l: "Scarcity Habitations" },
            { v: "422", l: "Daily Tankers" },
            { v: "24+", l: "Deserted Villages" },
            { v: "₹50 Cr", l: "Unpaid Dues" },
            { v: "₹10", l: "Per 5-Litre Bottle" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-center space-y-1 shrink-0"
            >
              <div className="text-3xl font-black text-sky-400">{s.v}</div>
              <div className="text-[9px] uppercase font-bold tracking-widest opacity-40">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <PullQuote text={d.act1_pull_quote} color="text-sky-300" />

      <section className="px-6 md:px-20 max-w-5xl mx-auto">
        <Testimony quote={d.act1_testimony} person={d.act1_testimony_person} />
      </section>

      {/* ── ACT II: FLUORIDE ───────────────────────────────────────────── */}
      <ChapterMarker
        chapter={d.act2_chapter}
        title={d.act2_title}
        subtitle={d.act2_subtitle}
        color="text-brand-crimson"
        bgAccent="bg-red-950/30"
      />

      <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-lg md:text-xl font-light leading-[1.9] opacity-75 whitespace-pre-line">
            {d.act2_narrative}
          </p>
        </FadeIn>
      </section>

      {/* Stats bar — Act II */}
      <div className="bg-red-950/20 border-y border-brand-crimson/10 py-12 px-6 overflow-x-auto">
        <div className="flex gap-12 justify-center min-w-max mx-auto px-6">
          {[
            { v: "700+", l: "Villages Contaminated" },
            { v: "27", l: "Get Safe Water" },
            { v: "15 mg/L", l: "Peak Fluoride" },
            { v: "1.5 mg/L", l: "WHO Safe Limit" },
            { v: "1937", l: "First Case Recorded" },
            { v: "4/day", l: "New Dialysis Patients" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-center space-y-1 shrink-0"
            >
              <div className="text-3xl font-black text-brand-crimson">{s.v}</div>
              <div className="text-[9px] uppercase font-bold tracking-widest opacity-40">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <PullQuote text={d.act2_pull_quote} color="text-brand-crimson" />

      <section className="px-6 md:px-20 max-w-5xl mx-auto">
        <Testimony quote={d.act2_testimony} person={d.act2_testimony_person} />
      </section>

      {/* ── ACT III: MIGRATION ─────────────────────────────────────────── */}
      <ChapterMarker
        chapter={d.act3_chapter}
        title={d.act3_title}
        subtitle={d.act3_subtitle}
        color="text-amber-400"
        bgAccent="bg-amber-950/20"
      />

      <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-lg md:text-xl font-light leading-[1.9] opacity-75 whitespace-pre-line">
            {d.act3_narrative}
          </p>
        </FadeIn>
      </section>

      {/* Stats bar — Act III */}
      <div className="bg-amber-950/20 border-y border-amber-500/10 py-12 px-6 overflow-x-auto">
        <div className="flex gap-12 justify-center min-w-max mx-auto px-6">
          {[
            { v: "24+", l: "Villages Deserted" },
            { v: "4", l: "Constituencies Affected" },
            { v: "₹1,200", l: "Monthly Water Cost" },
            { v: "~50%", l: "Income on Water+Medical" },
            { v: "3", l: "Cities of Exile" },
            { v: "∞", l: "Broken Promises" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="text-center space-y-1 shrink-0"
            >
              <div className="text-3xl font-black text-amber-400">{s.v}</div>
              <div className="text-[9px] uppercase font-bold tracking-widest opacity-40">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <PullQuote text={d.act3_pull_quote} color="text-amber-300" />

      <section className="px-6 md:px-20 max-w-5xl mx-auto">
        <Testimony quote={d.act3_testimony} person={d.act3_testimony_person} />
      </section>

      {/* ── SIX MANDALS ───────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <FadeIn className="text-center mb-16 space-y-4">
          <div className="h-px w-24 bg-white/10 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            {d.mandals_title}
          </h2>
          <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-30">
            A story for each wound
          </p>
          <div className="h-px w-24 bg-white/10 mx-auto" />
        </FadeIn>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {d.mandals.map((mandal, i) => (
            <MandalCard key={mandal.name} mandal={mandal} index={i} />
          ))}
        </div>
      </section>

      {/* ── VERIFIED SOURCES STRIP ────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-white/[0.02] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-4 justify-center">
          <CheckCircle size={14} className="text-green-400 shrink-0" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">
            Fact Checked
          </span>
          <span className="text-[10px] opacity-30 font-mono">—</span>
          {[
            { label: "Deccan Chronicle 2025", url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150" },
            { label: "The News Minute", url: "https://www.thenewsminute.com/article/andhras-drought-prone-prakasam-water-black-market-thrives-100203" },
            { label: "ReliefWeb / The Hindu", url: "https://reliefweb.int/report/india/prakasam-people-desert-villages-drop-water" },
            { label: "NIH / PMC 2019", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5996165/" },
            { label: "Fluoride Action Network", url: "https://fluoridealert.org/news/prakasam-faces-nalgonda-fate/" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-sky-400 transition-all"
            >
              {s.label} <ExternalLink size={9} />
            </a>
          ))}
        </div>
      </div>

      {/* ── CLOSING ────────────────────────────────────────────────────── */}
      <section className="bg-white text-black py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto space-y-16">
          <FadeIn>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-black">
              {d.closing_title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl font-light leading-[1.9] opacity-70 max-w-3xl whitespace-pre-line">
              {d.closing_narrative}
            </p>
          </FadeIn>

          {/* Demands */}
          <FadeIn delay={0.15}>
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] opacity-40">
                {d.demands_title}
              </h3>
              <ol className="space-y-3">
                {d.demands.map((demand, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-brand-crimson font-black text-lg leading-none mt-0.5">
                      {i + 1}.
                    </span>
                    <span className="text-base font-bold leading-snug opacity-80">{demand}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* Final quote */}
          <FadeIn delay={0.2}>
            <blockquote className="text-2xl md:text-4xl font-black italic leading-tight border-l-4 border-brand-crimson pl-8 text-black">
              &ldquo;{d.final_quote}&rdquo;
            </blockquote>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center gap-3 px-8 py-5 bg-black text-white font-black uppercase text-xs tracking-widest rounded-sm hover:gap-6 transition-all">
                {d.witness_btn}
                <ArrowRight size={16} />
              </button>
              <Link
                to="/memorandum"
                className="flex items-center gap-3 px-8 py-5 border-2 border-black text-black font-black uppercase text-xs tracking-widest rounded-sm hover:bg-black hover:text-white transition-all"
              >
                Read the Memorandum
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};
