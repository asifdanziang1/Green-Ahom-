import ProgramPageLayout from '../components/ProgramPageLayout';

const EnvironmentProtection = () => {
  const data = {
    title: "Environment Protection & Afforestation",
    subtitle: "Conserving biodiversity, restoring native forest canopy through plantation drives, seed bombing, and ecological awareness campaigns across Assam.",
    badgeText: "ENVIRONMENTAL CONSERVATION",
    heroImages: [
      "/client_content/program_images/Plantation Drive Programme/PLANTATION 1.jfif",
      "/client_content/program_images/Plantation Drive Programme/IMG20250221104038.jpg",
      "/client_content/program_images/Plantation Drive Programme/plantation 4.jfif"
    ],
    whySection: {
      heading: "Why Environmental Conservation is Vital in Assam",
      leadText: "Assam's rich natural heritage — home to unique flora, fauna, and fragile wetlands — faces immense threats from deforestation, illegal encroachment, and plastic pollution.",
      descriptionPoints: [
        {
          title: "Depleting Forest Canopy",
          desc: "Rapid forest degradation displaces wild elephant herds and disrupts natural rainfall cycles."
        },
        {
          title: "Wetland Degradation (Beels)",
          desc: "Siltation and invasive water hyacinth growth compromise Assam's natural flood buffers and migratory bird habitats."
        },
        {
          title: "Plastic Waste Accumulation",
          desc: "Non-biodegradable waste in rural markets drains into rivers, endangering aquatic life and river dolphins."
        }
      ],
      image: "/client_content/program_images/Plantation Drive Programme/IMG20250221104214.jpg",
      highlightStat: "Active",
      highlightLabel: "Plantation Drive Programmes Across Multiple Districts"
    },
    approach: [
      {
        icon: "🌳",
        title: "School & Community Plantation Drives",
        desc: "Organising comprehensive plantation drives in schools and government office premises, planting native species to encourage ecological sustainability and climate awareness.",
        points: ["Native species plantation", "School eco-clubs & awareness"]
      },
      {
        icon: "💣",
        title: "Seed Bombing Campaigns",
        desc: "Mobilizing youth volunteers to disperse nutrient-encapsulated seed balls over inaccessible hilly and eroded forest zones.",
        points: ["High-germination clay-compost seed balls", "Pre-monsoon deployment"]
      },
      {
        icon: "🌿",
        title: "Wetland & Eco-Buffer Restoration",
        desc: "Cleaning invasive weeds from village waterbodies (Beels), planting riparian bamboo buffers, and protecting bird sanctuaries.",
        points: ["Desiltation of drainage channels", "Migratory bird habitat protection"]
      },
      {
        icon: "♻️",
        title: "Plastic-Free Campaigns",
        desc: "Setting up community plastic collection and awareness drives to reduce waste and promote eco-friendly alternatives.",
        points: ["Community awareness campaigns", "School plastic collection drives"]
      }
    ],
    impactSection: {
      heading: "Restoring Ecological Balance Across Districts",
      summary: "GAF's plantation drives and environmental programmes across Hailakandi, Cachar, and other districts have contributed to ecological restoration and community awareness.",
      image1: "/client_content/program_images/Plantation Drive Programme/plantation 5.jfif",
      image2: "/client_content/program_images/Plantation Drive Programme/PLANTATION 1.jfif",
      highlights: [
        {
          icon: "🌲",
          title: "Active Plantation Drives",
          desc: "Community and school plantation programmes encouraging ecological sustainability and climate responsibility."
        },
        {
          icon: "🏞️",
          title: "Community Participation",
          desc: "Environmental conservation initiatives encouraging community participation and awareness."
        },
        {
          icon: "🌍",
          title: "Ecological Awareness",
          desc: "School and community programmes building environmental consciousness among youth and rural communities."
        }
      ]
    },
    stats: [
      { number: "Active", label: "Plantation Drives", subtext: "Across school & community premises" },
      { number: "Multiple", label: "Districts Covered", subtext: "Environmental programmes" },
      { number: "Native", label: "Species Planted", subtext: "Indigenous tree varieties" },
      { number: "Community", label: "Participation", subtext: "Youth & volunteer-driven" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default EnvironmentProtection;
