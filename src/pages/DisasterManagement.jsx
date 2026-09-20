import ProgramPageLayout from '../components/ProgramPageLayout';

const DisasterManagement = () => {
  const data = {
    title: "Disaster Preparedness & Risk Reduction",
    subtitle: "Building climate resilience through community infrastructure, irrigation systems, street lighting, and humanitarian response across Assam's high-risk zones.",
    badgeText: "DISASTER MANAGEMENT INITIATIVE",
    heroImages: [
      "/client_content/program_images/Irrigation Canal Construction for Sustainable Agriculture in North Narainpur, Hailakandi/IMG-20250429-WA0000.jpg",
      "/client_content/program_images/Street Light Installation Programme/street light 1.jfif",
      "/client_content/program_images/Food Distribution Programme for Eliminating Hunger/DRY RATION DISTR 2.jfif"
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
      image: "/client_content/program_images/Irrigation Canal Construction for Sustainable Agriculture in North Narainpur, Hailakandi/IMG-20250429-WA0001.jpg",
      highlightStat: "5+",
      highlightLabel: "Districts Covered with Disaster Preparedness Initiatives"
    },
    approach: [
      {
        icon: "🌊",
        title: "Irrigation Canal Construction",
        desc: "Building irrigation canals for sustainable agriculture in flood-prone areas like North Narainpur, Hailakandi to improve water management and crop resilience.",
        points: ["Sustainable agriculture support", "Flood water management"]
      },
      {
        icon: "💡",
        title: "Street Light Installation",
        desc: "Installing solar-powered street lights in rural villages to improve safety, enable evening economic activity, and support disaster evacuation routes.",
        points: ["Solar-powered LED lights", "Night-time safety for communities"]
      },
      {
        icon: "🛟",
        title: "Community Task Force Training",
        desc: "Training local youth in first-aid, search & rescue, emergency boat maneuvering, and evacuation logistics.",
        points: ["Certified first-aid CPR training", "Disaster kit maintenance"]
      },
      {
        icon: "🏗️",
        title: "Resilient Community Infrastructure",
        desc: "Constructing community centres, sanitation facilities, and elevated shelters to serve as disaster response hubs.",
        points: ["Community centre construction", "Sanitation infrastructure (IHHL/WASH)"]
      }
    ],
    impactSection: {
      heading: "Building Long-Term Disaster Resilience",
      summary: "GAF's proactive infrastructure development and community preparedness across multiple districts helps mitigate loss of life and property.",
      image1: "/client_content/program_images/Street Light Installation Programme/street light 2.jfif",
      image2: "/client_content/program_images/Irrigation Canal Construction for Sustainable Agriculture in North Narainpur, Hailakandi/IMG-20250429-WA0000.jpg",
      highlights: [
        {
          icon: "🌾",
          title: "Irrigation for Sustainable Agriculture",
          desc: "Canal construction in Hailakandi ensures year-round water supply for farming communities."
        },
        {
          icon: "💡",
          title: "Village Street Illumination",
          desc: "Street lights installed across rural areas improve safety and support disaster preparedness evacuation."
        },
        {
          icon: "🦺",
          title: "Community-Led Response",
          desc: "Local volunteer squads equipped and trained for rapid disaster response."
        }
      ]
    },
    stats: [
      { number: "5+", label: "Districts Covered", subtext: "Disaster preparedness initiatives" },
      { number: "Multiple", label: "Street Lights Installed", subtext: "Across rural villages" },
      { number: "Hailakandi", label: "Irrigation Canal", subtext: "North Narainpur project" },
      { number: "100%", label: "Community-Led Response", subtext: "Immediate ground mobilization" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default DisasterManagement;
