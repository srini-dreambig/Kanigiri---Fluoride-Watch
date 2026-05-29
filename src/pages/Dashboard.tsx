import React, { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import {
  Stethoscope,
  Map,
  Droplets,
  AlertTriangle,
  Users,
  Activity,
  ExternalLink,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ReferenceLine,
  PieChart,
  Pie,
} from "recharts";
import { mandalSlugsInOrder } from "../data/mandals";
import {
  buildMandalChartRows,
  getDashboardCopy,
  severityBucket,
  WHO_FLUORIDE_LIMIT,
} from "../data/dashboardPage";
import { getUiLabels } from "../data/uiLabels";

const kpiToneClass: Record<string, string> = {
  crimson: "text-brand-crimson",
  amber: "text-brand-amber",
  blue: "text-blue-400",
  neutral: "text-white",
};

const kpiIcons: Record<string, React.ElementType> = {
  who: Droplets,
  peak: AlertTriangle,
  mandals: Map,
  villages: Users,
  ckd: Stethoscope,
  "district-mandals": Activity,
};

export const Dashboard = () => {
  const { t, language } = useLanguage();
  const copy = getDashboardCopy(language);
  const ui = getUiLabels(language);
  const d = ui.dashboard;
  const location = useLocation();
  const navigate = useNavigate();

  const mandals = t.mandal_details.list;
  const rows = useMemo(() => buildMandalChartRows(mandals), [mandals]);

  const severityData = useMemo(() => {
    const counts = { critical: 0, severe: 0, moderate: 0 };
    rows.forEach((r) => {
      counts[severityBucket(r.status, copy.severity_labels)] += 1;
    });
    return [
      { name: copy.severity_labels.critical, value: counts.critical, fill: "#ff4d4d" },
      { name: copy.severity_labels.severe, value: counts.severe, fill: "#f59e0b" },
      { name: copy.severity_labels.moderate, value: counts.moderate, fill: "#60a5fa" },
    ].filter((d) => d.value > 0);
  }, [rows, copy.severity_labels]);

  const totalPop = rows.reduce((s, r) => s + r.pop, 0);

  return (
    <div className="pt-24 pb-24 px-6 min-h-screen max-w-7xl mx-auto space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-brand-crimson">
          {t.dashboard.title}
        </h1>
        <p className="max-w-3xl opacity-60 leading-relaxed">{copy.subtitle}</p>
        <p className="text-[11px] font-mono opacity-35">{copy.sampling_note}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {copy.kpis.map((kpi) => {
          const Icon = kpiIcons[kpi.id] ?? Activity;
          return (
            <div key={kpi.id} className="glass-card p-6 border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <Icon className={kpiToneClass[kpi.tone] ?? "text-white"} size={22} />
                <span className="text-[10px] font-semibold tracking-wide uppercase opacity-50">
                  {kpi.label}
                </span>
              </div>
              <div className="text-3xl font-semibold tracking-tight mb-1">{kpi.value}</div>
              <p className="text-[10px] opacity-40 leading-relaxed">{kpi.note}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wide text-brand-amber">{copy.mandal_section}</h3>
            <span className="text-[10px] opacity-40 font-mono">{t.dashboard.population.risk_note}</span>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {mandals.map((m, idx) => {
              const slug = mandalSlugsInOrder[idx];
              const row = rows[idx];
              const href = `/mandals/${slug}`;
              const isActive = location.pathname === href;
              return (
                <Link
                  key={slug}
                  to={href}
                  className={`w-full p-4 rounded-xl border transition-all text-left group block ${
                    isActive
                      ? "bg-brand-crimson border-brand-crimson"
                      : "bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1 gap-2">
                    <span className="font-semibold text-xs">{m.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-semibold shrink-0 ${
                        row && row.fMax > 5
                          ? isActive
                            ? "bg-black/20 text-white"
                            : "bg-brand-crimson/20 text-brand-crimson"
                          : isActive
                            ? "bg-black/20 text-white"
                            : "bg-brand-amber/20 text-brand-amber"
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono opacity-60 mb-1">{m.fluoride}</div>
                  <div className="text-[10px] opacity-50 mb-2">
                    {m.pop} · {row ? `${row.whoMultiple} ${d.who_suffix}` : ""}
                  </div>
                  <p className="text-[10px] leading-relaxed opacity-70 line-clamp-2">{m.details}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide text-white/50 group-hover:text-white transition-colors">
                    {copy.mandal_view}
                    <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="glass-card p-8 border-white/5 bg-white/[0.02]">
            <h3 className="text-sm font-semibold tracking-wide mb-6 flex items-center gap-2">
              <Droplets size={16} className="text-brand-crimson" /> {copy.chart_fluoride}
            </h3>
            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rows} margin={{ top: 12, right: 12, left: 0, bottom: 8 }}>
                  <XAxis
                    dataKey="name"
                    stroke="#ffffff"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "rgba(255,255,255,0.45)", fontWeight: 600 }}
                    interval={0}
                    angle={-20}
                    textAnchor="end"
                    height={56}
                  />
                  <YAxis
                    domain={[0, "auto"]}
                    tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: d.unit_mg_l,
                      angle: -90,
                      position: "insideLeft",
                      fill: "rgba(255,255,255,0.35)",
                      fontSize: 10,
                    }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    contentStyle={{
                      backgroundColor: "#111",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                    formatter={(value: number, name: string) => [
                      `${value} ${d.unit_mg_l}`,
                      name === "fMax" ? d.chart_tooltip_max_f : name,
                    ]}
                  />
                  <ReferenceLine
                    y={WHO_FLUORIDE_LIMIT}
                    stroke="#60a5fa"
                    strokeDasharray="4 4"
                    label={{
                      value: copy.chart_who_line,
                      fill: "#60a5fa",
                      fontSize: 10,
                      position: "insideTopRight",
                    }}
                  />
                  <Bar
                    dataKey="fMax"
                    name="fMax"
                    radius={[4, 4, 0, 0]}
                    className="cursor-pointer"
                    onClick={(_data, index) => {
                      const slug = mandalSlugsInOrder[index];
                      if (slug) navigate(`/mandals/${slug}`);
                    }}
                  >
                    {rows.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.fMax > 5 ? "#ff4d4d" : entry.fMax > WHO_FLUORIDE_LIMIT ? "#f59e0b" : "#60a5fa"}
                        className="hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 border-white/5 bg-white/[0.02]">
              <h3 className="text-xs font-semibold tracking-wide mb-4 flex items-center gap-2">
                <Users size={14} className="text-blue-400" /> {copy.chart_population}
              </h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rows} layout="vertical" margin={{ left: 8, right: 16 }}>
                    <XAxis type="number" hide />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={72}
                      tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 9 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        fontSize: "11px",
                      }}
                      formatter={(v: number) => [v.toLocaleString(), d.chart_tooltip_population]}
                    />
                    <Bar dataKey="pop" fill="rgba(96,165,250,0.7)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] opacity-40 mt-2 text-center">
                {copy.total_pop_note.replace("{count}", totalPop.toLocaleString())}
              </p>
            </div>

            <div className="glass-card p-6 border-white/5 bg-white/[0.02] flex flex-col">
              <h3 className="text-xs font-semibold tracking-wide mb-4">{copy.severity_title}</h3>
              <div className="h-[200px] flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={severityData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={48}
                      outerRadius={72}
                      paddingAngle={3}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        fontSize: "11px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                {severityData.map((d) => (
                  <span key={d.name} className="text-[10px] flex items-center gap-1.5 opacity-60">
                    <span className="w-2 h-2 rounded-full" style={{ background: d.fill }} />
                    {d.name} ({d.value})
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border-white/5 overflow-x-auto">
            <h3 className="text-sm font-semibold tracking-wide mb-4">{copy.table_title}</h3>
            <table className="w-full text-left text-xs min-w-[520px]">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-wide opacity-50">
                  <th className="py-2 pr-4">{copy.table_headers.mandal}</th>
                  <th className="py-2 pr-4">{copy.table_headers.population}</th>
                  <th className="py-2 pr-4">{copy.table_headers.fRange}</th>
                  <th className="py-2 pr-4">{copy.table_headers.vsWho}</th>
                  <th className="py-2">{copy.table_headers.status}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.slug}
                    className="border-b border-white/5 hover:bg-white/[0.03] cursor-pointer"
                    onClick={() => navigate(`/mandals/${r.slug}`)}
                  >
                    <td className="py-3 pr-4 font-medium">{r.name}</td>
                    <td className="py-3 pr-4 font-mono opacity-70">{r.pop.toLocaleString()}</td>
                    <td className="py-3 pr-4 font-mono opacity-70">
                      {r.fMin} – {r.fMax}
                    </td>
                    <td className="py-3 pr-4 font-mono text-brand-crimson">{r.whoMultiple}×</td>
                    <td className="py-3 opacity-80">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 border-white/5 bg-white/[0.02] flex flex-col items-center text-center">
              <AlertTriangle className="text-brand-crimson mb-4" size={32} />
              <h4 className="text-xs font-semibold tracking-wide mb-2">{copy.hazard_title}</h4>
              <div className="text-2xl font-semibold">{copy.hazard_value}</div>
              <p className="text-[10px] opacity-45 mt-2 leading-relaxed max-w-xs">{copy.hazard_note}</p>
            </div>
            <div className="glass-card p-8 border-white/5 bg-white/[0.02] flex flex-col items-center text-center">
              <Users className="text-blue-400 mb-4" size={32} />
              <h4 className="text-xs font-semibold tracking-wide mb-2">{copy.exposure_title}</h4>
              <div className="text-2xl font-semibold">{copy.exposure_value}</div>
              <p className="text-[10px] opacity-45 mt-2 leading-relaxed max-w-xs">{copy.exposure_note}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 border-white/5 space-y-4">
          <h3 className="text-sm font-semibold tracking-wide text-brand-amber">{copy.district_title}</h3>
          <h4 className="text-xs font-semibold opacity-60">{copy.insights_title}</h4>
          <ul className="space-y-3">
            {copy.insights.map((line, i) => (
              <li key={i} className="text-sm opacity-65 leading-relaxed flex gap-2">
                <span className="text-brand-crimson shrink-0">•</span>
                {line}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15"
            >
              <BookOpen size={14} /> {copy.cta_research}
            </Link>
            <Link
              to="/realities"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide px-4 py-2 rounded-lg border border-white/15 hover:border-white/30"
            >
              {copy.cta_realities}
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        <div className="glass-card p-8 border-white/5 space-y-4">
          <h3 className="text-sm font-semibold tracking-wide">{copy.sources_title}</h3>
          <ul className="space-y-3">
            {copy.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-70 hover:text-brand-amber hover:opacity-100 transition-colors inline-flex items-center gap-2"
                >
                  {s.label}
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[10px] opacity-35 pt-2 leading-relaxed">{t.dashboard.health.sub}</p>
        </div>
      </section>
    </div>
  );
};
