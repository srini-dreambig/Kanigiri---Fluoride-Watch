export type VideoRelevance =
  | "kanigiri-prakasam"
  | "prakasam-district"
  | "regional-parallel"
  | "water-solution"
  | "for-review";

export type YoutubeVideoEntry = {
  id: string;
  videoId: string;
  /** oEmbed-verified title when available */
  title: string;
  channel: string;
  year?: string;
  relevance: VideoRelevance;
  /** Short unique note — not reused from other pages */
  context: { en: string; te: string; hi: string };
  featured?: boolean;
};

/** Curated from YouTube search: Kanigiri + fluoride */
export const youtubeVideos: YoutubeVideoEntry[] = [
  {
    id: "tv9-open-debate",
    videoId: "0epQeXbF6xY",
    title: "Kanigiri residents facing Fluoride problems || Open Debate - TV9",
    channel: "TV9 Telugu Live",
    relevance: "kanigiri-prakasam",
    featured: true,
    context: {
      en: "Long TV9 open debate with residents and officials on Kanigiri’s fluoride crisis — borewell dependence, health impacts, and what locals say still isn’t fixed.",
      te: "కనిగిరి ఫ్లోరైడ్ సంక్షోభంపై పౌరులు, అధికారులతో TV9 ఓపెన్ డిబేట్ — బోర్‌బోరు నీరు, ఆరోగ్య నష్టం, ఇంకా పరిష్కారం లేని విషయాలు.",
      hi: "कनिगिरि फ्लोराइड संकट पर TV9 ओपन डिबेट — बोरवेल पानी, स्वास्थ्य नुकसान, और जो अभी भी अनसुलझा है।",
    },
  },
  {
    id: "etv-kanigiri-fluorine",
    videoId: "eDuSy_MukzM",
    title:
      "Fluorine Grips Kanigiri Residents | Causing Cancer & Kidney Failures | Needs Government Attention",
    channel: "ETV Andhra Pradesh",
    relevance: "kanigiri-prakasam",
    featured: true,
    context: {
      en: "ETV field report naming Kanigiri: high-fluoride drinking water linked to kidney disease, cancer fears, and calls for government action.",
      te: "అధిక ఫ్లోరైడ్ తాగునీరు, మూత్రపిండాల వ్యాధి, క్యాన్సర్ భయం — కనిగిరిపై ETV రిపోర్ట్, ప్రభుత్వ చర్య కోరుతూ.",
      hi: "उच्च फ्लोराइड पेय जल, गुर्दे रोग, कैंसर की चिंता — कनिगिरि पर ETV रिपोर्ट और सरकारी कार्रवाई की माँग।",
    },
  },
  {
    id: "tv9-mukha-mukhi",
    videoId: "8R9Qrf48Xl0",
    title: "Face to face with Kanigiri's Fluoride victims - Mukha Mukhi - TV9",
    channel: "TV9 Telugu Live",
    relevance: "kanigiri-prakasam",
    featured: true,
    context: {
      en: "TV9 Mukha Mukhi sits with fluorosis-affected families in Kanigiri — bent limbs, stained teeth, and daily life around contaminated wells.",
      te: "కనిగిరి ఫ్లోరోసిస్ బాధిత కుటుంబాలతో TV9 ముఖా ముఖీ — వంగిన అవయవాలు, మచ్చల దంతాలు, విషపూరిత బావుల చుట్టూ జీవనం.",
      hi: "कनिगिरि में फ्लोरोसिस से पीड़ित परिवारों के साथ TV9 मुखा मुखी — मुड़े अंग, दाग वाले दाँत, जहरिले कुओं के आसपास की ज़िंदगी।",
    },
  },
  {
    id: "tv9-poisonous-water",
    videoId: "oYL21mRfluc",
    title: "Poisonous Fluorine water harms health of Kanigiri residents - TV9",
    channel: "TV9 Telugu Live",
    relevance: "kanigiri-prakasam",
    context: {
      en: "Shorter TV9 segment on Kanigiri families still drinking high-fluoride borewell water and visible health damage in the mandal.",
      te: "అధిక ఫ్లోరైడ్ బోరు నీరు తాగుతున్న కనిగిరి కుటుంబాలు, మండలంలో కనిపించే ఆరోగ్య నష్టం — TV9 చిన్న రిపోర్ట్.",
      hi: "उच्च फ्लोराइड बोरवेल पानी पीते कनिगिरि परिवार और मंडल में स्वास्थ्य क्षति — TV9 संक्षिप्त रिपोर्ट।",
    },
  },
  {
    id: "etv-officials-kanigiri",
    videoId: "4TFSwyQr_XY",
    title:
      "కనిగిరిలో ఫ్లోరైడ్ సమస్య తీవ్రతపై అధికారుల పరిశీలన | Officials Examine Fluoride Problem in Kanigiri",
    channel: "ETV Andhra Pradesh",
    relevance: "kanigiri-prakasam",
    context: {
      en: "Officials visit Kanigiri to inspect fluoride severity — useful for tracking promised surveys versus what residents still drink.",
      te: "ఫ్లోరైడ్ తీవ్రత పరిశీలనకు అధికారులు కనిగిరికి — ప్రకటించిన సర్వేలు vs ప్రజలు ఇంకా తాగే నీటి మధ్య పోలిక.",
      hi: "फ्लोराइड गंभीरता जाँच के लिए अधिकारी कनिगिरि में — घोषित सर्वेक्षण बनाम लोग अभी क्या पीते हैं।",
    },
  },
  {
    id: "hmtv-ugra-pledge",
    videoId: "896Q6hPT548",
    title:
      "కనిగిరిలో ఫ్లోరైడ్ సమస్య నివారిస్తా - Kanigiri TDP Candidate Ugra Narasimha Reddy | hmtv",
    channel: "hmtv Telugu News",
    relevance: "kanigiri-prakasam",
    context: {
      en: "Local MLA candidate Ugra Narasimhareddy pledges to resolve Kanigiri’s fluoride problem — political accountability clip, not a technical fix.",
      te: "కనిగిరి ఫ్లోరైడ్ పరిష్కరిస్తానని ఉగ్ర నరసింహరెడ్డి హామీ — రాజకీయ జవాబుదారీ; సాంకేతిక పరిష్కారం కాదు.",
      hi: "उग्र नरसिम्हरेड्डी का वादा — कनिगिरि फ्लोराइड हल करेंगे; राजनीतिक जवाबदेही, तकनीकी समाधान नहीं।",
    },
  },
  {
    id: "hhasa-fluoride-free",
    videoId: "eXdcq225qTA",
    title: "Kanigiri will soon be free from fluoride/ఫ్రొరైడ్ నుండి త్వరలో విముక్తి/h hasa tv",
    channel: "H Hasa TV",
    relevance: "kanigiri-prakasam",
    context: {
      en: "Local bulletin-style clip claiming Kanigiri will soon be fluoride-free — compare against ongoing borewell use in other reports.",
      te: "కనిగిరి త్వరలో ఫ్లోరైడ్ నుండి విముక్తి అనే స్థానిక క్లిప్ — ఇతర రిపోర్టులలో బోర్‌బోరు నీటిని పోల్చండి.",
      hi: "कनिगिरि जल्द फ्लोराइड-मुक्त होगा — स्थानीय क्लिप; अन्य रिपोर्टों में बोरवेल उपयोग से तुलना करें।",
    },
  },
  {
    id: "sumantv-jaffar",
    videoId: "GPYGXuixHSg",
    title:
      "హ్యాట్సాఫ్ జాఫర్ #HatsOff #JournalistJaffar #Kanigiri #Fluoride #Victims #People #Suffering #Water",
    channel: "SumanTV",
    relevance: "kanigiri-prakasam",
    context: {
      en: "Short ground report with journalist Jaffar on Kanigiri fluoride victims and daily water hardship.",
      te: "జర్నలిస్ట్ జాఫర్‌తో కనిగిరి ఫ్లోరైడ్ బాధితులు, నీటి ఇబ్బంది — చిన్న ఫీల్డ్ క్లిప్.",
      hi: "पत्रकार जाफर के साथ कनिगिरि फ्लोराइड पीड़ित और पानी की मुश्किल — छोटा फील्ड क्लिप।",
    },
  },
  {
    id: "harshita-hospital-short",
    videoId: "h_GQKJO2D-U",
    title: "🚨 Fluoride Impact in Kanigiri | Hidden Water Crisis Affecting Health ⚠️ Part 2",
    channel: "Sri Harshita Hospital",
    relevance: "kanigiri-prakasam",
    context: {
      en: "Local hospital’s short awareness clip on Kanigiri’s hidden fluoride water crisis and health risks — community education, not news investigation.",
      te: "కనిగిరి దాగున్న ఫ్లోరైడ్ నీటి సంక్షోభం, ఆరోగ్య ప్రమాదాలపై స్థానిక ఆసుపత్రి చిన్న అవగాహన వీడియో.",
      hi: "कनिगिरि के छिपे फ्लोराइड जल संकट और स्वास्थ्य जोखिम — स्थानीय अस्पताल की छोटी जागरूकता क्लिप।",
    },
  },
  {
    id: "etv-veligonda",
    videoId: "YkjxyZ5gAuk",
    title:
      "Veligonda Project | 30 Years After Foundation, Hopes Rise Again | వెలిగొండ ప్రాజెక్టు పనుల్లో వేగం",
    channel: "ETV Andhra Pradesh",
    year: "2025",
    relevance: "water-solution",
    featured: true,
    context: {
      en: "Western Prakasam’s long-awaited Veligonda scheme — meant to bring Krishna water to fluoride-hit uplands including Kanigiri, Markapuram, and Giddalur. Tracks why families still depend on poisoned borewells until this finishes.",
      te: "కనిగిరి, మార్కాపురం, గిద్దలూరు సహా ఫ్లోరైడ్ బాధిత పశ్చిమ ప్రకాశానికి కృష్ణా నీరు తీసుకురాని వెలిగొండ ప్రాజెక్టు — పూర్తి అయ్యే వరకు బోర్‌బోరు నీటిపైనే ఎందుకు ఆధారపడాల్సి వస్తుందో ఈ రిపోర్ట్ చూపుతుంది.",
      hi: "कनिगिरि, मार्कापुरम, गिद्दलूर सहित फ्लोराइड प्रभावित पश्चिम प्रकाशम के लिए कृष्णा जल — वेलिगोंडा परियोजना; पूरा होने तक लोग विषैले बोरवेल पर क्यों मजबूर हैं।",
    },
  },
  {
    id: "etv-water-scarcity",
    videoId: "8uULgJCEfJw",
    title: "Water Scarcity in Kanigiri | Locals Struggles For Drinking Water",
    channel: "ETV Andhra Pradesh",
    relevance: "water-solution",
    context: {
      en: "Kanigiri’s drinking-water scarcity — tankers, dry taps, and why fluoride-heavy borewells fill the gap when piped supply fails.",
      te: "కనిగిరిలో తాగునీటి కొరత — ట్యాంకర్లు, ఎండిన ట్యాప్‌లు; పైప్‌లైన్ విఫలమైతే ఫ్లోరైడ్ బోరు నీరే ఎందుకు పనికొస్తుంది.",
      hi: "कनिगिरि में पीने के पानी की कमी — टैंकर, सूखे नल; पाइपलाइन फेल हो तो फ्लोराइड बोरवेल क्यों भरता है।",
    },
  },
  {
    id: "etv-groundwater-kanigiri",
    videoId: "731guwSEnZY",
    title: "Rapidly Decreasing Levels of Ground Water | Creating Trouble to Residents | in Kanigiri",
    channel: "ETV Andhra Pradesh",
    relevance: "water-solution",
    context: {
      en: "Falling groundwater tables in Kanigiri force deeper borewells — often concentrating fluoride and worsening the crisis.",
      te: "కనిగిరిలో భూగర్భ జలం తగ్గడం — లోతైన బోర్‌లు, ఫ్లోరైడ్ సాంద్రత పెరగడం, సంక్షోభం మరింత తీవ్రం.",
      hi: "कनिगिरि में भूजल घटना — गहरे बोरवेल, फ्लोराइड सांद्रता बढ़ना, संकट गहराना।",
    },
  },
  {
    id: "sakshi-prakasam-renal",
    videoId: "47UwBiRB1ls",
    title: "Fluoride problem accentuates renal diseases in Prakasam || Sakshi Special - Watch Exclusive",
    channel: "Sakshi TV",
    relevance: "prakasam-district",
    context: {
      en: "Sakshi special on Prakasam fluoride driving kidney disease — dialysis travel and costs that hit Kanigiri-area families.",
      te: "ప్రకాశంలో ఫ్లోరైడ్ → మూత్రపిండాల వ్యాధి; డయాలసిస్ ప్రయాణం, ఖర్చు — కనిగిరి ప్రాంత కుటుంబాలపై Sakshi స్పెషల్.",
      hi: "प्रकाशम में फ्लोराइड से गुर्दे रोग — डायलिसिस यात्रा और खर्च; कनिगिरि क्षेत्र के परिवार, Sakshi स्पेशल।",
    },
  },
  {
    id: "etv-prakasam-fluoride-water",
    videoId: "1_UMSO6fbdA",
    title: "Fluoride Water | Causing Massive Troubles | Damaging Health of Residents | Prakasam Dist",
    channel: "ETV Andhra Pradesh",
    relevance: "prakasam-district",
    context: {
      en: "District-wide ETV report on fluoride-contaminated drinking water damaging health across Prakasam, including upland mandals like Kanigiri.",
      te: "ప్రకాశం జిల్లావ్యాప్తంగా ఫ్లోరైడ్ నీరు, ఆరోగ్య నష్టం — కనిగిరి వంటి పర్వత మండలాలు సహా ETV రిపోర్ట్.",
      hi: "पूरे प्रकाशम में फ्लोराइड पानी से स्वास्थ्य क्षति — कनिगिरि जैसे पहाड़ी मंडल सहित ETV रिपोर्ट।",
    },
  },
  {
    id: "etv-prakasam-families",
    videoId: "lF2DgjRwrS8",
    title: "Fluoride Hunts Number Of Families In Prakasam District ; Etv Special Story",
    channel: "ETV Andhra Pradesh",
    relevance: "prakasam-district",
    context: {
      en: "ETV special following multiple Prakasam families marked by skeletal and dental fluorosis from decades of unsafe water.",
      te: "దశాబ్దాల అసురక్షిత నీటితో అస్థి, దంత ఫ్లోరోసిస్ — ప్రకాశం అనేక కుటుంబాలపై ETV స్పెషల్.",
      hi: "दशकों के असुरक्षित पानी से कंकाल और दंत फ्लोरोसिस — प्रकाशम के कई परिवार, ETV स्पेशल।",
    },
  },
  {
    id: "hmtv-kidney-prakasam",
    videoId: "-7-WTnhG07A",
    title:
      "HMTV Effect | AP Govt Response On Fluoride Problem Accentuates Kidney Diseases In Prakasam Dist",
    channel: "hmtv Telugu News",
    relevance: "prakasam-district",
    context: {
      en: "Follow-up on government response after hmtv highlighted fluoride-linked kidney disease burden in Prakasam.",
      te: "ప్రకాశంలో ఫ్లోరైడ్-మూత్రపిండాల భారాన్ని hmtv ఎత్తిన తర్వాత ప్రభుత్వ ప్రతిస్పందన — ఫాలో-అప్.",
      hi: "प्रकाशम में फ्लोराइड-गुर्दे रोग पर hmtv के बाद सरकारी प्रतिक्रिया — फॉलो-अप।",
    },
  },
  {
    id: "tv5-prakasam-fluoride",
    videoId: "_T33aCPWIg4",
    title: "Fluoride Problem in Prakasam Dist - TV5",
    channel: "TV5 News",
    relevance: "prakasam-district",
    context: {
      en: "TV5 bulletin summarizing Prakasam’s endemic fluoride problem and village-level health fallout.",
      te: "ప్రకాశం జిల్లా వ్యాప్త ఫ్లోరైడ్ సమస్య, గ్రామ స్థాయి ఆరోగ్య ప్రభావం — TV5 బుల్లెటిన్.",
      hi: "प्रकाशम की स्थानिक फ्लोराइड समस्या और गाँव स्तर स्वास्थ्य प्रभाव — TV5 बुलेटिन।",
    },
  },
  {
    id: "tnm-nalgonda",
    videoId: "pHrY2mSNmtA",
    title: "Solutions, not sympathy: Tackling fluorosis in Telangana's Nalgonda",
    channel: "The News Minute",
    year: "2019",
    relevance: "regional-parallel",
    context: {
      en: "Same Deccan granite-belt geology as Prakasam: decades of skeletal and dental fluorosis, and what changed when safe piped water replaced borewells. Useful contrast for what Kanigiri still lacks.",
      te: "ప్రకాశం జిల్లాతో పోల్చదగిన డెక్కన్ గ్రానైట్ భూగర్భ జలం: దశాబ్దాల ఫ్లోరోసిస్, సురక్షిత పైప్‌లైన్ నీరు వచ్చిన తర్వాత ఏమి మారిందో చూపే నల్గొండ కథనం. కనిగిరికి ఇంకా లేని పరిష్కారానికి పోలిక.",
      hi: "प्रकाशम जैसी डेक्कन ग्रेनाइट ज़ोन: दशकों का फ्लोरोसिस और सुरक्षित नल जल आने के बाद क्या बदला — कनिगिरि में अभी जो नहीं हुआ, उसकी तुलना के लिए।",
    },
  },
];

