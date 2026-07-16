import ProgramPageLayout from '../components/ProgramPageLayout';

const Relief = () => {
  const data = {
    title: "Emergency Flood & Crisis Relief",
    subtitle: "Rapid deployment of dry ration packs, clean drinking water, emergency shelters, and survival kits during Assam's severe annual flood crises.",
    badgeText: "DISASTER RELIEF INITIATIVE",
    heroImages: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
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
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80",
      highlightStat: "42,000+",
      highlightLabel: "Individuals Reached with Relief Ration Kits"
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
      summary: "Green Ahom Federation's relief operations in Hailakandi, Barpeta, and Cachar have saved thousands of lives during major flood events.",
      image1: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "🍲",
          title: "Over 350,000 Meals Served",
          desc: "Community relief kitchens operated round-the-clock during peak flood submerged days."
        },
        {
          icon: "🛡️",
          title: "Zero Waterborne Outbreaks in Camps",
          desc: "Clean water purification tablets prevented cholera and dysentery epidemics in GAF relief zones."
        },
        {
          icon: "🏘️",
          title: "Post-Flood Home Rebuilding Support",
          desc: "Provided bamboo, CGI sheets, and structural tools for families rebuilding homes after waters receded."
        }
      ]
    },
    stats: [
      { number: "42,000+", label: "People Provided Relief", subtext: "Rations, water & medicine" },
      { number: "18,500+", label: "Ration Kits Delivered", subtext: "15-day family food packs" },
      { number: "85+", label: "Villages Covered", subtext: "In Hailakandi, Barpeta & Cachar" },
      { number: "100%", label: "Verified CSR Audits", subtext: "Detailed field distribution logs" }
    ],
    stories: [
      {
        name: "Prabin Kalita",
        role: "Farmer & Village Elder",
        location: "Barpeta District",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        quote: "When water rose 8 feet above our fields, Green Ahom Federation boats arrived with food and tarpaulins.",
        fullStory: "Prabin's family spent 4 days stranded on a road embankment. GAF's rescue team provided ration kits, clean water, and mosquito nets to keep his family safe."
      },
      {
        name: "Sunita Das",
        role: "GAF Relief Volunteer Squad Lead",
        location: "Hailakandi Relief Hub",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
        quote: "Transparency in relief delivery ensures every single packet reaches the most desperate families.",
        fullStory: "Sunita led a team of 30 young volunteers who navigated flood waters day and night, ensuring zero wastage and 100% verified distribution."
      }
    ],
    videos: [
      {
        title: "GAF Flood Relief Action in Assam",
        desc: "Ground footage of GAF boats distributing survival rations to marooned villagers.",
        thumbnail: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80",
        duration: "3:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Building Emergency Shelters & Clean Water Hubs",
        desc: "How GAF sets up flood embankment relief camps.",
        thumbnail: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
        duration: "2:50",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default Relief;
