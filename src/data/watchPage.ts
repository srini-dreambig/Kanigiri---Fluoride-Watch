import type { Language } from "../translations";
import type { VideoRelevance } from "./youtubeVideos";

export const watchPageCopy = {
  en: {
    title: "Watch & Verify",
    subtitle:
      "External reports on Kanigiri and Prakasam fluorosis. Review each link; remove anything off-topic in src/data/youtubeVideos.ts.",
    featured: "Featured",
    openYoutube: "Open on YouTube",
    allVideos: "YouTube library",
    searchTitle: "Find more on YouTube",
    searchDesc: "Open these searches, pick Kanigiri / Prakasam clips, and add the watch?v= ID to the data file.",
    relatedTitle: "Related news video (not YouTube)",
    relatedDesc: "Same crisis on broadcaster sites — add YouTube IDs here if you find re-uploads.",
    relevanceLabels: {
      "kanigiri-prakasam": "Kanigiri / Prakasam",
      "prakasam-district": "Prakasam district",
      "regional-parallel": "Regional parallel",
      "water-solution": "Water / infrastructure",
      "for-review": "Review — may remove",
    } satisfies Record<VideoRelevance, string>,
  },
  te: {
    title: "చూడండి & నిర్ధారించండి",
    subtitle:
      "కనిగిరి, ప్రకాశం ఫ్లోరోసిస్‌పై బయటి రిపోర్టులు. ప్రతి లింక్‌ను సమీక్షించండి; అనవసరమైనవి src/data/youtubeVideos.ts లో తీసివేయండి.",
    featured: "ముఖ్యమైనవి",
    openYoutube: "YouTube లో తెరవండి",
    allVideos: "YouTube సంగ్రహం",
    searchTitle: "YouTube లో మరింత వెతకండి",
    searchDesc: "ఈ సెర్చ్ లు తెరిచి, కనిగిరి/ప్రకాశం క్లిప్ లను ఎంచుకుని watch?v= ID ను డేటా ఫైల్‌లో చేర్చండి.",
    relatedTitle: "సంబంధిత వార్తా వీడియో (YouTube కాదు)",
    relatedDesc: "ప్రసారక సైట్‌లలో అదే సంక్షోభం — రీ-అప్‌లోడ్ ఉంటే YouTube ID చేర్చండి.",
    relevanceLabels: {
      "kanigiri-prakasam": "కనిగిరి / ప్రకాశం",
      "prakasam-district": "ప్రకాశం జిల్లా",
      "regional-parallel": "ప్రాంతీయ పోలిక",
      "water-solution": "నీరు / మౌలిక సదుపాయాలు",
      "for-review": "సమీక్ష — తీసివేయవచ్చు",
    } satisfies Record<VideoRelevance, string>,
  },
  hi: {
    title: "देखें और जाँचें",
    subtitle:
      "कनिगिरि और प्रकाशम फ्लोरोसिस पर बाहरी रिपोर्ट। हर लिंक समीक्षा करें; अप्रासंगिक हटाएँ src/data/youtubeVideos.ts में।",
    featured: "मुख्य",
    openYoutube: "YouTube पर खोलें",
    allVideos: "YouTube संग्रह",
    searchTitle: "YouTube पर और खोजें",
    searchDesc: "ये खोज खोलें, कनिगिरि/प्रकाशम क्लिप चुनें, watch?v= ID डेटा फ़ाइल में जोड़ें।",
    relatedTitle: "संबंधित समाचार वीडियो (YouTube नहीं)",
    relatedDesc: "प्रसारकों की साइट पर वही संकट — री-अपलोड मिले तो YouTube ID जोड़ें।",
    relevanceLabels: {
      "kanigiri-prakasam": "कनिगिरि / प्रकाशम",
      "prakasam-district": "प्रकाशम जिला",
      "regional-parallel": "क्षेत्रीय तुलना",
      "water-solution": "पानी / बुनियादी ढाँचा",
      "for-review": "समीक्षा — हटा सकते हैं",
    } satisfies Record<VideoRelevance, string>,
  },
};

export function getWatchCopy(lang: Language) {
  return watchPageCopy[lang];
}