export const youtubeSearchLinks = [
  {
    id: "search-kanigiri",
    label: { en: "Kanigiri + fluoride", te: "కనిగిరి + ఫ్లోరైడ్", hi: "कनिगिरि + फ्लोराइड" },
    url: "https://www.youtube.com/results?search_query=Kanigiri+fluoride",
  },
  {
    id: "search-kanigiri-fluorosis",
    label: { en: "Kanigiri + fluorosis", te: "కనిగిరి + ఫ్లోరోసిస్", hi: "कनिगिरि + फ्लोरोसिस" },
    url: "https://www.youtube.com/results?search_query=Kanigiri+fluoride+fluorosis",
  },
  {
    id: "search-prakasam",
    label: { en: "Prakasam district fluoride", te: "ప్రకాశం జిల్లా ఫ్లోరైడ్", hi: "प्रकाशम जिला फ्लोराइड" },
    url: "https://www.youtube.com/results?search_query=Prakasam+district+fluoride+fluorosis",
  },
  {
    id: "search-te",
    label: { en: "Telugu: ప్రకాశం ఫ్లోరైడ్", te: "తెలుగు: ప్రకాశం ఫ్లోరైడ్", hi: "तेलुगु: प्रकाशम फ्लोराइड" },
    url: "https://www.youtube.com/results?search_query=%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%95%E0%B0%BE%E0%B1%86%E0%B0%82+%E0%B0%AB%E0%B1%8D%E0%B0%B2%E0%B1%8B%E0%B0%B0%E0%B1%88%E0%B0%A1%E0%B1%8D",
  },
  {
    id: "search-kanigiri-te",
    label: { en: "Telugu: కనిగిరి ఫ్లోరైడ్", te: "తెలుగు: కనిగిరి ఫ్లోరైడ్", hi: "तेलुगु: कनिगिरि फ्लोराइड" },
    url: "https://www.youtube.com/results?search_query=%E0%B0%95%E0%B0%A8%E0%B0%BF%E0%B0%97%E0%B0%BF%E0%B0%B0%E0%B0%BF+%E0%B0%AB%E0%B1%8D%E0%B0%B2%E0%B1%8B%E0%B0%B0%E0%B1%88%E0%B0%A1%E0%B1%8D",
  },
  {
    id: "search-veligonda",
    label: { en: "Veligonda + Prakasam water", te: "వెలిగొండ + ప్రకాశం నీరు", hi: "वेलिगोंडा + प्रकाशम पानी" },
    url: "https://www.youtube.com/results?search_query=Veligonda+Prakasam+drinking+water",
  },
  {
    id: "search-mla",
    label: { en: "Ugra Narasimhareddy Kanigiri water", te: "ఉగ్ర నరసింహరెడ్డి కనిగిరి నీరు", hi: "उग्र नरसिम्हरेड्डी कनिगिरि पानी" },
    url: "https://www.youtube.com/results?search_query=Ugra+Narasimhareddy+Kanigiri+water+tanker",
  },
  {
    id: "search-pamuru",
    label: { en: "Pamuru / P.C. Palli fluorosis", te: "పామూరు / పి.సి.పల్లి ఫ్లోరోసిస్", hi: "पामूरु / पी.सी. पल्ली फ्लोरोसिस" },
    url: "https://www.youtube.com/results?search_query=Pamuru+fluoride+Prakasam",
  },
  {
    id: "search-jjm",
    label: { en: "Jal Jeevan Mission Prakasam", te: "జల్ జీవన్ మిషన్ ప్రకాశం", hi: "जल जीवन मिशन प्रकाशम" },
    url: "https://www.youtube.com/results?search_query=Jal+Jeevan+Mission+Prakasam+fluoride",
  },
];

