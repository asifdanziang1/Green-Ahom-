import ProgramPageLayout from '../components/ProgramPageLayout';

const DisasterManagement = () => {
  const data = {
    title: "Disaster Preparedness & Risk Reduction",
    subtitle: "Building climate resilience, early warning networks, flood-resistant infrastructure, and community sower response teams across Assam's high-risk ecological zones.",
    badgeText: "DISASTER MANAGEMENT INITIATIVE",
    heroImages: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1600&q=80"
    ],
    whySection: {
      heading: "Why Disaster Risk Preparedness is Critical in Assam",
      leadText: "Assam ranks among India's most climate-vulnerable states due to severe riverbank erosion, flash floods, landslides in hilly belts, and frequent seismic activity.",
      descriptionPoints: [
        {
          title: "Chronic Riverbank Erosion",
          desc: "Millions of metric tons of soil erode into the Brahmaputra and Barak river basins, swallowing entire villages every monsoon."
        },
        {
          title: "Delayed Early Warnings in Remote Belts",
          desc: "Highland water releases often flood downstream hamlets with zero advance alert to residents."
        },
        {
          title: "Lack of Community First Responders",
          desc: "External state disaster teams take hours or days to navigate flooded roads, emphasizing the need for trained local responders."
        }
      ],
      image: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80",
      highlightStat: "50+",
      highlightLabel: "High-Risk Villages Protected by Early Warning Squads"
    },
    approach: [
      {
        icon: "📢",
        title: "Community Early Warning Systems (CEWS)",
        desc: "Deploying solar-powered water level sensors, siren stations, and WhatsApp radio warning alerts for riverine communities.",
        points: ["Real-time gauge monitoring", "SMS & siren evacuation alerts"]
      },
      {
        icon: "🌊",
        title: "Bio-Engineering & Erosion Control",
        desc: "Planting vetiver grass networks, bamboo palisades, and geo-textile soil binding along vulnerable river embankments.",
        points: ["Deep-root vetiver grass planting", "Eco-friendly slope stabilization"]
      },
      {
        icon: "🛟",
        title: "Community Task Force Training",
        desc: "Training local youth in first-aid, search & rescue, emergency boat maneuvering, and evacuation logistics.",
        points: ["Certified first-aid CPR training", "Disaster kit maintenance"]
      },
      {
        icon: "🏗️",
        title: "Resilient Elevated Shelter Infrastructure",
        desc: "Constructing multi-purpose elevated community high-plinth shelters with solar power and rain harvesting.",
        points: ["Flood-proof high platform shelters", "Integrated cattle evacuation ramps"]
      }
    ],
    impactSection: {
      heading: "Building Long-Term Disaster Resilience",
      summary: "GAF's proactive risk reduction mitigates loss of life and property before disasters strike.",
      image1: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "⏰",
          title: "4-Hour Advance Evacuation Warning",
          desc: "GAF early warning sensors alerted 12 riverine villages before peak flood surge in 2024."
        },
        {
          icon: "🌱",
          title: "15 Kilometers Embankment Stabilized",
          desc: "Vetiver grass and bamboo planting reduced riverbank collapse rates by 60%."
        },
        {
          icon: "🦺",
          title: "650 Certified Youth Responders Active",
          desc: "Local volunteer squads equipped with life jackets, stretchers, and rescue gear."
        }
      ]
    },
    stats: [
      { number: "50+", label: "Villages Protected", subtext: "Equipped with early warning sirens" },
      { number: "650", label: "Youth Responders Trained", subtext: "Certified in search & rescue" },
      { number: "15 KM", label: "Embankments Bio-Shielded", subtext: "Vetiver grass & bamboo palisades" },
      { number: "100%", label: "Community-Led Response", subtext: "Immediate ground mobilization" }
    ],
    stories: [
      {
        name: "Jiten Gogoi",
        role: "Early Warning Volunteer",
        location: "Dhemaji District",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        quote: "Our siren alerted 300 families at 2 AM when the upstream dam released flood waters. Everyone evacuated safely.",
        fullStory: "Jiten manages the GAF solar warning station in his village. His prompt alert enabled families to move livestock and belongings to high ground before water inundated homes."
      },
      {
        name: "Hemanta Saikia",
        role: "Disaster Preparedness Field Officer",
        location: "Hailakandi Unit",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        quote: "Disaster preparedness turns helplessness into structured, life-saving community action.",
        fullStory: "Hemanta has led 40+ mock evacuation drills and trained youth squads across the Barak Valley."
      }
    ],
    videos: [
      {
        title: "GAF Community Early Warning System Demonstration",
        desc: "How solar sirens and gauge sensors warn rural villages hours before floods hit.",
        thumbnail: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80",
        duration: "3:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Bio-Engineering Riverbank Protection with Vetiver Grass",
        desc: "Planting deep-root grass to stop Brahmaputra soil erosion.",
        thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        duration: "2:55",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default DisasterManagement;
