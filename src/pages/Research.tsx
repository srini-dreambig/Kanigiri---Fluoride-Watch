import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  BookOpen, 
  FlaskConical, 
  Database, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Globe
} from "lucide-react";
import { motion } from "motion/react";

export const Research = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-24">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-blue-500">
          {t.research.title}
        </h1>
        <p className="max-w-2xl opacity-60">
          Scientific validation of the Kanigiri water crisis across multiple domains of inquiry: Geological, Medical, and Ecological.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="glass-card p-10 border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-blue-500/20 text-blue-400">
                  <Database size={32} />
                </div>
                <h2 className="text-3xl font-black uppercase italic">{t.research.geology_title}</h2>
              </div>
              <p className="text-sm opacity-60 leading-relaxed italic mb-8">
                "{t.research.geology_desc}"
              </p>
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Key Geological Evidence</h4>
                <ul className="space-y-3">
                  {[
                    "Fluorite (CaF2) and Apatite mineral presence in Kanigiri Granites.",
                    "Alkaline groundwater environment favoring fluoride leaching.",
                    "Secondary enrichment due to seasonal evaporation cycles.",
                  ].map((cite, i) => (
                    <li key={i} className="flex gap-3 text-xs opacity-50">
                      <ChevronRight size={14} className="text-blue-500 shrink-0" /> {cite}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="glass-card p-10 border-pink-500/20 bg-pink-500/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-pink-500/20 text-pink-400">
                  <FlaskConical size={32} />
                </div>
                <h2 className="text-3xl font-black uppercase italic">{t.research.health_title}</h2>
              </div>
              <p className="text-sm opacity-60 leading-relaxed italic mb-8">
                "{t.research.health_desc}"
              </p>
               <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-pink-400">Documented Health Risks</h4>
                <ul className="space-y-3">
                  {[
                    "Skeletal Fluorosis: Irreversible bone calcification and joint fusion.",
                    "Non-Diabetic CKD: High prevalence of kidney failure in younger age groups.",
                    "Dental Fluorosis: Severe enamel mottling in over 90% of local children.",
                  ].map((cite, i) => (
                    <li key={i} className="flex gap-3 text-xs opacity-50">
                      <ChevronRight size={14} className="text-pink-400 shrink-0" /> {cite}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40">Research Insights & Media Coverage</h3>
          <span className="text-[10px] font-mono opacity-30">Featured Articles</span>
        </div>

        <div className="space-y-12">
          {t.research.blogs.map((blog, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 group border-b border-white/5 pb-12 last:border-0"
            >
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-amber bg-brand-amber/10 px-2 py-1 rounded">
                    {blog.category}
                  </span>
                  <span className="text-[10px] font-mono opacity-40">{blog.date}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-black uppercase italic leading-snug group-hover:text-brand-amber transition-colors">
                  {blog.title}
                </h4>
                <div className="flex items-center gap-3 pt-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs uppercase">
                      {blog.author.charAt(0)}
                   </div>
                   <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest leading-normal">{blog.author}</p>
                      <p className="text-[10px] opacity-40 uppercase tracking-tighter leading-tight mt-0.5">{blog.publisher}</p>
                   </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <p className="text-xl font-light opacity-80 leading-relaxed italic border-l-2 border-brand-amber pl-8">
                  {blog.excerpt}
                </p>
                <p className="text-sm opacity-50 leading-relaxed font-light">
                  {blog.content}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-amber hover:gap-4 transition-all">
                  Read Full Article <ChevronRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40">Citation Database</h3>
          <span className="text-[10px] font-mono opacity-30">Academic Sources</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.research.citations.map((cite, i) => (
            <motion.a
                key={cite.title}
                href={cite.url}
                target="_blank"
                rel="no-referrer"
                whileHover={{ x: 5 }}
                className="glass-card p-8 flex flex-col justify-between border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">
                      {cite.source}
                    </span>
                    <div className="text-[10px] font-mono opacity-40">{cite.year}</div>
                  </div>
                  <Globe size={16} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h4 className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">
                  {cite.title}
                </h4>

                <div className="space-y-2">
                  {cite.highlights.map((h, j) => (
                    <div key={j} className="text-xs opacity-50 flex gap-2">
                      <span className="text-blue-500 shrink-0">•</span> {h}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                <span>Access Full Publication</span>
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center space-y-6">
        <ShieldCheck className="mx-auto text-green-500" size={48} />
        <h3 className="text-2xl font-black uppercase italic">Verified Humanity Crisis</h3>
        <p className="max-w-2xl mx-auto text-xs opacity-50 leading-relaxed font-light">
          The cumulative weight of these studies confirms that Kanigiri is not merely facing a public health challenge, but a generational ecological catastrophe that requires sovereign-level intervention.
        </p>
      </div>
    </div>
  );
};
