import ProgramPageLayout from '../components/ProgramPageLayout';

const EnvironmentProtection = () => {
  const data = {
    title: "Environment Protection & Reforestation",
    subtitle: "Conserving biodiversity, restoring native rainforest canopy, reclaiming wetlands, seed bombing, and plastic waste management across Assam's eco-sensitive corridors.",
    badgeText: "ENVIRONMENTAL CONSERVATION",
    heroImages: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1511497584788-8767611121ef?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80"
    ],
    whySection: {
      heading: "Why Environmental Conservation is Vital in Assam",
      leadText: "Assam's rich natural heritage—home to unique flora, fauna, and fragile wetlands—faces immense threats from deforestation, illegal encroachment, and plastic pollution.",
      descriptionPoints: [
        {
          title: "Depleting Rainforest Canopy",
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
      image: "https://images.unsplash.com/photo-1511497584788-8767611121ef?auto=format&fit=crop&w=800&q=80",
      highlightStat: "125,000+",
      highlightLabel: "Native Trees Planted & Seed Bombed"
    },
    approach: [
      {
        icon: "🌳",
        title: "Native Rainforest Afforestation",
        desc: "Establishing community tree nurseries and planting endemic timber, fruit, and medicinal saplings in degraded forest corridors.",
        points: ["Species: Hollong, Nahar, Teak, Amla, Neem", "Geotagged sapling survival monitoring"]
      },
      {
        icon: "💣",
        title: "Aerial Seed Bombing Drives",
        desc: "Mobilizing youth volunteers to disperse nutrient-encapsulated seed balls over inaccessible hilly and eroded forest zones.",
        points: ["High-germination clay-compost seed balls", "Pre-monsoon aerial deployment"]
      },
      {
        icon: "🌿",
        title: "Wetland & Eco-Buffer Restoration",
        desc: "Cleaning invasive weeds from village waterbodies (Beels), planting riparian bamboo buffers, and protecting bird sanctuaries.",
        points: ["Desiltation of natural drainage channels", "Migratory bird habitat protection"]
      },
      {
        icon: "♻️",
        title: "Plastic-Free Assam Campaign",
        desc: "Setting up community plastic collection kiosks and converting single-use plastics into eco-bricks and paver tiles.",
        points: ["Buyback micro-incentives for plastic waste", "School plastic collection competitions"]
      }
    ],
    impactSection: {
      heading: "Restoring Ecological Balance Across Districts",
      summary: "GAF's environment drives in Hailakandi, Dima Hasao, and Barpeta have restored degraded landscapes and created green community stewards.",
      image1: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "🌲",
          title: "82% Sapling Survival Rate",
          desc: "Community-assigned Green Guardians ensure young trees are nurtured through maturity."
        },
        {
          icon: "🏞️",
          title: "18 Village Wetlands Reclaimed",
          desc: "Removed water hyacinth and restored natural water storage capacity for 30,000 villagers."
        },
        {
          icon: "📦",
          title: "25 Tons Plastic Waste Recycled",
          desc: "Diverted plastic from rivers and converted it into durable village construction materials."
        }
      ]
    },
    stats: [
      { number: "125,000+", label: "Trees & Seed Bombs", subtext: "Planted across forest corridors" },
      { number: "18", label: "Wetlands Restored", subtext: "Reclaimed from invasive weeds" },
      { number: "25 Tons", label: "Plastic Recycled", subtext: "Diverted from Assam rivers" },
      { number: "82%", label: "Verified Survival Rate", subtext: "Geotagged tree audit tracking" }
    ],
    stories: [
      {
        name: "Bhaskar Barman",
        role: "Lead Environmental Ranger",
        location: "Hailakandi Forest Belt",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        quote: "Planting native trees today secures Assam's biodiversity and climate resilience for the next century.",
        fullStory: "Bhaskar has overseen GAF's seed bombing campaigns and tree nurseries, guiding 200+ youth rangers in planting native Hollong and Nahar trees."
      },
      {
        name: "Pratima Rabha",
        role: "Community Green Guardian",
        location: "Goalpara District",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        quote: "Our village plastic buyback program turned waste management into a source of pride for local women.",
        fullStory: "Pratima manages her village's plastic waste kiosk, collecting single-use plastics and earning supplemental income for her family."
      }
    ],
    videos: [
      {
        title: "Seed Bombing Assam's Degraded Hills",
        desc: "Youth volunteers dispersing 50,000 seed bombs ahead of the monsoon.",
        thumbnail: "https://images.unsplash.com/photo-1511497584788-8767611121ef?auto=format&fit=crop&w=600&q=80",
        duration: "3:20",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Wetland Restoration & Plastic Recycling Drive",
        desc: "Cleaning village wetlands and turning plastic waste into eco-bricks.",
        thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
        duration: "2:40",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default EnvironmentProtection;
