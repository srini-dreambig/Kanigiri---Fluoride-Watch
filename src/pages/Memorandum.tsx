import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  ChevronRight,
  Stamp
} from "lucide-react";
import { motion } from "motion/react";

import { getUiLabels } from "../data/uiLabels";

export const Memorandum = () => {
  const { t, language } = useLanguage();
  const ui = getUiLabels(language);

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-crimson/10 border border-brand-crimson/20 text-brand-crimson text-[10px] font-semibold tracking-wide mb-4">
             {t.memo.label}
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.15]">
            {t.memo.title}
          </h1>
          <p className="text-xl opacity-60 font-light">
             {t.memo.sub}
          </p>
        </div>

        <div className="glass-card p-12 md:p-20 border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden">
          <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
             <FileText size={200} />
          </div>

          <div className="relative z-10 space-y-12">
            <div className="space-y-4 text-sm md:text-base leading-loose font-light opacity-80">
              <p>{t.memo.intro}</p>
            </div>

            <div className="space-y-8">
              {[
                { title: t.memo.req1_title, desc: t.memo.req1_desc },
                { title: t.memo.req2_title, desc: t.memo.req2_desc },
                { title: t.memo.req3_title, desc: t.memo.req3_desc },
              ].map((req, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-brand-crimson/20 border border-brand-crimson/20 flex items-center justify-center text-brand-crimson font-black text-xs shrink-0 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight">{req.title}</h3>
                    <p className="text-sm opacity-50 leading-relaxed font-light">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center opacity-40">
                     <Stamp size={32} />
                  </div>
                  <div className="text-[10px] font-semibold tracking-wide opacity-50">
                    {ui.memo.submitted_label} <br/> {ui.memo.submitted_date}
                  </div>
               </div>
               <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs tracking-wide hover:scale-105 transition-all rounded-lg">
                 <Download size={18} /> {t.memo.download_btn}
               </button>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-6">
           <CheckCircle2 className="text-green-500 shrink-0" size={24} />
           <div className="space-y-2">
              <h4 className="text-[10px] font-semibold tracking-wide opacity-60">{t.memo_status.title}</h4>
              <p className="text-xs opacity-60 leading-relaxed font-light">
                {t.memo_status.description}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};
