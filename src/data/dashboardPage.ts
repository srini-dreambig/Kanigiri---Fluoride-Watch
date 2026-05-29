import type { Language } from "../translations";
import { mandalSlugsInOrder } from "./mandals";

export type MandalChartRow = {
  slug: string;
  name: string;
  pop: number;
  fMin: number;
  fMax: number;
  fAvg: number;
  status: string;
  details: string;
  whoMultiple: number;
};

export type DistrictKpi = {
  id: string;
  label: string;
  value: string;
  note: string;
  tone: "crimson" | "amber" | "blue" | "neutral";
};

export type DashboardCopy = {
  subtitle: string;
  sampling_note: string;
  mandal_section: string;
  mandal_view: string;
  chart_fluoride: string;
  chart_who_line: string;
  chart_population: string;
  severity_title: string;
  table_title: string;
  table_headers: { mandal: string; population: string; fRange: string; vsWho: string; status: string };
  district_title: string;
  insights_title: string;
  insights: string[];
  sources_title: string;
  sources: { label: string; url: string }[];
  hazard_title: string;
  hazard_value: string;
  hazard_note: string;
  exposure_title: string;
  exposure_value: string;
  exposure_note: string;
  cta_research: string;
  cta_realities: string;
  total_pop_note: string;
  kpis: DistrictKpi[];
  severity_labels: { critical: string; severe: string; moderate: string };
};

const WHO_LIMIT = 1.5;

function parseFluorideRange(raw: string): { min: number; max: number } {
  const nums = raw.match(/[\d.]+/g)?.map(Number) ?? [0];
  const min = nums[0] ?? 0;
  const max = nums.length > 1 ? nums[1]! : min;
  return { min, max };
}

export function buildMandalChartRows(
  mandals: { name: string; pop: string; fluoride: string; status: string; details: string }[]
): MandalChartRow[] {
  return mandals.map((m, i) => {
    const { min, max } = parseFluorideRange(m.fluoride);
    const fAvg = Math.round(((min + max) / 2) * 10) / 10;
    return {
      slug: mandalSlugsInOrder[i]!,
      name: m.name,
      pop: parseInt(m.pop.replace(/,/g, ""), 10) || 0,
      fMin: min,
      fMax: max,
      fAvg,
      status: m.status,
      details: m.details,
      whoMultiple: Math.round((max / WHO_LIMIT) * 10) / 10,
    };
  });
}

