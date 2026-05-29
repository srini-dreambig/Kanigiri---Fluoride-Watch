import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { ExternalLink, Play, Search } from "lucide-react";
import {
  youtubeVideos,
  youtubeSearchLinks,
  relatedMediaLinks,
  youtubeWatchUrl,
  youtubeEmbedUrl,
  type YoutubeVideoEntry,
} from "../data/youtubeVideos";
import { getWatchCopy } from "../data/watchPage";
import { getUiLabels } from "../data/uiLabels";

const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const VideoCard = ({
  video,
  copy,
  ui,
  defaultExpanded,
}: {
  video: YoutubeVideoEntry;
  copy: ReturnType<typeof getWatchCopy>;
  ui: ReturnType<typeof getUiLabels>;
  defaultExpanded?: boolean;
}) => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(defaultExpanded ?? false);
  const tagLabel = copy.relevanceLabels[video.relevance];

  return (
    <article className="glass-card overflow-hidden border-white/10 flex flex-col">
      {expanded ? (
        <div className="aspect-video w-full bg-black">
          <iframe
            title={video.title}
            src={`${youtubeEmbedUrl(video.videoId)}?rel=0`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <a
          href={youtubeWatchUrl(video.videoId)}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-video block bg-zinc-900"
        >
          <img
            src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/25 transition-colors">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-crimson/90 text-white shadow-lg">
              <Play size={24} className="ml-1" fill="currentColor" />
            </span>
          </span>
        </a>
      )}

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/70">
            {tagLabel}
          </span>
          {video.year && (
            <span className="text-[10px] text-white/40">{video.year}</span>
          )}
        </div>

        <h3 className="text-lg font-semibold tracking-tight leading-snug">{video.title}</h3>
        <p className="text-xs text-white/50">{video.channel}</p>
        <p className="text-sm text-white/65 leading-relaxed flex-1">{video.context[language]}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-[11px] font-semibold tracking-wide px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
          >
            {expanded ? ui.watch.hide_player : ui.watch.play_here}
          </button>
          <a
            href={youtubeWatchUrl(video.videoId)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-4 py-2 rounded-lg border border-white/15 hover:border-white/30 transition-colors"
          >
            {copy.openYoutube}
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  );
};

export const Watch = () => {
  const { language } = useLanguage();
  const copy = getWatchCopy(language);
  const ui = getUiLabels(language);
  const featured = youtubeVideos.filter((v) => v.featured);
  const rest = youtubeVideos.filter((v) => !v.featured);

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-20">
      <FadeIn className="space-y-5 max-w-3xl">
        <p className="doc-chapter text-brand-crimson">{ui.watch.brand}</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">{copy.title}</h1>
        <p className="text-lg text-white/60 leading-relaxed">{copy.subtitle}</p>
      </FadeIn>

      {featured.length > 0 && (
        <section className="space-y-8">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">{copy.featured}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featured.map((video, i) => (
              <FadeIn key={video.id} delay={i * 0.08}>
                <VideoCard video={video} copy={copy} ui={ui} defaultExpanded={i === 0} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="space-y-8">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">{copy.allVideos}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {rest.map((video, i) => (
              <FadeIn key={video.id} delay={i * 0.05}>
                <VideoCard video={video} copy={copy} ui={ui} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-6">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Search className="text-sky-400" size={22} />
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{copy.searchTitle}</h2>
              <p className="text-sm text-white/55 mt-1 max-w-2xl">{copy.searchDesc}</p>
            </div>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {youtubeSearchLinks.map((link, i) => (
            <FadeIn key={link.id} delay={i * 0.04}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-sky-500/30 transition-colors group"
              >
                <span className="text-sm font-medium text-white/80 group-hover:text-white">
                  {link.label[language]}
                </span>
                <ExternalLink size={14} className="shrink-0 text-white/40 group-hover:text-sky-300" />
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{copy.relatedTitle}</h2>
            <p className="text-sm text-white/55 mt-1 max-w-2xl">{copy.relatedDesc}</p>
          </div>
        </FadeIn>
        <ul className="space-y-4">
          {relatedMediaLinks.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <li>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card p-6 border-white/10 hover:border-white/20 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold group-hover:text-sky-200 transition-colors">
                        {item.title[language]}
                      </h3>
                      <p className="text-sm text-white/55 leading-relaxed">{item.note[language]}</p>
                    </div>
                    <ExternalLink size={16} className="shrink-0 text-white/40 mt-1" />
                  </div>
                </a>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </div>
  );
};
