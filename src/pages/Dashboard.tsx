import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Stethoscope, 
  Map, 
  Droplets, 
  AlertTriangle,
  Info,
  TrendingDown
} from "lucide-react";
import { motion } from "motion/react";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell,
  PieChart, 
  Pie 
} from "recharts";

export const Dashboard = () => {
  const { t } = useLanguage();
  const [activeMandal, setActiveMandal] = useState<string | null>(null);

  const MANDALS = t.mandal_details.list;

  const chartData = MANDALS.map(m => ({
    name: m.name,
    fluoride: parseFloat(m.fluoride.split('-')[1] || m.fluoride.split(' ')[0]),
    pop: parseInt(m.pop.replace(/,/g, ''))
  }));

  const healthMetrics = [
    { label: t.dashboard.health.ckd_prev, value: t.dashboard.health.ckd_patients, icon: Stethoscope, color: "text-brand-crimson" },
    { label: t.dashboard.health.bone_deform, value: t.dashboard.health.bone_cases, icon: TrendingDown, color: "text-brand-amber" },
    { label: "Critical Mandals", value: "6 / 6", icon: Map, color: "text-white" },
  ];

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-brand-crimson">
          {t.dashboard.title}
        </h1>
        <p className="max-w-2xl opacity-60">
          {t.dashboard.description} Real-time groundwater monitoring data consolidated from over 240 sampling points across Kanigiri constituency.
        </p>
      </div>

      {/* --- QUICK STATS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthMetrics.map((metric, i) => (
          <div key={i} className="glass-card p-8 border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-4 mb-4">
              <metric.icon className={metric.color} size={28} />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{metric.label}</span>
            </div>
            <div className="text-4xl font-black tracking-tighter uppercase italic">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- MANDAL LIST --- */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-amber">Water Quality by Mandal</h3>
            <span className="text-[10px] opacity-40 font-mono italic">{t.dashboard.population.risk_note}</span>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {MANDALS.map(m => (
              <button
                key={m.name}
                onClick={() => setActiveMandal(m.name === activeMandal ? null : m.name)}
                className={`p-4 rounded-xl border transition-all text-left group ${
                  activeMandal === m.name 
                    ? "bg-brand-crimson border-brand-crimson" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold uppercase text-xs">{m.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    m.status === 'Critical' || m.status === 'క్లిష్టమైనది' || m.status === 'महत्वपूर्ण' 
                      ? (activeMandal === m.name ? "bg-black/20 text-white" : "bg-brand-crimson/20 text-brand-crimson")
                      : (activeMandal === m.name ? "bg-black/20 text-white" : "bg-brand-amber/20 text-brand-amber")
                  }`}>
                    {m.status}
                  </span>
                </div>
                <div className="text-[10px] font-mono opacity-60 mb-2">{m.fluoride}</div>
                {activeMandal === m.name && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-[10px] leading-relaxed mt-2 pt-2 border-t border-black/10"
                  >
                    {m.details}
                  </motion.p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- CHARTS --- */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 border-white/5 bg-white/[0.02]">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <Droplets size={16} className="text-brand-crimson" /> Fluoride Concentration (mg/L)
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontWeight: 'bold' }}
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  />
                  <Bar dataKey="fluoride" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.fluoride > 5 ? '#ff4d4d' : '#f59e0b'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="glass-card p-8 border-white/5 bg-white/[0.02] flex flex-col items-center">
                <AlertTriangle className="text-brand-crimson mb-4" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Hazard Level</h4>
                <div className="text-xl font-black italic uppercase">10x WHO Limit</div>
                <p className="text-[10px] opacity-40 text-center mt-2">Maximum recorded levels reach 15.0 mg/L in certain P.C. Palli patches.</p>
             </div>
             <div className="glass-card p-8 border-white/5 bg-white/[0.02] flex flex-col items-center">
                <Info className="text-blue-400 mb-4" size={32} />
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Population Impact</h4>
                <div className="text-xl font-black italic uppercase">100% Exposed</div>
                <p className="text-[10px] opacity-40 text-center mt-2">Entire rural population relies solely on contaminated groundwater.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
