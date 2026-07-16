import ProgramPageLayout from '../components/ProgramPageLayout';

const CommunityDevelopment = () => {
  const data = {
    title: "Integrated Community & Livelihood Development",
    subtitle: "Strengthening rural economies in Assam through artisan cooperatives, organic farming micro-grants, solar lighting, and drinking water infrastructure.",
    badgeText: "COMMUNITY INITIATIVE",
    heroImages: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=80"
    ],
    whySection: {
      heading: "Why Community Development Belts Need Support",
      leadText: "Rural communities in Assam face economic vulnerabilities due to seasonal agricultural disruption, lack of market linkages for traditional handicrafts, and inadequate basic infrastructure.",
      descriptionPoints: [
        {
          title: "Lack of Sustainable Micro-Incomes",
          desc: "Smallholder farmers and traditional weavers often lack capital and direct market access, forcing reliance on middle-men."
        },
        {
          title: "Clean Water Shortages",
          desc: "Arsenic and iron contamination in groundwater poses health risks to thousands of rural households."
        },
        {
          title: "Energy & Streetlight Deficits",
          desc: "Unlit village pathways compromise safety at night and restrict evening micro-business activities."
        }
      ],
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
      highlightStat: "34,000+",
      highlightLabel: "Villagers Empowered Across 75 Communities"
    },
    approach: [
      {
        icon: "🎋",
        title: "Artisan & Handloom Cooperatives",
        desc: "Forming micro-entrepreneurship clusters for traditional Assam handloom, bamboo craft, and organic agro-products.",
        points: ["Direct buyer market linkage", "Ergonomic loom machinery upgrades"]
      },
      {
        icon: "☀️",
        title: "Solar Village Illumination",
        desc: "Installing community solar streetlights and decentralized mini-grids in non-electrified forest edge villages.",
        points: ["Long-life lithium battery solar poles", "Community maintenance committees"]
      },
      {
        icon: "🚰",
        title: "Clean Water Deep Tube-Wells",
        desc: "Installing high-grade community bio-sand and iron filtration water systems in arsenic-affected areas.",
        points: ["Tested zero-contaminant water", "Zero electricity gravity filtration"]
      },
      {
        icon: "🌾",
        title: "Climate-Resilient Agriculture",
        desc: "Training farmers in flood-tolerant paddy varieties, organic vermicomposting, and multi-cropping.",
        points: ["Organic certification assistance", "Soil health testing kits"]
      }
    ],
    impactSection: {
      heading: "Sustainable Ground Transformation",
      summary: "GAF's community-first approach fosters self-reliant, resilient villages with steady economic growth.",
      image1: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "💵",
          title: "45% Increase in Household Income",
          desc: "Direct market connection for bamboo and handloom artisans boosted monthly earnings."
        },
        {
          icon: "💧",
          title: "75 Bio-Filtration Water Plants Active",
          desc: "Providing pure drinking water to over 22,000 rural residents daily."
        },
        {
          icon: "💡",
          title: "450+ Solar Streetlights Lit",
          desc: "Illuminating village roads, market squares, and school pathways."
        }
      ]
    },
    stats: [
      { number: "34,000+", label: "Villagers Benefited", subtext: "Across 75 rural hamlets" },
      { number: "75", label: "Clean Water Plants", subtext: "Bio-sand & iron filtration" },
      { number: "450+", label: "Solar Streetlights", subtext: "Installed in remote hamlets" },
      { number: "100%", label: "Community Owned", subtext: "Maintained by village committees" }
    ],
    stories: [
      {
        name: "Rupam Das",
        role: "Bamboo Artisan Cooperative Lead",
        location: "Hailakandi District",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        quote: "Through GAF's market linkage program, our bamboo craft cooperative now sells products directly across India.",
        fullStory: "Rupam's group used to earn minimum wages. With modern design training and direct trade links established by GAF, their monthly family earnings doubled."
      },
      {
        name: "Mina Mech",
        role: "Village Water Committee Member",
        location: "Dima Hasao",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        quote: "Our village no longer suffers from stomach ailments thanks to the GAF clean water filtration plant.",
        fullStory: "Mina oversees the daily water testing at her village's GAF filtration hub, ensuring 400 families receive safe drinking water."
      }
    ],
    videos: [
      {
        title: "Empowering Rural Bamboo Artisans of Assam",
        desc: "Documentary on GAF's livelihood micro-grant and handloom cooperative model.",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
        duration: "4:05",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Clean Drinking Water & Solar Village Revolution",
        desc: "Transforming remote villages with clean water filtration and solar mini-grids.",
        thumbnail: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
        duration: "3:10",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default CommunityDevelopment;
