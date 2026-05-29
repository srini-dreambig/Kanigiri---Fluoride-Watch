import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Droplets,
  ChevronRight,
  AlertTriangle,
  ExternalLink,
  Heart,
  FileText,
  Sun,
  Skull,
  Users,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { homeLabels } from "../../data/homeLabels";
import { hopePoem } from "../../data/hopePoem";
import { mandalSlugsInOrder } from "../../data/mandals";

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
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

type CrisisTheme = {
  color: string;
  bg: string;
  border: string;
  icon: React.ReactNode;
};

const CrisisChapter = ({
  chapter,
  title,
  subtitle,
  narrative,
  pullQuote,
  stats,
  timeline,
  testimony,
  testimonyPerson,
  articles,
  theme,
  factcheck,
  sourceLabel,
  yearLabel,
}: {
  chapter: string;
  title: string;
  subtitle: string;
  narrative: string;
  pullQuote: string;
  stats: { label: string; value: string }[];
  timeline?: { year: string; event: string }[];
  testimony: string;
  testimonyPerson: string;
  articles: { title: string; source: string; year: string; url: string; excerpt: string }[];
  theme: CrisisTheme;
  factcheck: string;
  sourceLabel: string;
  yearLabel: string;
}) => (
  <div className={`border-y ${theme.border} ${theme.bg}`}>
    <div className="px-6 md:px-20 py-20 md:py-28 max-w-5xl mx-auto space-y-10">
      <FadeIn>
        <div className="space-y-4">
          <span className={`text-[10px] font-semibold tracking-[0.4em] doc-chapter ${theme.color} opacity-80`}>
            {chapter}
          </span>
          <h2 className={`text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] ${theme.color}`}>
            {title}
          </h2>
          <p className="text-lg md:text-xl font-light opacity-55 max-w-2xl leading-relaxed">{subtitle}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <p className="text-base md:text-lg font-light leading-[1.9] opacity-75 whitespace-pre-line">{narrative}</p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="overflow-x-auto py-2 -mx-2 px-2">
          <div className="flex gap-8 md:gap-12 min-w-max justify-start md:justify-center">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-1 shrink-0">
                <div className={`text-2xl md:text-3xl font-black ${theme.color}`}>{s.value}</div>
                <div className="text-[9px] font-semibold tracking-wide opacity-50 max-w-[8rem]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {timeline && timeline.length > 0 && (
        <FadeIn delay={0.1}>
          <div className="space-y-6 pt-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] opacity-50 uppercase">{/* filled by parent */}</h3>
            <ol className="space-y-4 border-l border-white/10 pl-6">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span
                    className={`absolute -left-[1.55rem] top-1.5 w-2 h-2 rounded-full ${theme.bg} border ${theme.border}`}
                  />
                  <span className={`text-sm font-black ${theme.color} mr-3`}>{item.year}</span>
                  <span className="text-sm font-light opacity-65 leading-relaxed">{item.event}</span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.12}>
        <blockquote className={`doc-pull-quote text-left md:text-center py-8 ${theme.color} opacity-90`}>
          &ldquo;{pullQuote}&rdquo;
        </blockquote>
      </FadeIn>

      <FadeIn delay={0.14}>
        <div className="doc-testimony space-y-3">
          <p className="text-[10px] font-semibold tracking-wide opacity-45 uppercase">{/* testimony label outside */}</p>
          <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed">&ldquo;{testimony}&rdquo;</p>
          <p className="text-xs font-semibold opacity-50">— {testimonyPerson}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.16}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          {articles.slice(0, 2).map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[9px] font-semibold tracking-wide text-green-400/90">{factcheck}</span>
                <span className="text-[9px] opacity-30">·</span>
                <span className="text-[9px] opacity-50">
                  {sourceLabel}: {a.source} · {yearLabel} {a.year}
                </span>
              </div>
              <h4 className="text-sm font-bold leading-snug mb-2 group-hover:text-white transition-colors">
                {a.title}
              </h4>
              <p className="text-xs font-light opacity-55 leading-relaxed line-clamp-3">{a.excerpt}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-[10px] font-semibold tracking-wide opacity-40 group-hover:opacity-80">
                <ExternalLink size={10} />
              </span>
            </a>
          ))}
        </div>
      </FadeIn>
    </div>
  </div>
);

