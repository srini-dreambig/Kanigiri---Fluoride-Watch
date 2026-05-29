import type { Language } from "../translations";

export type ResearchCitation = {
  id: string;
  title: string;
  source: string;
  year: string;
  url: string;
  type: "journal" | "news" | "government" | "review";
  highlights: string[];
};

export type ResearchArticle = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  url: string;
};

export type ResearchCopy = {
  subtitle: string;
  geology_title: string;
  geology_desc: string;
  geology_evidence: { text: string; source: string }[];
  health_title: string;
  health_desc: string;
  health_risks: { text: string; source: string }[];
  standards_title: string;
  standards: { label: string; value: string }[];
  articles_heading: string;
  articles_sub: string;
  citations_heading: string;
  citations_sub: string;
  read_article: string;
  access_publication: string;
  verified_title: string;
  verified_body: string;
  citations: ResearchCitation[];
  articles: ResearchArticle[];
};

type ResearchPageBase = Omit<ResearchCopy, "citations" | "articles">;
type ResearchPageStore = {
  en: ResearchPageBase & Pick<ResearchCopy, "citations" | "articles">;
  te: ResearchPageBase;
  hi: ResearchPageBase;
};

export const researchPageCopy: ResearchPageStore = {
  en: {
    subtitle:
      "Peer-reviewed studies, government hydrogeology reports, and verified journalism on Kanigiri and western Prakasam fluorosis — with direct links and extracted facts.",
    geology_title: "Granite Belt Geochemistry",
    geology_desc:
      "Western Prakasam sits on hard-rock granite and gneiss terrain. Fluoride enters groundwater through weathering of fluorite, apatite, biotite, and related minerals — accelerated where soils are alkaline, calcium-poor, and bicarbonate-rich, and where drought forces deeper, longer-residence borewell pumping.",
    geology_evidence: [
      {
        text: "India’s first recorded endemic skeletal fluorosis was reported in 1937 from Podili and Darsi (now Prakasam), with drinking water often only 1–3 ppm F — showing Kanigiri-belt geology can harm even below extreme concentrations.",
        source: "Shortt et al. 1937; BBC Telugu / NPPCF (2018)",
      },
      {
        text: "Markapur (adjacent Kanigiri division) groundwater fluoride ranges 0.4–5.8 mg/L (mean 1.98 mg/L); 54 sampled locations exceeded the WHO upper limit.",
        source: "Adimalla & Qian, Data in Brief / PMC (2018)",
      },
      {
        text: "Prakasam hosts ~195 fluoride-affected villages; coastal Chirala–Ongole samples show F from 0.6–1.8 mg/L, with alkalinity (pH, HCO₃) driving mineral dissolution.",
        source: "Narasimha Rao et al., Applied Water Science (2015)",
      },
      {
        text: "District aquifer mapping (272 samples): fluoride 0.08–4 mg/L; 38% of samples above permissible limits; PC Palli, Pamur, Kurichedu among high-EC mandals.",
        source: "CGWB Aquifer Mapping Report, Prakasam (2023)",
      },
      {
        text: "Low calcium in granite-rich rocks plus high bicarbonate is cited as the main geogenic driver across Kanigiri, Giddalur, Chimakurthi, and Kondapi mandals.",
        source: "Deccan Chronicle (2025); district reporting",
      },
      {
        text: "Union Jal Shakti groundwater quality report (2024): Prakasam samples recorded fluoride above 15 mg/L alongside nitrate, iron, and arsenic.",
        source: "Deccan Chronicle citing CGWB/Jal Shakti (2025)",
      },
    ],
    health_title: "Documented Health Burden",
    health_desc:
      "WHO recommends ≤1.5 mg/L fluoride in drinking water. Kanigiri constituency samples have reached 8.60 mg/L. NPPCF officials report >5 ppm in Kanigiri, P.C. Palli, Chandrasekarapuram (C.S. Puram), and Pamur — correlating with dental and skeletal fluorosis and fluoride-linked chronic kidney disease.",
    health_risks: [
      {
        text: "Ground Water Department sources cited 8.60 mg/L in Kanigiri constituency vs WHO 1.5 mg/L — dental and skeletal fluorosis widespread; at least one affected person per household reported in field villages.",
        source: "The Hindu, Kanigiri (2015)",
      },
      {
        text: "Fluoride severe in 48 of 56 mandals; >1,100 villages with high-F groundwater; fluoride-induced CKD concentrated where F >5 ppm including Kanigiri belt.",
        source: "The Hindu / NPPCF Dr. Ch.V. Satyanarayana (2017)",
      },
      {
        text: "345 CKD deaths since Jan 2015; 2,000+ patients on NTR Aarogyasri; patients travel to Ongole for dialysis — demand for centres at Kanigiri or Podili.",
        source: "The Hindu (2017)",
      },
      {
        text: "10,000+ people seriously affected across 730 villages; well/borewell F typically 2–7 ppm; crops irrigated with F-rich water accumulate fluoride.",
        source: "Deccan Chronicle (2025)",
      },
      {
        text: "Cross-sectional survey (2016–17) in Kanigiri, Giddalur, Chimakurthi, Kondapi, Kandukur mandals recorded GI symptoms among fluorosis-exposed males aged 40–60.",
        source: "IJEAB epidemiological study (2017)",
      },
      {
        text: "FNAC and thyroid-function study in Prakasam fluorosis zone found significant cytological thyroid alterations (Hashimoto’s, goitre) linked to elevated F intake.",
        source: "IJRM, Saveetha/RIMS Ongole (2019)",
      },
      {
        text: "Kanigiri town groundwater station scored WQI >100 — classified unfit even for domestic use (Ongole and Kandukur also exceeded limit).",
        source: "NEPT journal, Prakasam WQI study",
      },
    ],
    standards_title: "Reference Limits",
    standards: [
      { label: "WHO (drinking water)", value: "≤ 1.5 mg/L F⁻" },
      { label: "BIS IS 10500 (desirable / max)", value: "1.0 / 1.5 mg/L" },
      { label: "Kanigiri constituency (reported peak)", value: "8.60 mg/L" },
      { label: "Prakasam mandals above 5 ppm (NPPCF)", value: "Kanigiri, P.C. Palli, C.S. Puram, Pamur" },
      { label: "District villages fluoride-affected (2025 reporting)", value: "700+ villages; 730 cited with 10,000+ affected" },
    ],
    articles_heading: "Research Insights & Media Coverage",
    articles_sub: "Verified reports",
    citations_heading: "Citation Database",
    citations_sub: "Academic & official sources",
    read_article: "Read full article",
    access_publication: "Access full publication",
    verified_title: "Verified public-health crisis",
    verified_body:
      "Independent geology papers, NPPCF district data, CGWB aquifer mapping, and decade-spanning journalism converge on the same facts: Kanigiri’s crisis is geogenic, measurable, chronic, and untreated without surface-water replacement — not a local rumour.",
    citations: [
      {
        id: "markapur-pmc",
        title: "Geochemical behavior of fluoride-rich groundwater in Markapur, Andhra Pradesh",
        source: "Data in Brief / PMC",
        year: "2018",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5996165/",
        type: "journal",
        highlights: [
          "Fluoride 0.4–5.8 mg/L across Markapur region (Kanigiri division).",
          "54 locations above WHO limit; alkaline weathering drives leaching.",
          "Maps F⁻ distribution across western Prakasam hard-rock aquifer.",
        ],
      },
      {
        id: "applied-water-science",
        title: "Fluoride occurrence in the groundwater in a coastal region of Andhra Pradesh, India",
        source: "Applied Water Science (Springer)",
        year: "2015",
        url: "https://link.springer.com/article/10.1007/s13201-015-0338-3",
        type: "journal",
        highlights: [
          "~195 F-affected villages in Prakasam; first India endemic case 1937 in district.",
          "Alkalinity and HCO₃⁻ control F dissolution from country rock.",
          "Framework applicable to granite-belt mandals including Kanigiri uplands.",
        ],
      },
      {
        id: "jal-shakti-2024",
        title: "Annual groundwater quality reporting — Prakasam district (Jal Shakti / CGWB)",
        source: "Deccan Chronicle citing CGWB",
        year: "2024–25",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
        type: "government",
        highlights: [
          "District samples recorded fluoride above 15 mg/L alongside nitrate, iron, arsenic.",
          "700+ villages affected; 10,000+ people seriously impacted per district reporting.",
          "₹1,290 crore piped surface-water plan — Kanigiri constituency in phase one.",
        ],
      },
      {
        id: "ijeab-gi",
        title: "Endemic Fluorosis and Occurrence of Gastrointestinal Disorders in Prakasam District",
        source: "IJEAB",
        year: "2017",
        url: "https://ijeab.com/upload_document/issue_files/35%20IJEAB-MAR-2017-42-Endemic%20Fluorosis%20and%20Occurrence%20Gastrointestinal%20Disorders.pdf",
        type: "journal",
        highlights: [
          "Household survey across Kanigiri, Giddalur, Chimakurthi, Kondapi, Kandukur.",
          "300 subjects per selected village; GI symptoms tracked in high-F areas.",
          "Links environmental fluorosis burden to digestive-tract complaints.",
        ],
      },
      {
        id: "ijrms-thyroid",
        title: "Cytomorphological alterations of thyroid gland consequent upon fluorosis",
        source: "International Journal of Research in Medical Sciences",
        year: "2019",
        url: "https://www.msjonline.org/index.php/ijrms/article/view/5905",
        type: "journal",
        highlights: [
          "Subjects from highly vulnerable Prakasam fluorosis zone.",
          "FNAC showed Hashimoto’s, goitre, follicular lesions with hypothyroid pattern.",
          "RIMS Ongole co-authorship — district clinical corroboration.",
        ],
      },
      {
        id: "nept-wqi",
        title: "Study on Groundwater Quality in Prakasam District and Its Suitability for Drinking",
        source: "NEPT Journal",
        year: "n.d.",
        url: "https://neptjournal.com/upload-images/NL-35-30-(30)B-1657.pdf",
        type: "journal",
        highlights: [
          "Weighted Arithmetic WQI applied across district stations.",
          "Kanigiri, Ongole, Kandukur scored WQI >100 — unfit for domestic use.",
          "High TDS, hardness, nitrates contribute alongside geogenic fluoride.",
        ],
      },
      {
        id: "springer-mar",
        title: "Risk of Fluoride-Rich Groundwater on Human Health: MAR in Hard Rock Terrain, South India",
        source: "Natural Resources Research (Springer)",
        year: "2019",
        url: "https://link.springer.com/article/10.1007/s11053-019-09592-4",
        type: "journal",
        highlights: [
          "Apatite, fluorite, biotite in gneiss release F via water–rock interaction.",
          "Hazard index exceeded for 41–74% of samples depending on season/demographic.",
          "Managed aquifer recharge lowered F below 1.5 mg/L near check-dam downstream.",
        ],
      },
      {
        id: "ijarcs-review",
        title: "Health impacts of fluoride — endemic skeletal fluorosis first report Podili/Darsi/Kanigiri (1937)",
        source: "IJARCS review literature",
        year: "2013",
        url: "https://www.arcjournals.org/pdfs/ijarcs/v3-i3/3.pdf",
        type: "review",
        highlights: [
          "First endemic skeletal fluorosis in India documented in Kanigiri-belt areas.",
          "Neurological manifestations described at F levels often 1–3 ppm.",
          "Nutrition (calcium, vitamin C) modulates severity — relevant to poor rural diets.",
        ],
      },
    ],
    articles: [
      {
        id: "bbc-telugu",
        title: "Prakasam fluorosis: ‘Life does not flourish… death does not pity’",
        author: "Varikuti Ramakrishna",
        publisher: "BBC News Telugu",
        date: "June 2018",
        category: "Investigative",
        excerpt:
          "India’s first fluorosis case was recorded here in 1937. NPPCF says fluoride affects 46 of 56 mandals; levels run 1.5–10 mg/L with Kanigiri among worst-hit.",
        content:
          "BBC’s field report documents generational skeletal fluorosis, migration of youth, and lack of organised advocacy compared to Nalgonda. NPPCF medical officer Dr. Ch.V. Satyanarayana confirms the 1937 Podili/Darsi case and names Kanigiri, Markapuram, Giddalur, Darsi, and Chimakurthi as severely affected. The piece notes promised fluoride-free Andhra targets and Veligonda delays — still relevant years later.",
        url: "https://www.bbc.com/telugu/india-44099603",
      },
      {
        id: "dc-2025",
        title: "Prakasam still battles fluoride crisis",
        author: "Staff Reporter",
        publisher: "Deccan Chronicle",
        date: "March 2025",
        category: "District report",
        excerpt:
          "700+ villages contaminated; Jal Shakti 2024 report cites F above 15 mg/L; ₹1,290 crore surface-water plan targets Kanigiri constituency in phase one.",
        content:
          "Deccan Chronicle synthesises district administration plans, CGWB 2024 quality findings, and ground reality: 10,000+ seriously affected, crop uptake of fluoride from irrigated borewell water, and continued dependence on deep wells in Kanigiri, Giddalur, Chimakurthi, Kondapi, Darsi, and Kandukur. Retired physician Dr. Ramana Reddy notes persistent early dental fluorosis despite some generational improvement.",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
      },
      {
        id: "hindu-2015",
        title: "High fluoride content in water takes a toll",
        author: "Kommuri Srinivas",
        publisher: "The Hindu",
        date: "May 2015",
        category: "Field report",
        excerpt:
          "Kanigiri constituency fluoride up to 8.60 mg/L; 32 renal deaths in six months in Ayyavaripalli; 100+ villagers on dialysis in Kandukur, Ongole, Guntur.",
        content:
          "Ground-level reporting from Kanigiri documents stained teeth in children, joint deformities, migration of working-age adults, and unaffordable transplant/dialysis costs. Ex-MLA Dr. M. Ugra Narasimha Reddy notes 40+ RO plants had limited impact because food is grown with the same contaminated water. Ramatheertham and Nagarjunasagar supplies still do not cover the constituency.",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece",
      },
      {
        id: "hindu-2017-ckd",
        title: "Fluoride problem accentuates renal diseases in Prakasam",
        author: "The Hindu Bureau",
        publisher: "The Hindu",
        date: "January 2017",
        category: "Medical",
        excerpt:
          "NPPCF: fluoride-induced CKD in Kanigiri, P.C. Palli, C.S. Puram, Pamur where F >5 ppm; patients demand dialysis centre at Kanigiri or Podili.",
        content:
          "Nephrologists at Sanghamitra Hospital and RIMS Ongole describe non-diabetic kidney failure linked to F toxicity. District data: 345 CKD deaths since Jan 2015. Named high-burden villages include Bommireddipalle, Vengalayapalli, Neredepalli, and others across the western belt. NPPCF recommends calcium/magnesium-rich diets to aid F excretion — insufficient without safe water.",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
      },
      {
        id: "markapur-study-summary",
        title: "Assessment of fluoride contamination and distribution — Markapur region, Prakasam",
        author: "N. Adimalla & M. Qian",
        publisher: "Data in Brief / ScienceDirect",
        date: "2018",
        category: "Scientific study",
        excerpt:
          "Peer-reviewed hydrochemical dataset for western Prakasam: F vs pH, HCO₃, Na; 54 of sampled wells unsafe by WHO standards.",
        content:
          "Open-access data article underpinning Markapur geochemistry paper. Gibbs diagrams show rock-weathering dominance; evaporation concentrates ions in semi-arid uplands matching Kanigiri’s hydrogeologic setting. Authors map west-central Markapur as highest-F zone — contiguous with Kanigiri division geology.",
        url: "https://www.sciencedirect.com/science/article/pii/S2352340918302130",
      },
      {
        id: "ijeab-field",
        title: "GI disorders in fluorosis-infested villages — five-mandal survey",
        author: "IJEAB field epidemiology team",
        publisher: "International Journal of Environment, Agriculture and Biotechnology",
        date: "2017",
        category: "Epidemiology",
        excerpt:
          "Kanigiri mandal included in 2016–17 cross-sectional survey of 300 males (40–60) per village across western Prakasam.",
        content:
          "Researchers digitised all 56 mandal boundaries, selected one high-F village per mandal including Kanigiri, and recorded gastrointestinal symptom prevalence with community consent via sarpanch outreach. Complements dental/skeletal data with digestive-tract burden often under-reported in media coverage.",
        url: "https://ijeab.com/upload_document/issue_files/35%20IJEAB-MAR-2017-42-Endemic%20Fluorosis%20and%20Occurrence%20Gastrointestinal%20Disorders.pdf",
      },
    ],
  },
  te: {
    subtitle:
      "కనిగిరి, పశ్చిమ ప్రకాశం ఫ్లోరోసిస్‌పై సమకాలీన పరిశోధన, ప్రభుత్వ జలశాస్త్ర నివేదికలు, నిర్ధారిత పత్రికా నివేదికలు — నేరుగా లింక్‌లు మరియు సంగ్రహిత వాస్తవాలు.",
    geology_title: "గ్రానైట్ బెల్ట్ జియోకెమిస్ట్రీ",
    geology_desc:
      "పశ్చిమ ప్రకాశం కఠిన శిలా గ్రానైట్/నీస్ ప్రాంతంలో ఉంది. ఫ్లోరైట్, అపటైట్, బయోటైట్ వాతనం ద్వారా ఫ్లోరైడ్ భూగర్భ జలంలోకి ప్రవేశిస్తుంది — క్షార నేల, తక్కువ కాల్షియం, ఎక్కువ బైకార్బొనేట్, కరువు వల్ల లోతైన బోర్‌లు నీటిని ఎక్కువ సమయం నిల్వ చేస్తే వేగం పెరుగుతుంది.",
    geology_evidence: [
      {
        text: "1937లో పొదిలి, దర్శి (ఇప్పుడు ప్రకాశం) నుండి భారతదేశంలో మొదటి అస్థి ఫ్లోరోసిస్ నమోదు — తాగునీటిలో 1–3 ppm F ఉన్నప్పుడు కూడా కనిగిరి బెల్ట్ భూగర్భ శాస్త్రం హాని చేయగలదు.",
        source: "Shortt et al. 1937; BBC తెలుగు / NPPCF (2018)",
      },
      {
        text: "మార్కాపురం (కనిగిరి డివిజన్ పక్కన) భూగర్భ జల F: 0.4–5.8 mg/L (సగటు 1.98); 54 స్థలాలు WHO పరిమితి మించి.",
        source: "Adimalla & Qian, PMC (2018)",
      },
      {
        text: "ప్రకాశంలో ~195 F-బాధిత గ్రామాలు; Chirala–Ongole తీర ప్రాంతంలో 0.6–1.8 mg/L — క్షారత్వం (pH, HCO₃) ఖనిజ కరగడాన్ని నడిపిస్తుంది.",
        source: "Applied Water Science (2015)",
      },
      {
        text: "జిల్లా aquifer మ్యాపping (272 నమూనాలు): F 0.08–4 mg/L; 38% అనుమతి మించి; PC Palli, Pamur, Kurichedu ఎక్కువ EC.",
        source: "CGWB Prakasam (2023)",
      },
      {
        text: "గ్రానైట్‌లో తక్కువ కాల్షియం + ఎక్కువ బైకార్బొనేట్ — కనిగిరి, గిద్దలూరు, చీమకుర్తి, Kondapi మండలాల ప్రధాన కారణం.",
        source: "Deccan Chronicle (2025)",
      },
      {
        text: "జal Shakti 2024 నివేదిక: ప్రకాశం నమూనాలలో F 15 mg/L మించి; నైట్రేట్, ఇనుము, arsenic కూడా.",
        source: "Deccan Chronicle (2025)",
      },
    ],
    health_title: "నమోదైన ఆరోగ్య భారం",
    health_desc:
      "WHO: తాగునీటిలో F ≤1.5 mg/L. కనిగిరి నియోజకవర్గంలో 8.60 mg/L నమోదు. NPPCF: Kanigiri, P.C. Palli, C.S. Puram, Pamur లో >5 ppm — దంత/అస్థి ఫ్లోరోసిస్, F-కి లింక్ అయిన CKD.",
    health_risks: [
      {
        text: "భూగర్భ జల శాఖ: కనిగిరి 8.60 mg/L vs WHO 1.5; ప్రతి ఇంట్లో కనీసం ఒకరు ఫ్లోరోసిస్ — The Hindu 2015.",
        source: "The Hindu (2015)",
      },
      {
        text: "56 మండలాలలో 48 తీవ్ర; 1,100+ గ్రామాలు అధిక F; Kanigiri బెల్ట్‌లో F-CKD.",
        source: "NPPCF / The Hindu (2017)",
      },
      {
        text: "2015 జనvári నుండి 345 CKD మరణాలు; 2,000+ NTR Aarogyasri; Kanigiri/Podili డయాలసిస్ కేంద్రం కోరిక.",
        source: "The Hindu (2017)",
      },
      {
        text: "730 గ్రామాల్లో 10,000+ తీవ్ర బాధ; బావుల F 2–7 ppm; పంటల్లో F సంచయం.",
        source: "Deccan Chronicle (2025)",
      },
      {
        text: "2016–17: Kanigiri, Giddalur, Chimakurthi, Kondapi, Kandukur — GI లక్షణాల సervey.",
        source: "IJEAB (2017)",
      },
      {
        text: "ప్రకాశం F-జోన్‌లో thyroid FNAC — Hashimoto’s, goitre; hypothyroid నమూనా.",
        source: "IJRM (2019)",
      },
      {
        text: "Kanigiri WQI >100 — గృహ వినియోగానికి కూడా అనుకూలం కాదు.",
        source: "NEPT journal",
      },
    ],
    standards_title: "సూచన పరిమితులు",
    standards: [
      { label: "WHO (తాగునీరు)", value: "≤ 1.5 mg/L F⁻" },
      { label: "BIS IS 10500", value: "1.0 / 1.5 mg/L" },
      { label: "కనిగిరి (నమోదు గరిష్ట)", value: "8.60 mg/L" },
      { label: ">5 ppm మండలాలు", value: "Kanigiri, P.C. Palli, C.S. Puram, Pamur" },
      { label: "F-బాధిత గ్రామాలు (2025)", value: "700+; 10,000+ ప్రభావిత" },
    ],
    articles_heading: "పరిశోధన & మీడియా",
    articles_sub: "నిర్ధారిత నివేదికలు",
    citations_heading: "Citation డేటాబేస్",
    citations_sub: "శాస్త్రీయ & అధికారిక మూలాలు",
    read_article: "పూర్తి వ్యాసం చదవండి",
    access_publication: "ప్రచురణ చూడండి",
    verified_title: "నిర్ధారిత ప్రజారోగ్య సంక్షోభం",
    verified_body:
      "స్వతంత్ర భూగర్భ శాస్త్ర పత్రాలు, NPPCF జిల్లా డేటా, CGWB మ్యాపింగ్, దశాబ్దాల పత్రికా నివేదికలు — అన్నీ ఒకే వాస్తవాన్ని చెబుతున్నాయి: కనిగిరి సంక్షోభం భూగర్భ-జన్యం, కొలవదగినది, దీర్ఘకాలిక — ఉపరితల నీరు లేకుండా పరిష్కారం లేదు.",
  },
  hi: {
    subtitle:
      "कनिगिरि और पश्चिम प्रकाशम फ्लोरोसिस पर समकालीन शोध, सरकारी जल-भूविज्ञान रिपोर्ट, और सत्यापित पत्रकारिता — सीधे लिंक और निकाले गए तथ्य।",
    geology_title: "ग्रेनाइट बेल्ट भू-रसायन",
    geology_desc:
      "पश्चिम प्रकाशम कठोर चट्टानी ग्रेनाइट/ग्नीस क्षेत्र में है। फ्लोराइट, एपेटाइट, बायोटाइट का अपक्षय फ्लोराइड को भूजल में ले जाता है — क्षारीय मिट्टी, कम कैल्शियम, उच्च बाइकार्बोनेट, और सूखे में गहरे बोरवेल से तेज होता है।",
    geology_evidence: [
      {
        text: "1937 में Podili/Darsi (अब प्रकाशम) में भारत का पहला स्थानिक कंकाल फ्लोरोसिस — 1–3 ppm F में भी कनिगिरि बेल्ट हानिकारक।",
        source: "Shortt et al. 1937; BBC Telugu / NPPCF (2018)",
      },
      {
        text: "Markapur (कनिगिरि division) भूजल F: 0.4–5.8 mg/L (औसत 1.98); 54 स्थान WHO सीमा से ऊपर।",
        source: "Adimalla & Qian, PMC (2018)",
      },
      {
        text: "प्रकाशम में ~195 F-प्रभावित गाँव; तटीय Chirala–Ongole में 0.6–1.8 mg/L — क्षारता (pH, HCO₃) खनिज विघटन।",
        source: "Applied Water Science (2015)",
      },
      {
        text: "जिला aquifer mapping (272 नमूने): F 0.08–4 mg/L; 38% अनुमत सीमा से ऊपर; PC Palli, Pamur, Kurichedu उच्च EC।",
        source: "CGWB Prakasam (2023)",
      },
      {
        text: "ग्रेनाइट में कम Ca + उच्च bicarbonate — Kanigiri, Giddalur, Chimakurthi, Kondapi का मुख्य कारण।",
        source: "Deccan Chronicle (2025)",
      },
      {
        text: "Jal Shakti 2024: प्रकाशम नमूनों में F 15 mg/L से ऊपर; nitrate, iron, arsenic भी।",
        source: "Deccan Chronicle (2025)",
      },
    ],
    health_title: "दर्ज स्वास्थ्य बोझ",
    health_desc:
      "WHO: पेय जल में F ≤1.5 mg/L। कनिगिरि निर्वाचन क्षetr में 8.60 mg/L दर्ज। NPPCF: Kanigiri, P.C. Palli, C.S. Puram, Pamur में >5 ppm — दंत/कंकाल फ्लोरोसिस, F-जुड़ा CKD।",
    health_risks: [
      {
        text: "भूजल विभाग: कनिगिरि 8.60 mg/L बनाम WHO 1.5; हर घर में कम से कम एक प्रभावित — The Hindu 2015।",
        source: "The Hindu (2015)",
      },
      {
        text: "56 में से 48 mandals गंभीर; 1,100+ गाँव उच्च F; Kanigiri belt में F-CKD।",
        source: "NPPCF / The Hindu (2017)",
      },
      {
        text: "जन 2015 से 345 CKD मृत्यु; 2,000+ NTR Aarogyasri; Kanigiri/Podili डायलिसिस केंद्र की माँग।",
        source: "The Hindu (2017)",
      },
      {
        text: "730 गाँवों में 10,000+ गंभीर प्रभावित; कुएँ F 2–7 ppm; फसलों में F संचय।",
        source: "Deccan Chronicle (2025)",
      },
      {
        text: "2016–17: Kanigiri, Giddalur, Chimakurthi, Kondapi, Kandukur — GI लक्षण सर्वे।",
        source: "IJEAB (2017)",
      },
      {
        text: "प्रकाशम F-zone में thyroid FNAC — Hashimoto's, goitre; hypothyroid पैटर्न।",
        source: "IJRM (2019)",
      },
      {
        text: "Kanigiri WQI >100 — घरेलू उपयोग के लिए भी अनुपयुक्त।",
        source: "NEPT journal",
      },
    ],
    standards_title: "संदर्भ सीमाएँ",
    standards: [
      { label: "WHO (पेय जल)", value: "≤ 1.5 mg/L F⁻" },
      { label: "BIS IS 10500", value: "1.0 / 1.5 mg/L" },
      { label: "कनिगिरि (दर्ज चरम)", value: "8.60 mg/L" },
      { label: ">5 ppm mandals", value: "Kanigiri, P.C. Palli, C.S. Puram, Pamur" },
      { label: "F-प्रभावित गाँव (2025)", value: "700+; 10,000+ प्रभावित" },
    ],
    articles_heading: "शोध और मीडिया",
    articles_sub: "सत्यापित रिपोर्ट",
    citations_heading: "उद्धरण डेटाबेस",
    citations_sub: "शैक्षणिक और आधिकारिक स्रोत",
    read_article: "पूरा लेख पढ़ें",
    access_publication: "प्रकाशन देखें",
    verified_title: "सत्यापित जन-स्वास्थ्य संकट",
    verified_body:
      "स्वतंत्र भू-विज्ञान पत्र, NPPCF जिला डेटा, CGWB mapping, और दशकों की पत्रकारिता एक ही बात कहती है: कनिगिरi का संकट भू-जनित, मापने योग्य, chronic है — surface water के बिना समाधान नहीं।",
  },
};

