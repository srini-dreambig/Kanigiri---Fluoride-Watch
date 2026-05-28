export type Language = "en" | "te" | "hi";

export interface Translation {
  nav: {
    dashboard: string;
    video: string;
    solutions: string;
    memo: string;
    action: string;
    gallery: string;
    realities: string;
  };
  hero: {
    emergency: string;
    headline: string;
    subheadline: string;
    dashboard_btn: string;
    video_btn: string;
    video_placeholder: string;
    video_description: string;
  };
  dashboard: {
    title: string;
    description: string;
    fluoride: {
      title: string;
      sub: string;
      who_safe: string;
      kanigiri_max: string;
      danger: string;
      safe: string;
    };
    population: {
      title: string;
      sub: string;
      risk_note: string;
    };
    health: {
      title: string;
      sub: string;
      ckd_prev: string;
      ckd_patients: string;
      bone_deform: string;
      bone_cases: string;
      dialysis_cycle: string;
    };
  };
  video: {
    title: string;
    description: string;
    scene: string;
    critical_focus: string;
    visual_desc: string;
    script: string;
    meaning: string;
  };
  solutions: {
    title: string;
    description: string;
    immediate_btn: string;
    permanent_btn: string;
    immediate: {
      tanker_title: string;
      tanker_desc: string;
      filter_title: string;
      filter_desc: string;
      dialysis_title: string;
      dialysis_desc: string;
    };
    permanent: {
      project_title: string;
      target: string;
      project_desc: string;
      completion: string;
      funding_gap: string;
    };
    why_2026: {
      title: string;
      desc: string;
      tunnel: string;
      headworks: string;
      canals: string;
      status_critical: string;
      status_progress: string;
      status_pending: string;
      support_btn: string;
    };
  };
  memo: {
    label: string;
    title: string;
    sub: string;
    intro: string;
    req1_title: string;
    req1_desc: string;
    req2_title: string;
    req2_desc: string;
    req3_title: string;
    req3_desc: string;
    download_btn: string;
  };
  mandal_details: {
    title: string;
    description: string;
    list: {
      name: string;
      pop: string;
      fluoride: string;
      status: string;
      details: string;
    }[];
  };
  research: {
    title: string;
    geology_title: string;
    geology_desc: string;
    health_title: string;
    health_desc: string;
    citations: {
      title: string;
      source: string;
      year: string;
      highlights: string[];
      url: string;
    }[];
    blogs: {
      title: string;
      author: string;
      publisher: string;
      date: string;
      excerpt: string;
      content: string;
      category: string;
    }[];
  };
  gallery: {
    title: string;
    description: string;
    upload_btn: string;
    no_images: string;
    upload_success: string;
    policy: string;
  };
  memo_status: {
    title: string;
    description: string;
  };
  story: {
    title: string;
    subtitle: string;
    geology_story: string;
    human_cost_title: string;
    human_cost_desc: string;
    symptoms: {
      title: string;
      desc: string;
    }[];
    causes_title: string;
    causes_list: string[];
    hope_title: string;
    relief_measures: string[];
    cta_title: string;
    cta_list: string[];
    quote: string;
  };
  realities: {
    title: string;
    subtitle: string;
    drought: {
      title: string;
      badge: string;
      description: string;
      stats: { label: string; value: string }[];
      timeline: { year: string; event: string }[];
      articles: { title: string; source: string; year: string; url: string; excerpt: string }[];
    };
    fluoride: {
      title: string;
      badge: string;
      description: string;
      stats: { label: string; value: string }[];
      articles: { title: string; source: string; year: string; url: string; excerpt: string }[];
    };
    migration: {
      title: string;
      badge: string;
      description: string;
      stats: { label: string; value: string }[];
      articles: { title: string; source: string; year: string; url: string; excerpt: string }[];
    };
    factcheck_label: string;
    source_label: string;
    year_label: string;
    read_more: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      dashboard: "Data Dashboard",
      video: "Video Script",
      solutions: "Solutions",
      memo: "Memorandum",
      action: "Take Action",
      gallery: "Media Gallery",
      realities: "Harsh Realities",
    },
    hero: {
      emergency: "Environmental Emergency",
      headline: "Our Children’s Smiles Are Fading. Our Elders’ Bones Are Breaking. Please Enough Is Enough.",
      subheadline: "In the heart of Prakasam district, the water that once sustained generations now carries a hidden toxin: excess fluoride. This is a human tragedy unfolding in real time.",
      dashboard_btn: "View Data Dashboard",
      video_btn: "The Cry Video",
      video_placeholder: "5-Minute Presentation Video",
      video_description: "A visual narrative of the Fluoride crisis in Kanigiri.",
    },
    dashboard: {
      title: "Statistical Dashboard",
      description: "Critical health and water metrics highlighting the catastrophic fluoride impact.",
      fluoride: {
        title: "Fluoride Concentration",
        sub: "Current localized levels in P.C. Palli wells.",
        who_safe: "WHO Safe: 1.5",
        kanigiri_max: "Kanigiri Max: 15.0",
        danger: "DANGER: High risk of skeletal fluorosis and permanent organ damage.",
        safe: "Within acceptable limits for human consumption.",
      },
      population: {
        title: "Affected Population",
        sub: "People across 6 mandals at severe risk.",
        risk_note: "*Risk level based on historical ground water reports.",
      },
      health: {
        title: "Health Impact Rate",
        sub: "Dialysis dependency and CKD prevalence.",
        ckd_prev: "CKD Prevalence",
        ckd_patients: "42,000 Patients",
        bone_deform: "Bone Deformities",
        bone_cases: "18,000+ Cases",
        dialysis_cycle: "Dialysis Cycles Daily",
      },
    },
    video: {
      title: "Video Script & Media Walkthrough",
      description: "A structured 5-minute narrative designed to convey gravity to the State & Central Governments.",
      scene: "Scene",
      critical_focus: "Critical Focus",
      visual_desc: "Visual Description",
      script: "Original Script",
      meaning: "English Meaning",
    },
    solutions: {
      title: "The Solutions Tracker",
      description: "We are mitigating immediate pain through local leadership while striving for a permanent solution.",
      immediate_btn: "Immediate Relief",
      permanent_btn: "Permanent Solution",
      immediate: {
        tanker_title: "Safe Tanker Supply",
        tanker_desc: "MLA-led initiative supplying 50,000 liters daily to high-fluoride hamlets.",
        filter_title: "Local Filter Plants",
        filter_desc: "Installation of community-level RO plants in 12 critical villages.",
        dialysis_title: "Secondary Dialysis Hub",
        dialysis_desc: "Emergency setup of a 10-bed dialysis unit in Kanigiri Town.",
      },
      permanent: {
        project_title: "Surface Water Project",
        target: "Target: 2026",
        project_desc: "A major ₹1,290 crore project for piped surface water supply is currently in progress, focusing first on Kanigiri and nearby areas like Kammavaripalli.",
        completion: "Project Completion",
        funding_gap: "Funding Gap: Est. ₹450 Crores needed for Veligonda connectivity.",
      },
      why_2026: {
        title: "Why 2026?",
        desc: "Every day we wait, 4 more citizens enter the dialysis cycle.",
        tunnel: "Tunnel Lining",
        headworks: "Head Works",
        canals: "Canal Networking",
        status_critical: "Critical",
        status_progress: "In Progress",
        status_pending: "Pending Funds",
        support_btn: "Support the Mission",
      },
    },
    memo: {
      label: "Official Memorandum",
      title: "Formal Appeal to State & Central Governments",
      sub: "Representing the People of Kanigiri Constituency",
      intro: "Respected Ministers, we formally submit this appeal regarding the grave ecological and healthcare crisis in Kanigiri. 79 years of waiting has led to generational health failure. We urge both the Government of Andhra Pradesh and the Union Government of India to collaborate for an immediate resolution.",
      req1_title: "Special Fluoride Zone Designation",
      req1_desc: "Formal recognition of P.C. Palli and Kanigiri as high-impact zones to unlock special disaster relief funds.",
      req2_title: "Jal Jeevan Mission Allocation",
      req2_desc: "A dedicated grant of ₹450 Crores to bridge the Veligonda Project funding gap.",
      req3_title: "Regional Nephrology Center",
      req3_desc: "Immediate establishment and funding for a 100-bed advanced dialysis facility.",
      download_btn: "Download PDF Memorandum",
    },
    mandal_details: {
      title: "Constituency Deep Dive",
      description: "An granular look at the six mandals forming the Kanigiri Assembly Segment, each facing unique hydrological challenges.",
      list: [
        { name: "P.C. Palli", pop: "48,500", fluoride: "8.5 - 15.0 mg/L", status: "Critical", details: "Epicenter of the crisis. Local groundwater is highly toxic, causing widespread skeletal fluorosis and joint deformities among residents." },
        { name: "Kanigiri", pop: "110,000", fluoride: "2.5 - 4.5 mg/L", status: "Moderate", details: "The urban hub suffers from extreme seasonal water scarcity. Outlying colonies lack surface water connections and rely on contaminated wells." },
        { name: "Pamur", pop: "62,000", fluoride: "4.0 - 7.0 mg/L", status: "Severe", details: "Combines high salinity with fluoride. Dental fluorosis is nearly universal among children here, affecting their permanent teeth early." },
        { name: "C.S. Puram", pop: "54,000", fluoride: "3.5 - 6.0 mg/L", status: "Severe", details: "Remote hilly terrain makes pipeline infrastructure difficult. Deep borewells tap into fluoride-rich geological layers." },
        { name: "H.M. Padu", pop: "42,000", fluoride: "5.0 - 9.0 mg/L", status: "Critical", details: "Reportedly has the highest per-capita incidence of Chronic Kidney Disease (CKD) in the entire Prakasam district due to prolonged toxic intake." },
        { name: "Veligandla", pop: "38,000", fluoride: "4.5 - 7.5 mg/L", status: "Severe", details: "A primarily agricultural mandal where farmers and laborers are double-affected by physical labor and poisoned water sources." }
      ]
    },
    research: {
      title: "Scientific Research & Proofs",
      geology_title: "The Kanigiri Pluton Exception",
      geology_desc: "The root cause is a unique geological formation known as the 'Kanigiri Pluton'—a granitic intrusive rich in fluorine-bearing minerals like fluorite and apatite which leach directly into the groundwater.",
      health_title: "Toxic Legacy",
      health_desc: "Prolonged exposure (over 1.5 mg/L) leads to irrevocable biological changes, transforming Kanigiri into a 'hotspot' for endemic fluorosis recognized globaly by health agencies.",
      citations: [
        {
          title: "Prakasam Battles Fluoride Crisis",
          source: "Deccan Chronicle",
          year: "2025",
          highlights: ["Villages in Kanigiri and PC Palli are among the worst hit.", "Groundwater levels found toxic across 6 critical mandals."],
          url: "https://www.deccanchronicle.com"
        },
        {
          title: "Mineralization in Granitic Incursive",
          source: "ResearchGate / IJSEA",
          year: "2015",
          highlights: ["Identifies the Kanigiri-Podili tract as having abnormal fluoride content.", "Links specific mineralogy of the local pluton to water toxicity."],
          url: "https://www.researchgate.net"
        },
        {
          title: "Endemic Skeletal Fluorosis Cases",
          source: "National Institutes of Health (NIH)",
          year: "2013",
          highlights: ["First recorded endemic cases in Podili and Kanigiri.", "Significant prevalence of dental fluorosis among 15-year-old children."],
          url: "https://pmc.ncbi.nlm.nih.gov"
        },
        {
          title: "Fluoride Toxicity & Renal Disease",
          source: "The Hindu",
          year: "2018",
          highlights: ["Direct correlation between fluoride intake and CKD (Chronic Kidney Disease).", "Prakasam district reported as a hub for non-diabetic renal failure."],
          url: "https://www.thehindu.com"
        }
      ],
      blogs: [
        {
          title: "Collector Orders Emergency Measures as Toxicity Spikes",
          author: "DC Bureau",
          publisher: "Deccan Chronicle",
          date: "November 2025",
          category: "Emergency Update",
          excerpt: "Urgent orders issued for tanker water supply to Kammavaripalli and Dirishavancha as fluoride levels exceed 15mg/L.",
          content: "In a swift response to the deteriorating water quality in Kanigiri constituency, the District Collector has ordered the immediate deployment of water tankers to several hamlets. Recent tests conducted in P.C. Palli mandal showed fluoride concentrations nearly ten times the safe limit. The administration is prioritizing school children and pregnant women for RO water distribution."
        },
        {
          title: "Prakasam Still Battles Fluoride Crisis: A Decade of Neglect?",
          author: "Staff Reporter",
          publisher: "Deccan Chronicle",
          date: "March 2025",
          category: "Special Report",
          excerpt: "Despite numerous schemes, over 100 villages in Kanigiri and Podili continue to consume poisoned groundwater.",
          content: "A detailed investigation into the water infrastructure of western Prakasam reveals significant bottlenecks in the Veligonda project. While pipelines have reached main roads, the internal distribution network for remote villages remains on paper. Residents continue to report joint pains and dental discoloration, signs of early-stage fluorosis."
        },
        {
          title: "Water Toxicity Takes a Heavy Toll on Young Generations",
          author: "P. Samuel",
          publisher: "The Hindu",
          date: "2015 (Updated 2025)",
          category: "Health Focus",
          excerpt: "Children in Kanigiri villages are developing skeletal deformities before they reach adolescence.",
          content: "The fluoride problem in Kanigiri is not just a health issue; it is a socio-economic barrier. Families spend half their income on medical expenses and buying private RO water. The 'Smile of Kanigiri'—a term used for the brown-stained teeth of local children—remains a haunting symbol of the lack of clean surface water."
        },
        {
          title: "Fluoride Problem Accentuates Renal Diseases in Dry Belts",
          author: "Health Correspondent",
          publisher: "The Hindu",
          date: "2017",
          category: "Medical Research",
          excerpt: "Nephrologists point to fluoride as a major co-factor in the high prevalence of Chronic Kidney Disease in the region.",
          content: "Medical camps held across Podili and Kanigiri have identified a disturbing trend of kidney failures in young adults. Unlike traditional CKD, these cases often show no history of diabetes or hypertension, pointing directly to environmental toxins like fluoride and high mineralization in groundwater."
        },
        {
          title: "Markapur Region: Geological Assessment of Contamination",
          author: "Dr. K. S. Rao et al.",
          publisher: "Applied Water Science",
          date: "2019",
          category: "Scientific Study",
          excerpt: "A comprehensive study on the leaching of minerals from the Kanigiri Pluton into the local aquifer.",
          content: "The research highlights that the alkaline conditions of the soil accelerate the leaching of fluoride from granitic rocks. The study recommends managed aquifer recharge and a complete shift to surface water sources to prevent further degradation of public health."
        }
      ]
    },
    gallery: {
      title: "Impact Gallery",
      description: "Visual evidence of the crisis and ongoing local relief efforts. Users can contribute by uploading photos from their villages.",
      upload_btn: "Upload Photo",
      no_images: "No photos uploaded yet. Be the first to document the situation.",
      upload_success: "Photo successfully uploaded to the queue.",
      policy: "By uploading media, you consent to its use in formal appeals to both State and Central Governments. Please ensure photos do not reveal private information unless necessary for documenting health symptoms or infrastructure failure."
    },
    memo_status: {
      title: "Submission Status",
      description: "This memorandum has been formally acknowledged by both State and Central authorities. We are awaiting a joint technical study team visit to P.C. Palli mandal for a ground-level assessment."
    },
    story: {
      title: "Fluoride Crisis in Kanigiri",
      subtitle: "A Silent Poison in Our Water",
      geology_story: "Kanigiri lies in a region underlain by granitic rocks rich in fluoride-bearing minerals. Over decades, this natural geology, combined with groundwater over-extraction, has led to dangerously high fluoride levels — often reaching 5–15+ mg/L in villages like Kammavaripalli and Dirishavancha.",
      human_cost_title: "Lives Changed Forever",
      human_cost_desc: "More than 10,000 people across hundreds of villages are seriously affected. These are not statistics; they are farmers, mothers, and students.",
      symptoms: [
        { title: "Children", desc: "Bright eyes but teeth marked by brown or black stains. Deformities appear even at tender ages." },
        { title: "Adults", desc: "Joint pain, stiffness, bowed legs, and hunched backs. Many become completely dependent on family." },
        { title: "Organ Failure", desc: "Fluoride toxicity exacerbates chronic kidney disease (CKD), leading to rapid renal failure." }
      ],
      causes_title: "Why Is This Happening?",
      causes_list: [
        "Geological Source: Fluoride leaches from granitic rocks into alkaline groundwater.",
        "Human Factors: Over-reliance on borewells and poor groundwater recharge.",
        "Persistence: High levels (15+ mg/L) persist despite emergency tanker supplies."
      ],
      hope_title: "Rays of Hope & Urgent Needs",
      relief_measures: [
        "₹1,290 crore project for piped surface water is in progress.",
        "Emergency tanker water and RO plants in affected hamlets.",
        "Urgent need for local dialysis centers in Kanigiri or Podili."
      ],
      cta_title: "Join the Fight for Clean Water",
      cta_list: [
        "Share this story. Awareness is the first step.",
        "Support local efforts for safe water projects.",
        "Demand faster implementation of surface water schemes.",
        "Donate/volunteer with NGOs working on water quality."
      ],
      quote: "We just want water we can drink without fear."
    },
    realities: {
      title: "The Harsh Realities of Kanigiri",
      subtitle: "Drought. Poison. Exodus. Three crises that have stripped an entire region of dignity, health, and home.",
      factcheck_label: "Fact Checked",
      source_label: "Source",
      year_label: "Year",
      read_more: "Read Full Article",
      drought: {
        title: "The Perpetual Drought",
        badge: "Water Scarcity",
        description: "Kanigiri and western Prakasam district have endured five consecutive drought years. Surface water sources — tanks, ponds, rivers — have all dried up. Even borewells dug to 1,000 feet are running dry within weeks of completion. The government supplies only 20–25 litres of water per person per day against the WHO-recommended minimum of 50 litres. A thriving black market has emerged where water tankers meant for the poor are diverted to hotels and wealthy farmers for ₹500 per 4,000 litre tanker, while ordinary villagers pay ₹10 per 5-litre bottle.",
        stats: [
          { label: "Consecutive Drought Years", value: "5+" },
          { label: "Habitations Facing Water Scarcity", value: "280+" },
          { label: "Daily Tankers Deployed", value: "422" },
          { label: "Water Per Person/Day (Actual)", value: "20–25 L" },
          { label: "Villages Fully Deserted", value: "24+" },
          { label: "Govt Dues Owed to Contractors", value: "₹50 Cr" }
        ],
        timeline: [
          { year: "2019", event: "Government stops paying water tanker contractors. Dues cross ₹50 crore." },
          { year: "2020", event: "Borewells at 600-ft depth fail. Villagers switch to 1,000-ft drilling." },
          { year: "2021", event: "24+ villages in Kanigiri and Yerragondapalem mandals officially deserted." },
          { year: "2022", event: "Water black market openly reported by The News Minute. ₹500 per tanker to hotels and rich farmers." },
          { year: "2023", event: "Fifth consecutive drought year. 91 habitations in Kanigiri alone listed as 'vulnerable'." },
          { year: "2025", event: "Government review meeting held on April 30 on drinking water and fluoride. No permanent solution yet." }
        ],
        articles: [
          {
            title: "In Andhra's Drought-Prone Prakasam, a Water Black Market Thrives",
            source: "The News Minute",
            year: "2022",
            url: "https://www.thenewsminute.com/article/andhras-drought-prone-prakasam-water-black-market-thrives-100203",
            excerpt: "Water tankers meant for drought-hit villages are diverted to hotels and rich farmers. Officials have no mechanism to stop it. Villagers pay ₹10 per 5-litre bottle while the government owes contractors ₹50 crore in unpaid dues."
          },
          {
            title: "In Prakasam, People Desert Villages for a Drop of Water",
            source: "ReliefWeb / The Hindu",
            year: "2022",
            url: "https://reliefweb.int/report/india/prakasam-people-desert-villages-drop-water",
            excerpt: "At least 24 villages across Kanigiri, Yerragondapalem, Giddalur and Markapuram constituencies have been abandoned. The fifth straight drought year has pushed borewells to fail at 1,000 feet, leaving no accessible water underground."
          },
          {
            title: "Drinking Water Crisis Worsens in Western Prakasam District",
            source: "The Hans India",
            year: "2023",
            url: "https://www.thehansindia.com/andhra-pradesh/drinking-water-crisis-worsens-in-western-prakasam-district-788108",
            excerpt: "Western Prakasam, which depends entirely on rain for recharge, is getting only 20–25 litres per capita per day. The rural water supply department is struggling to reach 280 scarcity-hit habitations with just 422 tankers."
          }
        ]
      },
      fluoride: {
        title: "The Silent Fluoride Poison",
        badge: "Chemical Contamination",
        description: "Prakasam is one of India's 15 most severely fluoride-affected districts. Over 700 villages are contaminated, but the government provides safe water to only 27. The Kanigiri Pluton — a deep granitic rock formation — leaches fluoride directly into groundwater, with levels in P.C. Palli reaching 15 mg/L (10× the WHO limit of 1.5 mg/L). India's first recorded case of endemic fluorosis was reported from this very district in 1937. Despite 88 years of scientific awareness, the crisis remains unresolved.",
        stats: [
          { label: "Villages Fluoride-Affected in Prakasam", value: "700+" },
          { label: "Villages Receiving Safe Water", value: "Only 27" },
          { label: "Max Fluoride Level (P.C. Palli)", value: "15 mg/L" },
          { label: "WHO Safe Limit", value: "1.5 mg/L" },
          { label: "Year First Endemic Fluorosis Recorded", value: "1937" },
          { label: "Habitations with >5 ppm Fluoride", value: "41" }
        ],
        articles: [
          {
            title: "Prakasam Still Battles Fluoride Crisis",
            source: "Deccan Chronicle",
            year: "2025",
            url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
            excerpt: "The 2024 Union Jal Shakti groundwater quality report confirms Prakasam as one of India's 15 most severely fluoride-hit districts. 700+ villages remain contaminated. Fluoride levels cross 15 mg/L in parts of Kanigiri and P.C. Palli mandals."
          },
          {
            title: "Prakasam Faces Nalgonda Fate",
            source: "Fluoride Action Network",
            year: "2018",
            url: "https://fluoridealert.org/news/prakasam-faces-nalgonda-fate/",
            excerpt: "Health activists warn that Prakasam district is headed for a fluoride catastrophe similar to Nalgonda in Telangana. 1,009 out of 1,769 villages are contaminated, but only 27 receive government-supplied safe water."
          },
          {
            title: "Geochemical Behavior of Fluoride-Rich Groundwater in Markapur, Andhra Pradesh",
            source: "NIH / PMC (Applied Water Science)",
            year: "2019",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5996165/",
            excerpt: "Peer-reviewed study confirms fluoride leaches from the Kanigiri Pluton granitic rocks. Alkaline soil conditions accelerate leaching. Study calls for a complete switch to surface water sources to halt further public health degradation."
          }
        ]
      },
      migration: {
        title: "The Mass Exodus",
        badge: "Human Displacement",
        description: "Forced by poisoned water and parched land, thousands of Kanigiri families have abandoned their ancestral villages. Young men migrate to Hyderabad, Chennai, and Bengaluru as daily-wage labourers, leaving behind elderly parents and children. Entire villages — Muraripalli, Jayarampuram, and dozens more — have been deserted. Those who stay back are caught between contaminated groundwater and the unbearable cost of buying safe water. A family of four spends ₹600–₹1,200 per month on bottled RO water alone — nearly 20% of a daily-wage family's income.",
        stats: [
          { label: "Villages Abandoned (Unofficial)", value: "24+" },
          { label: "Constituencies with Deserted Villages", value: "4" },
          { label: "Monthly Water Expense per Family", value: "₹600–₹1,200" },
          { label: "% of Income Spent on Medical + Water", value: "~50%" },
          { label: "Primary Migration Destinations", value: "Hyderabad, Chennai" },
          { label: "Households Forced to Leave Permanently", value: "Thousands" }
        ],
        articles: [
          {
            title: "As Drought Spreads, Migration Gains Momentum in AP",
            source: "IATP / The Hindu",
            year: "2020",
            url: "https://www.iatp.org/news/as-drought-spreads-migration-gains-momentum-in-ap-india",
            excerpt: "Drought-driven migration has become a survival strategy in Prakasam and surrounding districts. Hundreds leave within weeks of borewell failure. Young men travel to cities for construction work while their families remain in water-scarce villages."
          },
          {
            title: "How Indiscriminate Borewell Digging Drove Prakasam into Water Crisis",
            source: "The News Minute",
            year: "2022",
            url: "https://www.thenewsminute.com/article/how-indiscriminate-digging-borewells-has-driven-aps-prakasam-water-crisis-99745",
            excerpt: "Over-exploitation of groundwater through unregulated borewells has permanently lowered the water table. Borewells dug to 1,000 feet go dry within weeks. The crisis disproportionately harms marginal farmers and daily-wage workers who cannot afford to re-drill."
          },
          {
            title: "Water Toxicity Takes Heavy Toll on Young Generations",
            source: "The Hindu",
            year: "2015 (Updated 2025)",
            url: "https://www.thehindu.com",
            excerpt: "Families in Kanigiri villages spend half their income on medical expenses and private RO water. Children develop skeletal deformities before adolescence. Those who can afford to — leave. Those who can't, suffer."
          }
        ]
      }
    }
  },
  te: {
    nav: {
      dashboard: "డేటా డ్యాష్‌బోర్డ్",
      video: "వీడియో స్క్రిప్ట్",
      solutions: "పరిష్కారాలు",
      memo: "మెమోరాండం",
      action: "చర్య తీసుకోండి",
      gallery: "మీడియా గ్యాలరీ",
      realities: "కఠోర వాస్తవాలు",
    },
    hero: {
      emergency: "పర్యావరణ అత్యవసర పరిస్థితి",
      headline: "మా పిల్లల చిరునవ్వులు మాయమవుతున్నాయి. మా పెద్దల ఎముకలు విరిగిపోతున్నాయి. దయచేసి ఇది ఇక చాలు.",
      subheadline: "ప్రకాశం జిల్లా నడిబొడ్డున, తరతరాలకు ప్రాణాధారమైన నీరు ఇప్పుడు ఒక దాగి ఉన్న విషం: అధిక ఫ్లోరైడ్. ఇది నిజ సమయంలో జరుగుతున్న ఒక మానవ విషాదం.",
      dashboard_btn: "డేటా డ్యాష్‌బోర్డ్‌ని చూడండి",
      video_btn: "ది క్రై వీడియో",
      video_placeholder: "5-నిమిషాల ప్రజెంటేషన్ వీడియో",
      video_description: "కనిగిరిలోని ఫ్లోరైడ్ సంక్షోభం యొక్క దృశ్య వివరణ.",
    },
    dashboard: {
      title: "గణాంక డ్యాష్‌బోర్డ్",
      description: "ఫ్లోరైడ్ ప్రభావాన్ని హైలైట్ చేసే కీలక ఆరోగ్య మరియు నీటి గణాంకాలు.",
      fluoride: {
        title: "ఫ్లోరైడ్ ఏకాగ్రత",
        sub: "పి.సి.పల్లి బావులలో ప్రస్తుత స్థానికీకరించిన స్థాయిలు.",
        who_safe: "WHO సురక్షితం: 1.5",
        kanigiri_max: "కనిగిరి గరిష్టం: 15.0",
        danger: "ప్రమాదం: అస్థిపంజర ఫ్లోరోసిస్ మరియు శాశ్వత అవయవ నష్టం యొక్క అధిక ప్రమాదం.",
        safe: "మానవ వినియోగానికి ఆమోదయోగ్యమైన పరిమితుల్లో ఉంది.",
      },
      population: {
        title: "ప్రభావిత జనాభా",
        sub: "6 మండలాల్లోని ప్రజలు తీవ్ర ప్రమాదంలో ఉన్నారు.",
        risk_note: "*చారిత్రక భూగర్భ జల నివేదికల ఆధారంగా ప్రమాద స్థాయి.",
      },
      health: {
        title: "ఆరోగ్య ప్రభావ రేటు",
        sub: "డయాలసిస్ డిపెండెన్సీ మరియు CKD ప్రాబల్యం.",
        ckd_prev: "CKD ప్రాబల్యం",
        ckd_patients: "42,000 మంది రోగులు",
        bone_deform: "ఎముకల వైకల్యాలు",
        bone_cases: "18,000+ కేసులు",
        dialysis_cycle: "రోజూ డయాలసిస్ చక్రాలు",
      },
    },
    video: {
      title: "వీడియో స్క్రిప్ట్ & మీడియా వాక్‌త్రూ",
      description: "రాష్ట్ర మరియు కేంద్ర ప్రభుత్వాలకు పరిస్థితి తీవ్రతను తెలియజేయడానికి రూపొందించిన స్క్రిప్ట్.",
      scene: "దృశ్యం",
      critical_focus: "కీలక దృష్టి",
      visual_desc: "దృశ్య వివరణ",
      script: "అసలు స్క్రిప్ట్",
      meaning: "ఆంగ్ల అర్థం",
    },
    solutions: {
      title: "పరిష్కారాల ట్రాకర్",
      description: "మేము స్థానిక నాయకత్వం ద్వారా తక్షణ ఉపశమనాన్ని అందిస్తున్నాము మరియు శాశ్వత పరిష్కారం కోసం కృషి చేస్తున్నాము.",
      immediate_btn: "తక్షణ ఉపశమనం",
      permanent_btn: "శాశ్వత పరిష్కారం",
      immediate: {
        tanker_title: "సురక్షిత ట్యాంకర్ సరఫరా",
        tanker_desc: "ఫ్లోరైడ్ అధికంగా ఉన్న ఆవాసాలకు రోజుకు 50,000 లీటర్ల సరఫరా.",
        filter_title: "స్థానిక ఫిల్టర్ ప్లాంట్లు",
        filter_desc: "12 కీలక గ్రామాల్లో కమ్యూనిటీ స్థాయి RO ప్లాంట్ల ఏర్పాటు.",
        dialysis_title: "ద్వితీయ డయాలసిస్ హబ్",
        dialysis_desc: "కనిగిరి పట్టణంలో 10 పడకల డయాలసిస్ యూనిట్ అత్యవసర ఏర్పాటు.",
      },
      permanent: {
        project_title: "ఉపరితల నీటి ప్రాజెక్ట్",
        target: "లక్ష్యం: 2026",
        project_desc: "కనిగిరి మరియు కమ్మవారిపల్లి వంటి సమీప ప్రాంతాలపై దృష్టి సారించి, పైపుల ద్వారా ఉపరితల నీటి సరఫరా కోసం ₹1,290 కోట్ల భారీ ప్రాజెక్టు ప్రస్తుతం పురోగతిలో ఉంది.",
        completion: "ప్రాజెక్ట్ పూర్తి",
        funding_gap: "నిధుల కొరత: వెలిగొండ కనెక్టివిటీ కోసం సుమారు ₹450 కోట్లు అవసరం.",
      },
      why_2026: {
        title: "2026 ఎందుకు?",
        desc: "మేము వేచి ఉన్న ప్రతిరోజూ, మరో 4 గురు పౌరులు డయాలసిస్ చక్రంలోకి ప్రవేశిస్తున్నారు.",
        tunnel: "టన్నెల్ లైనింగ్",
        headworks: "హెడ్ వర్క్స్",
        canals: "కాలువల నెట్‌వర్కింగ్",
        status_critical: "క్లిష్టమైనది",
        status_progress: "పురోగతిలో ఉంది",
        status_pending: "నిధుల కోసం వేచి ఉంది",
        support_btn: "మిషన్‌కు మద్దతు ఇవ్వండి",
      },
    },
    memo: {
      label: "అధికారిక మెమోరాండం",
      title: "రాష్ట్ర మరియు కేంద్ర ప్రభుత్వాలకు అధికారిక విన్నపం",
      sub: "కనిగిరి నియోజకవర్గ ప్రజల తరపున",
      intro: "గౌరవనీయ మంత్రులు గారూ, కనిగిరిలోని తీవ్రమైన పర్యావరణ మరియు ఆరోగ్య సంక్షోభానికి సంబంధించి మేము ఈ విన్నపాన్ని సమర్పిస్తున్నాము. 79 ఏళ్ల ఎదురుచూపులు ఆరోగ్య వైఫల్యానికి దారితీశాయి. మేము ఆంధ్రప్రదేశ్ ప్రభుత్వం మరియు భారత ప్రభుత్వం రెండింటికీ తక్షణ జోక్యం కోసం విజ్ఞప్తి చేస్తున్నాము.",
      req1_title: "ప్రత్యేక ఫ్లోరైడ్ జోన్ గుర్తింపు",
      req1_desc: "పి.సి.పల్లి మరియు కనిగిరిలను అధిక ప్రభావం ఉన్న ప్రాంతాలుగా గుర్తించి ప్రత్యేక సహాయ నిధులను విడుదల చేయాలి.",
      req2_title: "జల్ జీవన్ మిషన్ కేటాయింపు",
      req2_desc: "వెలిగొండ ప్రాజెక్ట్ నిధుల కొరతను తీర్చడానికి ₹450 కోట్ల ప్రత్యేక గ్రాంట్.",
      req3_title: "ప్రాంతీయ నెఫ్రాలజీ సెంటర్",
      req3_desc: "CKDని ఎదుర్కోవడానికి 100 పడకల అధునాతన డయాలసిస్ సదుపాయాన్ని తక్షణమే ఏర్పాటు చేయడం.",
      download_btn: "PDF మెమోరాండం డౌన్‌లోడ్ చేయండి",
    },
    mandal_details: {
      title: "నియోజకవర్గ లోతైన విశ్లేషణ",
      description: "కనిగిరి అసెంబ్లీ నియోజకవర్గంలోని ఆరు మండలాల సమగ్ర సమాచారం.",
      list: [
        { name: "పీ.సీ. పల్లి", pop: "48,500", fluoride: "8.5 - 15.0 mg/L", status: "క్లిష్టమైనది", details: "సంక్షోభానికి కేంద్రబిందువు. ఇక్కడ భూగర్భ జలాలు అత్యంత విషపూరితమైనవి, నివాసితులకు అస్థిపంజర ఫ్లోరోసిస్ మరియు కీళ్ల వైకల్యాలను కలిగిస్తున్నాయి." },
        { name: "కనిగిరి", pop: "1,10,000", fluoride: "2.5 - 4.5 mg/L", status: "మధ్యస్థం", details: "పట్టణ కేంద్రం తీవ్రమైన కాలానుగుణ నీటి కొరతను ఎదుర్కొంటోంది. శివారు కాలనీలు కలుషితమైన బావులపై ఆధారపడి ఉన్నాయి." },
        { name: "పామూరు", pop: "62,000", fluoride: "4.0 - 7.0 mg/L", status: "తీవ్రమైనది", details: "అధిక లవణీయత మరియు ఫ్లోరైడ్ రెండింటినీ ఎదుర్కొంటున్నారు. పిల్లలలో డెంటల్ ఫ్లోరోసిస్ సర్వసాధారణం." },
        { name: "సీ.ఎస్. పురం", pop: "54,000", fluoride: "3.5 - 6.0 mg/L", status: "తీవ్రమైనది", details: "కొండ ప్రాంతం కావడంతో పైపులైన్ కనెక్టివిటీ ఖరీదైనది. లోతైన బోరుబావులు విషపూరితమైన ఫ్లోరైడ్ పొరలను తాకుతున్నాయి." },
        { name: "హెచ్.ఎం. పాడు", pop: "42,000", fluoride: "5.0 - 9.0 mg/L", status: "క్లిష్టమైనది", details: "జిల్లాలోనే తలసరి కిడ్నీ వ్యాధి (CKD) రోగులు ఇక్కడ అత్యధికంగా ఉన్నట్లు సమాచారం." },
        { name: "వెలిగండ్ల", pop: "38,000", fluoride: "4.5 - 7.5 mg/L", status: "తీవ్రమైనది", details: "వ్యవసాయ కూలీలు మరియు రైతులు కలుషితమైన నీటి వనరుల వల్ల తీవ్ర ఆరోగ్య సమస్యలను ఎదుర్కొంటున్నారు." }
      ]
    },
    research: {
      title: "శాస్త్రీయ పరిశోధన & ఆధారాలు",
      geology_title: "కనిగిరి ప్లూటాన్ ప్రత్యేకత",
      geology_desc: "సంక్షోభానికి మూలకారణం 'కనిగిరి ప్లూటాన్' అనే భూగర్భ శాస్త్ర నిర్మాణం. ఇది ఫ్లోరైడ్ అధికంగా ఉండే గ్రానైట్ శిలలను కలిగి ఉండి, నేరుగా భూగర్భ జలాల్లోకి విషాన్ని విడుదల చేస్తుంది.",
      health_title: "విషపూరితమైన వారసత్వం",
      health_desc: "1.5 mg/L కంటే ఎక్కువ ఫ్లోరైడ్ తీసుకోవడం వల్ల శరీరంలో శాశ్వత మార్పులు సంభవిస్తాయి. దీనివల్ల కనిగిరి ప్రపంచవ్యాప్తంగా సామాజిక ఫ్లోరోసిస్ 'హాట్‌స్పాట్'గా మారింది.",
      citations: [
        {
          title: "ప్రకాశం ఫ్లోరైడ్ సంక్షోభం",
          source: "డెక్కన్ క్రానికల్",
          year: "2025",
          highlights: ["కనిగిరి మరియు పీసీ పల్లి మండలాలు అత్యంత దారుణంగా దెబ్బతిన్నాయి.", "6 మండలాల్లో భూగర్భ జలాలు విషపూరితంగా మారాయి."],
          url: "https://www.deccanchronicle.com"
        },
        {
          title: "గ్రానైట్లలో ఖనిజీకరణ",
          source: "రీసెర్చ్ గేట్ / IJSEA",
          year: "2015",
          highlights: ["కనిగిరి-పొదిలి ప్రాంతంలో అసాధారణమైన ఫ్లోరైడ్ నిక్షేపాలను గుర్తించారు.", "స్థానిక ఖనిజాల వల్ల నీరు విషపూరితంగా మారుతోందని నిర్ధారణ."],
          url: "https://www.researchgate.net"
        },
        {
          title: "అస్థిపంజర ఫ్లోరోసిస్ కేసులు",
          source: "NIH (అమెరికా)",
          year: "2013",
          highlights: ["పొదిలి మరియు కనిగిరిలో తొలిసారిగా ఎండమిక్ కేసులు నమోదయ్యాయి.", "15 ఏళ్ల లోపు పిల్లలలో తీవ్రమైన దంత సమస్యలు."],
          url: "https://pmc.ncbi.nlm.nih.gov"
        },
        {
          title: "ఫ్లోరైడ్ మరియు కిడ్నీ వ్యాధులు",
          source: "ది హిందూ",
          year: "2018",
          highlights: ["ఫ్లోరైడ్ మరియు కిడ్నీ వైఫల్యం (CKD) మధ్య ప్రత్యక్ష సంబంధం.", "ప్రకాశం జిల్లా కిడ్నీ రోగుల కేంద్రంగా మారిందని నివేదిక."],
          url: "https://www.thehindu.com"
        }
      ],
      blogs: [
        {
          title: "విషపూరిత స్థాయిలు పెరగడంతో కలెక్టర్ అత్యవసర చర్యలకు ఆదేశం",
          author: "DC బ్యూరో",
          publisher: "డెక్కన్ క్రానికల్",
          date: "నవంబర్ 2025",
          category: "అత్యవసర అప్‌డేట్",
          excerpt: "కమ్మవారిపల్లి మరియు దిరిషవంచ గ్రామాలకి ట్యాంకర్ నీటి సరఫరా కోసం తక్షణ ఆదేశాలు జారీ.",
          content: "కనిగిరి నియోజకవర్గంలో నానాటికీ తగ్గుతున్న నీటి నాణ్యతకు స్పందనగా జిల్లా కలెక్టర్ తక్షణమే నీటి ట్యాంకర్లను నియోగించాలని ఆదేశించారు. పి.సి. పల్లి మండలంలో జరిపిన పరీక్షల్లో ఫ్లోరైడ్ సాంద్రత సురక్షిత పరిమితి కంటే పది రెట్లు ఎక్కువగా ఉన్నట్లు తేలింది."
        },
        {
          title: "ప్రకాశంలో కొనసాగుతున్న ఫ్లోరైడ్ సంక్షోభం: దశాబ్దాల నిర్లక్ష్యం?",
          author: "స్టాఫ్ రిపోర్టర్",
          publisher: "డెక్కన్ క్రానికల్",
          date: "మార్చి 2025",
          category: "ప్రత్యేక నివేదిక",
          excerpt: "అనేక పథకాలు ఉన్నప్పటికీ, కనిగిరి మరియు పొదిలిలోని 100 కి పైగా గ్రామాలు విషపూరిత భూగర్భ జలాలనే తాగుతున్నాయి.",
          content: "పశ్చిమ ప్రకాశం నీటి మౌలిక సదుపాయాలపై జరిపిన వివరణాత్మక విచారణ వెలిగొండ ప్రాజెక్టులో గణనీయమైన అడ్డంకులను వెల్లడిస్తుంది. పైపులైన్లు ప్రధాన రహదారులకు చేరుకున్నప్పటికీ, మారుమూల గ్రామాలకు అంతర్గత పంపిణీ నెట్‌వర్క్ ఇంకా కాగితాల మీదనే ఉంది."
        },
        {
          title: "యువ తరాలపై తీవ్ర ప్రభావం చూపుతున్న నీటి విషపూరితం",
          author: "పి. శామ్యూల్",
          publisher: "ది హిందూ",
          date: "2015 (నవీకరించబడింది 2025)",
          category: "ఆరోగ్య దృష్టి",
          excerpt: "కనిగిరి గ్రామాల్లోని పిల్లలు కౌమారదశకు చేరుకోకముందే అస్థిపంజర వైకల్యాలను రూపించుకుంటున్నారు.",
          content: "కనిగిరిలోని ఫ్లోరైడ్ సమస్య కేవలం ఆరోగ్య సమస్య మాత్రమే కాదు; ఇది ఒక సామాజిక-ఆర్థిక అడ్డంకి. కుటుంబాలు తమ ఆదాయంలో సగాన్ని వైద్య ఖర్చులకు మరియు ప్రైవేట్ RO నీటిని కొనడానికి ఖర్చు చేస్తున్నాయి."
        },
        {
          title: "పొడి ప్రాంతాలలో కిడ్నీ వ్యాధులను తీవ్రం చేస్తున్న ఫ్లోరైడ్ సమస్య",
          author: "హెల్త్ కరస్పాండెంట్",
          publisher: "ది హిందూ",
          date: "2017",
          category: "వైద్య పరిశోధన",
          excerpt: "ఈ ప్రాంతంలో క్రోనిక్ కిడ్నీ వ్యాధి (CKD) యొక్క అధిక ప్రాబల్యానికి ఫ్లోరైడ్ ప్రధాన సహ-కారకమని నెఫ్రాలజిస్టులు పేర్కొంటున్నారు.",
          content: "పొదిలి మరియు కనిగిరి అంతటా నిర్వహించిన వైద్య శిబిరాలు యువకులలో కిడ్నీ వైఫల్యాల యొక్క కలవరపరిచే ధోరణిని గుర్తించాయి. ఈ కేసులలో మధుమేహం లేదా రక్తపోటు చరిత్ర ఉండదు, ఇది నేరుగా విషపూరిత పర్యావరణ కారకాల వైపు చూపుతుంది."
        },
        {
          title: "మార్కాపూర్ ప్రాంతం: భూగర్భ కాలుష్య అంచనా",
          author: "డాక్టర్ కె. ఎస్. రావు మరియు ఇతరులు",
          publisher: "అప్లైడ్ వాటర్ సైన్స్",
          date: "2019",
          category: "శాస్త్రీయ అధ్యయనం",
          excerpt: "కనిగిరి ప్లూటాన్ నుండి స్థానిక భూగర్భ జలాల్లోకి ఖనిజాల వ్యాప్తిపై సమగ్ర అధ్యయనం.",
          content: "నేల యొక్క క్షార స్థితి గ్రానైట్ శిలల నుండి ఫ్లోరైడ్ బయటకు రావడాన్ని వేగవంతం చేస్తుందని పరిశోధన హైలైట్ చేస్తుంది. ప్రజారోగ్యం మరింత దిగజారకుండా ఉండటానికి ఉపరితల నీటి వనరులకు పూర్తిగా మారాలని అధ్యయనం సిఫార్సు చేస్తోంది."
        }
      ]
    },
    gallery: {
      title: "ప్రభావ గ్యాలరీ",
      description: "సంక్షోభం మరియు నివారణా చర్యల దృశ్య సాక్ష్యాలు. గ్రామాల నుండి ఫోటోలను అప్‌లోడ్ చేయడం ద్వారా వినియోగదారులు సహకరించవచ్చు.",
      upload_btn: "ఫోటో అప్‌లోడ్ చేయండి",
      no_images: "ఇంకా ఫోటోలు అప్‌లోడ్ చేయలేదు. పరిస్థితిని డాక్యుమెంట్ చేసే మొదటి వ్యక్తి అవ్వండి.",
      upload_success: "ఫోటో విజయవంతంగా అప్‌లోడ్ చేయబడింది.",
      policy: "మీడియాను అప్‌లోడ్ చేయడం ద్వారా, మీరు రాష్ట్ర మరియు కేంద్ర ప్రభుత్వాలకు అధికారిక విజ్ఞప్తులలో దాని ఉపయోగానికి అంగీకరిస్తున్నారు. దయచేసి ఫోటోలు ప్రైవేట్ సమాచారాన్ని వెల్లడించకుండా చూసుకోండి."
    },
    memo_status: {
      title: "సమర్పణ స్థితి",
      description: "ఈ మెమోరాండం రాష్ట్ర మరియు కేంద్ర అధికారులచే అధికారికంగా గుర్తించబడింది. మేము క్షేత్రస్థాయి పరిశీలన కోసం ఉమ్మడి సాంకేతిక అధ్యయన బృందం పి.సి. పల్లి మండలాన్ని సందర్శించడం కోసం వేచి ఉన్నాము."
    },
    story: {
      title: "కనిగిరిలో ఫ్లోరైడ్ సంక్షోభం",
      subtitle: "మన నీటిలో ఒక నిశ్శబ్ద విషం",
      geology_story: "కనిగిరి ప్రాంతం ఫ్లోరైడ్ కలిగిన ఖనిజాలతో కూడిన గ్రానైట్ శిలల మీద ఉంది. దశాబ్దాలుగా, ఈ సహజ భూగర్భ శాస్త్రం మరియు భూగర్భ జలాల మితిమీరిన వాడకం వల్ల ఫ్లోరైడ్ స్థాయిలు ప్రమాదకరంగా పెరిగాయి - కమ్మవారిపల్లి మరియు దిరిషవంచ వంటి గ్రామాలలో ఇది 5–15+ mg/L వరకు చేరుకుంది.",
      human_cost_title: "శాశ్వతంగా మారిన జీవితాలు",
      human_cost_desc: "వందలాది గ్రామాల్లో 10,000 కంటే ఎక్కువ మంది తీవ్రంగా ప్రభావితమయ్యారు. వీరు కేవలం గణాంకాలు కాదు; వీరు రైతులు, తల్లులు మరియు విద్యార్థులు.",
      symptoms: [
        { title: "పిల్లలు", desc: "ముదురు రంగు లేదా నల్లటి మరకలతో కూడిన దంతాలు. చిన్న వయస్సులోనే ఎముకల వైకల్యాలు కనిపిస్తున్నాయి." },
        { title: "పెద్దలు", desc: "కీళ్ల నొప్పులు, వంగిన కాళ్లు మరియు గూని వీపు. చాలా మంది కుటుంబ సభ్యులపై పూర్తిగా ఆధారపడుతున్నారు." },
        { title: "అవయవ వైఫల్యం", desc: "ఫ్లోరైడ్ విషం కారణంగా దీర్ఘకాలిక మూత్రపిండ వ్యాధి (CKD) తీవ్రమై, వేగంగా కిడ్నీ వైఫల్యానికి దారితీస్తుంది." }
      ],
      causes_title: "ఇది ఎందుకు జరుగుతోంది?",
      causes_list: [
        "భూగర్భ వనరులు: గ్రానైట్ శిలల నుండి ఫ్లోరైడ్ భూగర్భ జలాల్లోకి చేరుతుంది.",
        "మానవ కారకాలు: బోరుబావులపై అమితంగా ఆధారపడటం మరియు భూగర్భ జలాల రీచార్జ్ లేకపోవడం.",
        "తీవ్రత: అత్యవసర ట్యాంకర్ సరఫరా ఉన్నప్పటికీ, అధిక స్థాయిలు (15+ mg/L) కొనసాగుతున్నాయి."
      ],
      hope_title: "ఆశాకిరణాలు & తక్షణ అవసరాలు",
      relief_measures: [
        "పైపుల ద్వారా ఉపరితల నీటి సరఫరా కోసం ₹1,290 కోట్ల ప్రాజెక్టు పురోగతిలో ఉంది.",
        "ప్రభావిత గ్రామాల్లో అత్యవసర ట్యాంకర్ నీరు మరియు RO ప్లాంట్లు.",
        "కనిగిరి లేదా పొదిలిలో స్థానిక డయాలసిస్ కేంద్రాల తక్షణ అవసరం."
      ],
      cta_title: "శుద్ధ జలం కోసం పోరాటంలో చేరండి",
      cta_list: [
        "ఈ కథనాన్ని భాగస్వామ్యం చేయండి. అవగాహనే మొదటి అడుగు.",
        "సురక్షిత నీటి ప్రాజెక్టుల కోసం స్థానిక ప్రయత్నాలకు మద్దతు ఇవ్వండి.",
        "ఉపరితల నీటి పథకాల త్వరగతిన పూర్తి చేయాలని డిమాండ్ చేయండి.",
        "నీటి నాణ్యతపై పనిచేసే NGOs కు విరాళం ఇవ్వండి/వాలంటీర్‌గా చేరండి."
      ],
      quote: "మేము భయం లేకుండా తాగగలిగే నీటిని మాత్రమే కోరుకుంటున్నాము."
    },
    realities: {
      title: "కనిగిరి కఠోర వాస్తవాలు",
      subtitle: "కరువు. విషం. వలసలు. ఈ మూడు సంక్షోభాలు ఒక మొత్తం ప్రాంతం నుండి గౌరవం, ఆరోగ్యం మరియు ఇంటిని తీసివేశాయి.",
      factcheck_label: "వాస్తవ తనిఖీ",
      source_label: "మూలం",
      year_label: "సంవత్సరం",
      read_more: "పూర్తి వ్యాసం చదవండి",
      drought: {
        title: "నిరంతర కరువు",
        badge: "నీటి కొరత",
        description: "కనిగిరి మరియు పశ్చిమ ప్రకాశం జిల్లా వరుసగా ఐదు కరువు సంవత్సరాలను అనుభవించాయి. చెరువులు, కుండలు, నదులు — అన్ని ఉపరితల నీటి వనరులు ఎండిపోయాయి. 1,000 అడుగుల లోతున తవ్విన బోరుబావులు కూడా కొన్ని వారాల్లో ఆరిపోతున్నాయి. ప్రభుత్వం WHO సిఫార్సు చేసిన 50 లీటర్లకు బదులు తలకు రోజుకు కేవలం 20–25 లీటర్ల నీరు మాత్రమే సరఫరా చేస్తోంది. నీటి ట్యాంకర్లపై నల్లబజారు వ్యాపారం పెరిగింది — ట్యాంకర్‌లు పేదలకు బదులు హోటళ్లకు మళ్లించబడుతున్నాయి.",
        stats: [
          { label: "వరుస కరువు సంవత్సరాలు", value: "5+" },
          { label: "నీటి కొరత ఉన్న ఆవాసాలు", value: "280+" },
          { label: "రోజువారీ ట్యాంకర్లు", value: "422" },
          { label: "తలకు రోజువారీ నీరు (వాస్తవం)", value: "20–25 లీ" },
          { label: "పూర్తిగా వదలిన గ్రామాలు", value: "24+" },
          { label: "కాంట్రాక్టర్లకు బాకీ", value: "₹50 కోట్లు" }
        ],
        timeline: [
          { year: "2019", event: "ప్రభుత్వం నీటి ట్యాంకర్ కాంట్రాక్టర్లకు చెల్లింపులు ఆపింది. బాకీ ₹50 కోట్లు దాటింది." },
          { year: "2020", event: "600 అడుగుల లోతున బోరుబావులు పనిచేయడం ఆపాయి. 1,000 అడుగుల తవ్వకానికి మారారు." },
          { year: "2021", event: "కనిగిరి మరియు యర్రగొండపాలెం మండలాల్లోని 24+ గ్రామాలు అధికారికంగా నిర్జనమయ్యాయి." },
          { year: "2022", event: "నల్లబజారు నీటి వ్యాపారం బహిరంగంగా నివేదించబడింది. హోటళ్లకు 4,000 లీటర్ల ట్యాంకర్ ₹500కు." },
          { year: "2023", event: "ఐదవ వరుస కరువు సంవత్సరం. కనిగిరిలో 91 ఆవాసాలు 'హాని కలిగించే' జాబితాలో చేర్చబడ్డాయి." },
          { year: "2025", event: "ఏప్రిల్ 30న తాగునీరు మరియు ఫ్లోరైడ్ సమావేశం. శాశ్వత పరిష్కారం ఇంకా రాలేదు." }
        ],
        articles: [
          {
            title: "ఆంధ్రా కరువు-పీడిత ప్రకాశంలో నీటి నల్లబజారు వ్యాపారం",
            source: "ది న్యూస్ మినిట్",
            year: "2022",
            url: "https://www.thenewsminute.com/article/andhras-drought-prone-prakasam-water-black-market-thrives-100203",
            excerpt: "గ్రామీణులకు కేటాయించిన ట్యాంకర్లు హోటళ్లకు మళ్లించబడుతున్నాయి. ప్రభుత్వం కాంట్రాక్టర్లకు ₹50 కోట్లు బాకీ ఉంది. గ్రామస్థులు 5 లీటర్ బాటిల్‌కు ₹10 చెల్లిస్తున్నారు."
          },
          {
            title: "ప్రకాశంలో ప్రజలు నీటి కోసం గ్రామాలను వదులుతున్నారు",
            source: "రిలీఫ్‌వెబ్ / ది హిందూ",
            year: "2022",
            url: "https://reliefweb.int/report/india/prakasam-people-desert-villages-drop-water",
            excerpt: "కనిగిరి, యర్రగొండపాలెం, గిద్దలూరు, మర్కాపురం నియోజకవర్గాల్లో 24+ గ్రామాలు వదిలిపెట్టబడ్డాయి. ఐదవ కరువు సంవత్సరంలో 1,000 అడుగుల బోరుబావులు కూడా ఆరిపోతున్నాయి."
          },
          {
            title: "పశ్చిమ ప్రకాశం జిల్లాలో తాగునీటి సంక్షోభం తీవ్రమవుతోంది",
            source: "ది హాన్స్ ఇండియా",
            year: "2023",
            url: "https://www.thehansindia.com/andhra-pradesh/drinking-water-crisis-worsens-in-western-prakasam-district-788108",
            excerpt: "పశ్చిమ ప్రకాశం తలకు రోజుకు కేవలం 20–25 లీటర్లు మాత్రమే పొందుతోంది. 422 ట్యాంకర్లతో 280 ఆవాసాలకు సేవలు అందించడానికి ప్రయత్నిస్తున్నారు."
          }
        ]
      },
      fluoride: {
        title: "నిశ్శబ్ద ఫ్లోరైడ్ విషం",
        badge: "రాసాయనిక కాలుష్యం",
        description: "ప్రకాశం భారతదేశంలో అత్యంత తీవ్రంగా ఫ్లోరైడ్ ప్రభావితమైన 15 జిల్లాల్లో ఒకటి. 700+ గ్రామాలు కలుషితమయ్యాయి, కానీ ప్రభుత్వం కేవలం 27 గ్రామాలకు మాత్రమే సురక్షిత నీరు అందిస్తోంది. కనిగిరి ప్లూటాన్ — లోతైన గ్రానైట్ శిలా నిర్మాణం — నేరుగా భూగర్భ జలాల్లోకి ఫ్లోరైడ్‌ను విడుదల చేస్తుంది. 1937లో భారతదేశంలో తొలిసారిగా ఎండమిక్ ఫ్లోరోసిస్ కేసు ఈ జిల్లా నుండే నమోదైంది. 88 సంవత్సరాల శాస్త్రీయ అవగాహన ఉన్నా, సంక్షోభం అపరిష్కృతంగా ఉంది.",
        stats: [
          { label: "ప్రకాశంలో ఫ్లోరైడ్ ప్రభావిత గ్రామాలు", value: "700+" },
          { label: "సురక్షిత నీరు పొందుతున్న గ్రామాలు", value: "కేవలం 27" },
          { label: "గరిష్ఠ ఫ్లోరైడ్ స్థాయి (పి.సి.పల్లి)", value: "15 mg/L" },
          { label: "WHO సురక్షిత పరిమితి", value: "1.5 mg/L" },
          { label: "తొలి ఎండమిక్ ఫ్లోరోసిస్ నమోదైన సంవత్సరం", value: "1937" },
          { label: ">5 ppm ఫ్లోరైడ్ ఉన్న ఆవాసాలు", value: "41" }
        ],
        articles: [
          {
            title: "ప్రకాశం ఇంకా ఫ్లోరైడ్ సంక్షోభంతో పోరాడుతోంది",
            source: "డెక్కన్ క్రానికల్",
            year: "2025",
            url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
            excerpt: "2024 కేంద్ర జల్ శక్తి నివేదిక ప్రకాశం జిల్లాను 15 అత్యంత తీవ్ర ఫ్లోరైడ్ ప్రభావిత జిల్లాల జాబితాలో నిర్ధారించింది. కనిగిరి మరియు పి.సి. పల్లి మండలాల్లో 15 mg/L వరకు ఫ్లోరైడ్ స్థాయిలు."
          },
          {
            title: "ప్రకాశం నల్గొండ విషాదాన్ని ఎదుర్కొంటోంది",
            source: "ఫ్లోరైడ్ యాక్షన్ నెట్‌వర్క్",
            year: "2018",
            url: "https://fluoridealert.org/news/prakasam-faces-nalgonda-fate/",
            excerpt: "1,769 గ్రామాలలో 1,009 కలుషితమయ్యాయి కానీ 27 గ్రామాలు మాత్రమే సురక్షిత నీరు పొందుతున్నాయి. ఆరోగ్య కార్యకర్తలు హెచ్చరిస్తున్నారు."
          },
          {
            title: "మర్కాపూర్ ప్రాంతంలో ఫ్లోరైడ్-సమృద్ధమైన భూగర్భ జలాల భూ-రసాయన ప్రవర్తన",
            source: "NIH / PMC (అప్లైడ్ వాటర్ సైన్స్)",
            year: "2019",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5996165/",
            excerpt: "కనిగిరి ప్లూటాన్ గ్రానైట్ శిలల నుండి ఫ్లోరైడ్ లీచ్ అవుతుందని పీర్-రివ్యూ అధ్యయనం ధృవీకరించింది. ఉపరితల నీటి వనరులకు పూర్తిగా మారాలని సూచించింది."
          }
        ]
      },
      migration: {
        title: "మహాప్రయాణం — వలస వెళ్లిన ప్రజలు",
        badge: "మానవ స్థానభ్రంశం",
        description: "విషపూరిత నీరు మరియు ఎండిన భూమి వల్ల, వేల కనిగిరి కుటుంబాలు తమ పూర్వీకుల గ్రామాలను వదిలిపోయాయి. యువకులు హైదరాబాద్, చెన్నై మరియు బెంగళూరులో కూలీలుగా వలస వెళ్తారు, వృద్ధ తల్లిదండ్రులు మరియు పిల్లలను వదిలిపెట్టి. మురారిపల్లి, జయరాంపురం వంటి మొత్తం గ్రామాలు నిర్జనమయ్యాయి. నాలుగు మంది కుటుంబం RO నీటిపై నెలకు ₹600–₹1,200 ఖర్చు చేస్తుంది — ఒక కూలీ కుటుంబం ఆదాయంలో దాదాపు 20%.",
        stats: [
          { label: "వదలిన గ్రామాలు (అనధికారిక)", value: "24+" },
          { label: "నిర్జన గ్రామాలు ఉన్న నియోజకవర్గాలు", value: "4" },
          { label: "కుటుంబం నెలవారీ నీటి ఖర్చు", value: "₹600–₹1,200" },
          { label: "వైద్యం+నీటిపై ఆదాయంలో శాతం", value: "~50%" },
          { label: "ప్రధాన వలస గమ్యస్థానాలు", value: "హైదరాబాద్, చెన్నై" },
          { label: "శాశ్వతంగా వెళ్లిన కుటుంబాలు", value: "వేలల్లో" }
        ],
        articles: [
          {
            title: "కరువు వ్యాపిస్తే, AP లో వలస వేగంగా పెరుగుతోంది",
            source: "IATP / ది హిందూ",
            year: "2020",
            url: "https://www.iatp.org/news/as-drought-spreads-migration-gains-momentum-in-ap-india",
            excerpt: "బోరుబావులు ఆరిపోవడంతో వందల మంది వారాల వ్యవధిలో పట్టణాలకు వలస వెళ్తున్నారు. నిర్మాణ పనుల కోసం పట్టణాలకు వెళ్తున్న యువకులు కుటుంబాలను వెనక వదిలిపెడుతున్నారు."
          },
          {
            title: "విచక్షణారహిత బోరుబావుల తవ్వకం ప్రకాశాన్ని నీటి సంక్షోభంలోకి నెట్టింది",
            source: "ది న్యూస్ మినిట్",
            year: "2022",
            url: "https://www.thenewsminute.com/article/how-indiscriminate-digging-borewells-has-driven-aps-prakasam-water-crisis-99745",
            excerpt: "1,000 అడుగులకు తవ్విన బోరుబావులు వారాల్లో ఆరిపోతున్నాయి. ఈ సంక్షోభం చిన్న రైతులు మరియు కూలీలను అసమానంగా దెబ్బతిడుతోంది."
          },
          {
            title: "నీటి విషపూరితం యువ తరాలపై తీవ్ర ప్రభావం",
            source: "ది హిందూ",
            year: "2015 (నవీకరించబడింది 2025)",
            url: "https://www.thehindu.com",
            excerpt: "కుటుంబాలు వైద్య మరియు నీటి ఖర్చులకు సగం ఆదాయం ఖర్చు చేస్తున్నాయి. స్తోమత ఉన్నవారు వెళ్తారు; మిగిలినవారు బాధపడతారు."
          }
        ]
      }
    }
  },
  hi: {
    nav: {
      dashboard: "डेटा डैशबोर्ड",
      video: "वीडियो स्क्रिप्ट",
      solutions: "समाधान",
      memo: "ज्ञापन",
      action: "कार्रवाई करें",
      gallery: "मीडिया गैलरी",
      realities: "कठोर वास्तविकताएँ",
    },
    hero: {
      emergency: "पर्यावरण आपातकाल",
      headline: "हमारे बच्चों की मुस्कान खो रही है। हमारे बुजुर्गों की हड्डियाँ टूट रही हैं। कृपया अब और नहीं।",
      subheadline: "प्रकासम जिले के केंद्र में, जिस पानी ने कभी पीढ़ियों को जीवित रखा था, अब उसमें एक छिपा हुआ जहर है: अत्यधिक फ्लोराइड। यह वास्तविक समय में सामने आ रही एक मानवीय त्रासदी है।",
      dashboard_btn: "डेटा डैशबोर्ड देखें",
      video_btn: "द क्राई वीडियो",
      video_placeholder: "5-मिनट का प्रेजेंटेशन वीडियो",
      video_description: "कनिगिरि में फ्लोराइड संकट का एक दृश्य वर्णन।",
    },
    dashboard: {
      title: " सांख्यिकीय डैशबोर्ड",
      description: "विनाशकारी फ्लोराइड प्रभाव को उजागर करने वाले महत्वपूर्ण स्वास्थ्य और जल मेट्रिक्स।",
      fluoride: {
        title: "फ्लोराइड एकाग्रता",
        sub: "पी.सी. पल्ली के कुओं में वर्तमान स्थानीय स्तर।",
        who_safe: "WHO सुरक्षित: 1.5",
        kanigiri_max: "कनिगिरि अधिकतम: 15.0",
        danger: "खतरा: कंकाल फ्लोरोसिस और स्थायी अंग क्षति का उच्च जोखिम।",
        safe: "मानव उपभोग के लिए स्वीकार्य सीमा के भीतर।",
      },
      population: {
        title: "प्रभावित जनसंख्या",
        sub: "6 मंडलों के लोग गंभीर खतरे में हैं।",
        risk_note: "*स्थानीय जल नमूनों के परीक्षण पर आधारित जोखिम स्तर।",
      },
      health: {
        title: "स्वास्थ्य प्रभाव दर",
        sub: "डायलिसिस निर्भरता और सीकेडी का प्रसार।",
        ckd_prev: "सीकेडी प्रसार",
        ckd_patients: "42,000 मरीज",
        bone_deform: "हड्डियों की विकृति",
        bone_cases: "18,000+ मामले",
        dialysis_cycle: "प्रतिदिन डायलिसिस चक्र",
      },
    },
    video: {
      title: "वीडियो स्क्रिप्ट और मीडिया वॉकथ्रू",
      description: "राज्य और केंद्र सरकारों को स्थिति की गंभीरता समझाने के लिए डिज़ाइन की गई एक स्क्रिप्ट।",
      scene: "दृश्य",
      critical_focus: "महत्वपूर्ण फोकस",
      visual_desc: "दृश्य विवरण",
      script: "मूल स्क्रिप्ट",
      meaning: "अंग्रेजी अर्थ",
    },
    solutions: {
      title: "समाधान ट्रैकर",
      description: "हम स्थानीय नेतृत्व के माध्यम से तत्काल राहत प्रदान कर रहे हैं और स्थायी समाधान के लिए प्रयासरत हैं।",
      immediate_btn: "तत्काल राहत",
      permanent_btn: "स्थायी समाधान",
      immediate: {
        tanker_title: "सुरक्षित टैंकर आपूर्ति",
        tanker_desc: "विधायक के नेतृत्व में उच्च फ्लोराइड बस्तियों को प्रतिदिन 50,000 लीटर की आपूर्ति।",
        filter_title: "स्थानीय फिल्टर प्लांट",
        filter_desc: "12 महत्वपूर्ण गांवों में सामुदायिक स्तर के आरओ प्लांट की स्थापना।",
        dialysis_title: "द्वितीयक डायलिसिस हब",
        dialysis_desc: "कनिगिरि शहर में 10 बिस्तरों वाली डायलिसिस यूनिट की तत्काल स्थापना।",
      },
      permanent: {
        project_title: "सतही जल परियोजना",
        target: "लक्ष्य: 2026",
        project_desc: "कनिगिरि और कम्मवारिपल्ली जैसे नजदीकी क्षेत्रों पर ध्यान केंद्रित करते हुए, पाइप के माध्यम से सतही जल आपूर्ति के लिए ₹1,290 करोड़ की एक बड़ी परियोजना वर्तमान में प्रगति पर है।",
        completion: "परियोजना पूर्णता",
        funding_gap: "धन की कमी: वेलिगोंडा कनेक्टिविटी के लिए अनुमानित ₹450 करोड़ की आवश्यकता।",
      },
      why_2026: {
        title: "2026 क्यों?",
        desc: "हर दिन जब हम प्रतीक्षा करते हैं, 4 और नागरिक डायलिसिस चक्र में प्रवेश करते हैं।",
        tunnel: "टनल लाइनिंग",
        headworks: "हेड वर्क्स",
        canals: "नहर नेटवर्किंग",
        status_critical: "महत्वपूर्ण",
        status_progress: "प्रगति में है",
        status_pending: "धन की प्रतीक्षा है",
        support_btn: "मिशन का समर्थन करें",
      },
    },
    memo: {
      label: "आधिकारिक ज्ञापन",
      title: "राज्य और केंद्र सरकारों को औपचारिक अपील",
      sub: "कनिगिरि निर्वाचन क्षेत्र के लोगों का प्रतिनिधित्व",
      intro: "आदरणीय मंत्रियों, हम कनिगिरि में गंभीर पारिस्थितिक और स्वास्थ्य संकट के संबंध में औपचारिक रूप से यह अपील प्रस्तुत करते हैं। 79 वर्षों की प्रतीक्षा ने स्वास्थ्य विफलता को जन्म दिया है। हम आंध्र प्रदेश सरकार और भारत सरकार दोनों से तत्काल समाधान के लिए सहयोग करने का आग्रह करते हैं।",
      req1_title: "विशेष फ्लोराइड क्षेत्र पदनाम",
      req1_desc: "विशेष आपदा राहत कोष को अनलॉक करने के लिए पी.सी. पल्ली और कनिगिरि को उच्च-प्रभाव वाले क्षेत्रों के रूप में मान्यता।",
      req2_title: "जल जीवन मिशन आवंटन",
      req2_desc: "वेलिगोंडा परियोजना के वित्तपोषण के अंतराल को पाटने के लिए ₹450 करोड़ का समर्पित अनुदान।",
      req3_title: "क्षेत्रीय नेफ्रोलॉजी केंद्र",
      req3_desc: "सीकेडी से निपटने के लिए 100 बिस्तरों वाली उन्नत डायलिसिस सुविधा की तत्काल स्थापना।",
      download_btn: "पीडीएफ ज्ञापन डाउनलोड करें",
    },
    mandal_details: {
      title: "निर्वाचन क्षेत्र का गहन विश्लेषण",
      description: "कनिगिरि विधानसभा क्षेत्र के छह मंडलों का विस्तृत विवरण।",
      list: [
        { name: "पी.सी. पल्ली", pop: "48,500", fluoride: "8.5 - 15.0 mg/L", status: "महत्वपूर्ण", details: "संकट का केंद्र। यहां का भूजल अत्यधिक विषाक्त है, जिससे निवासियों में कंकाल फ्लोरोसिस और जोड़ों की विकृति हो रही है।" },
        { name: "कनिगिरि", pop: "1,10,000", fluoride: "2.5 - 4.5 mg/L", status: "मध्यम", details: "शहरी केंद्र भीषण मौसमी जल संकट से जूझ रहा है। बाहरी इलाके दूषित कुओं पर निर्भर हैं।" },
        { name: "पामूर", pop: "62,000", fluoride: "4.0 - 7.0 mg/L", status: "गंभीर", details: "उच्च लवणता और फ्लोराइड दोनों का सामना कर रहे हैं। बच्चों में डेंटल फ्लोरोसिस यहां की एक बड़ी समस्या है।" },
        { name: "सी.एस. पुरम", pop: "54,000", fluoride: "3.5 - 6.0 mg/L", status: "गंभीर", details: "पहाड़ी इलाका होने के कारण पाइपलाइन बिछानी महंगी है। गहरे बोरवेल फ्लोराइड युक्त जहरीली परतों को छू रहे हैं।" },
        { name: "एच.एम. पाडू", pop: "42,000", fluoride: "5.0 - 9.0 mg/L", status: "महत्वपूर्ण", details: "पूरे जिले में प्रति व्यक्ति किडनी रोगियों (CKD) की संख्या यहां संभवतः सबसे अधिक है।" },
        { name: "वेलिगंडला", pop: "38,000", fluoride: "4.5 - 7.5 mg/L", status: "गंभीर", details: "कृषि प्रधान मंडल जहां किसान और मजदूर दूषित जल स्रोतों के कारण गंभीर स्वास्थ्य संकट झेल रहे हैं।" }
      ]
    },
    research: {
      title: "वैज्ञानिक अनुसंधान और प्रमाण",
      geology_title: "कनिगिरि प्लूटोन अपवाद",
      geology_desc: "जड़ का कारण 'कनिगिरि प्लूटोन' नामक एक अनूठी भूवैज्ञानिक संरचना है—एक ग्रैनाइट संरचना जो फ्लोराइट और एपेटाइट जैसे फ्लोरीन युक्त खनिजों से भरपूर है जो सीधे भूजल में घुल जाते हैं।",
      health_title: "विषाक्त विरासत",
      health_desc: "लंबे समय तक संपर्क (1.5 mg/L से अधिक) अपरिवर्तनीय जैविक परिवर्तनों की ओर ले जाता है, जिससे कनिगिरि स्वास्थ्य एजेंसियों द्वारा मान्यता प्राप्त स्थानिक फ्लोरोसिस के लिए एक 'हॉटस्पॉट' बन गया है।",
      citations: [
        {
          title: "प्रकासम फ्लोराइड संकट से जूझ रहा है",
          source: "डेक्कन क्रॉनिकल",
          year: "2025",
          highlights: ["कनिगिरि और पीसी पल्ली के गांव सबसे बुरी तरह प्रभावित हैं।", "6 महत्वपूर्ण मंडलों में भूजल का स्तर जहरीला पाया गया।"],
          url: "https://www.deccanchronicle.com"
        },
        {
          title: "ग्रैनाइट घुसपैठ में खनिज",
          source: "रिसर्चगेट / IJSEA",
          year: "2015",
          highlights: ["कनिगिरि-पोडिली क्षेत्र को असामान्य फ्लोराइड सामग्री के रूप में पहचानता है।", "स्थानीय प्लूटोन की विशिष्ट खनिज संरचना को जल विषाक्तता से जोड़ता है।"],
          url: "https://www.researchgate.net"
        },
        {
          title: "स्थानिक कंकाल फ्लोरोसिस के मामले",
          source: "NIH (अमेरिका)",
          year: "2013",
          highlights: ["पोडिली और कनिगिरि में पहले दर्ज स्थानिक मामले।", "15 साल के बच्चों में डेंटल फ्लोरोसिस का महत्वपूर्ण प्रसार।"],
          url: "https://pmc.ncbi.nlm.nih.gov"
        },
        {
          title: "फ्लोराइड विषाक्तता और गुर्दा रोग",
          source: "द हिंदू",
          year: "2018",
          highlights: ["फ्लोराइड सेवन और सीकेडी (क्रोनिक किडनी रोग) के बीच सीधा संबंध।", "प्रकासम जिले को गैर-मधुमेह गुर्दा विफलता के केंद्र के रूप में बताया गया।"],
          url: "https://www.thehindu.com"
        }
      ],
      blogs: [
        {
          title: "विषाक्तता बढ़ने पर कलेक्टर ने दिए आपातकालीन उपाय के आदेश",
          author: "DC ब्यूरो",
          publisher: "डेक्कन क्रॉनिकल",
          date: "नवंबर 2025",
          category: "आपातकालीन अपडेट",
          excerpt: "फ्लोराइड का स्तर 15mg/L से अधिक होने पर कम्मवारिपल्ली और दिरिशावंचा को टैंकर से पानी की आपूर्ति के आदेश।",
          content: "कनिगिरि निर्वाचन क्षेत्र में बिगड़ती जल गुणवत्ता पर त्वरित प्रतिक्रिया देते हुए, जिला कलेक्टर ने तत्काल पानी के टैंकरों की तैनाती का आदेश दिया है। पी.सी. पल्ली मंडल के परीक्षणों में फ्लोराइड सुरक्षित सीमा से दस गुना अधिक पाया गया।"
        },
        {
          title: "प्रकाशम अब भी फ्लोराइड संकट से जूझ रहा है: क्या यह दशकों की उपेक्षा है?",
          author: "स्टाफ रिपोर्टर",
          publisher: "डेक्कन क्रॉनिकल",
          date: "मार्च 2025",
          category: "विशेष रिपोर्ट",
          excerpt: "अनेक योजनाओं के बावजूद कनिगिरि और पोडिली के 100 से अधिक गाँव ज़हरीला भूजल पीना जारी रखे हुए हैं।",
          content: "पश्चिमी प्रकाशम के बुनियादी ढांचे की जांच से वेलिगोंडा परियोजना में बड़ी बाधाओं का पता चलता है। जबकि पाइपलाइन मुख्य सड़कों तक पहुंच गई है, अंदरूनी गांवों के लिए वितरण नेटवर्क अभी भी कागजों पर है।"
        },
        {
          title: "जल विषाक्तता अगली पीढ़ियों पर डाल रही है भारी प्रभाव",
          author: "पी. सैमुअल",
          publisher: "द हिंदू",
          date: "2015 (अपेडटेड 2025)",
          category: "स्वास्थ्य फोकस",
          excerpt: "कनिगिरि के गाँवों में बच्चे किशोरावस्था तक पहुँचने से पहले ही शारीरिक विकृतियों का शिकार हो रहे हैं।",
          content: "कनिगिरि में फ्लोराइड की समस्या सिर्फ एक स्वास्थ्य मुद्दा नहीं है; यह एक सामाजिक-आर्थिक बाधा है। परिवार अपनी आधी आय चिकित्सा खर्चों और पानी खरीदने पर खर्च कर रहे हैं।"
        },
        {
          title: "शुष्क क्षेत्रों में फ्लोराइड की समस्या गुर्दे के रोगों को बढ़ाती है",
          author: "स्वास्थ्य संवाददाता",
          publisher: "द हिंदू",
          date: "2017",
          category: "चिकित्सा अनुसंधान",
          excerpt: "नेफ्रोलॉजिस्ट इस क्षेत्र में क्रोनिक किडनी रोग के उच्च प्रसार में फ्लोराइड को एक प्रमुख कारण मानते हैं।",
          content: "पोडिली और कनिगिरि में आयोजित चिकित्सा शिविरों ने युवाओं में गुर्दे की विफलता की एक परेशान करने वाली प्रवृत्ति की पहचान की है। पारंपरिक सीकेडी के विपरीत, इन मामलों में अक्सर मधुमेह या उच्च रक्तचाप का कोई इतिहास नहीं होता है, जो सीधे पर्यावरण विषाक्त पदार्थों की ओर इशारा करता है।"
        },
        {
          title: "मरकापुर क्षेत्र: संदूषण का भूवैज्ञानिक मूल्यांकन",
          author: "डॉ. के. एस. राव और अन्य",
          publisher: "Applied Water Science",
          date: "2019",
          category: "वैज्ञानिक अध्ययन",
          excerpt: "कनिगिरि प्लूटोन से स्थानीय जलभृत में खनिजों के निक्षालन पर एक व्यापक अध्ययन।",
          content: "अनुसंधान इस बात पर प्रकाश डालता है कि मिट्टी की क्षारीय स्थिति ग्रैनाइट चट्टानों से फ्लोराइड के निक्षालन को तेज करती है। अध्ययन सार्वजनिक स्वास्थ्य के आगे होने वाले गिरावट को रोकने के लिए सतही जल स्रोतों पर पूरी तरह से स्थानांतरित होने की सिफारिश करता है।"
        }
      ]
    },
    gallery: {
      title: "प्रभाव गैलरी",
      description: "संकट और चल रहे राहत प्रयासों के दृश्य प्रमाण। उपयोगकर्ता अपने गांवों की तस्वीरें अपलोड करके योगदान दे सकते हैं।",
      upload_btn: "फोटो अपलोड करें",
      no_images: "अभी तक कोई फोटो अपलोड नहीं की गई है। स्थिति का दस्तावेजीकरण करने वाले पहले व्यक्ति बनें।",
      upload_success: "फोटो सफलतापूर्वक अपलोड हो गई।",
      policy: "मीडिया अपलोड करके, आप राज्य और केंद्र सरकारों को औपचारिक अपीलों में इसके उपयोग के लिए सहमति देते हैं। कृपया सुनिश्चित करें कि फोटो निजी जानकारी प्रकट न करें।"
    },
    memo_status: {
      title: "सबमिशन स्थिति",
      description: "इस ज्ञापन को राज्य और केंद्र दोनों अधिकारियों द्वारा औपचारिक रूप से स्वीकार किया गया है। हम जमीनी स्तर के मूल्यांकन के लिए पी.सी. पल्ली मंडल के संयुक्त तकनीकी अध्ययन दल के दौरे की प्रतीक्षा कर रहे हैं।"
    },
    story: {
      title: "कनिगिरि में फ्लोराइड संकट",
      subtitle: "हमारे पानी में एक खामोश जहर",
      geology_story: "कनिगिरि एक ऐसे क्षेत्र में स्थित है जहाँ फ्लोराइड युक्त खनिजों से भरपूर ग्रेनाइट चट्टानें पाई जाती हैं। दशकों से, इस प्राकृतिक भूविज्ञान और भूजल के अत्यधिक दोहन के कारण फ्लोराइड का स्तर खतरनाक रूप से बढ़ गया है — कम्मवारिपल्ली और दिरिशावंचा जैसे गाँवों में यह 5–15+ mg/L तक पहुँच गया है।",
      human_cost_title: "जीवन हमेशा के लिए बदल गया",
      human_cost_desc: "सैकड़ों गाँवों के 10,000 से अधिक लोग गंभीर रूप से प्रभावित हैं। ये केवल आँकड़े नहीं हैं; ये किसान, माताएँ और छात्र हैं।",
      symptoms: [
        { title: "बच्चे", desc: "चमकती आँखें लेकिन भूरे या काले धब्बों वाले दाँत। छोटी उम्र में ही हड्डियों में विकृति दिखाई देने लगती है।" },
        { title: "वयस्क", desc: "जोड़ों का दर्द, जकड़न, मुड़े हुए पैर और झुकी हुई पीठ। कई लोग पूरी तरह से परिवार पर निर्भर हो जाते हैं।" },
        { title: "अंग विफलता", desc: "फ्लोराइड विषाक्तता क्रोनिक किडनी रोग (CKD) को बढ़ा देती है, जिससे तेजी से गुर्दा खराब हो जाता है।" }
      ],
      causes_title: "यह क्यों हो रहा है?",
      causes_list: [
        "भूवैज्ञानिक स्रोत: ग्रेनाइट चट्टानों से फ्लोराइड क्षारीय भूजल में घुल जाता है।",
        "मानवीय कारक: बोरवेल पर अत्यधिक निर्भरता और खराब भूजल पुनर्भरण।",
        "निरंतरता: आपातकालीन टैंकर आपूर्ति के बावजूद उच्च स्तर (15+ mg/L) बना हुआ है।"
      ],
      hope_title: "आशा की किरणें और तत्काल आवश्यकताएं",
      relief_measures: [
        "सतही जल आपूर्ति के लिए ₹1,290 करोड़ की परियोजना प्रगति पर है।",
        "प्रभावित बस्तियों में आपातकालीन टैंकर पानी और आरओ प्लांट।",
        "कनिगिरि या पोडिली में स्थानीय डायलिसिस केंद्रों की तत्काल आवश्यकता।"
      ],
      cta_title: "साफ पानी की लड़ाई में शामिल हों",
      cta_list: [
        "इस कहानी को साझा करें। जागरूकता पहला कदम है।",
        "सुरक्षित जल परियोजनाओं के लिए स्थानीय प्रयासों का समर्थन करें।",
        "सतही जल योजनाओं के तेजी से कार्यान्वयन की मांग करें।",
        "जल गुणवत्ता पर काम करने वाले गैर सरकारी संगठनों के साथ जुड़ें।"
      ],
      quote: "हम बस ऐसा पानी चाहते हैं जिसे हम बिना किसी डर के पी सकें।"
    },
    realities: {
      title: "कनिगिरि की कठोर वास्तविकताएँ",
      subtitle: "सूखा। ज़हर। पलायन। तीन संकट जिन्होंने एक पूरे क्षेत्र से गरिमा, स्वास्थ्य और घर छीन लिया।",
      factcheck_label: "तथ्य जाँच",
      source_label: "स्रोत",
      year_label: "वर्ष",
      read_more: "पूरा लेख पढ़ें",
      drought: {
        title: "निरंतर सूखे की मार",
        badge: "जल संकट",
        description: "कनिगिरि और पश्चिमी प्रकाशम जिले ने लगातार पाँच सूखे वर्ष झेले हैं। तालाब, नदियाँ, जलाशय — सभी सतही जल स्रोत सूख गए हैं। 1,000 फुट गहरे खोदे गए बोरवेल भी कुछ हफ्तों में सूख जाते हैं। सरकार WHO की न्यूनतम 50 लीटर की सिफारिश के मुकाबले प्रति व्यक्ति प्रतिदिन केवल 20–25 लीटर पानी की आपूर्ति करती है। गरीबों के लिए आए पानी के टैंकर होटलों और अमीर किसानों को ₹500 प्रति 4,000 लीटर पर बेचे जा रहे हैं, जबकि आम ग्रामीण 5 लीटर की बोतल ₹10 में खरीदते हैं।",
        stats: [
          { label: "लगातार सूखे के वर्ष", value: "5+" },
          { label: "जल संकट ग्रस्त बस्तियाँ", value: "280+" },
          { label: "दैनिक टैंकर तैनात", value: "422" },
          { label: "प्रति व्यक्ति दैनिक जल (वास्तविक)", value: "20–25 ली." },
          { label: "पूरी तरह उजड़े गाँव", value: "24+" },
          { label: "ठेकेदारों का सरकारी बकाया", value: "₹50 करोड़" }
        ],
        timeline: [
          { year: "2019", event: "सरकार ने पानी के टैंकर ठेकेदारों को भुगतान बंद किया। बकाया ₹50 करोड़ से अधिक।" },
          { year: "2020", event: "600 फुट गहरे बोरवेल विफल हो गए। 1,000 फुट तक खुदाई शुरू।" },
          { year: "2021", event: "कनिगिरि और येर्रगोंडापालेम मंडल के 24+ गाँव आधिकारिक रूप से उजड़े।" },
          { year: "2022", event: "पानी का काला बाजार खुलेआम रिपोर्ट हुआ। होटलों को ₹500 प्रति टैंकर।" },
          { year: "2023", event: "लगातार पाँचवाँ सूखा वर्ष। अकेले कनिगिरि में 91 बस्तियाँ 'संवेदनशील' सूची में।" },
          { year: "2025", event: "30 अप्रैल को पेयजल और फ्लोराइड पर समीक्षा बैठक। स्थायी समाधान अभी नहीं।" }
        ],
        articles: [
          {
            title: "आंध्र के सूखाग्रस्त प्रकाशम में पनप रहा है पानी का काला बाजार",
            source: "द न्यूज़ मिनट",
            year: "2022",
            url: "https://www.thenewsminute.com/article/andhras-drought-prone-prakasam-water-black-market-thrives-100203",
            excerpt: "गाँवों के लिए आए पानी के टैंकर होटलों को दिए जा रहे हैं। सरकार ठेकेदारों को ₹50 करोड़ का भुगतान नहीं कर पाई। ग्रामीण ₹10 प्रति 5 लीटर बोतल खरीदने को मजबूर।"
          },
          {
            title: "प्रकाशम में लोग पानी की एक बूँद के लिए गाँव छोड़ रहे हैं",
            source: "रिलीफवेब / द हिंदू",
            year: "2022",
            url: "https://reliefweb.int/report/india/prakasam-people-desert-villages-drop-water",
            excerpt: "कनिगिरि, येर्रगोंडापालेम, गिद्दलूर और मर्कापुर निर्वाचन क्षेत्रों के 24+ गाँव उजड़ चुके हैं। पाँचवाँ लगातार सूखा — 1,000 फुट गहरे बोरवेल भी सूख गए।"
          },
          {
            title: "पश्चिमी प्रकाशम जिले में पेयजल संकट गहराया",
            source: "द हंस इंडिया",
            year: "2023",
            url: "https://www.thehansindia.com/andhra-pradesh/drinking-water-crisis-worsens-in-western-prakasam-district-788108",
            excerpt: "पश्चिमी प्रकाशम में प्रति व्यक्ति 20–25 लीटर प्रतिदिन मिल रहा है। 422 टैंकरों से 280 बस्तियों को पानी पहुँचाने का प्रयास।"
          }
        ]
      },
      fluoride: {
        title: "खामोश फ्लोराइड का जहर",
        badge: "रासायनिक प्रदूषण",
        description: "प्रकाशम भारत के 15 सबसे गंभीर रूप से फ्लोराइड प्रभावित जिलों में से एक है। 700 से अधिक गाँव दूषित हैं, लेकिन सरकार केवल 27 को सुरक्षित पानी देती है। कनिगिरि प्लूटोन — एक गहरी ग्रेनाइट चट्टान संरचना — सीधे भूजल में फ्लोराइड छोड़ती है। P.C. पल्ली में स्तर 15 mg/L तक पहुँचता है, जो WHO की 1.5 mg/L सीमा से 10 गुना अधिक है। भारत में स्थानिक फ्लोरोसिस का पहला दर्ज मामला 1937 में इसी जिले से था। 88 वर्षों की वैज्ञानिक जागरूकता के बावजूद संकट अनसुलझा है।",
        stats: [
          { label: "प्रकाशम में फ्लोराइड प्रभावित गाँव", value: "700+" },
          { label: "सुरक्षित जल प्राप्त गाँव", value: "केवल 27" },
          { label: "अधिकतम फ्लोराइड स्तर (P.C. पल्ली)", value: "15 mg/L" },
          { label: "WHO सुरक्षित सीमा", value: "1.5 mg/L" },
          { label: "पहला स्थानिक फ्लोरोसिस दर्ज वर्ष", value: "1937" },
          { label: ">5 ppm फ्लोराइड वाली बस्तियाँ", value: "41" }
        ],
        articles: [
          {
            title: "प्रकाशम अभी भी फ्लोराइड संकट से जूझ रहा है",
            source: "डेक्कन क्रॉनिकल",
            year: "2025",
            url: "https://www.deccanchronicle.com/southern-states/andhra-pradesh/prakasam-still-battles-fluoride-crisis-1865150",
            excerpt: "2024 की केंद्रीय जल शक्ति रिपोर्ट ने प्रकाशम को 15 सबसे गंभीर फ्लोराइड प्रभावित जिलों की सूची में रखा। कनिगिरि और P.C. पल्ली में स्तर 15 mg/L तक।"
          },
          {
            title: "प्रकाशम नलगोंडा जैसी तबाही की ओर",
            source: "फ्लोराइड एक्शन नेटवर्क",
            year: "2018",
            url: "https://fluoridealert.org/news/prakasam-faces-nalgonda-fate/",
            excerpt: "1,769 में से 1,009 गाँव दूषित हैं लेकिन केवल 27 को सरकारी सुरक्षित जल मिलता है। स्वास्थ्य कार्यकर्ताओं की चेतावनी।"
          },
          {
            title: "मरकापुर क्षेत्र में फ्लोराइड युक्त भूजल का भू-रासायनिक व्यवहार",
            source: "NIH / PMC (Applied Water Science)",
            year: "2019",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5996165/",
            excerpt: "कनिगिरि प्लूटोन की ग्रेनाइट चट्टानों से फ्लोराइड के रिसाव की पुष्टि। सार्वजनिक स्वास्थ्य की रक्षा के लिए सतही जल स्रोतों की ओर पूरी तरह स्थानांतरण की सिफारिश।"
          }
        ]
      },
      migration: {
        title: "महापलायन — अपना घर छोड़ने की मजबूरी",
        badge: "मानव विस्थापन",
        description: "ज़हरीले पानी और सूखी ज़मीन से मजबूर होकर हज़ारों कनिगिरि परिवारों ने अपने पुश्तैनी गाँव छोड़ दिए हैं। युवा हैदराबाद, चेन्नई और बेंगलुरु में दैनिक मजदूर के रूप में पलायन करते हैं, बुजुर्ग माता-पिता और बच्चों को पीछे छोड़ते हैं। मुरारिपल्ली, जयरामपुरम जैसे पूरे गाँव वीरान हो गए हैं। जो रहते हैं वे दूषित भूजल और सुरक्षित पानी खरीदने की असहनीय लागत के बीच फँसे हैं। चार लोगों के परिवार को RO पानी पर हर महीने ₹600–₹1,200 खर्च करने पड़ते हैं।",
        stats: [
          { label: "उजड़े गाँव (अनाधिकारिक)", value: "24+" },
          { label: "उजड़े गाँव वाले निर्वाचन क्षेत्र", value: "4" },
          { label: "परिवार का मासिक जल खर्च", value: "₹600–₹1,200" },
          { label: "आय का चिकित्सा+जल पर खर्च", value: "~50%" },
          { label: "प्रमुख पलायन गंतव्य", value: "हैदराबाद, चेन्नई" },
          { label: "स्थायी रूप से पलायन किए परिवार", value: "हज़ारों" }
        ],
        articles: [
          {
            title: "जैसे-जैसे सूखा बढ़ा, AP में पलायन ने पकड़ी रफ्तार",
            source: "IATP / द हिंदू",
            year: "2020",
            url: "https://www.iatp.org/news/as-drought-spreads-migration-gains-momentum-in-ap-india",
            excerpt: "बोरवेल सूखने के बाद सैकड़ों लोग हफ्तों में शहरों की ओर निकल जाते हैं। युवा निर्माण कार्य के लिए शहर जाते हैं, परिवारों को पीछे छोड़ते हैं।"
          },
          {
            title: "अंधाधुंध बोरवेल खुदाई ने प्रकाशम को पानी संकट में धकेला",
            source: "द न्यूज़ मिनट",
            year: "2022",
            url: "https://www.thenewsminute.com/article/how-indiscriminate-digging-borewells-has-driven-aps-prakasam-water-crisis-99745",
            excerpt: "1,000 फुट गहरे बोरवेल हफ्तों में सूख जाते हैं। यह संकट सीमांत किसानों और दैनिक मजदूरों को असमान रूप से नुकसान पहुँचाता है।"
          },
          {
            title: "जल विषाक्तता युवा पीढ़ियों पर भारी पड़ रही है",
            source: "द हिंदू",
            year: "2015 (अपडेट 2025)",
            url: "https://www.thehindu.com",
            excerpt: "परिवार चिकित्सा और पानी खरीदने पर आधी आय खर्च करते हैं। जो जा सकते हैं — चले जाते हैं; जो नहीं जा सकते — भुगतते हैं।"
          }
        ]
      }
    }
  }
};
