import ProgramPageLayout from '../components/ProgramPageLayout';

const Relief = () => {
  const data = {
    title: "Emergency Flood & Crisis Relief",
    subtitle: "Rapid deployment of dry ration packs, clean drinking water, emergency shelters, and survival kits during Assam's severe annual flood crises.",
    badgeText: "DISASTER RELIEF INITIATIVE",
    heroImages: [
      "/client_content/program_images/Food Distribution Programme for Eliminating Hunger/IMG-20260310-WA0043.jpg",
      "/client_content/program_images/Food Distribution Programme for Eliminating Hunger/DRY RATION DISTR 2.jfif",
      "/client_content/program_images/Food Distribution Programme for Eliminating Hunger/IMG-20260310-WA0047.jpg"
    ],
    whySection: {
      heading: "Why Emergency Relief is Lifesaving in Assam",
      leadText: "Assam suffers from catastrophic annual flood cycles affecting millions of people. Thousands of families lose their homes, food stock, and drinking water sources overnight.",
      descriptionPoints: [
        {
          title: "Immediate Displacement",
          desc: "Floodwaters inundate entire villages, forcing residents to take shelter on high embankments without basic food or clean water."
        },
        {
          title: "Food Insecurity",
          desc: "Stored grains and crops are submerged, leaving vulnerable families with zero access to daily meals for weeks."
        },
        {
          title: "Water Contamination",
          desc: "Submerged tube wells result in acute drinking water shortages, leading to rapid disease spread."
        }
      ],
      image: "/client_content/program_images/Food Distribution Programme for Eliminating Hunger/DRY RATION DISTR 3.jfif",
      highlightStat: "₹48.3L",
      highlightLabel: "Worth of Dry Rations Distributed Across 5 Districts"
    },
    approach: [
      {
        icon: "🚤",
        title: "Boat Rescue & Rapid Response",
        desc: "Deploying motorized rescue boats and localized volunteer squads to reach marooned families in remote riverine islands within hours.",
        points: ["24/7 disaster control hotline", "Trained sower and boatman rescue squads"]
      },
      {
        icon: "📦",
        title: "Audited Dry Ration Distribution",
        desc: "Providing 15-day survival food packs containing rice, pulses, mustard oil, salt, baby food, and high-energy biscuits.",
        points: ["Sealed waterproof packaging", "Direct token-based transparent delivery"]
      },
      {
        icon: "💧",
        title: "Safe Drinking Water & Sanitation",
        desc: "Distributing water purification tablets, jerrycans, portable water filters, and setting up emergency temporary latrines.",
        points: ["Halazone & Chlorine water purification", "Dignity kits for women and girls"]
      },
      {
        icon: "⛺",
        title: "Temporary Tarpaulin Shelters",
        desc: "Erecting weatherproof tarpaulin camp shelters and mosquito nets along embankments and relief camps.",
        points: ["Heavy-duty UV resistant tarps", "Medicated mosquito net distribution"]
      }
    ],
    impactSection: {
      heading: "Immediate Ground Response & Rehabilitation",
      summary: "Green Ahom Federation's relief operations across Hailakandi, Barpeta, Cachar, Karimganj and Nalbari have provided critical humanitarian support during major flood events.",
      image1: "/client_content/program_images/Food Distribution Programme for Eliminating Hunger/IMG-20260310-WA0043.jpg",
      image2: "/client_content/program_images/Food Distribution Programme for Eliminating Hunger/IMG-20260310-WA0047.jpg",
      highlights: [
        {
          icon: "🍲",
          title: "Dry Ration Distribution",
          desc: "Emergency food packets distributed to economically weaker households and daily wage earners facing hardship."
        },
        {
          icon: "🛡️",
          title: "Multi-District Coverage",
          desc: "Relief operations reached vulnerable populations across Cachar, Hailakandi, Karimganj, Barpeta, and Nalbari."
        },
        {
          icon: "🏘️",
          title: "Community-Driven Response",
          desc: "Grassroots volunteer networks mobilised to ensure rapid distribution to the most affected areas."
        }
      ]
    },
    stats: [
      { number: "₹48.3L", label: "Relief Operations Value", subtext: "Dry rations across 5 districts" },
      { number: "7", label: "Districts Reached", subtext: "Humanitarian relief coverage" },
      { number: "1000s", label: "Families Supported", subtext: "Food, water & shelter" },
      { number: "100%", label: "Verified Distribution", subtext: "Detailed field distribution logs" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default Relief;
