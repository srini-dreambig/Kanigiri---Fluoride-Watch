export type { MandalSlug } from "../../lib/mandalSlugs";
import type { MandalSlug } from "../../lib/mandalSlugs";

export type CrisisTag = "Drought" | "Fluoride" | "Migration";

export interface MandalSource {
  label: string;
  url: string;
  publisher?: string;
  year?: string;
  note?: string;
}

export interface MandalProfile {
  slug: MandalSlug;
  crisisTags: CrisisTag[];
  summary: string;
  keySignals: string[];
  sources: MandalSource[];
}

export type SupportedLanguage = "en" | "te" | "hi";

const localizedCopy: Record<
  SupportedLanguage,
  Record<MandalSlug, Pick<MandalProfile, "summary" | "keySignals">>
> = {
  en: {
    "pc-palli": {
      summary:
        "P.C. Palli is frequently cited among Prakasam’s high-risk mandals where fluoride contamination in groundwater can exceed safe limits by multiple times, with associated fluorosis and kidney disease burden.",
      keySignals: [
        "Fluoride contamination is reported above safe limits in western Prakasam mandals including P.C. Palli.",
        "Fluorosis and fluoride-linked CKD are documented concerns in the region.",
      ],
    },
    kanigiri: {
      summary:
        "Kanigiri mandal/constituency is repeatedly reported as a fluoride-affected hotspot with fluorosis and kidney disease concerns; drought scarcity and tanker dependence amplify exposure and drive distress migration.",
      keySignals: [
        "Reports describe emergency responses: RO water, tanker supply, and warnings to avoid borewell water in schools.",
        "Multiple outlets cite severe fluoride exposure and health impacts in the constituency.",
        "Water scarcity conditions and tanker dependency are recurring themes across western Prakasam.",
      ],
    },
    pamur: {
      summary:
        "Pamur is documented within the Kanigiri constituency belt where dental and skeletal fluorosis are commonly reported, and where fluoride contamination above safe limits is a recurring public-health concern.",
      keySignals: [
        "Multiple reports discuss childhood dental/skeletal fluorosis in villages within Pamur mandal.",
        "Pamur is cited among mandals where fluoride contamination can exceed 5 ppm.",
      ],
    },
    "cs-puram": {
      summary:
        "C.S. Puram is included in scientific sampling across Prakasam mandals where elevated fluoride levels are reported in groundwater; drought scarcity amplifies reliance on borewells.",
      keySignals: [
        "Research sampling across Prakasam includes C.S. Puram among studied mandals.",
        "District-level reporting shows widespread fluoride contamination across western mandals.",
      ],
    },
    "hm-padu": {
      summary:
        "H.M. Padu is included in multi-mandal groundwater fluoride sampling studies for Prakasam; public-health reporting links high fluoride exposure with fluorosis and kidney disease burdens across the region.",
      keySignals: [
        "Scientific sampling across Prakasam includes H.M. Padu among the mandals studied for fluoride.",
        "Regional health reporting connects fluoride toxicity to rising CKD burden in western mandals.",
      ],
    },
    veligandla: {
      summary:
        "Veligandla sits within the broader western Prakasam belt where drought-driven groundwater dependence and fluoride contamination are recurring risks; long-term relief is tied to surface-water supply and project completion timelines.",
      keySignals: [
        "District-wide reporting highlights widespread contamination and scarcity in western regions.",
        "Policy actions (e.g., borewell restrictions) reflect over-exploitation risks in the region.",
      ],
    },
  },
  te: {
    "pc-palli": {
      summary:
        "పి.సి. పల్లి ప్రకాశం జిల్లాలో అధిక ప్రమాద మండలంగా తరచుగా ప్రస్తావించబడుతుంది. భూగర్భజలాల్లో ఫ్లోరైడ్ సురక్షిత పరిమితులను మించడంతో ఫ్లోరోసిస్ మరియు కిడ్నీ సమస్యల భారం పెరుగుతుంది.",
      keySignals: [
        "పి.సి. పల్లిలో సురక్షిత పరిమితిని మించే ఫ్లోరైడ్ ఉన్నట్లు నివేదికలు సూచిస్తున్నాయి.",
        "ఈ బెల్ట్‌లో ఫ్లోరోసిస్ మరియు CKD వంటి సమస్యలు పునరావృతంగా కనిపిస్తున్నాయి.",
      ],
    },
    kanigiri: {
      summary:
        "కనిగిరి ఫ్లోరైడ్ ప్రభావిత ప్రాంతంగా పలు నివేదికల్లో కనిపిస్తుంది. కరవు, ట్యాంకర్ ఆధారం కారణంగా ప్రమాదం మరింత పెరుగుతుంది.",
      keySignals: [
        "RO నీరు, ట్యాంకర్ సరఫరా, పాఠశాలల్లో బోరునీరు తాగవద్దని హెచ్చరికలు వంటి చర్యలు నివేదికల్లో ఉన్నాయి.",
        "అధిక ఫ్లోరైడ్ ఎక్స్‌పోజర్ వల్ల ఆరోగ్య ప్రభావాలు ప్రస్తావించబడుతున్నాయి.",
        "నీటి కొరత మరియు ట్యాంకర్ ఆధారం పశ్చిమ ప్రకాశంలో పునరావృత సమస్యలు.",
      ],
    },
    pamur: {
      summary:
        "పామూరులో పిల్లల దంత/అస్థి ఫ్లోరోసిస్ ప్రభావాలు తరచుగా ప్రస్తావించబడుతాయి. ఫ్లోరైడ్ సురక్షిత పరిమితులను మించే ప్రమాదం ఉంది.",
      keySignals: [
        "పామూరు మండలంలోని గ్రామాల్లో పిల్లల ఫ్లోరోసిస్ ప్రభావాలు నివేదికల్లో ఉంటాయి.",
        "పామూరును అధిక ఫ్లోరైడ్ ఉన్న మండలాల సందర్భంలో ప్రస్తావిస్తారు.",
      ],
    },
    "cs-puram": {
      summary:
        "సి.ఎస్. పురం ప్రకాశం జిల్లాలోని బహు-మండల ఫ్లోరైడ్ అధ్యయనాల్లో భాగంగా ఉంటుంది. కరవు వల్ల బోరుబావులపై ఆధారం పెరుగుతుంది.",
      keySignals: [
        "సి.ఎస్. పురం ఫ్లోరైడ్ నమూనా అధ్యయనాల్లో కనిపిస్తుంది.",
        "పశ్చిమ ప్రకాశంలో కలుషిత పరిస్థితులు విస్తృతంగా ప్రస్తావించబడుతున్నాయి.",
      ],
    },
    "hm-padu": {
      summary:
        "ఎచ్.ఎం. పాడు కూడా బహు-మండల ఫ్లోరైడ్ నమూనా అధ్యయనాల్లో ఉంది. ప్రాంతీయ నివేదికలు ఫ్లోరైడ్ ప్రభావాన్ని ఆరోగ్య సమస్యలతో అనుసంధానిస్తాయి.",
      keySignals: [
        "ఎచ్.ఎం. పాడు ఫ్లోరైడ్ అధ్యయన నమూనాలో భాగమని పత్రాలు చూపుతాయి.",
        "ఫ్లోరైడ్ విషపూరితతతో కిడ్నీ సమస్యలు వంటి ఆందోళనలు బెల్ట్‌లో ఉన్నాయి.",
      ],
    },
    veligandla: {
      summary:
        "వెలిగండ్ల పశ్చిమ ప్రకాశ బెల్ట్‌లో ఉంది. కరవు వల్ల భూగర్భజలాలపై ఆధారం పెరిగి ఫ్లోరైడ్ ప్రమాదం కూడా పెరుగుతుంది.",
      keySignals: [
        "కొత్త బోరుబావులపై ఆంక్షలు వంటి చర్యలు భూగర్భజలాల అధిక వినియోగ ప్రమాదాన్ని సూచిస్తాయి.",
        "జిల్లా స్థాయిలో ఫ్లోరైడ్ కలుషితం మరియు నీటి కొరత సమస్యలు ప్రస్తావించబడతాయి.",
      ],
    },
  },
  hi: {
    "pc-palli": {
      summary:
        "पी.सी. पल्ली को प्रकाशम के उच्च-जोखिम मंडलों में गिना जाता है। भूजल में फ्लोराइड सुरक्षित सीमा से ऊपर जाने पर फ्लोरोसिस और किडनी रोग का बोझ बढ़ता है।",
      keySignals: [
        "रिपोर्टों में पी.सी. पल्ली सहित पश्चिमी प्रकाशम के कुछ मंडलों में उच्च फ्लोराइड का उल्लेख मिलता है।",
        "इस बेल्ट में फ्लोरोसिस और CKD जैसी स्वास्थ्य चिंताएँ बार-बार सामने आती हैं।",
      ],
    },
    kanigiri: {
      summary:
        "कनिगिरि को फ्लोराइड-प्रभावित क्षेत्र के रूप में कई रिपोर्टों में बताया गया है। सूखा और टैंकर निर्भरता जोखिम को बढ़ाती है।",
      keySignals: [
        "RO पानी, टैंकर सप्लाई और स्कूलों में बोरवेल पानी से बचने जैसी आपात कार्रवाइयों का उल्लेख मिलता है।",
        "उच्च फ्लोराइड एक्सपोज़र से स्वास्थ्य प्रभावों की चर्चा होती है।",
        "पश्चिमी प्रकाशम में पानी की कमी और टैंकर निर्भरता बार-बार दिखती है।",
      ],
    },
    pamur: {
      summary:
        "पामूर में बच्चों में डेंटल/स्केलेटल फ्लोरोसिस की चर्चा मिलती है और फ्लोराइड स्तर सुरक्षित सीमा से ऊपर होने का जोखिम बना रहता है।",
      keySignals: [
        "पामूर मंडल के कुछ गाँवों में बच्चों पर फ्लोरोसिस का प्रभाव रिपोर्ट किया गया है।",
        "पामूर का संदर्भ उच्च फ्लोराइड वाले मंडलों के साथ आता है।",
      ],
    },
    "cs-puram": {
      summary:
        "सी.एस. पुरम को प्रकाशम के बहु-मंडल फ्लोराइड सैंपलिंग अध्ययनों में शामिल किया गया है। सूखे में बोरवेल निर्भरता बढ़ जाती है।",
      keySignals: [
        "सी.एस. पुरम का उल्लेख बहु-मंडल अध्ययन/सैंपलिंग में मिलता है।",
        "जिले-स्तर पर पश्चिमी मंडलों में व्यापक संदूषण की चर्चा होती है।",
      ],
    },
    "hm-padu": {
      summary:
        "एच.एम. पाडु भी प्रकाशम के बहु-मंडल फ्लोराइड सैंपलिंग अध्ययनों में शामिल है। क्षेत्रीय रिपोर्टें फ्लोराइड को स्वास्थ्य बोझ से जोड़ती हैं।",
      keySignals: [
        "एच.एम. पाडु का उल्लेख फ्लोराइड सैंपलिंग/अध्ययन संदर्भ में मिलता है।",
        "फ्लोराइड विषाक्तता और किडनी समस्याओं जैसी चिंताएँ इस बेल्ट में उठती हैं।",
      ],
    },
    veligandla: {
      summary:
        "वेलिगंडला पश्चिमी प्रकाशम बेल्ट में है, जहाँ सूखे के कारण भूजल निर्भरता और फ्लोराइड जोखिम दोनों बढ़ते हैं।",
      keySignals: [
        "नए बोरवेल पर प्रतिबंध जैसे कदम भूजल दोहन के जोखिम को दिखाते हैं।",
        "जिले-स्तर पर फ्लोराइड और जल-की-कमी दोनों की चर्चा होती है।",
      ],
    },
  },
};