export const dashboardPageCopy: Record<Language, DashboardCopy> = {
  en: {
    subtitle:
      "Constituency-wide fluoride, population, and health indicators — aligned with NPPCF district reporting, CGWB sampling, and verified journalism.",
    sampling_note: "272 CGWB aquifer samples district-wide; 6 mandal profiles below.",
    mandal_section: "Mandal water quality",
    mandal_view: "View mandal profile",
    chart_fluoride: "Fluoride by mandal (max mg/L vs WHO 1.5)",
    chart_who_line: "WHO limit 1.5 mg/L",
    chart_population: "Constituency population by mandal",
    severity_title: "Mandal risk mix",
    table_title: "Mandal comparison",
    table_headers: {
      mandal: "Mandal",
      population: "Population",
      fRange: "F range (mg/L)",
      vsWho: "× WHO max",
      status: "Status",
    },
    district_title: "District context (Prakasam)",
    insights_title: "What the data shows",
    insights: [
      "Kanigiri constituency peak 8.60 mg/L recorded — 5.7× WHO safe limit (Ground Water Dept / The Hindu 2015).",
      "NPPCF: fluoride severe in 48 of 56 Prakasam mandals; Kanigiri, P.C. Palli, C.S. Puram, Pamur above 5 ppm.",
      "345 CKD deaths since Jan 2015; 2,000+ patients on NTR Aarogyasri — dialysis travel to Ongole costs ~₹4,000/month (The Hindu 2017).",
      "730 villages cited with 10,000+ seriously affected; Jal Shakti 2024 samples exceeded 15 mg/L in district.",
    ],
    sources_title: "Data sources",
    sources: [
      {
        label: "The Hindu — Kanigiri fluoride toll (2015)",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece",
      },
      {
        label: "The Hindu — CKD & NPPCF (2017)",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
      },
      {
        label: "Deccan Chronicle — district crisis (2025)",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
      },
    ],
    hazard_title: "Peak vs WHO",
    hazard_value: "Up to 10×",
    hazard_note: "P.C. Palli patches to 15 mg/L; constituency peak 8.60 mg/L at Kanigiri.",
    exposure_title: "Groundwater dependence",
    exposure_value: "~354k people",
    exposure_note: "Six mandals rely on borewells; surface-water piped supply still incomplete.",
    cta_research: "Scientific sources",
    cta_realities: "Drought & migration",
    total_pop_note: "Total ~{count} across 6 mandals",
    kpis: [
      {
        id: "who",
        label: "WHO safe limit",
        value: "1.5 mg/L",
        note: "BIS desirable 1.0 / max 1.5",
        tone: "blue",
      },
      {
        id: "peak",
        label: "Kanigiri peak (reported)",
        value: "8.60 mg/L",
        note: "Ground Water Dept — The Hindu 2015",
        tone: "crimson",
      },
      {
        id: "mandals",
        label: "Mandals >5 ppm (NPPCF)",
        value: "4 named",
        note: "Kanigiri, P.C. Palli, C.S. Puram, Pamur",
        tone: "amber",
      },
      {
        id: "villages",
        label: "Villages affected (district)",
        value: "730+",
        note: "10,000+ seriously impacted — DC 2025",
        tone: "crimson",
      },
      {
        id: "ckd",
        label: "CKD deaths (since 2015)",
        value: "345",
        note: "2,000+ on NTR Aarogyasri — The Hindu 2017",
        tone: "crimson",
      },
      {
        id: "district-mandals",
        label: "Prakasam mandals at risk",
        value: "48 / 56",
        note: ">1,100 villages high-F groundwater",
        tone: "amber",
      },
    ],
    severity_labels: { critical: "Critical", severe: "Severe", moderate: "Moderate" },
  },
  te: {
    subtitle:
      "నియోజకవర్గవ్యాప్త ఫ్లోరైడ్, జనాభా, ఆరోగ్య సూచికలు — NPPCF, CGWB నమూనాలు, నిర్ధారిత journalism ఆధారంగా.",
    sampling_note: "జిల్లావ్యాప్తంగా 272 CGWB aquifer నమూనాలు; క్రింద 6 మండల ప్రొఫైల్‌లు.",
    mandal_section: "మండల నీటి నాణ్యత",
    mandal_view: "మండల ప్రొఫైల్ చూడండి",
    chart_fluoride: "మండల వారీగా F (గరిష్ట mg/L vs WHO 1.5)",
    chart_who_line: "WHO పరిమితి 1.5 mg/L",
    chart_population: "మండల వారీగా నియోజకవర్గ జనాభా",
    severity_title: "మండల ప్రమాద మిశ్రమం",
    table_title: "మండల పోలిక",
    table_headers: {
      mandal: "మండలం",
      population: "జనాభా",
      fRange: "F పరిధి (mg/L)",
      vsWho: "× WHO గరిష్ట",
      status: "స్థితి",
    },
    district_title: "జిల్లా సందర్భం (ప్రకాశం)",
    insights_title: "డేటా ఏమి చూపిస్తుంది",
    insights: [
      "కనిగిరి 8.60 mg/L నమోదు — WHO కంటే 5.7× (భూగర్భ జల శాఖ / The Hindu 2015).",
      "NPPCF: 56 మండలాలలో 48 తీవ్ర; Kanigiri, P.C. Palli, C.S. Puram, Pamur >5 ppm.",
      "2015 జనవరి నుండి 345 CKD మరణాలు; 2,000+ NTR Aarogyasri — Ongole dialysis ~₹4,000/నెల.",
      "730 గ్రామాలు; 10,000+ తీవ్ర ప్రభావిత; Jal Shakti 2024 లో F >15 mg/L.",
    ],
    sources_title: "డేటా మూలాలు",
    sources: [
      {
        label: "The Hindu — Kanigiri (2015)",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece",
      },
      {
        label: "The Hindu — CKD / NPPCF (2017)",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
      },
      {
        label: "Deccan Chronicle (2025)",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
      },
    ],
    hazard_title: "WHO vs గరిష్ట",
    hazard_value: "10× వరకు",
    hazard_note: "P.C. Palli 15 mg/L; కనిగిరి 8.60 mg/L.",
    exposure_title: "భూగర్భ జల ఆధారం",
    exposure_value: "~3.54 లక్షలు",
    exposure_note: "6 మండలాలు borewells; surface-water piped supply incomplete.",
    cta_research: "శాస్త్రీయ మూలాలు",
    cta_realities: "కరువు & migration",
    total_pop_note: "6 మండలాలలో మొత్తం ~{count}",
    kpis: [
      {
        id: "who",
        label: "WHO సురక్షిత పరిమితి",
        value: "1.5 mg/L",
        note: "BIS 1.0 / 1.5",
        tone: "blue",
      },
      {
        id: "peak",
        label: "కనిగిరి గరిష్ట (నమోదు)",
        value: "8.60 mg/L",
        note: "The Hindu 2015",
        tone: "crimson",
      },
      {
        id: "mandals",
        label: ">5 ppm మండలాలు",
        value: "4",
        note: "Kanigiri, P.C. Palli, C.S. Puram, Pamur",
        tone: "amber",
      },
      {
        id: "villages",
        label: "బాధిత గ్రామాలు",
        value: "730+",
        note: "10,000+ తీవ్ర — DC 2025",
        tone: "crimson",
      },
      {
        id: "ckd",
        label: "CKD మరణాలు (2015 నుండి)",
        value: "345",
        note: "2,000+ Aarogyasri",
        tone: "crimson",
      },
      {
        id: "district-mandals",
        label: "ప్రకాశం మండలాలు",
        value: "48 / 56",
        note: "1,100+ గ్రామాలు అధిక F",
        tone: "amber",
      },
    ],
    severity_labels: { critical: "క్లిష్ట", severe: "తీవ్ర", moderate: "మధ్యస్థ" },
  },
  hi: {
    subtitle:
      "निर्वाचन क्षेत्र-व्यापी फ्लोराइड, जनसंख्या, स्वास्थ्य संकेत — NPPCF, CGWB नमूने, सत्यापित पत्रकारिता पर आधारित।",
    sampling_note: "जिले में 272 CGWB aquifer नमूने; नीचे 6 mandal profiles।",
    mandal_section: "Mandal जल गुणवत्ता",
    mandal_view: "Mandal profile देखें",
    chart_fluoride: "Mandal-wise F (max mg/L vs WHO 1.5)",
    chart_who_line: "WHO सीमा 1.5 mg/L",
    chart_population: "Mandal-wise निर्वाचन क्षetr जनसंख्या",
    severity_title: "Mandal जोखिम मिश्रण",
    table_title: "Mandal तुलना",
    table_headers: {
      mandal: "Mandal",
      population: "जनसंख्या",
      fRange: "F सीमा (mg/L)",
      vsWho: "× WHO max",
      status: "स्थिति",
    },
    district_title: "जिला संदर्भ (प्रकाशम)",
    insights_title: "डेटा क्या दिखाता है",
    insights: [
      "Kanigiri 8.60 mg/L दर्ज — WHO से 5.7× (The Hindu 2015)।",
      "NPPCF: 56 में 48 mandals गंभीर; Kanigiri, P.C. Palli, C.S. Puram, Pamur >5 ppm।",
      "जन 2015 से 345 CKD मृत्यु; 2,000+ Aarogyasri — Ongole dialysis ~₹4,000/माह।",
      "730+ गाँव; 10,000+ गंभीर प्रभावित; Jal Shakti 2024 में F >15 mg/L।",
    ],
    sources_title: "डेटा स्रोत",
    sources: [
      {
        label: "The Hindu — Kanigiri (2015)",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece",
      },
      {
        label: "The Hindu — CKD / NPPCF (2017)",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
      },
      {
        label: "Deccan Chronicle (2025)",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
      },
    ],
    hazard_title: "WHO vs चरम",
    hazard_value: "10× तक",
    hazard_note: "P.C. Palli 15 mg/L; Kanigiri 8.60 mg/L।",
    exposure_title: "भूजल निर्भरता",
    exposure_value: "~3.54 लाख",
    exposure_note: "6 mandals borewells; surface-water supply incomplete।",
    cta_research: "वैज्ञानिक स्रोत",
    cta_realities: "सूखा & migration",
    total_pop_note: "6 mandals में कुल ~{count}",
    kpis: [
      {
        id: "who",
        label: "WHO सुरक्षित सीमा",
        value: "1.5 mg/L",
        note: "BIS 1.0 / 1.5",
        tone: "blue",
      },
      {
        id: "peak",
        label: "Kanigiri चरम (दर्ज)",
        value: "8.60 mg/L",
        note: "The Hindu 2015",
        tone: "crimson",
      },
      {
        id: "mandals",
        label: ">5 ppm mandals",
        value: "4",
        note: "Kanigiri, P.C. Palli, C.S. Puram, Pamur",
        tone: "amber",
      },
      {
        id: "villages",
        label: "प्रभावित गाँव",
        value: "730+",
        note: "10,000+ गंभीर — DC 2025",
        tone: "crimson",
      },
      {
        id: "ckd",
        label: "CKD मृत्यु (2015 से)",
        value: "345",
        note: "2,000+ Aarogyasri",
        tone: "crimson",
      },
      {
        id: "district-mandals",
        label: "प्रकाशम mandals",
        value: "48 / 56",
        note: "1,100+ गाँव उच्च F",
        tone: "amber",
      },
    ],
    severity_labels: { critical: "गंभीर", severe: "तीव्र", moderate: "मध्यम" },
  },
};

export function getDashboardCopy(lang: Language): DashboardCopy {
  return dashboardPageCopy[lang] ?? dashboardPageCopy.en;
}

export function severityBucket(
  status: string,
  labels: DashboardCopy["severity_labels"]
): "critical" | "severe" | "moderate" {
  const s = status.toLowerCase();
  if (
    s.includes("critical") ||
    s.includes("క్లిష్ట") ||
    s.includes("महत्व") ||
    s.includes("गंभीर")
  ) {
    return "critical";
  }
  if (s.includes("severe") || s.includes("తీవ్ర") || s.includes("तीव्र")) {
    return "severe";
  }
  return "moderate";
}

export const WHO_FLUORIDE_LIMIT = WHO_LIMIT;
