import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  ArrowRight,
  Droplets,
  ChevronRight,
  AlertTriangle
} from "lucide-react";
import { motion } from "motion/react";
import { getSolutionsCopy } from "../data/solutionsPage";
import { homeLabels } from "../data/homeLabels";
import { getUiLabels } from "../data/uiLabels";

export const Home = () => {
  const { t, language } = useLanguage();
  const L = homeLabels[language];
  const ui = getUiLabels(language);
  const [activeCrisis, setActiveCrisis] = React.useState<0 | 1 | 2>(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion || isPaused) return;

    const id = window.setInterval(() => {
      setActiveCrisis((prev) => (((prev + 1) % 3) as 0 | 1 | 2));
    }, 3000);

    return () => window.clearInterval(id);
  }, [isPaused]);

  const crisisSlides = [
    {
      key: "drought",
      label: t.hero.crisis.drought.label,
      accent: "text-sky-300",
      border: "border-sky-300/30",
      bg: "bg-sky-950/25",
      imageSrc: "/hero/drought.png",
      imageAlt: "Cracked earth, empty pot, and withered crop — drought in Kanigiri",
      heroHeadline: t.hero.crisis.drought.heroHeadline,
      heroSubheadline: t.hero.crisis.drought.heroSubheadline,
      quote: t.hero.crisis.drought.quote,
    },
    {
      key: "fluoride",
      label: t.hero.crisis.fluoride.label,
      accent: "text-brand-crimson",
      border: "border-brand-crimson/30",
      bg: "bg-red-950/25",
      imageSrc: "/hero/fluoride.png",
      imageAlt: "Child showing dental fluorosis from contaminated groundwater",
      imageOverlaySrc: "/hero/fluoride_1.png",
      imageOverlayAlt: "Elder with skeletal deformities linked to chronic fluoride exposure",
      heroHeadline: t.hero.crisis.fluoride.heroHeadline,
      heroSubheadline: t.hero.crisis.fluoride.heroSubheadline,
      quote: t.hero.crisis.fluoride.quote,
    },
    {
      key: "migration",
      label: t.hero.crisis.migration.label,
      accent: "text-amber-300",
      border: "border-amber-300/30",
      bg: "bg-amber-950/20",
      imageSrc: "/hero/migration.png",
      imageAlt: "Travel bundle and slippers — outmigration from drought-hit villages",
      heroHeadline: t.hero.crisis.migration.heroHeadline,
      heroSubheadline: t.hero.crisis.migration.heroSubheadline,
      quote: t.hero.crisis.migration.quote,
    },
  ] as const;

  const slide = crisisSlides[activeCrisis];

  type HeroLayer = "back" | "front";

  const heroImageClass = (
    key: (typeof crisisSlides)[number]["key"],
    mobile = false,
    layer: HeroLayer = "back"
  ) => {
    const base = "hero-cutout absolute object-bottom";
    const z = layer === "front" ? "z-[1]" : "z-0";

    if (key === "migration") {
      return mobile
        ? `${base} ${z} object-right bottom-0 left-1/2 h-64 sm:h-80 w-[120%] max-w-none -translate-x-1/2 object-cover`
        : `${base} ${z} object-right bottom-0 right-0 hidden lg:block h-[calc(100vh-6rem)] w-[min(78vw,1150px)] max-w-none object-cover origin-bottom`;
    }


    return mobile
      ? `${base} ${z} object-right bottom-0 left-1/2 max-h-full w-auto max-w-full -translate-x-1/2 object-contain`
      : `${base} ${z} object-right bottom-0 right-0 hidden lg:block max-h-[calc(100vh-6rem)] w-[min(58vw,920px)] max-w-none object-contain`;
  };

  const heroLayers = (slide: (typeof crisisSlides)[number]) => {
    const overlay = "imageOverlaySrc" in slide ? slide.imageOverlaySrc : undefined;
    if (overlay) {
      return [
        {
          src: overlay,
          alt: "imageOverlayAlt" in slide ? slide.imageOverlayAlt : "",
          layer: "back" as const,
        },
        { src: slide.imageSrc, alt: slide.imageAlt, layer: "front" as const },
      ];
    }
    return [{ src: slide.imageSrc, alt: slide.imageAlt, layer: "back" as const }];
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section
        className="relative min-h-[calc(100vh-6rem)] w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-radial-gradient from-brand-crimson/15 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_80%)]">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 bg-white/[0.04] blur-3xl rounded-full" />
        </div>

        {/* Cutout art: right half, flush to bottom; z-0 so copy can sit on top when it overlaps */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {crisisSlides.map((s, idx) => {
            const active = idx === activeCrisis;
            if (s.key === "fluoride" && "imageOverlaySrc" in s && s.imageOverlaySrc) {
              return (
                <motion.div
                  key="fluoride-pair"
                  initial={false}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="hero-fluoride-pair"
                >
                  <img
                    src={s.imageOverlaySrc}
                    alt={"imageOverlayAlt" in s ? s.imageOverlayAlt : ""}
                    className="hero-cutout hero-fluoride-pair__elder"
                  />
                  <img
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    className="hero-cutout hero-fluoride-pair__child"
                  />
                </motion.div>
              );
            }
            return heroLayers(s).map((img) => (
              <motion.img
                key={`${s.key}-${img.layer}`}
                src={img.src}
                alt={img.alt}
                initial={false}
                animate={{ opacity: active ? 1 : 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={heroImageClass(s.key, false, img.layer)}
              />
            ));
          })}
        </div>

        <div className="relative z-10 grid min-h-[calc(100vh-6rem)] w-full grid-cols-1 lg:grid-cols-2 lg:gap-10 px-6 py-10 lg:py-14">
          <div className="flex flex-col justify-center space-y-6 text-left w-full min-w-0">

            <motion.h1
              key={slide.key + "-h1"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.06]"
            >
              {slide.heroHeadline}
            </motion.h1>

            <motion.p
              key={slide.key + "-p"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.03 }}
              className="text-base md:text-xl font-normal text-white/70 max-w-xl lg:max-w-none leading-relaxed"
            >
              {slide.heroSubheadline}
            </motion.p>

            {/* Slider tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {crisisSlides.map((s, idx) => {
                const active = idx === activeCrisis;
                return (
                  <button
                    key={s.key}
                    onClick={() => {
                      setActiveCrisis(idx as 0 | 1 | 2);
                      setIsPaused(true);
                      window.setTimeout(() => setIsPaused(false), 6000);
                    }}
                    className={[
                      "px-4 py-2 rounded-full border text-[11px] font-semibold tracking-wide transition-all",
                      active
                        ? `bg-white text-black border-white shadow-lg`
                        : `bg-white/[0.02] text-white/70 border-white/10 hover:border-white/20 hover:text-white`,
                    ].join(" ")}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={slide.key + "-quote"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-4 pt-1"
            >
              <span className={`text-[11px] doc-chapter ${slide.accent}`}>{slide.label}</span>
              <span className="h-px flex-1 bg-white/10" />
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveCrisis(i as 0 | 1 | 2);
                      setIsPaused(true);
                      window.setTimeout(() => setIsPaused(false), 6000);
                    }}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition-colors",
                      activeCrisis === i ? "bg-white" : "bg-white/20 hover:bg-white/35",
                    ].join(" ")}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.blockquote
              key={slide.key + "-bq"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-lg md:text-xl font-semibold tracking-tight leading-snug text-white/85"
            >
              “{slide.quote}”
            </motion.blockquote>

            <div className="lg:hidden relative h-56 sm:h-72 mt-2 shrink-0" aria-hidden>
              {crisisSlides.map((s, idx) => {
                const active = idx === activeCrisis;
                if (s.key === "fluoride" && "imageOverlaySrc" in s && s.imageOverlaySrc) {
                  return (
                    <motion.div
                      key="fluoride-pair-mobile"
                      initial={false}
                      animate={{ opacity: active ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="hero-fluoride-pair--mobile"
                    >
                      <img src={s.imageOverlaySrc} alt="" className="hero-cutout hero-fluoride-pair__elder" />
                      <img src={s.imageSrc} alt="" className="hero-cutout hero-fluoride-pair__child" />
                    </motion.div>
                  );
                }
                return heroLayers(s).map((img) => (
                  <motion.img
                    key={`${s.key}-${img.layer}-mobile`}
                    src={img.src}
                    alt=""
                    initial={false}
                    animate={{ opacity: active ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className={heroImageClass(s.key, true, img.layer)}
                  />
                ));
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
            >
              <Link
                to="/dashboard"
                className="group relative flex items-center gap-3 px-7 py-3.5 bg-white text-black font-semibold text-[11px] tracking-[0.18em] hover:pl-9 transition-all rounded-sm overflow-hidden"
              >
                {t.hero.dashboard_btn}
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="group flex items-center gap-3 px-7 py-3.5 border border-white/20 hover:border-white transition-all text-[11px] font-semibold tracking-[0.18em] rounded-sm text-white/90"
              >
                {t.nav.gallery}
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Right column: layout half; image is absolute behind this cell */}
          <div className="hidden lg:block min-h-0" aria-hidden />
        </div>
      </section>

      {/* --- QUICK OVERVIEW (BENTO) --- */}
      <section className="px-6 py-24 paper-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/dashboard" className="glass-card p-10 relative group overflow-hidden hover:border-brand-crimson/40 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <Droplets size={64} className="text-brand-crimson" />
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t.nav.dashboard}</h3>
            <p className="text-black/80 text-sm leading-relaxed mb-8">{t.dashboard.description}</p>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-brand-crimson doc-chapter">
              {L.exploreData} <ArrowRight size={12} />
            </div>
          </Link>

          <Link to="/solutions" className="glass-card p-10 relative group overflow-hidden hover:border-brand-amber/40 transition-colors">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t.nav.solutions}</h3>
            <p className="text-black/80 text-sm leading-relaxed mb-8">{getSolutionsCopy(language).home_teaser}</p>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-brand-amber doc-chapter">
              {L.viewRoadmap} <ArrowRight size={12} />
            </div>
          </Link>

          <Link to="/research" className="glass-card p-10 relative group overflow-hidden hover:border-blue-600/30 transition-colors">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t.research.title}</h3>
            <p className="text-black/80 text-sm leading-relaxed mb-8">{L.researchTeaser}</p>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-blue-700 doc-chapter">
              {L.readEvidence} <ArrowRight size={12} />
            </div>
          </Link>

          <Link to="/realities" className="glass-card p-10 relative group overflow-hidden hover:border-brand-crimson/40 transition-colors md:col-span-3">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <AlertTriangle size={64} className="text-brand-crimson" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold tracking-[0.18em] px-2 py-1 rounded bg-brand-crimson/15 text-brand-crimson/90 doc-chapter">
                {ui.home.crisis_badge}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t.nav.realities}</h3>
            <p className="text-black/80 text-sm leading-relaxed mb-8 max-w-2xl">{t.realities.subtitle}</p>
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-brand-crimson doc-chapter">
              {L.seeFullPicture} <ArrowRight size={12} />
            </div>
          </Link>
        </div>
      </section>
      {/* --- THE STORY SECTION --- */}
      <section className="px-6 py-24 max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[11px] doc-chapter text-brand-crimson/90">{t.story.title}</h2>
              <h3 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.06]">{t.story.subtitle}</h3>
            </div>
            <p className="text-xl font-normal text-white/80 leading-relaxed border-l-2 border-brand-crimson/60 pl-6">
              {t.story.geology_story}
            </p>
          </div>

          <div className="glass-card p-12 space-y-8">
            <h4 className="text-2xl font-semibold tracking-tight">{t.story.human_cost_title}</h4>
            <p className="text-white/75 leading-relaxed font-normal">{t.story.human_cost_desc}</p>
            <div className="space-y-6">
              {t.story.symptoms.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-crimson/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-brand-crimson">{i + 1}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold tracking-wide text-sm mb-1">{item.title}</h5>
                    <p className="text-sm text-white/65 font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- CAUSES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-3xl font-semibold tracking-tight">{t.story.causes_title}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.story.causes_list.map((cause, i) => (
                <li key={i} className="flex gap-3 items-start p-6 bg-white/[0.03] rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-amber mt-2 shrink-0" />
                  <span className="text-sm text-white/75 leading-relaxed">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8 bg-brand-crimson/10 border-brand-crimson/20">
             <p className="text-lg font-semibold text-white/90 mb-6 leading-relaxed">"{t.story.quote}"</p>
             <p className="text-[11px] doc-chapter text-white/60">{L.quoteAttribution}</p>
          </div>
        </div>

        {/* --- WHY ACTION IS NEEDED --- */}
        <div className="paper-section p-12 md:p-20 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.06]">{t.story.cta_title}</h4>
            <p className="text-lg font-normal opacity-70">
              {L.actionBody}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.story.cta_list.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-black/5 rounded-xl border border-black/5">
                <ArrowRight size={14} className="text-brand-crimson shrink-0" />
                <span className="text-[11px] font-semibold tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
