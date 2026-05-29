import type { Language } from "../translations";

export type MeasureStatus = "active" | "partial" | "proposed";

export type SolutionMeasure = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  statLabel: string;
  statValue: string;
  status: MeasureStatus;
  limitation: string;
  source: string;
};

export type ProjectMilestone = {
  id: string;
  name: string;
  detail: string;
  statusKey: "critical" | "progress" | "pending";
};

export type CompareRow = {
  aspect: string;
  interim: string;
  permanent: string;
};

export type SolutionsCopy = {
  subtitle: string;
  immediate_btn: string;
  permanent_btn: string;
  urgency_stat: string;
  urgency_label: string;
  immediate: {
    title: string;
    desc: string;
    limitation_title: string;
    limitation_points: string[];
    measures: SolutionMeasure[];
  };
  permanent: {
    badge: string;
    project_name: string;
    project_desc: string;
    stats: { label: string; value: string; tone: "amber" | "crimson" | "blue" }[];
    milestones_title: string;
    milestones: ProjectMilestone[];
    why_title: string;
    why_points: string[];
    gaps_title: string;
    gaps: string[];
  };
  advocacy: {
    title: string;
    desc: string;
    actions: string[];
  };
  compare: {
    title: string;
    headers: { aspect: string; interim: string; permanent: string };
    rows: CompareRow[];
  };
  policy: {
    title: string;
    asks: { title: string; desc: string; tag: string }[];
    memo_cta: string;
  };
  sources_title: string;
  sources: { label: string; url: string }[];
  status_labels: Record<MeasureStatus, string>;
  milestone_status: { critical: string; progress: string; pending: string };
  cta_research: string;
  cta_dashboard: string;
  home_teaser: string;
};

