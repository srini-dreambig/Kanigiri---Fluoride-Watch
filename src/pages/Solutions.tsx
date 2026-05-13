import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  ShieldCheck, 
  Clock, 
  Construction, 
  ArrowRight,
  Droplet,
  Truck,
  Filter,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";

export const Solutions = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"immediate" | "permanent">("immediate");

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-brand-amber leading-[1.4]">
          {t.solutions.title}
        </h1>
        <p className="max-w-2xl opacity-60">
          {t.solutions.description} We are balancing emergency relief through tanking and filtration while relentlessly advocating for the completion of the Veligonda irrigation and drinking water project.
        </p>
      </div>

      <div className="flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10 w-fit">
        <button
          onClick={() => setActiveTab("immediate")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
            activeTab === "immediate" 
              ? "bg-brand-amber text-black" 
              : "text-white/40 hover:text-white"
          }`}
        >
          <Clock size={16} /> {t.solutions.immediate_btn}
        </button>
        <button
          onClick={() => setActiveTab("permanent")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
            activeTab === "permanent" 
              ? "bg-brand-amber text-black" 
              : "text-white/40 hover:text-white"
          }`}
        >
          <ShieldCheck size={16} /> {t.solutions.permanent_btn}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {activeTab === "immediate" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 space-y-6 border-white/5 bg-white/[0.02]">
              <div className="w-16 h-16 rounded-2xl bg-brand-amber/20 flex items-center justify-center text-brand-amber">
                <Truck size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase italic">{t.solutions.immediate.tanker_title}</h3>
              <p className="text-sm opacity-50 leading-relaxed font-light">{t.solutions.immediate.tanker_desc}</p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Status</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Active Daily</span>
              </div>
            </div>

            <div className="glass-card p-10 space-y-6 border-white/5 bg-white/[0.02]">
              <div className="w-16 h-16 rounded-2xl bg-brand-amber/20 flex items-center justify-center text-brand-amber">
                <Filter size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase italic">{t.solutions.immediate.filter_title}</h3>
              <p className="text-sm opacity-50 leading-relaxed font-light">{t.solutions.immediate.filter_desc}</p>
               <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Locations</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-amber">12 Villages</span>
              </div>
            </div>

            <div className="glass-card p-10 space-y-6 border-white/5 bg-white/[0.02]">
              <div className="w-16 h-16 rounded-2xl bg-brand-amber/20 flex items-center justify-center text-brand-amber">
                <Droplet size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase italic">{t.solutions.immediate.dialysis_title}</h3>
              <p className="text-sm opacity-50 leading-relaxed font-light">{t.solutions.immediate.dialysis_desc}</p>
               <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Capacity</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-crimson">10 Beds</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="glass-card p-12 border-brand-amber/20 bg-brand-amber/[0.02] flex flex-col lg:row gap-12 items-center">
               <div className="lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck size={12} /> Master Solution
                  </div>
                  <h3 className="text-5xl font-black uppercase italic leading-relaxed">{t.solutions.permanent.project_title}</h3>
                  <p className="opacity-50 leading-relaxed font-light">{t.solutions.permanent.project_desc}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[10px] opacity-40 uppercase font-bold mb-1">Target</div>
                      <div className="text-xl font-bold uppercase italic text-brand-amber">{t.solutions.permanent.target}</div>
                    </div>
                    <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[10px] opacity-40 uppercase font-bold mb-1">Gap</div>
                      <div className="text-xl font-bold uppercase italic text-brand-crimson">₹450 Crores</div>
                    </div>
                  </div>
               </div>
               <div className="lg:w-1/2 bg-black/40 p-8 rounded-2xl border border-white/5 space-y-8">
                  <h4 className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">{t.solutions.why_2026.title}</h4>
                  <div className="space-y-6">
                    {[
                      { name: t.solutions.why_2026.tunnel, status: t.solutions.why_2026.status_progress, progress: 85 },
                      { name: t.solutions.why_2026.headworks, status: t.solutions.why_2026.status_pending, progress: 40 },
                      { name: t.solutions.why_2026.canals, status: t.solutions.why_2026.status_critical, progress: 20 },
                    ].map((step, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                          <span>{step.name}</span>
                          <span className={step.status === t.solutions.why_2026.status_progress ? "text-green-500" : "text-brand-crimson"}>{step.status}</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${step.progress}%` }}
                            className={`h-full ${step.status === t.solutions.why_2026.status_progress ? "bg-green-500" : "bg-brand-crimson"}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-4 bg-brand-amber text-black font-black uppercase text-xs tracking-widest hover:scale-[1.02] transition-transform rounded-lg flex items-center justify-center gap-3">
                    {t.solutions.why_2026.support_btn} <ArrowRight size={18} />
                  </button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
