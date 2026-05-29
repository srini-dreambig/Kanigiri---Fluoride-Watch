import type { Language } from "../translations";
import type { CrisisCategory } from "../lib/api";

export type UiLabels = {
  brand: { tagline: string };
  header: {
    menu_open: string;
    menu_close: string;
  };
  common: {
    all: string;
    source: string;
    back: string;
    back_dashboard: string;
    population: string;
    fluoride: string;
    status: string;
  };
  footer: {
    navigation: string;
    constituency: string;
    contact: string;
    address: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  gallery: {
    loading: string;
    load_error: string;
    upload_error: string;
    delete_error: string;
    read_error: string;
    showing_count: string;
    category_label: string;
    default_caption: string;
    uploading: string;
    drag_drop: string;
    file_types: string;
    drop_hint: string;
    feed_title: string;
    evidence_count: string;
    no_images_in_category: string;
    image_alt: string;
    submission_label: string;
    verified_location: string;
    policy_title: string;
    filters: Record<CrisisCategory | "All", string>;
    viewer: {
      close: string;
      previous: string;
      next: string;
      download: string;
      rotate_left: string;
      rotate_right: string;
      zoom_in: string;
      zoom_out: string;
      reset_view: string;
      counter: string;
      delete: string;
      category: string;
      date: string;
      open_photo: string;
      expand: string;
    };
    layout: {
      view_menu: string;
      bulk_select: string;
      bulk_select_exit: string;
      select_all: string;
      clear_selection: string;
      download_selected: string;
      selected_count: string;
      downloading: string;
      category_col: string;
      date_col: string;
      caption_col: string;
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
      list: string;
      details: string;
      tiles: string;
      content: string;
    };
  };
  mandal: {
    not_found_title: string;
    not_found_desc: string;
    loading: string;
    snapshot: string;
    what_happening: string;
    local_details: string;
    related: string;
    other_mandals: string;
    sources: string;
    source_fallback: string;
  };
  documentary: {
    mandals_subtitle: string;
    mandal_profile_cta: string;
    memo_cta: string;
  };
  memo: {
    submitted_label: string;
    submitted_date: string;
  };
  research: {
    geology_evidence_heading: string;
    health_risks_heading: string;
  };
  dashboard: {
    who_suffix: string;
    chart_tooltip_max_f: string;
    chart_tooltip_population: string;
    unit_mg_l: string;
  };
  solutions: {
    source_label: string;
  };
  watch: {
    brand: string;
    hide_player: string;
    play_here: string;
  };
  home: {
    crisis_badge: string;
    slide_aria: string;
  };
};

export const uiLabels: Record<Language, UiLabels> = {
  en: {
    brand: { tagline: "Fluoride Watch" },
    header: {
      menu_open: "Open navigation menu",
      menu_close: "Close navigation menu",
    },
    common: {
      all: "All",
      source: "Source",
      back: "Back",
      back_dashboard: "Back to Dashboard",
      population: "Population",
      fluoride: "Fluoride",
      status: "Status",
    },
    footer: {
      navigation: "Navigation",
      constituency: "Constituency",
      contact: "Contact",
      address: "Kanigiri, Prakasam Dist, AP",
      copyright: "© 2026 Kanigiri Fluoride Crisis Awareness. Non-Political Initiative.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
    gallery: {
      loading: "Loading gallery from Neon…",
      load_error:
        "Could not load gallery. On localhost run npm run dev (API + web). On Vercel set DATABASE_URL and run npm run db:setup.",
      upload_error:
        "Upload failed. Ensure DATABASE_URL is set, the database is seeded, and the API is reachable.",
      file_types: "PNG, JPG or WebP — compressed automatically before upload",
      delete_error: "Could not delete image.",
      read_error: "Failed to read file",
      showing_count: "Showing {shown} of {total}",
      category_label: "Category",
      default_caption: "Observation from the field",
      uploading: "Uploading Data...",
      drag_drop: "Drag & Drop Photos",
      drop_hint: "Drop to Upload",
      feed_title: "Documentation Feed",
      evidence_count: "{count} Evidence Pieces",
      no_images_in_category: "No images in {category}.",
      image_alt: "User documentation",
      submission_label: "Community Submission",
      verified_location: "Verified Location",
      policy_title: "Media Policy",
      filters: { All: "All", Drought: "Drought", Fluoride: "Fluoride", Migration: "Migration" },
      viewer: {
        close: "Close",
        previous: "Previous photo",
        next: "Next photo",
        download: "Download",
        rotate_left: "Rotate left",
        rotate_right: "Rotate right",
        zoom_in: "Zoom in",
        zoom_out: "Zoom out",
        reset_view: "Reset view",
        counter: "{current} / {total}",
        delete: "Delete photo",
        category: "Category",
        date: "Date",
        open_photo: "Photo viewer",
        expand: "View full screen",
      },
      layout: {
        view_menu: "View",
        bulk_select: "Bulk select",
        bulk_select_exit: "Exit bulk select",
        select_all: "Select all",
        clear_selection: "Clear selection",
        download_selected: "Download selected",
        selected_count: "{count} of {total} selected",
        downloading: "Preparing download…",
        category_col: "Category",
        date_col: "Date",
        caption_col: "Caption",
        extraLarge: "Extra large icons",
        large: "Large icons",
        medium: "Medium icons",
        small: "Small icons",
        list: "List",
        details: "Details",
        tiles: "Tiles",
        content: "Content",
      },
    },
    mandal: {
      not_found_title: "Mandal not found",
      not_found_desc: "The mandal page you requested does not exist.",
      loading: "Loading mandal data from Neon…",
      snapshot: "Snapshot",
      what_happening: "What is happening",
      local_details: "Local details",
      related: "Related",
      other_mandals: "Other mandals",
      sources: "Sources",
      source_fallback: "Source",
    },
    documentary: {
      mandals_subtitle: "A story for each wound",
      mandal_profile_cta: "Read full mandal profile →",
      memo_cta: "Read the Memorandum",
    },
    memo: {
      submitted_label: "Officially Submitted",
      submitted_date: "May 13, 2026",
    },
    research: {
      geology_evidence_heading: "Key geological evidence",
      health_risks_heading: "Documented health risks",
    },
    dashboard: {
      who_suffix: "× WHO",
      chart_tooltip_max_f: "Max F",
      chart_tooltip_population: "Population",
      unit_mg_l: "mg/L",
    },
    solutions: { source_label: "Source" },
    watch: {
      brand: "Kanigiri Fluoride Watch",
      hide_player: "Hide player",
      play_here: "Play here",
    },
    home: {
      crisis_badge: "Drought · Fluoride · Migration",
      slide_aria: "Go to slide {n}",
    },
  },
  te: {
    brand: { tagline: "ఫ్లోరైడ్ వాచ్" },
    header: {
      menu_open: "నావిగేషన్ మెనూ తెరవండి",
      menu_close: "నావిగేషన్ మెనూ మూసివేయండి",
    },
    common: {
      all: "అన్నీ",
      source: "మూలం",
      back: "వెనక్కి",
      back_dashboard: "డాష్‌బోర్డ్‌కు తిరిగి",
      population: "జనాభా",
      fluoride: "ఫ్లోరైడ్",
      status: "స్థితి",
    },
    footer: {
      navigation: "నావిగేషన్",
      constituency: "నియోజకవర్గం",
      contact: "సంప్రదించండి",
      address: "కనిగిరి, ప్రకాశం జిల్లా, AP",
      copyright: "© 2026 కనిగిరి ఫ్లోరైడ్ సంక్షోభ అవగాహన. రాజకీయేతర చొరవ.",
      privacy: "గోప్యతా విధానం",
      terms: "వినియోగ నిబంధనలు",
    },
    gallery: {
      loading: "Neon నుండి గ్యాలరీ లోడ్ అవుతోంది…",
      load_error: "సర్వర్ నుండి గ్యాలరీ లోడ్ కాలేదు. npm run dev:server తో API ప్రారంభించండి.",
      upload_error: "అప్‌లోడ్ విఫలమైంది. API సర్వర్ మరియు Neon DB పని చేస్తున్నాయో చూడండి.",
      delete_error: "చిత్రం తొలగించలేకపోయాము.",
      read_error: "ఫైల్ చదవలేకపోయాము",
      showing_count: "{total} లో {shown} చూపిస్తోంది",
      category_label: "వర్గం",
      default_caption: "క్షేత్రం నుండి సమాచారం",
      uploading: "డేటా అప్‌లోడ్…",
      drag_drop: "ఫోటోలు డ్రాగ్ & డ్రాప్",
      file_types: "PNG, JPG లేదా WebP — అప్‌లోడ్ కు ముందు స్వయంచాలకంగా కుదించబడుతుంది",
      drop_hint: "అప్‌లోడ్ చేయడానికి డ్రాప్ చేయండి",
      feed_title: "డాక్యుమెంటేషన్ ఫీడ్",
      evidence_count: "{count} సాక్ష్య భాగాలు",
      no_images_in_category: "{category} లో చిత్రాలు లేవు.",
      image_alt: "వినియోగదారు డాక్యుమెంటేషన్",
      submission_label: "కమ్యూనిటీ సమర్పణ",
      verified_location: "ధృవీకరించిన స్థానం",
      policy_title: "మీడియా విధానం",
      filters: { All: "అన్నీ", Drought: "కరువు", Fluoride: "ఫ్లోరైడ్", Migration: "వలస" },
      viewer: {
        close: "మూసివేయి",
        previous: "మునుపటి ఫోటో",
        next: "తదుపరి ఫోటో",
        download: "డౌన్‌లోడ్",
        rotate_left: "ఎడమకు తిప్పు",
        rotate_right: "కుడికి తిప్పు",
        zoom_in: "జూమ్ ఇన్",
        zoom_out: "జూమ్ అవుట్",
        reset_view: "వీక్షణ రీసెట్",
        counter: "{current} / {total}",
        delete: "ఫోటో తొలగించు",
        category: "వర్గం",
        date: "తేదీ",
        open_photo: "ఫోటో వీక్షకం",
        expand: "పూర్తి తెర చూడండి",
      },
      layout: {
        view_menu: "వీక్షణ",
        bulk_select: "బల్క్ ఎంపిక",
        bulk_select_exit: "బల్క్ ఎంపిక మూసివేయి",
        select_all: "అన్నీ ఎంచుకోండి",
        clear_selection: "ఎంపిక తొలగించు",
        download_selected: "ఎంచుకున్నవి డౌన్‌లోడ్",
        selected_count: "{total} లో {count} ఎంచుకున్నారు",
        downloading: "డౌన్‌లోడ్ సిద్ధమవుతోంది…",
        category_col: "వర్గం",
        date_col: "తేదీ",
        caption_col: "వివరణ",
        extraLarge: "అతి పెద్ద చిహ్నాలు",
        large: "పెద్ద చిహ్నాలు",
        medium: "మధ్యమ చిహ్నాలు",
        small: "చిన్న చిహ్నాలు",
        list: "జాబితా",
        details: "వివరాలు",
        tiles: "టైల్స్",
        content: "కంటెంట్",
      },
    },
    mandal: {
      not_found_title: "మండలం కనుగొనబడలేదు",
      not_found_desc: "మీరు అభ్యర్థించిన మండల పేజీ లేదు.",
      loading: "Neon నుండి మండల డేటా లోడ్…",
      snapshot: "స్నాప్‌షాట్",
      what_happening: "ఏమి జరుగుతోంది",
      local_details: "స్థానిక వివరాలు",
      related: "సంబంధిత",
      other_mandals: "ఇతర మండలాలు",
      sources: "మూలాలు",
      source_fallback: "మూలం",
    },
    documentary: {
      mandals_subtitle: "ప్రతి గాయానికి ఒక కథ",
      mandal_profile_cta: "పూర్తి మండల ప్రొఫైల్ చదవండి →",
      memo_cta: "మెమోరాండం చదవండి",
    },
    memo: {
      submitted_label: "అధికారికంగా సమర్పించబడింది",
      submitted_date: "13 మే, 2026",
    },
    research: {
      geology_evidence_heading: "ముఖ్య భూగర్భ సాక్ష్యం",
      health_risks_heading: "నమోదైన ఆరోగ్య ప్రమాదాలు",
    },
    dashboard: {
      who_suffix: "× WHO",
      chart_tooltip_max_f: "గరిష్ట F",
      chart_tooltip_population: "జనాభా",
      unit_mg_l: "mg/L",
    },
    solutions: { source_label: "మూలం" },
    watch: {
      brand: "కనిగిరి ఫ్లోరైడ్ వాచ్",
      hide_player: "ప్లేయర్ దాచు",
      play_here: "ఇక్కడ ప్లే",
    },
    home: {
      crisis_badge: "కరువు · ఫ్లోరైడ్ · వలస",
      slide_aria: "స్లైడ్ {n} కు వెళ్లండి",
    },
  },
  hi: {
    brand: { tagline: "फ्लोराइड वॉच" },
    header: {
      menu_open: "नेविगेशन मेनू खोलें",
      menu_close: "नेविगेशन मेनू बंद करें",
    },
    common: {
      all: "सभी",
      source: "स्रोत",
      back: "वापस",
      back_dashboard: "डैशबोर्ड पर वापस",
      population: "जनसंख्या",
      fluoride: "फ्लोराइड",
      status: "स्थिति",
    },
    footer: {
      navigation: "नेविगेशन",
      constituency: "निर्वाचन क्षेत्र",
      contact: "संपर्क",
      address: "कनिगिरि, प्रकाशम जिला, AP",
      copyright: "© 2026 कनिगिरि फ्लोराइड संकट जागरूकता। गैर-राजनीतिक पहल।",
      privacy: "गोपनीयता नीति",
      terms: "उपयोग की शर्तें",
    },
    gallery: {
      loading: "Neon से गैलरी लोड हो रही है…",
      load_error: "सर्वर से गैलरी लोड नहीं हुई। npm run dev:server से API शुरू करें।",
      upload_error: "अपलोड विफल। API सर्वर और Neon DB चालू हैं या नहीं जाँचें।",
      delete_error: "छवि हटाई नहीं जा सकी।",
      read_error: "फ़ाइल पढ़ने में विफल",
      showing_count: "{total} में से {shown} दिखा रहे हैं",
      category_label: "श्रेणी",
      default_caption: "मैदान से अवलोकन",
      uploading: "डेटा अपलोड…",
      drag_drop: "फ़ोटो खींचें और छोड़ें",
      file_types: "PNG, JPG या WebP — अपलोड से पहले स्वतः संपीडित",
      drop_hint: "अपलोड के लिए छोड़ें",
      feed_title: "दस्तावेज़ फ़ीड",
      evidence_count: "{count} साक्ष्य",
      no_images_in_category: "{category} में कोई छवि नहीं।",
      image_alt: "उपयोगकर्ता दस्तावेज़",
      submission_label: "सामुदायिक जमा",
      verified_location: "सत्यापित स्थान",
      policy_title: "मीडिया नीति",
      filters: { All: "सभी", Drought: "सूखा", Fluoride: "फ्लोराइड", Migration: "पलायन" },
      viewer: {
        close: "बंद करें",
        previous: "पिछला फ़ोटो",
        next: "अगला फ़ोटो",
        download: "डाउनलोड",
        rotate_left: "बाएँ घुमाएँ",
        rotate_right: "दाएँ घुमाएँ",
        zoom_in: "ज़ूम इन",
        zoom_out: "ज़ूम आउट",
        reset_view: "दृश्य रीसेट",
        counter: "{current} / {total}",
        delete: "फ़ोटो हटाएँ",
        category: "श्रेणी",
        date: "तारीख",
        open_photo: "फ़ोटो दर्शक",
        expand: "पूर्ण स्क्रीन देखें",
      },
      layout: {
        view_menu: "दृश्य",
        bulk_select: "बल्क चयन",
        bulk_select_exit: "बल्क चयन बंद करें",
        select_all: "सभी चुनें",
        clear_selection: "चयन हटाएँ",
        download_selected: "चयनित डाउनलोड",
        selected_count: "{total} में से {count} चयनित",
        downloading: "डाउनलोड तैयार…",
        category_col: "श्रेणी",
        date_col: "तारीख",
        caption_col: "कैप्शन",
        extraLarge: "अतिरिक्त बड़े आइकन",
        large: "बड़े आइकन",
        medium: "मध्यम आइकन",
        small: "छोटे आइकन",
        list: "सूची",
        details: "विवरण",
        tiles: "टाइल्स",
        content: "सामग्री",
      },
    },
    mandal: {
      not_found_title: "मंडल नहीं मिला",
      not_found_desc: "आपने जो मंडल पेज माँगा वह मौजूद नहीं है।",
      loading: "Neon से मंडल डेटा लोड…",
      snapshot: "स्नैपशॉट",
      what_happening: "क्या हो रहा है",
      local_details: "स्थानीय विवरण",
      related: "संबंधित",
      other_mandals: "अन्य मंडल",
      sources: "स्रोत",
      source_fallback: "स्रोत",
    },
    documentary: {
      mandals_subtitle: "हर ज़ख्म की एक कहानी",
      mandal_profile_cta: "पूरा मंडल प्रोफ़ाइल पढ़ें →",
      memo_cta: "ज्ञापन पढ़ें",
    },
    memo: {
      submitted_label: "आधिकारिक रूप से जमा",
      submitted_date: "13 मई, 2026",
    },
    research: {
      geology_evidence_heading: "मुख्य भू-वैज्ञानिक साक्ष्य",
      health_risks_heading: "दर्ज स्वास्थ्य जोखिम",
    },
    dashboard: {
      who_suffix: "× WHO",
      chart_tooltip_max_f: "अधिकतम F",
      chart_tooltip_population: "जनसंख्या",
      unit_mg_l: "mg/L",
    },
    solutions: { source_label: "स्रोत" },
    watch: {
      brand: "कनिगिरि फ्लोराइड वॉच",
      hide_player: "प्लेयर छुपाएँ",
      play_here: "यहाँ चलाएँ",
    },
    home: {
      crisis_badge: "सूखा · फ्लोराइड · पलायन",
      slide_aria: "स्लाइड {n} पर जाएँ",
    },
  },
};

export function getUiLabels(lang: Language): UiLabels {
  return uiLabels[lang] ?? uiLabels.en;
}

export function crisisTagLabel(
  labels: UiLabels,
  tag: string
): string {
  const map: Record<string, string> = {
    Drought: labels.gallery.filters.Drought,
    Fluoride: labels.gallery.filters.Fluoride,
    Migration: labels.gallery.filters.Migration,
  };
  return map[tag] ?? tag;
}