export const solutionsPageCopy: Record<Language, SolutionsCopy> = {
  en: {
    subtitle:
      "Kanigiri cannot drink its way out of geogenic fluoride with tankers alone. This tracker separates what MLA Ugra Narasimhareddy and local administration are delivering now from the Veligonda / Jal Jeevan piped surface-water work still needed — with sources and honest limits.",
    immediate_btn: "Immediate Relief",
    permanent_btn: "Permanent Infrastructure",
    urgency_stat: "4 / day",
    urgency_label: "Estimated new dialysis cases while Veligonda waits (The Hindu 2017 field reporting)",
    immediate: {
      title: "Relief on the ground",
      desc: "Constituency-level action is real — but interim supply covers only part of the need, and RO plants cannot fix irrigation or food-chain exposure.",
      limitation_title: "Why interim measures are not enough",
      limitation_points: [
        "40+ RO plants across the belt still leave crops irrigated with the same high-F borewell water — ex-MLA Dr. M. Ugra Narasimha Reddy told BBC field reporters the plants had limited household impact.",
        "Tankers reach some hamlets only a few days a week while fluoride in wells is constant — P.C. Palli reporting after 2025 collector orders.",
        "Dialysis remains concentrated in Ongole; families spend ~₹4,000/month on travel while 2,000+ patients rely on NTR Aarogyasri.",
      ],
      measures: [
        {
          id: "tankers",
          title: "Emergency tanker supply",
          description:
            "MLA Ugra Narasimhareddy has coordinated daily tanker runs — reported at 50,000+ litres — to high-fluoride hamlets across six mandals, and pressed the district after fluorosis and jaundice clusters in 2025.",
          bullets: [
            "District Collector directed emergency RO water and tankers after Kanigiri field visits (Deccan Chronicle 2025).",
            "Priority hamlets in P.C. Palli, H.M. Padu, and Veligandla where F exceeds 5–15 mg/L.",
            "Black-market tanker rates spike in drought years — affordability remains a barrier (The News Minute 2019).",
          ],
          statLabel: "Daily supply (reported)",
          statValue: "50,000+ L",
          status: "active",
          limitation: "Does not reach every household daily; storage and queue gaps persist.",
          source: "Deccan Chronicle 2025; constituency reporting",
        },
        {
          id: "ro",
          title: "Community RO & filter plants",
          description:
            "MLA-prioritized rollout of community RO plants in critical villages — cited at 12+ priority sites — plus wider district deployment of 40+ plants that still cannot treat agricultural use.",
          bullets: [
            "RO targets drinking points; borewells used for cooking and irrigation remain untreated.",
            "Maintenance, power cuts, and cartridge costs limit uptime in remote mandals.",
            "Collector orders included school warnings and sanitation emphasis alongside filtration.",
          ],
          statLabel: "Priority villages",
          statValue: "12+",
          status: "partial",
          limitation: "Safe drinking point ≠ safe food chain — fluoride accumulates in crops.",
          source: "BBC Telugu / The Hindu; Deccan Chronicle 2025",
        },
        {
          id: "dialysis",
          title: "CKD care & dialysis access",
          description:
            "345 CKD deaths recorded since January 2015 in fluoride-hit Prakasam; MLA advocacy pushes a 10-bed emergency dialysis unit in Kanigiri Town so families stop travelling 80+ km to Ongole.",
          bullets: [
            "2,000+ patients on NTR Aarogyasri for renal treatment — demand outstrips local capacity.",
            "Memorandum asks for a 100-bed regional nephrology centre; interim 10-bed hub is the constituency minimum.",
            "NPPCF links F >5 ppm mandals — Kanigiri, P.C. Palli, C.S. Puram, Pamur — to fluoride-induced CKD.",
          ],
          statLabel: "CKD deaths (since 2015)",
          statValue: "345",
          status: "proposed",
          limitation: "Treatment without safe water does not stop new cases.",
          source: "The Hindu 2017; NPPCF",
        },
        {
          id: "health-camps",
          title: "Health camps & fluorosis screening",
          description:
            "Constituency health camps for dental/skeletal fluorosis screening, thyroid referral (linked in Prakasam studies), and CKD early detection — paired with school awareness after 2025 collector alerts.",
          bullets: [
            "Screening identifies stained teeth and joint deformities but follow-up care needs funded transport.",
            "District NPPCF data underpins mandal-level severity mapping used on this site.",
            "Awareness is necessary; piped safe water is the structural fix.",
          ],
          statLabel: "Seriously affected (district)",
          statValue: "10,000+",
          status: "active",
          limitation: "Screening without piped supply treats symptoms, not exposure.",
          source: "Deccan Chronicle 2025; IJEAB 2017",
        },
      ],
    },
    permanent: {
      badge: "Master solution",
      project_name: "Veligonda & piped surface water",
      project_desc:
        "The Veligonda scheme is meant to bring Krishna (Nagarjunasagar) water through upland tunnels and canals to fluoride-hit western Prakasam — including Kanigiri, Markapuram, and Giddalur. A ₹1,290 crore Jal Jeevan / surface-water package targets Kanigiri and Kammavaripalli first, but full connectivity remains unfunded.",
      stats: [
        { label: "JJM / surface-water phase", value: "₹1,290 Cr", tone: "amber" },
        { label: "Reported funding gap (2026)", value: "₹2,000 Cr", tone: "crimson" },
        { label: "Constituency ask (JJM bridge)", value: "₹450 Cr", tone: "blue" },
        { label: "Target completion", value: "Aug 2026", tone: "amber" },
      ],
      milestones_title: "Project components & reported status",
      milestones: [
        {
          id: "tunnel",
          name: "Veligonda tunnel & lining",
          detail:
            "Long-delayed tunnel works to convey Krishna water across the uplands — repeatedly cited as the engineering bottleneck since foundation stone decades ago.",
          statusKey: "progress",
        },
        {
          id: "headworks",
          name: "Headworks & pumping",
          detail:
            "Intake, pumping, and delivery headworks at Nagarjunasagar-linked infrastructure — funding releases determine whether flow can start even if tunnel sections are ready.",
          statusKey: "pending",
        },
        {
          id: "canals",
          name: "Canal network & household taps",
          detail:
            "Last-mile canals and household connections in Kanigiri mandals remain minimal — Ramatheertham and partial Nagarjunasagar schemes still do not cover the full constituency.",
          statusKey: "critical",
        },
        {
          id: "jjm-phase1",
          name: "Kanigiri JJM phase-one pipelines",
          detail:
            "₹1,290 crore piped surface-water project in progress — Kanigiri and Kammavaripalli named as first-focus areas in 2025 district reporting.",
          statusKey: "progress",
        },
      ],
      why_title: "Why 2026 matters",
      why_points: [
        "Every month of delay leaves ~354,000 constituency residents on geogenic fluoride borewells.",
        "WHO limit is 1.5 mg/L; Kanigiri peak recorded at 8.60 mg/L — piped surface water is the only scale match.",
        "Borewell bans in 258 Prakasam villages (2026) acknowledge over-extraction but do not replace supply.",
        "Fluorosis is irreversible — prevention requires stopping intake, not more filtration alone.",
      ],
      gaps_title: "What is still missing",
      gaps: [
        "₹450 crore memorandum ask under Jal Jeevan Mission to bridge Veligonda connectivity for fluoride mandals.",
        "100-bed regional nephrology centre — memorandum demand vs 10-bed interim hub.",
        "Special Fluoride Zone designation for P.C. Palli and Kanigiri to unlock disaster-relief scale funding.",
        "Firm, non-slipping completion date with central–state cost sharing (TOI 2026 reports ₹2,000 crore gap to Aug 2026 deadline).",
      ],
    },
    advocacy: {
      title: "MLA advocacy tracker",
      desc: "Kanigiri MLA Ugra Narasimhareddy is documented pressing tankers, RO plants, health camps, and Veligonda/JJM funding in Hyderabad and Delhi — this site records that ground effort while demanding matching state and central delivery.",
      actions: [
        "Emergency tanker and RO escalation after 2025 fluorosis/jaundice reports in Kanigiri villages.",
        "Repeated Veligonda completion appeals — Hans India 2026 quotes project as fluorosis remedy for uplands.",
        "Formal memorandum to state and central governments: fluoride zone, ₹450 crore JJM, 100-bed dialysis centre.",
        "Constituency visits to P.C. Palli and high-F hamlets with district health teams.",
      ],
    },
    compare: {
      title: "Interim relief vs permanent fix",
      headers: { aspect: "Aspect", interim: "Tankers & RO", permanent: "Veligonda / piped surface water" },
      rows: [
        { aspect: "Coverage", interim: "Selected hamlets & drinking points", permanent: "Household tap network across mandals" },
        { aspect: "Fluoride source", interim: "Bypasses borewell for drinking only", permanent: "Replaces groundwater intake entirely" },
        { aspect: "Food / irrigation", interim: "Crops still irrigated with high-F water", permanent: "Enables shift to safe source for all uses" },
        { aspect: "Cost sustainability", interim: "Recurring tanker & cartridge costs", permanent: "High capital cost, lower per-capita long-term" },
        { aspect: "Health impact", interim: "Slows new cases; treats CKD reactively", permanent: "Primary prevention for next generation" },
        { aspect: "Status today", interim: "Active but incomplete", permanent: "Under construction — funding gap" },
      ],
    },
    policy: {
      title: "Three policy asks (memorandum)",
      asks: [
        {
          title: "Special Fluoride Zone designation",
          desc: "Recognise P.C. Palli and Kanigiri as high-impact zones to unlock disaster-scale relief funds.",
          tag: "Recognition",
        },
        {
          title: "₹450 Cr Jal Jeevan Mission grant",
          desc: "Bridge the Veligonda connectivity funding gap for fluoride-hit mandals.",
          tag: "Funding",
        },
        {
          title: "100-bed regional nephrology centre",
          desc: "Fund advanced dialysis at Kanigiri or Podili — 2,000+ patients cannot rely on Ongole alone.",
          tag: "Healthcare",
        },
      ],
      memo_cta: "Read full memorandum",
    },
    sources_title: "Sources & reporting",
    sources: [
      {
        label: "Collector orders emergency measures — fluorosis, jaundice (Kanigiri)",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/collector-orders-emergency-measures-as-fluorosis-jaundice-hit-kanigiri-villages-1916862",
      },
      {
        label: "High fluoride content in water takes a toll — Kanigiri",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece",
      },
      {
        label: "Fluoride problem accentuates renal diseases — NPPCF",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
      },
      {
        label: "Prakasam still battles fluoride crisis (2025)",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
      },
      {
        label: "Veligonda project remedy for fluorosis — Hans India",
        url: "https://www.thehansindia.com/andhra-pradesh/veligonda-project-remedy-for-fluorosis-dinakar-966886",
      },
      {
        label: "Veligonda requires ₹2,000 crore for Aug 2026 deadline — TOI",
        url: "https://timesofindia.indiatimes.com/city/vijayawada/veligonda-project-requires-rs-2000-crore-to-meet-aug-2026-deadline/articleshow/128124601.cms",
      },
    ],
    status_labels: { active: "Active", partial: "Partial", proposed: "Proposed" },
    milestone_status: { critical: "Critical gap", progress: "In progress", pending: "Pending funds" },
    cta_research: "Scientific evidence",
    cta_dashboard: "Data dashboard",
    home_teaser:
      "Track tankers, RO plants, Veligonda milestones, and the policy asks still needed to end fluoride exposure.",
  },
  te: {
    subtitle:
      "ట్యాంకర్లతో మాత్రమే భూగర్భ ఫ్లోరైడ్‌ను పూర్తిగా తీసివేయలేము. MLA ఉగ్ర నరసింహారెడ్డి మరియు ప్రశాసన ఇప్పటి అందిస్తున్న తక్షణ రాహత vs Veligonda/JJM ఉపరితల నీటి — మూలాలు, నిజం పరిమితులు.",
    immediate_btn: "తక్షణ ఉపశమనం",
    permanent_btn: "శాశ్వత మౌలిక సదుపాయం",
    urgency_stat: "4 / రోజు",
    urgency_label: "Veligonda వేచుకునే వారంలో అంచనా కొత్త dialysis cases (The Hindu 2017)",
    immediate: {
      title: "క్షేత్రంలో రాహత",
      desc: "నియోజకవర్గ చర్య నిజం — interim supply అవసరం పాతిగే ఉంటుంది; RO plants irrigation/food-chain exposure fix చేయలేవు.",
      limitation_title: "interim measures ఎందుకు సరిపోవు",
      limitation_points: [
        "40+ RO plants — పంటలు అదే high-F borewell water తో — ex-MLA Dr. M. Ugra Narasimha Reddy BBC reporting.",
        "ట్యాంకర్లు వారంలో కొన్ని రోజులు — borewell F 24/7 — P.C. Palli 2025 collector orders తర్వాత.",
        "Dialysis Ongole కేంద్రీకృతం; ~₹4,000/నెల travel — 2,000+ NTR Aarogyasri.",
      ],
      measures: [
        {
          id: "tankers",
          title: "అత్యవసర ట్యాంకర్ సరఫరా",
          description:
            "MLA ఉగ్ర నరసింహారెడ్డi రోజుకు 50,000+ లీటర్ల ట్యాంకర్లు — 2025 fluorosis/jaundice clusters తర్వాత district pressure.",
          bullets: [
            "Collector emergency RO + tankers (Deccan Chronicle 2025).",
            "P.C. Palli, H.M. Padu, Veligandla — F 5–15 mg/L.",
            "Drought years black-market tanker rates — affordability barrier.",
          ],
          statLabel: "రోజువారీ (నివేదించబడింది)",
          statValue: "50,000+ L",
          status: "active",
          limitation: "ప్రతి household daily reach కాదు.",
          source: "Deccan Chronicle 2025",
        },
        {
          id: "ro",
          title: "కమ్యూనిటీ RO & filter plants",
          description: "12+ priority villages RO rollout — 40+ district plants; agricultural use untreated.",
          bullets: [
            "RO drinking points మాత్రమే; cooking/irrigation borewells untreated.",
            "Maintenance, power cuts uptime limit.",
            "School warnings + sanitation collector orders.",
          ],
          statLabel: "Priority గ్రామాలు",
          statValue: "12+",
          status: "partial",
          limitation: "Safe drinking ≠ safe food chain.",
          source: "BBC Telugu / The Hindu",
        },
        {
          id: "dialysis",
          title: "CKD care & dialysis",
          description: "345 CKD deaths since 2015; Kanigiri 10-bed dialysis unit push — Ongole 80+ km travel తగ్గించడం.",
          bullets: [
            "2,000+ NTR Aarogyasri renal patients.",
            "Memorandum: 100-bed centre; interim 10-bed minimum.",
            "F >5 ppm mandals — Kanigiri, P.C. Palli, C.S. Puram, Pamur.",
          ],
          statLabel: "CKD deaths (2015 నుండి)",
          statValue: "345",
          status: "proposed",
          limitation: "Treatment without safe water new cases stop చేయదు.",
          source: "The Hindu 2017",
        },
        {
          id: "health-camps",
          title: "Health camps & screening",
          description: "Dental/skeletal fluorosis screening, CKD early detection — 2025 school awareness.",
          bullets: [
            "Stained teeth, joint deformities identify — transport funding need.",
            "NPPCF mandal severity mapping.",
            "Awareness needed; piped water structural fix.",
          ],
          statLabel: "తీవ్ర ప్రభావిత (జిల్లా)",
          statValue: "10,000+",
          status: "active",
          limitation: "Screening without piped supply symptoms treat — exposure కాదు.",
          source: "Deccan Chronicle 2025",
        },
      ],
    },
    permanent: {
      badge: "Master solution",
      project_name: "Veligonda & piped surface water",
      project_desc:
        "Veligonda Krishna (Nagarjunasagar) water upland tunnels/canals — Kanigiri, Markapuram, Giddalur. ₹1,290 Cr JJM Kanigiri/Kammavaripalli first — full connectivity unfunded.",
      stats: [
        { label: "JJM / surface-water", value: "₹1,290 Cr", tone: "amber" },
        { label: "Funding gap (2026)", value: "₹2,000 Cr", tone: "crimson" },
        { label: "Constituency ask", value: "₹450 Cr", tone: "blue" },
        { label: "Target", value: "Aug 2026", tone: "amber" },
      ],
      milestones_title: "Project components & status",
      milestones: [
        {
          id: "tunnel",
          name: "Veligonda tunnel & lining",
          detail: "Krishna water upland conveyance — decades-long bottleneck.",
          statusKey: "progress",
        },
        {
          id: "headworks",
          name: "Headworks & pumping",
          detail: "Nagarjunasagar-linked intake — funding releases gate flow.",
          statusKey: "pending",
        },
        {
          id: "canals",
          name: "Canal network & taps",
          detail: "Last-mile minimal — Ramatheertham/Nagarjunasagar partial cover only.",
          statusKey: "critical",
        },
        {
          id: "jjm-phase1",
          name: "Kanigiri JJM phase-one",
          detail: "₹1,290 Cr pipelines in progress — Kanigiri, Kammavaripalli first focus.",
          statusKey: "progress",
        },
      ],
      why_title: "2026 ఎందుకు",
      why_points: [
        "~354,000 residents still on geogenic F borewells each delayed month.",
        "WHO 1.5 mg/L; Kanigiri peak 8.60 mg/L — piped surface water only scale match.",
        "258 villages borewell ban (2026) — supply replacement కాదు.",
        "Fluorosis irreversible — intake stop required.",
      ],
      gaps_title: "ఇంకా లేనిది",
      gaps: [
        "₹450 Cr JJM Veligonda bridge — memorandum.",
        "100-bed nephrology vs 10-bed interim hub.",
        "Special Fluoride Zone P.C. Palli + Kanigiri.",
        "Non-slipping completion date — TOI 2026 ₹2,000 Cr gap.",
      ],
    },
    advocacy: {
      title: "MLA advocacy tracker",
      desc: "MLA ఉగ్ర నరసింహారెడ్డi tankers, RO, health camps, Veligonda/JJM funding — Hyderabad/Delhi pressure documented.",
      actions: [
        "2025 fluorosis/jaundice tanker/RO escalation.",
        "Veligonda completion appeals — Hans India 2026.",
        "Memorandum: fluoride zone, ₹450 Cr JJM, 100-bed dialysis.",
        "P.C. Palli high-F hamlet visits with health teams.",
      ],
    },
    compare: {
      title: "Interim vs permanent",
      headers: { aspect: "Aspect", interim: "Tankers & RO", permanent: "Veligonda / piped water" },
      rows: [
        { aspect: "Coverage", interim: "Selected hamlets", permanent: "Household tap network" },
        { aspect: "F source", interim: "Drinking bypass only", permanent: "Groundwater replacement" },
        { aspect: "Food/irrigation", interim: "High-F crop irrigation", permanent: "Safe source all uses" },
        { aspect: "Cost", interim: "Recurring tanker/RO", permanent: "Capital cost, long-term lower" },
        { aspect: "Health", interim: "Reactive CKD care", permanent: "Next-gen prevention" },
        { aspect: "Status", interim: "Active incomplete", permanent: "Under construction — gap" },
      ],
    },
    policy: {
      title: "Three policy asks",
      asks: [
        { title: "Special Fluoride Zone", desc: "P.C. Palli + Kanigiri disaster-scale funds.", tag: "Recognition" },
        { title: "₹450 Cr JJM grant", desc: "Veligonda connectivity gap.", tag: "Funding" },
        { title: "100-bed nephrology centre", desc: "Kanigiri/Podili — Ongole alone insufficient.", tag: "Healthcare" },
      ],
      memo_cta: "Full memorandum చదవండి",
    },
    sources_title: "Sources",
    sources: [
      {
        label: "Collector emergency measures — Kanigiri",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/collector-orders-emergency-measures-as-fluorosis-jaundice-hit-kanigiri-villages-1916862",
      },
      {
        label: "The Hindu — Kanigiri fluoride (2015)",
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
      {
        label: "Hans India — Veligonda remedy",
        url: "https://www.thehansindia.com/andhra-pradesh/veligonda-project-remedy-for-fluorosis-dinakar-966886",
      },
      {
        label: "TOI — ₹2,000 Cr gap",
        url: "https://timesofindia.indiatimes.com/city/vijayawada/veligonda-project-requires-rs-2000-crore-to-meet-aug-2026-deadline/articleshow/128124601.cms",
      },
    ],
    status_labels: { active: "సక్రియం", partial: "పాక్షికం", proposed: "ప్రతిపాదితం" },
    milestone_status: { critical: "క్లిష్టమైన ఖాళీ", progress: "పురోగతిలో", pending: "నిధుల కోసం వేచి" },
    cta_research: "శాస్త్రీయ ఆధారాలు",
    cta_dashboard: "డేటా డాష్‌బోర్డ్",
    home_teaser: "ట్యాంకర్లు, RO, Veligonda మైలురాళ్లు, విధాన అభ్యర్థనలు — ఫ్లోరైడ్ ఎక్స్‌పోజర్ ట్రాకర్.",
  },
  hi: {
    subtitle:
      "कनिगिरि टैंकर से alone जियोजenic फ्लोराइड नहीं हटा सकता। MLA उग्र नरसिंहारेड्डी/प्रशासन की वर्तमान राहत vs Veligonda/JJM piped surface water — स्रोतों और सीमाओं के साथ।",
    immediate_btn: "तत्काल राहत",
    permanent_btn: "स्थायी बुनियादी ढांचा",
    urgency_stat: "4 / दिन",
    urgency_label: "Veligonda प्रतीक्षा में अनुमानित नए dialysis cases (The Hindu 2017)",
    immediate: {
      title: "जमीन पर राहत",
      desc: "निर्वाचन क्षेत्र कार्य वास्तविक है — interim supply अपूर्ण; RO सिंचाई/food-chain exposure ठीक नहीं करता।",
      limitation_title: "अंतरिम उपाय क्यों काफी नहीं",
      limitation_points: [
        "40+ RO plants — फसलें अभी भी high-F borewell से — ex-MLA Dr. M. Ugra Narasimha Reddy BBC reporting।",
        "टैंकर सप्ताह में कुछ दिन — borewell F 24/7 — P.C. Palli 2025 collector orders।",
        "Dialysis Ongole केंद्रित; ~₹4,000/माह travel — 2,000+ NTR Aarogyasri।",
      ],
      measures: [
        {
          id: "tankers",
          title: "आपातकालीन टैंकर आपूर्ति",
          description: "MLA उग्र नरसिंहारेड्डी 50,000+ L/day — 2025 fluorosis/jaundice clusters के बाद district pressure।",
          bullets: ["Collector emergency RO + tankers (Deccan Chronicle 2025)।", "P.C. Palli, H.M. Padu, Veligandla — F 5–15 mg/L।", "सूखे में black-market tanker rates।"],
          statLabel: "दैनिक (रिपोर्ट)",
          statValue: "50,000+ L",
          status: "active",
          limitation: "हर household daily reach नहीं।",
          source: "Deccan Chronicle 2025",
        },
        {
          id: "ro",
          title: "सामुदायिक RO & filter plants",
          description: "12+ priority villages RO — 40+ district plants; कृषि उपयोग untreated।",
          bullets: ["RO drinking points only।", "Maintenance, power cuts uptime limit।", "School warnings + sanitation।"],
          statLabel: "Priority गाँव",
          statValue: "12+",
          status: "partial",
          limitation: "Safe drinking ≠ safe food chain।",
          source: "BBC Telugu / The Hindu",
        },
        {
          id: "dialysis",
          title: "CKD care & dialysis",
          description: "345 CKD deaths since 2015; Kanigiri 10-bed unit push — Ongole 80+ km travel कम।",
          bullets: ["2,000+ NTR Aarogyasri renal patients।", "Memorandum: 100-bed centre; interim 10-bed minimum।", "F >5 ppm mandals named।"],
          statLabel: "CKD deaths (2015 से)",
          statValue: "345",
          status: "proposed",
          limitation: "Treatment without safe water new cases रोकता नहीं।",
          source: "The Hindu 2017",
        },
        {
          id: "health-camps",
          title: "Health camps & screening",
          description: "Dental/skeletal fluorosis screening, CKD detection — 2025 school awareness।",
          bullets: ["Stained teeth, deformities identify — transport funding need।", "NPPCF mandal mapping।", "Awareness needed; piped water structural fix।"],
          statLabel: "गंभीर प्रभावित (जिला)",
          statValue: "10,000+",
          status: "active",
          limitation: "Screening without piped supply exposure fix नहीं।",
          source: "Deccan Chronicle 2025",
        },
      ],
    },
    permanent: {
      badge: "Master solution",
      project_name: "Veligonda & piped surface water",
      project_desc: "Veligonda Krishna (Nagarjunasagar) water upland tunnels/canals — Kanigiri belt. ₹1,290 Cr JJM Kanigiri/Kammavaripalli first — full connectivity unfunded।",
      stats: [
        { label: "JJM / surface-water", value: "₹1,290 Cr", tone: "amber" },
        { label: "Funding gap (2026)", value: "₹2,000 Cr", tone: "crimson" },
        { label: "Constituency ask", value: "₹450 Cr", tone: "blue" },
        { label: "Target", value: "Aug 2026", tone: "amber" },
      ],
      milestones_title: "Project components & status",
      milestones: [
        { id: "tunnel", name: "Veligonda tunnel & lining", detail: "Krishna water upland conveyance — decades bottleneck।", statusKey: "progress" },
        { id: "headworks", name: "Headworks & pumping", detail: "Nagarjunasagar intake — funding gates flow।", statusKey: "pending" },
        { id: "canals", name: "Canal network & taps", detail: "Last-mile minimal — partial schemes only।", statusKey: "critical" },
        { id: "jjm-phase1", name: "Kanigiri JJM phase-one", detail: "₹1,290 Cr pipelines in progress।", statusKey: "progress" },
      ],
      why_title: "2026 क्यों",
      why_points: [
        "~354,000 residents on geogenic F borewells each delayed month।",
        "WHO 1.5 mg/L; Kanigiri peak 8.60 mg/L — piped surface water only scale match।",
        "258 villages borewell ban (2026) — supply replacement नहीं।",
        "Fluorosis irreversible — intake stop required।",
      ],
      gaps_title: "अभी क्या missing",
      gaps: [
        "₹450 Cr JJM Veligonda bridge — memorandum।",
        "100-bed nephrology vs 10-bed interim hub।",
        "Special Fluoride Zone P.C. Palli + Kanigiri।",
        "Non-slipping deadline — TOI 2026 ₹2,000 Cr gap।",
      ],
    },
    advocacy: {
      title: "MLA advocacy tracker",
      desc: "MLA उग्र नरसिंहारेड्डी tankers, RO, health camps, Veligonda/JJM funding — Hyderabad/Delhi pressure documented।",
      actions: [
        "2025 fluorosis/jaundice tanker/RO escalation।",
        "Veligonda completion appeals — Hans India 2026।",
        "Memorandum: fluoride zone, ₹450 Cr JJM, 100-bed dialysis।",
        "P.C. Palli high-F hamlet visits।",
      ],
    },
    compare: {
      title: "Interim vs permanent",
      headers: { aspect: "पहलू", interim: "Tankers & RO", permanent: "Veligonda / piped water" },
      rows: [
        { aspect: "Coverage", interim: "Selected hamlets", permanent: "Household tap network" },
        { aspect: "F source", interim: "Drinking bypass only", permanent: "Groundwater replacement" },
        { aspect: "Food/irrigation", interim: "High-F crop irrigation", permanent: "Safe source all uses" },
        { aspect: "Cost", interim: "Recurring tanker/RO", permanent: "Capital cost, long-term lower" },
        { aspect: "Health", interim: "Reactive CKD care", permanent: "Next-gen prevention" },
        { aspect: "Status", interim: "Active incomplete", permanent: "Under construction — gap" },
      ],
    },
    policy: {
      title: "Three policy asks",
      asks: [
        { title: "Special Fluoride Zone", desc: "P.C. Palli + Kanigiri disaster-scale funds।", tag: "Recognition" },
        { title: "₹450 Cr JJM grant", desc: "Veligonda connectivity gap।", tag: "Funding" },
        { title: "100-bed nephrology centre", desc: "Kanigiri/Podili — Ongole alone insufficient।", tag: "Healthcare" },
      ],
      memo_cta: "Full memorandum पढ़ें",
    },
    sources_title: "Sources",
    sources: [
      { label: "Collector emergency — Kanigiri", url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/collector-orders-emergency-measures-as-fluorosis-jaundice-hit-kanigiri-villages-1916862" },
      { label: "The Hindu — Kanigiri (2015)", url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece" },
      { label: "The Hindu — CKD (2017)", url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece" },
      { label: "Deccan Chronicle (2025)", url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150" },
      { label: "Hans India — Veligonda", url: "https://www.thehansindia.com/andhra-pradesh/veligonda-project-remedy-for-fluorosis-dinakar-966886" },
      { label: "TOI — ₹2,000 Cr gap", url: "https://timesofindia.indiatimes.com/city/vijayawada/veligonda-project-requires-rs-2000-crore-to-meet-aug-2026-deadline/articleshow/128124601.cms" },
    ],
    status_labels: { active: "सक्रिय", partial: "आंशिक", proposed: "प्रस्तावित" },
    milestone_status: { critical: "गंभीर अंतर", progress: "प्रगति में", pending: "निधि लंबित" },
    cta_research: "वैज्ञानिक साक्ष्य",
    cta_dashboard: "डेटा डैशबोर्ड",
    home_teaser: "टैंकर, RO, Veligonda मील के पत्थर, नीति माँगें — फ्लोराइड एक्सपोज़र ट्रैकर।",
  },
};

export function getSolutionsCopy(lang: Language): SolutionsCopy {
  return solutionsPageCopy[lang] ?? solutionsPageCopy.en;
}
