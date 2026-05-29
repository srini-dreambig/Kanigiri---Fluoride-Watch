import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  getMandalProfile,
  mandalSlugsInOrder,
  MandalSlug,
  SupportedLanguage,
} from "../data/mandals";
import { api, type MandalDetailDto } from "../lib/api";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { getUiLabels, crisisTagLabel } from "../data/uiLabels";

export const Mandal = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const ui = getUiLabels(language);
  const m = ui.mandal;
  const [dbMandal, setDbMandal] = useState<MandalDetailDto | null>(null);
  const [loading, setLoading] = useState(true);

  const mandals = t.mandal_details.list;
  const idx = slug ? mandalSlugsInOrder.indexOf(slug as MandalSlug) : -1;
  const listMandal = idx >= 0 ? mandals[idx] : null;
  const validSlug = slug && mandalSlugsInOrder.includes(slug as MandalSlug);

  useEffect(() => {
    if (!validSlug || !slug) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    api.mandals
      .get(slug, language)
      .then((data) => {
        if (!cancelled) setDbMandal(data);
      })
      .catch(() => {
        if (!cancelled) setDbMandal(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug, language, validSlug]);

  const staticProfile =
    validSlug && slug
      ? getMandalProfile(language as SupportedLanguage, slug as MandalSlug)
      : null;

  const display = dbMandal ?? (listMandal && staticProfile
    ? {
        name: listMandal.name,
        pop: listMandal.pop,
        fluoride: listMandal.fluoride,
        status: listMandal.status,
        details: listMandal.details,
        summary: staticProfile.summary,
        keySignals: staticProfile.keySignals,
        crisisTags: staticProfile.crisisTags,
        sources: staticProfile.sources,
      }
    : null);

  if (!slug || !validSlug || !display) {
    return (
      <div className="pt-24 pb-24 px-6 min-h-screen max-w-4xl mx-auto">
        <div className="glass-card p-10 space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">{m.not_found_title}</h1>
          <p className="text-white/70 leading-relaxed">{m.not_found_desc}</p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm"
          >
            <ArrowLeft size={16} /> {ui.common.back_dashboard}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex items-center justify-between gap-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> {ui.common.back}
          </Link>
          <div className="text-[10px] font-mono text-white/40">{display.fluoride}</div>
        </div>

        {loading ? (
          <p className="text-sm text-white/50">{m.loading}</p>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              {display.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-lg text-white/70 leading-relaxed max-w-3xl"
            >
              {display.summary}
            </motion.p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {display.crisisTags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-semibold tracking-wide text-white/80"
                >
                  {crisisTagLabel(ui, tag)}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 space-y-4">
            <div className="text-[11px] font-semibold tracking-wide text-white/70">
              {m.snapshot}
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] text-white/60">{ui.common.population}</span>
                <span className="text-[11px] font-semibold">{display.pop}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] text-white/60">{ui.common.fluoride}</span>
                <span className="text-[11px] font-semibold">{display.fluoride}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] text-white/60">{ui.common.status}</span>
                <span className="text-[11px] font-semibold">{display.status}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">{m.what_happening}</h2>
            <ul className="space-y-3">
              {display.keySignals.map((s: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-crimson/70 shrink-0" />
                  <span className="text-white/70 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">{m.local_details}</h2>
            <p className="text-white/70 leading-relaxed">{display.details}</p>

            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] font-semibold tracking-wide text-white/70 mb-2">
                {m.related}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/realities"
                  className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-[11px] font-semibold tracking-wide text-white/80 hover:bg-white/[0.05] transition-colors"
                >
                  {t.nav.realities}
                </Link>
                <Link
                  to="/solutions"
                  className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-[11px] font-semibold tracking-wide text-white/80 hover:bg-white/[0.05] transition-colors"
                >
                  {t.nav.solutions}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-8 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">{m.other_mandals}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {mandalSlugsInOrder
              .filter((otherSlug) => otherSlug !== slug)
              .map((otherSlug) => {
                const otherIdx = mandalSlugsInOrder.indexOf(otherSlug);
                const other = mandals[otherIdx];
                if (!other) return null;
                return (
                  <Link
                    key={otherSlug}
                    to={`/mandals/${otherSlug}`}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-colors"
                  >
                    <div className="text-sm font-semibold">{other.name}</div>
                    <div className="text-[10px] font-mono text-white/50 mt-1">{other.fluoride}</div>
                  </Link>
                );
              })}
          </div>
        </section>

        <section className="glass-card p-8 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">{m.sources}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {display.sources.map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold tracking-wide text-white/90">
                      {src.label}
                    </div>
                    <div className="text-[10px] text-white/50 font-mono">
                      {src.publisher ? src.publisher : m.source_fallback}
                      {src.year ? ` · ${src.year}` : ""}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                {src.note ? (
                  <p className="text-sm text-white/65 leading-relaxed mt-3">{src.note}</p>
                ) : null}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