/** News video pages (not YouTube) — same crisis, for your review */
export const relatedMediaLinks = [
  {
    id: "bbc-prakasam",
    title: {
      en: "Prakasam fluorosis: ‘Life does not flourish… death does not pity’ (BBC Telugu)",
      te: "ప్రకాశం ఫ్లోరోసిస్: ‘బతుకు వికసించదు… చావు కరుణించదు’ (BBC తెలుగు)",
      hi: "प्रकाशम फ्लोरोसिस: ‘जीवन नहीं फलता… मौत दया नहीं करती’ (BBC तेलुगु)",
    },
    url: "https://www.bbc.com/telugu/india-44099603",
    note: {
      en: "Names Kanigiri, Markapuram, and Giddalur among worst-hit mandals. Video on BBC site.",
      te: "కనిగిరి, మార్కాపురం, గిద్దలూరును తీవ్ర బాధిత మండలాలుగా పేర్కొంది. వీడియో BBC సైట్‌లో.",
      hi: "कनिगिरि, मार्कापुरम, गिद्दलूर को सबसे प्रभावित बताता है। वीडियो BBC साइट पर।",
    },
  },
  {
    id: "sakshi-prakasam",
    title: {
      en: "Fluoride worsens kidney disease in Prakasam (Sakshi)",
      te: "ప్రకాశంలో ఫ్లోరైడ్ కిడ్నీ వ్యాధులను మరింత తీవ్రం చేస్తోంది (సాక్షి)",
      hi: "प्रकाशम में फ्लोराइड गुर्दे रोग बढ़ाता है (साक्षी)",
    },
    url: "https://cms.sakshi.com/video/news/fluoride-problem-accentuates-renal-diseases-in-prakasam-1044306",
    note: {
      en: "Covers Kanigiri-area dialysis travel burden; Sakshi player, not YouTube.",
      te: "కనిగిరి ప్రాంత డయాలసిస్ ప్రయాణ భారాన్ని వివరిస్తుంది; సాక్షి ప్లేయర్.",
      hi: "कनिगिरि क्षेत्र में डायलिसिस यात्रा की लागत; साक्षी प्लेयर।",
    },
  },
  {
    id: "eenadu-prakasam",
    title: {
      en: "Fluoride ghost still haunts villages (Eenadu — Prakasam & Markapuram)",
      te: "పల్లెను వీడని ఫ్లోరైడ్ భూతం (ఈనాడు — ప్రకాశం & మార్కాపురం)",
      hi: "गाँवों से नहीं उठता फ्लोराइड भूत (ईनाडु — प्रकाशम)",
    },
    url: "https://www.eenadu.net/telugu-news/andhra-pradesh/fluorosis-in-prakasam-and-markapuram-districts/1799/126060667",
    note: {
      en: "Field report on families still drinking high-F borewell water despite Jal Jeevan claims.",
      te: "జల్ జీవన్ ప్రకటనల ఉన్నప్పటికీ బోరు నీరే తాగుతున్న కుటుంబాలపై ఈనాడు ఫీల్డ్ రిపోర్ట్.",
      hi: "जल जीवन के बावजूद बोरवेल पानी पी रहे परिवार — ईनाडु रिपोर्ट।",
    },
  },
];

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}
