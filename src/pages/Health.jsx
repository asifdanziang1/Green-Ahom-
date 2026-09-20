import ProgramPageLayout from '../components/ProgramPageLayout';

const Health = () => {
  const data = {
    title: "Healthcare Access & Medical Camps",
    subtitle: "Delivering free eye camps, cataract surgeries, spectacle distribution, and nutritional support to TB patients across rural Assam.",
    badgeText: "HEALTHCARE INITIATIVE",
    heroImages: [
      "/client_content/program_images/Eye Camp Cataract Surgery Support Programme/WhatsApp Image 2024-05-05 at 16.06.14.jpeg",
      "/client_content/program_images/Eye Camp Spectacles Distribution for Refractive Error Programme/WhatsApp Image 2024-05-05 at 11.42.38.jpeg",
      "/client_content/program_images/Nutritional Food Packets Distribution to TB Patients/WhatsApp Image 2024-05-08 at 10.02.13.jpeg"
    ],
    whySection: {
      heading: "Why Rural Healthcare Access is Urgent in Assam",
      leadText: "Geographic isolation during seasonal floods, scarcity of primary health centers, and lack of diagnostic services severely impact health outcomes across Assam's rural population.",
      descriptionPoints: [
        {
          title: "Monsoon Health Crises",
          desc: "Floodwaters trigger outbreaks of waterborne diseases, skin infections, and vector-borne fevers in isolated hamlets."
        },
        {
          title: "Maternal & Child Vulnerability",
          desc: "Expecting mothers in remote riverine islands face severe challenges accessing timely prenatal checkups and nutrition."
        },
        {
          title: "High Out-of-Pocket Costs",
          desc: "Poor transport infrastructure forces families to spend high amounts to reach urban medical facilities for basic diagnostics."
        }
      ],
      image: "/client_content/program_images/Eye Camp Cataract Surgery Support Programme/WhatsApp Image 2024-05-05 at 16.06.15 (1).jpeg",
      highlightStat: "2,635+",
      highlightLabel: "Beneficiaries Reached Through Health Programmes"
    },
    approach: [
      {
        icon: "👁️",
        title: "Eye Camp & Cataract Surgery Support",
        desc: "Conducting free eye screening camps and fully sponsoring cataract surgeries and refractive spectacle distribution for elderly and underprivileged individuals in Hailakandi District.",
        points: ["Free cataract surgery sponsorship", "Spectacle distribution for refractive errors"]
      },
      {
        icon: "🍽️",
        title: "TB Patient Nutrition Programme",
        desc: "Distributing nutritional food packets to registered tuberculosis patients to improve recovery outcomes during treatment in Patharkandi Block, Karimganj District.",
        points: ["High-protein nutrition supplements", "Partnered with ONGC Silchar CSR"]
      },
      {
        icon: "🩺",
        title: "Maternal & Infant Wellness Drives",
        desc: "Conducting targeted prenatal screenings, distributing high-protein nutrition supplements, and facilitating safe institutional deliveries.",
        points: ["Hemoglobin monitoring", "Iron & folic acid supplementation"]
      },
      {
        icon: "🔬",
        title: "Preventive Health & Hygiene Screening",
        desc: "Organizing mass screening camps for diabetes, hypertension, malaria, and waterborne infection management.",
        points: ["Free distribution of hygiene kits", "Clean water purification tablets"]
      }
    ],
    impactSection: {
      heading: "Transforming Rural Health Outcomes",
      summary: "GAF's healthcare programmes across Hailakandi, Karimganj, and Cachar districts have provided critical medical support at zero cost to underserved families.",
      image1: "/client_content/program_images/Eye Camp Spectacles Distribution for Refractive Error Programme/WhatsApp Image 2024-05-05 at 11.49.27.jpeg",
      image2: "/client_content/program_images/Nutritional Food Packets Distribution to TB Patients/WhatsApp Image 2024-05-08 at 10.02.14.jpeg",
      highlights: [
        {
          icon: "👁️",
          title: "Eye Camps & Vision Restoration",
          desc: "Free spectacle distribution and cataract surgery support restored vision for elderly and underprivileged patients."
        },
        {
          icon: "💊",
          title: "TB Nutrition Programme",
          desc: "Nutritional food packets improved recovery outcomes for registered tuberculosis patients in Karimganj."
        },
        {
          icon: "❤️",
          title: "ONGC CSR Partnership",
          desc: "Partnered with ONGC Silchar for ₹14.85L healthcare programme covering TB nutrition and cataract surgeries."
        }
      ]
    },
    stats: [
      { number: "2,635+", label: "Beneficiaries Reached", subtext: "Health & nutrition programmes" },
      { number: "₹14.85L", label: "ONGC CSR Partnership", subtext: "TB nutrition & eye care" },
      { number: "5", label: "Districts Covered", subtext: "Healthcare interventions" },
      { number: "100%", label: "Free Medical Services", subtext: "Zero financial burden on patients" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default Health;