const citationLocales: Record<
  Language,
  Record<string, Pick<ResearchCitation, "title" | "source" | "highlights">>
> = {
  en: {},
  te: {
    "markapur-pmc": {
      title: "మార్కాపురం ప్రాంతంలో ఫ్లోరైడ్-సమృద్ధ భూగర్భ జలం యొక్క జియోకెమికal ప్రవర్తన",
      source: "Data in Brief / PMC",
      highlights: [
        "మార్కాపురం (కనిగిరి డివిజన్) భూగర్భ జలంలో F 0.4–5.8 mg/L.",
        "54 స్థలాలు WHO పరిమితి మించి; క్షార వాతనం F ని విడుదల చేస్తుంది.",
        "పశ్చిమ ప్రకాశం hard-rock aquifer లో F⁻ ప分布 మ్యాప్.",
      ],
    },
    "applied-water-science": {
      title: "ఆంధ్ర ప్రదేశ్ తీర ప్రాంత భూగర్భ జలంలో ఫ్లోరైడ్ ఉనికి",
      source: "Applied Water Science (Springer)",
      highlights: [
        "ప్రకాశంలో ~195 F-బాధిత గ్రామాలు; 1937లో దేశంలో మొదటి ఎండమిక్ కేసు.",
        "క్షారత్వం, HCO₃⁻ country rock నుండి F కరగడాన్ని నియంత్రిస్తుంది.",
        "కనిగిరి uplands సహా granite-belt మండలాలకు వర్తిస్తుంది.",
      ],
    },
    "jal-shakti-2024": {
      title: "వార్షిక భూగర్భ జల నాణ్యత నివేదిక — ప్రకాశం జిల్లా (Jal Shakti / CGWB)",
      source: "Deccan Chronicle / CGWB",
      highlights: [
        "జిల్లా నమూనాలలో F 15 mg/L మించి; నైట్రేట్, ఇనుము, arsenic కూడా.",
        "700+ గ్రామాలు; 10,000+ మంది తీవ్ర ప్రభావిత.",
        "₹1,290 కోట్ల surface-water పథకం — కనిగిరి phase one.",
      ],
    },
    "ijeab-gi": {
      title: "ప్రకాశం జిల్లాలో ఎండమిక ఫ్లోరోసిస్ మరియు జీర్ణ సంబంధ వ్యాధులు",
      source: "IJEAB",
      highlights: [
        "కనిగిరి, గిద్దలూరు, చీమకుర్తి, Kondapi, Kandukur గ్రామాల household survey.",
        "ప్రతి గ్రామంలో 300 మంది; అధిక F ప్రాంతాలలో GI లక్షణాలు.",
        "పర్యావరణ ఫ్లోరోసిస్ భారాన్ని జీర్ణ మార్గ complaintsకు linc చేస్తుంది.",
      ],
    },
    "ijrms-thyroid": {
      title: "ఫ్లోరోసిస్ వల్ల thyroid gland cytomorphological మార్పులు",
      source: "International Journal of Research in Medical Sciences",
      highlights: [
        "ప్రకాశం ఫ్లోరోసిస్ zone నుండి అత్యంత బలహీన ప్రాంత subjects.",
        "FNAC: Hashimoto’s, goitre, follicular lesions — hypothyroid pattern.",
        "RIMS Ongole co-author — జిల్లా clinical corroboration.",
      ],
    },
    "nept-wqi": {
      title: "ప్రకాశం జిల్లా భూగర్భ జల నాణ్యత మరియు తాగడానికి అనుకూలత అధ్యయనం",
      source: "NEPT Journal",
      highlights: [
        "జిల్లా stations పై Weighted Arithmetic WQI.",
        "కనిగిరి, ఒంగole, Kandukur WQI >100 — domestic useకు అనుకూలం కాదు.",
        "అధిక TDS, hardness, nitrates — geogenic F తో కలిసి.",
      ],
    },
    "springer-mar": {
      title: "ఫ్లోరైడ్-సమృద్ధ భూగర్భ జలం మానవ ఆరోగ్య ప్రమాదం: hard rock terrain, South India",
      source: "Natural Resources Research (Springer)",
      highlights: [
        "gneiss లో apatite, fluorite, biotite — water–rock interaction ద్వారా F.",
        "41–74% నమూనాలలో hazard index exceeded (season/demographic).",
        "Managed aquifer recharge check-dam downstream F <1.5 mg/L.",
      ],
    },
    "ijarcs-review": {
      title: "ఫ్లోరైడ్ health impacts — 1937 Podili/Darsi/Kanigiri మొదటి అస్థి ఫ్లోరోసిస్",
      source: "IJARCS review",
      highlights: [
        "భారతదేశంలో మొదటి endemic skeletal fluorosis Kanigiri-belt areas.",
        "1–3 ppm F వద్ద neurological manifestations.",
        "calcium, vitamin C తీవ్రతను మార్చుతుంది — rural diets.",
      ],
    },
  },
  hi: {
    "markapur-pmc": {
      title: "मार्कापुर, आंध्र प्रदेश में फ्लोराइड-युक्त भूजल का भू-रासायनिक व्यवहार",
      source: "Data in Brief / PMC",
      highlights: [
        "मार्कापुर क्षetr (कनिगिरि division) में F 0.4–5.8 mg/L।",
        "54 स्थान WHO सीमा से ऊपर; क्षारीय अपक्षय F को निकालता है।",
        "पश्चिम प्रकाशam hard-rock aquifer में F⁻ वितरण मानचित्र।",
      ],
    },
    "applied-water-science": {
      title: "आंध्र प्रदेश तटीय क्षetr के भूजल में फ्लोराइड की उपस्थिति",
      source: "Applied Water Science (Springer)",
      highlights: [
        "प्रकाशam में ~195 F-प्रभावित गाँव; 1937 में देश का पहला स्थानिक मामला।",
        "क्षारता और HCO₃⁻ country rock से F विघटन नियंत्रित करते हैं।",
        "कनिगिरi uplands सहit granite-belt mandals पर लागू।",
      ],
    },
    "jal-shakti-2024": {
      title: "वार्षिक भूजल गुणवत्ता रिपोर्ट — प्रकाशam जिला (Jal Shakti / CGWB)",
      source: "Deccan Chronicle / CGWB",
      highlights: [
        "जिला नमूनों में F 15 mg/L से ऊपर; nitrate, iron, arsenic भी।",
        "700+ गाँव; 10,000+ गंभीर प्रभावित।",
        "₹1,290 करोड़ surface-water योजना — कनिगिरi phase one।",
      ],
    },
    "ijeab-gi": {
      title: "प्रकाशam जिले में स्थानिक फ्लोरोसिस और gastrointestinal disorders",
      source: "IJEAB",
      highlights: [
        "Kanigiri, Giddalur, Chimakurthi, Kondapi, Kandukur household survey।",
        "प्रति गाँव 300 subjects; उच्च F क्षetrों में GI लक्षण।",
        "पर्यावरणीय फ्लोरोसis बोझ को digestive tract complaints से जोड़ता है।",
      ],
    },
    "ijrms-thyroid": {
      title: "फ्लोरोसिस के परिणामस्वरूप thyroid gland में cytomorphological परिवर्तन",
      source: "International Journal of Research in Medical Sciences",
      highlights: [
        "प्रकाशam fluorosis zone के highly vulnerable subjects।",
        "FNAC: Hashimoto's, goitre, follicular lesions — hypothyroid pattern।",
        "RIMS Ongole co-author — जिला clinical corroboration।",
      ],
    },
    "nept-wqi": {
      title: "प्रकाशam जिले में भूजल गुणवत्ता और पीने की उपयुक्तता अध्ययन",
      source: "NEPT Journal",
      highlights: [
        "जिला stations पर Weighted Arithmetic WQI।",
        "Kanigiri, Ongole, Kandukur WQI >100 — घरेलू उपयोग अनुपयुक्त।",
        "उच्च TDS, hardness, nitrates — geogenic F के साथ।",
      ],
    },
    "springer-mar": {
      title: "फ्लोराइड-युक्त भूजल का मानव स्वास्थ्य जोखिम: hard rock terrain, South India",
      source: "Natural Resources Research (Springer)",
      highlights: [
        "gneiss में apatite, fluorite, biotite — water–rock interaction से F।",
        "41–74% नमूनों में hazard index exceeded (season/demographic)।",
        "Managed aquifer recharge check-dam downstream F <1.5 mg/L।",
      ],
    },
    "ijarcs-review": {
      title: "फ्लोराइड health impacts — 1937 Podili/Darsi/Kanigiri पहली skeletal fluorosis",
      source: "IJARCS review",
      highlights: [
        "भारत में पहला endemic skeletal fluorosis Kanigiri-belt areas।",
        "1–3 ppm F पर neurological manifestations।",
        "calcium, vitamin C गंभीरता बदलते हैं — rural diets।",
      ],
    },
  },
};