export const mandalSlugByName: Record<string, MandalSlug> = {
  "P.C. Palli": "pc-palli",
  "P C Palli": "pc-palli",
  "PC Palli": "pc-palli",
  "Kanigiri": "kanigiri",
  "Pamur": "pamur",
  "C.S. Puram": "cs-puram",
  "C S Puram": "cs-puram",
  "CS Puram": "cs-puram",
  "H.M. Padu": "hm-padu",
  "H M Padu": "hm-padu",
  "HM Padu": "hm-padu",
  "Veligandla": "veligandla",
};

export const mandalProfiles: Record<MandalSlug, MandalProfile> = {
  "pc-palli": {
    slug: "pc-palli",
    crisisTags: ["Fluoride", "Drought"],
    summary: localizedCopy.en["pc-palli"].summary,
    keySignals: localizedCopy.en["pc-palli"].keySignals,
    sources: [
      {
        label: "Fluoride problem accentuates renal diseases in Prakasam",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
        publisher: "The Hindu",
        year: "2017",
        note:
          "Mentions fluoride-induced CKD and identifies Kanigiri, P.C. Palli, and Pamur among mandals with fluoride contamination above 5 ppm.",
      },
      {
        label: "Prakasam still battles fluoride crisis",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
        publisher: "Deccan Chronicle",
        year: "2025",
        note:
          "District-wide context: affected villages, typical fluoride range, and reference to 2024 Jal Shakti groundwater quality report.",
      },
    ],
  },
  kanigiri: {
    slug: "kanigiri",
    crisisTags: ["Fluoride", "Drought", "Migration"],
    summary: localizedCopy.en.kanigiri.summary,
    keySignals: localizedCopy.en.kanigiri.keySignals,
    sources: [
      {
        label: "Collector orders emergency measures as fluorosis, jaundice hit Kanigiri villages",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/collector-orders-emergency-measures-as-fluorosis-jaundice-hit-kanigiri-villages-1916862",
        publisher: "Deccan Chronicle",
        year: "2025",
        note:
          "Field visit notes: RO water, tanker supply directions, warnings at schools, sanitation emphasis.",
      },
      {
        label: "High fluoride content in water takes a toll",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece",
        publisher: "The Hindu",
        year: "2015",
        note:
          "Reports fluorosis burden in Kanigiri constituency and cites high fluoride levels; includes migration and household impact narratives.",
      },
      {
        label: "Veligonda project remedy for fluorosis: Dinakar",
        url: "https://www.thehansindia.com/andhra-pradesh/veligonda-project-remedy-for-fluorosis-dinakar-966886",
        publisher: "The Hans India",
        year: "2026",
        note:
          "Mentions widespread contamination, limited safe-water coverage, and highlights Kanigiri constituency health burden.",
      },
      {
        label: "In Andhra's drought-prone Prakasam, a water black market thrives",
        url: "https://www.thenewsminute.com/andhra-pradesh/andhras-drought-prone-prakasam-water-black-market-thrives-100203",
        publisher: "The News Minute",
        year: "2019",
        note:
          "Explains tanker dependence, scarcity dynamics, and how fluoride contamination intersects with affordability.",
      },
    ],
  },
  pamur: {
    slug: "pamur",
    crisisTags: ["Fluoride", "Drought", "Migration"],
    summary: localizedCopy.en.pamur.summary,
    keySignals: localizedCopy.en.pamur.keySignals,
    sources: [
      {
        label: "Fluoride problem accentuates renal diseases in Prakasam",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
        publisher: "The Hindu",
        year: "2017",
        note:
          "Cites Pamur among mandals with fluoride contamination above 5 ppm and discusses fluorosis/CKD linkage.",
      },
      {
        label: "High fluoride content in water takes a toll",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/high-fluoride-content-in-water-takes-a-toll/article7165842.ece",
        publisher: "The Hindu",
        year: "2015",
        note:
          "Includes Pamur mandal village narratives and notes severe fluorosis burden in the constituency.",
      },
    ],
  },
  "cs-puram": {
    slug: "cs-puram",
    crisisTags: ["Fluoride", "Drought"],
    summary: localizedCopy.en["cs-puram"].summary,
    keySignals: localizedCopy.en["cs-puram"].keySignals,
    sources: [
      {
        label: "Fluoride distribution study (Prakasam district; multiple mandals sampled)",
        url: "https://www.msjonline.org/index.php/ijrms/article/download/5905/4441/22803",
        publisher: "International Journal of Research in Medical Sciences",
        year: "2019",
        note:
          "Lists C.S. Puram among sampled mandals and reports high fluoride levels in some villages (context for the belt).",
      },
      {
        label: "Prakasam still battles fluoride crisis",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
        publisher: "Deccan Chronicle",
        year: "2025",
      },
    ],
  },
  "hm-padu": {
    slug: "hm-padu",
    crisisTags: ["Fluoride", "Drought"],
    summary: localizedCopy.en["hm-padu"].summary,
    keySignals: localizedCopy.en["hm-padu"].keySignals,
    sources: [
      {
        label: "Fluoride distribution study (Prakasam district; multiple mandals sampled)",
        url: "https://www.msjonline.org/index.php/ijrms/article/download/5905/4441/22803",
        publisher: "International Journal of Research in Medical Sciences",
        year: "2019",
        note:
          "Lists HM Padu among sampled mandals; includes observed fluoride ranges in sampled villages.",
      },
      {
        label: "Fluoride problem accentuates renal diseases in Prakasam",
        url: "https://www.thehindu.com/news/national/andhra-pradesh/Fluoride-problem-accentuates-renal-diseases-in-Prakasam/article17001338.ece",
        publisher: "The Hindu",
        year: "2017",
      },
    ],
  },
  veligandla: {
    slug: "veligandla",
    crisisTags: ["Drought", "Fluoride"],
    summary: localizedCopy.en.veligandla.summary,
    keySignals: localizedCopy.en.veligandla.keySignals,
    sources: [
      {
        label: "Andhra govt bans new borewells, groundwater extraction in 258 villages of Prakasam",
        url: "https://www.newindianexpress.com/states/andhra-pradesh/2026/May/12/andhra-govt-bans-new-borewells-groundwater-extraction-in-258-villages-of-prakasam",
        publisher: "The New Indian Express",
        year: "2026",
      },
      {
        label: "Prakasam still battles fluoride crisis",
        url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
        publisher: "Deccan Chronicle",
        year: "2025",
      },
      {
        label: "Veligonda project requires Rs 2,000 crore to meet Aug 2026 deadline",
        url: "https://timesofindia.indiatimes.com/city/vijayawada/veligonda-project-requires-rs-2000-crore-to-meet-aug-2026-deadline/articleshow/128124601.cms",
        publisher: "Times of India",
        year: "2026",
      },
    ],
  },
};

export function getMandalProfile(language: SupportedLanguage, slug: MandalSlug): MandalProfile {
  const base = mandalProfiles[slug];
  const copy = localizedCopy[language]?.[slug] ?? localizedCopy.en[slug];
  return { ...base, summary: copy.summary, keySignals: copy.keySignals };
}

export { mandalSlugsInOrder } from "../../lib/mandalSlugs";

