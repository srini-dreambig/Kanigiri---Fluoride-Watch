import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { 
  ArrowRight, 
  Droplets, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { motion } from "motion/react";

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-brand-crimson/20 via-transparent to-transparent opacity-40 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-brand-crimson/50" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-crimson truncate">
              {t.hero.emergency}
            </span>
            <span className="h-px w-8 bg-brand-crimson/50" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[1.4]"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-light opacity-60 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:row items-center justify-center gap-4 pt-8"
          >
            <Link 
              to="/dashboard"
              className="group relative flex items-center gap-3 px-8 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:pl-10 transition-all rounded-sm overflow-hidden"
            >
              {t.hero.dashboard_btn} 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/gallery"
              className="group flex items-center gap-3 px-8 py-5 border border-white/20 hover:border-white transition-all text-xs font-black uppercase tracking-widest rounded-sm"
            >
              {t.nav.gallery}
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- QUICK OVERVIEW (BENTO) --- */}
      <section className="px-6 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/dashboard" className="glass-card p-10 relative group overflow-hidden border-white/5 hover:border-brand-crimson/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <Droplets size={64} className="text-brand-crimson" />
            </div>
            <h3 className="text-4xl font-black uppercase italic mb-4">{t.nav.dashboard}</h3>
            <p className="opacity-50 text-sm leading-relaxed mb-8">{t.dashboard.description}</p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-crimson">
              Explore Data <ArrowRight size={12} />
            </div>
          </Link>

          <Link to="/solutions" className="glass-card p-10 relative group overflow-hidden border-white/5 hover:border-brand-amber/50 transition-colors">
            <h3 className="text-4xl font-black uppercase italic mb-4">{t.nav.solutions}</h3>
            <p className="opacity-50 text-sm leading-relaxed mb-8">{t.solutions.description}</p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-amber">
              View Roadmap <ArrowRight size={12} />
            </div>
          </Link>

          <Link to="/research" className="glass-card p-10 relative group overflow-hidden border-white/5 hover:border-blue-500/50 transition-colors">
            <h3 className="text-4xl font-black uppercase italic mb-4">{t.research.title}</h3>
            <p className="opacity-50 text-sm leading-relaxed mb-8">Access peer-reviewed studies and geological proof of the crisis.</p>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-500">
              Read Evidence <ArrowRight size={12} />
            </div>
          </Link>
        </div>
      </section>
      {/* --- THE STORY SECTION --- */}
      <section className="px-6 py-24 max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-crimson">{t.story.title}</h2>
              <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-relaxed">{t.story.subtitle}</h3>
            </div>
            <p className="text-xl font-light opacity-80 leading-relaxed italic border-l-4 border-brand-crimson pl-6">
              {t.story.geology_story}
            </p>
          </div>

          <div className="glass-card p-12 bg-white/5 border-white/10 space-y-8">
            <h4 className="text-2xl font-black uppercase italic">{t.story.human_cost_title}</h4>
            <p className="opacity-70 leading-relaxed font-light">{t.story.human_cost_desc}</p>
            <div className="space-y-6">
              {t.story.symptoms.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-crimson/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-black text-brand-crimson">{i + 1}</span>
                  </div>
                  <div>
                    <h5 className="font-bold uppercase text-xs tracking-widest mb-1">{item.title}</h5>
                    <p className="text-sm opacity-60 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- CAUSES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="md:col-span-2 space-y-8">
            <h4 className="text-3xl font-black uppercase italic">{t.story.causes_title}</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.story.causes_list.map((cause, i) => (
                <li key={i} className="flex gap-3 items-start p-6 bg-white/[0.03] rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-amber mt-2 shrink-0" />
                  <span className="text-sm opacity-70 leading-relaxed">{cause}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8 bg-brand-crimson/10 border-brand-crimson/20">
             <p className="text-lg font-bold italic mb-6">"{t.story.quote}"</p>
             <p className="text-[10px] uppercase font-black tracking-widest opacity-40">— Residents of Kanigiri villages</p>
          </div>
        </div>

        {/* --- WHY ACTION IS NEEDED --- */}
        <div className="bg-white text-black p-12 md:p-20 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-relaxed">{t.story.cta_title}</h4>
            <p className="text-lg font-light opacity-70">
              Every voice counts. Help us break the cycle of suffering and secure a future where water is life, not a toxin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.story.cta_list.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-black/5 rounded-xl border border-black/5">
                <ArrowRight size={14} className="text-brand-crimson shrink-0" />
                <span className="text-xs font-bold uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