const articleLocales: Record<
  Language,
  Record<string, Pick<ResearchArticle, "title" | "date" | "category" | "excerpt" | "content">>
> = {
  en: {},
  te: {
    "bbc-telugu": {
      title: "ప్రకాశం ఫ్లోరోసిస్: ‘బతుకు వికసించదు… చావు కరుణించదు’",
      date: "జూన్ 2018",
      category: "విచారణాత్మక",
      excerpt:
        "1937లో దేశంలో మొదటి ఫ్లోరోసిస్ కేసు ఇక్కడే. NPPCF: 56 మండలాలలో 46 F-బాధిత; 1.5–10 mg/L — కనిగిరి అత్యంత ప్రభావిత.",
      content:
        "BBC field report తరాల skeletal fluorosis, యువక migration, Nalgonda కంటే organised advocacy లేకపోవడం. NPPCF Dr. Ch.V. Satyanarayana 1937 Podili/Darsi case నిర్ధారించి Kanigiri, Markapuram, Giddalur, Darsi, Chimakurthi తీవ్రమైనవని పేర్కొంది. fluoride-free Andhra లక్ష్యాలు, Veligonda delays — ఇప్పటికీ relevant.",
    },
    "dc-2025": {
      title: "ప్రకాశం ఇంకా ఫ్లోరైడ్ సంక్షోభంతో పోరాడుతోంది",
      date: "మార్చి 2025",
      category: "జిల్లా నివేదిక",
      excerpt:
        "700+ గ్రామాలు contaminated; Jal Shakti 2024 F >15 mg/L; ₹1,290 కోట్ల surface-water — phase one లో కనిగిరి.",
      content:
        "Deccan Chronicle district plans, CGWB 2024 findings, ground reality synthesise: 10,000+ seriously affected, borewell water తో పంటల F uptake, Kanigiri, Giddalur, Chimakurthi, Kondapi, Darsi, Kandukur deep wells dependence. Dr. Ramana Reddy early dental fluorosis ఇంకా ఉందని.",
    },
    "hindu-2015": {
      title: "నీటిలో అధిక ఫ్లోరైడ్ — తీవ్ర toll",
      date: "మే 2015",
      category: "ఫీల్డ్ రిపోర్ట్",
      excerpt:
        "కనిగిరి 8.60 mg/L; Ayyavaripalli లో 6 నెలల్లో 32 renal deaths; 100+ Kandukur, Ongole, Guntur dialysis.",
      content:
        "Kanigiri ground reporting: children stained teeth, joint deformities, working-age migration, transplant/dialysis costs. Ex-MLA Dr. M. Ugra Narasimha Reddy: 40+ RO plants limited — food same contaminated water. Ramatheertham, Nagarjunasagar constituency cover చేయడం లేదు.",
    },
    "hindu-2017-ckd": {
      title: "ప్రకాశంలో ఫ్లోరైడ్ renal diseases ను accentuates",
      date: "జనవరి 2017",
      category: "వైద్య",
      excerpt:
        "NPPCF: Kanigiri, P.C. Palli, C.S. Puram, Pamur F >5 ppm — F-induced CKD; Kanigiri/Podili dialysis centre demand.",
      content:
        "Sanghamitra Hospital, RIMS Ongole nephrologists: non-diabetic kidney failure F toxicity. 345 CKD deaths since Jan 2015. Bommireddipalle, Vengalayapalli, Neredepalli high-burden villages. NPPCF calcium/magnesium diet — safe water లేకుండా insufficient.",
    },
    "markapur-study-summary": {
      title: "ఫ్లోరైడ్ contamination assessment — Markapur region, Prakasam",
      date: "2018",
      category: "శాస్త్రీయ అధ్యయనం",
      excerpt:
        "Western Prakasam peer-reviewed hydrochemical data: F vs pH, HCO₃, Na; 54 wells WHO unsafe.",
      content:
        "Markapur geochemistry open-access data article. Gibbs diagrams rock-weathering dominance; semi-arid uplands evaporation — Kanigiri hydrogeologic setting. West-central Markapur highest-F — Kanigiri division geology contiguous.",
    },
    "ijeab-field": {
      title: "ఫ్లోరోసిస్ గ్రామాలలో GI disorders — five-mandal survey",
      date: "2017",
      category: "ఎపిడెమియాలజీ",
      excerpt:
        "2016–17 cross-sectional: Kanigiri mandal included; western Prakasam 300 males (40–60) per village.",
      content:
        "56 mandal boundaries digitised; one high-F village per mandal including Kanigiri; GI symptom prevalence sarpanch consent. Dental/skeletal data complement — digestive tract burden media under-reports.",
    },
  },
  hi: {
    "bbc-telugu": {
      title: "प्रकाशam fluorosis: ‘जीवन नहीं फलता… मौत दया नहीं करती’",
      date: "जून 2018",
      category: "जांच",
      excerpt:
        "1937 में देश का पहला fluorosis case यहीं। NPPCF: 56 में से 46 mandals F-प्रभावित; 1.5–10 mg/L — कनिगिरi सबसे प्रभावित।",
      content:
        "BBC field report में पीढ़ियों का कंकाल फ्लोरोसिस, युवाओं का पलायन, और Nalgonda की तुलना में संगठित advocacy की कमी। NPPCF Dr. Ch.V. Satyanarayana ने 1937 Podili/Darsi case की पुष्टि की और Kanigiri, Markapuram, Giddalur, Darsi, Chimakurthi को गंभीर रूप से प्रभावित बताया। fluoride-free Andhra के लक्ष्य और Veligonda में देरी — आज भी प्रासंगिक।",
    },
    "dc-2025": {
      title: "प्रकाशam अभी भी fluorosis संकट से जूझ रहा है",
      date: "मार्च 2025",
      category: "जिला रिपोर्ट",
      excerpt:
        "700+ गाँव contaminated; Jal Shakti 2024 F >15 mg/L; ₹1,290 करोड़ surface-water — phase one में कनिगिरi।",
      content:
        "Deccan Chronicle district plans, CGWB 2024 findings, ground reality: 10,000+ seriously affected, borewell water से फसल F uptake, Kanigiri, Giddalur, Chimakurthi, Kondapi, Darsi, Kandukur deep wells dependence। Dr. Ramana Reddy early dental fluorosis अभी भी।",
    },
    "hindu-2015": {
      title: "पानी में उच्च fluoride — भारी toll",
      date: "मई 2015",
      category: "फील्ड रिपोर्ट",
      excerpt:
        "कनिगिरi 8.60 mg/L; Ayyavaripalli में 6 महीनों में 32 renal deaths; 100+ Kandukur, Ongole, Guntur dialysis।",
      content:
        "Kanigiri ground reporting: children stained teeth, joint deformities, working-age migration, transplant/dialysis costs। Ex-MLA Dr. M. Ugra Narasimha Reddy: 40+ RO plants limited — food same contaminated water। Ramatheertham, Nagarjunasagar constituency cover नहीं।",
    },
    "hindu-2017-ckd": {
      title: "प्रकाशam में fluorosis renal diseases को बढ़ाता है",
      date: "जनवरी 2017",
      category: "चिकित्सा",
      excerpt:
        "NPPCF: Kanigiri, P.C. Palli, C.S. Puram, Pamur F >5 ppm — F-induced CKD; Kanigiri/Podili dialysis centre demand।",
      content:
        "Sanghamitra Hospital, RIMS Ongole nephrologists: non-diabetic kidney failure F toxicity। 345 CKD deaths since Jan 2015। Bommireddipalle, Vengalayapalli, Neredepalli high-burden villages। NPPCF calcium/magnesium diet — safe water के बिना insufficient।",
    },
    "markapur-study-summary": {
      title: "fluoride contamination assessment — Markapur region, Prakasam",
      date: "2018",
      category: "वैज्ञानिक अध्ययन",
      excerpt:
        "Western Prakasam peer-reviewed hydrochemical data: F vs pH, HCO₃, Na; 54 wells WHO unsafe।",
      content:
        "Markapur geochemistry open-access data article। Gibbs diagrams rock-weathering dominance; semi-arid uplands evaporation — Kanigiri hydrogeologic setting। West-central Markapur highest-F — Kanigiri division geology contiguous।",
    },
    "ijeab-field": {
      title: "fluorosis गाँवों में GI disorders — five-mandal survey",
      date: "2017",
      category: "महामारी विज्ञान",
      excerpt:
        "2016–17 cross-sectional: Kanigiri mandal included; western Prakasam 300 males (40–60) per village।",
      content:
        "56 mandal boundaries digitised; one high-F village per mandal including Kanigiri; GI symptom prevalence sarpanch consent। Dental/skeletal data complement — digestive tract burden media under-reports।",
    },
  },
};

function localizeCitations(lang: Language): ResearchCitation[] {
  const locale = citationLocales[lang] ?? {};
  return researchPageCopy.en.citations!.map((c) => ({
    ...c,
    ...(locale[c.id] ?? {}),
  }));
}

function localizeArticles(lang: Language): ResearchArticle[] {
  const locale = articleLocales[lang] ?? {};
  return researchPageCopy.en.articles!.map((a) => ({
    ...a,
    ...(locale[a.id] ?? {}),
  }));
}

export function getResearchCopy(lang: Language): ResearchCopy {
  const base = researchPageCopy[lang] as ResearchPageBase;
  return {
    ...base,
    citations: localizeCitations(lang),
    articles: localizeArticles(lang),
  };
}
