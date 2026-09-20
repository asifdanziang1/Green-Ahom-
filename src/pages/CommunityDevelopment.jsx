import ProgramPageLayout from '../components/ProgramPageLayout';

const CommunityDevelopment = () => {
  const data = {
    title: "Integrated Community & Livelihood Development",
    subtitle: "Strengthening rural communities in Assam through community centre construction, street lighting, sanitation infrastructure, and irrigation for sustainable agriculture.",
    badgeText: "COMMUNITY INITIATIVE",
    heroImages: [
      "/client_content/program_images/Community Centre Construction Work/community cntre hall const.jfif",
      "/client_content/program_images/Street Light Installation Programme/street light 1.jfif",
      "/client_content/program_images/Sanitation & Hygiene  Individual Household Latrine (IHHL) Construction under WASH Program/IMG-20260114-WA0007.jpg"
    ],
    whySection: {
      heading: "Why Community Development Matters in Rural Assam",
      leadText: "Rural communities in Assam face vulnerabilities due to lack of basic infrastructure — community gathering spaces, proper sanitation, safe street lighting, and reliable water management systems.",
      descriptionPoints: [
        {
          title: "Lack of Community Spaces",
          desc: "Many villages lack proper community halls for meetings, training programmes, and emergency shelters during disasters."
        },
        {
          title: "Sanitation & Hygiene Gaps",
          desc: "Open defecation and lack of household latrines pose serious health risks, especially for women and children."
        },
        {
          title: "Energy & Streetlight Deficits",
          desc: "Unlit village pathways compromise safety at night and restrict evening micro-business activities."
        }
      ],
      image: "/client_content/program_images/Community Centre Construction Work/community hall construction 2.jfif",
      highlightStat: "3+",
      highlightLabel: "Community Centres Constructed Across Districts"
    },
    approach: [
      {
        icon: "🏛️",
        title: "Community Centre Construction",
        desc: "Building community halls across Barpeta, Cachar, and Hailakandi districts to serve as gathering spaces, training centres, and disaster shelters.",
        points: ["Multi-purpose community halls", "Emergency shelter infrastructure"]
      },
      {
        icon: "☀️",
        title: "Street Light Installation",
        desc: "Installing solar-powered street lights in non-electrified rural villages to improve safety and enable evening economic activity.",
        points: ["Solar LED street lights", "Community maintenance committees"]
      },
      {
        icon: "🚽",
        title: "Sanitation & WASH Programme",
        desc: "Constructing Individual Household Latrines (IHHL) under the WASH programme to improve sanitation and hygiene in rural communities.",
        points: ["IHHL construction", "Hygiene awareness drives"]
      },
      {
        icon: "🌾",
        title: "Irrigation & Agriculture Support",
        desc: "Building irrigation canals and water management systems to support sustainable agriculture in flood-prone areas.",
        points: ["Canal construction in Hailakandi", "Sustainable water management"]
      }
    ],
    impactSection: {
      heading: "Sustainable Community Transformation",
      summary: "GAF's community-first approach builds resilient, self-reliant villages with essential infrastructure across multiple districts.",
      image1: "/client_content/program_images/Community Centre Construction Work/IMG20240120152237.jpg",
      image2: "/client_content/program_images/Sanitation & Hygiene  Individual Household Latrine (IHHL) Construction under WASH Program/IMG-20260114-WA0015.jpg",
      highlights: [
        {
          icon: "🏗️",
          title: "Community Centres Built",
          desc: "Multi-purpose halls constructed in Barpeta, Cachar, and Hailakandi for community gatherings and training."
        },
        {
          icon: "💡",
          title: "Village Illumination",
          desc: "Street lights installed across rural areas improving safety and enabling evening activities."
        },
        {
          icon: "🚰",
          title: "Sanitation Infrastructure",
          desc: "IHHL construction under WASH programme providing proper sanitation to rural households."
        }
      ]
    },
    stats: [
      { number: "3+", label: "Community Centres", subtext: "Across Barpeta, Cachar & Hailakandi" },
      { number: "Multiple", label: "Street Lights Installed", subtext: "Solar-powered village lighting" },
      { number: "WASH", label: "Sanitation Programme", subtext: "IHHL construction" },
      { number: "100%", label: "Community Owned", subtext: "Maintained by village committees" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default CommunityDevelopment;