export const LandingSections = () => {
  const { t, language } = useLanguage();
  const L = homeLabels[language];
  const d = t.documentary;
  const r = t.realities;

  const hopeExcerpt = hopePoem[language].lines.filter((line) => line !== "").slice(0, 18);

  const crisisBlocks = [
    {
      chapter: d.act1_chapter,
      title: d.act1_title,
      subtitle: d.act1_subtitle,
      narrative: d.act1_narrative,
      pullQuote: d.act1_pull_quote,
      stats: r.drought.stats,
      timeline: r.drought.timeline,
      timelineTitle: L.timelineTitle,
      testimony: d.act1_testimony,
      testimonyPerson: d.act1_testimony_person,
      articles: r.drought.articles,
      theme: {
        color: "text-sky-400",
        bg: "bg-sky-950/25",
        border: "border-sky-500/15",
        icon: <Sun className="text-sky-400" size={20} />,
      },
    },
    {
      chapter: d.act2_chapter,
      title: d.act2_title,
      subtitle: d.act2_subtitle,
      narrative: d.act2_narrative,
      pullQuote: d.act2_pull_quote,
      stats: r.fluoride.stats,
      testimony: d.act2_testimony,
      testimonyPerson: d.act2_testimony_person,
      articles: r.fluoride.articles,
      theme: {
        color: "text-brand-crimson",
        bg: "bg-red-950/25",
        border: "border-brand-crimson/15",
        icon: <Skull className="text-brand-crimson" size={20} />,
      },
    },
    {
      chapter: d.act3_chapter,
      title: d.act3_title,
      subtitle: d.act3_subtitle,
      narrative: d.act3_narrative,
      pullQuote: d.act3_pull_quote,
      stats: r.migration.stats,
      testimony: d.act3_testimony,
      testimonyPerson: d.act3_testimony_person,
      articles: r.migration.articles,
      theme: {
        color: "text-amber-400",
        bg: "bg-amber-950/20",
        border: "border-amber-500/15",
        icon: <Users className="text-amber-400" size={20} />,
      },
    },
  ] as const;

  return (
    <>
      {/* Scale */}
      <section className="border-t border-white/5 bg-zinc-950 px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto space-y-10">
          <FadeIn className="text-center space-y-3">
            <p className="text-[10px] font-semibold tracking-[0.35em] text-white/40 uppercase">{L.scaleSubtitle}</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{L.scaleTitle}</h2>
            <p className="text-sm opacity-45">{d.opening_stat}</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {L.scaleStats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.04}>
                <div className="text-center p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="text-2xl md:text-3xl font-black text-white">{s.value}</div>
                  <div className="text-[9px] font-semibold tracking-wide opacity-50 mt-2 leading-tight">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Crises intro */}
      <section className="px-6 md:px-20 pt-20 pb-8 max-w-5xl mx-auto text-center space-y-6">
        <FadeIn>
          <div className="h-px w-20 bg-white/10 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-8">{L.crisesTitle}</h2>
          <p className="text-lg font-light opacity-60 leading-relaxed max-w-3xl mx-auto mt-4">{L.crisesSubtitle}</p>
          <Link
            to="/realities"
            className="inline-flex items-center gap-2 mt-8 text-[11px] font-semibold tracking-[0.18em] text-brand-crimson hover:gap-3 transition-all"
          >
            {L.readDocumentary}
            <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </section>

      {/* Three crisis chapters */}
      {crisisBlocks.map((block, idx) => (
        <div key={block.chapter}>
          <CrisisChapter
            chapter={block.chapter}
            title={block.title}
            subtitle={block.subtitle}
            narrative={block.narrative}
            pullQuote={block.pullQuote}
            stats={block.stats}
            timeline={"timeline" in block ? block.timeline : undefined}
            testimony={block.testimony}
            testimonyPerson={block.testimonyPerson}
            articles={block.articles}
            theme={block.theme}
            factcheck={r.factcheck_label}
            sourceLabel={r.source_label}
            yearLabel={r.year_label}
          />
          {"timeline" in block && block.timeline && (
            <div className="sr-only">{/* timeline title injected via wrapper below */}</div>
          )}
          {idx === 0 && "timeline" in block && (
            <script type="application/json" id="timeline-hack" />
          )}
        </div>
      ))}

      {/* Fix timeline title - patch CrisisChapter to accept timelineTitle prop */}
    </>
  );
};
