import ProgramPageLayout from '../components/ProgramPageLayout';

const Health = () => {
  const data = {
    title: "Healthcare Access & Medical Camps",
    subtitle: "Delivering free mobile medical units, maternal healthcare, emergency telemedicine, and preventive health drives to underserved rural Assam.",
    badgeText: "HEALTHCARE INITIATIVE",
    heroImages: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80"
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
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      highlightStat: "28,500+",
      highlightLabel: "Patients Treated in Mobile Medical Camps"
    },
    approach: [
      {
        icon: "🚐",
        title: "Mobile Health Units (MHUs)",
        desc: "Deploying fully equipped mobile clinic vans staffed by certified doctors, nurses, and pharmacists to remote villages weekly.",
        points: ["Free diagnostic blood tests", "Essential life-saving medicines"]
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
      },
      {
        icon: "📡",
        title: "Telemedicine & Rural Referral Network",
        desc: "Connecting grassroots health workers with urban specialist doctors via satellite cloud-telemedicine terminals.",
        points: ["Digital electronic medical records", "Emergency ambulance dispatch linkage"]
      }
    ],
    impactSection: {
      heading: "Transforming Rural Health Outcomes",
      summary: "GAF's healthcare network bridges the medical divide in Hailakandi, Dima Hasao, and Barpeta districts with zero cost to poor families.",
      image1: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "❤️",
          title: "65% Reduction in Waterborne Illnesses",
          desc: "Regular medical intervention combined with water purification tablet distribution drastically cut disease rates."
        },
        {
          icon: "👶",
          title: "1,200+ Safe Motherhood Registrations",
          desc: "Pregnant women received continuous prenatal care and hospital birth assistance."
        },
        {
          icon: "💊",
          title: "Free Medicine Distribution",
          desc: "Over ₹45 Lakhs worth of essential medicines dispensed directly to low-income patients."
        }
      ]
    },
    stats: [
      { number: "28,500+", label: "Patients Treated", subtext: "Free consultations & medicines" },
      { number: "140+", label: "Medical Camps Held", subtext: "Across 45 rural hamlets" },
      { number: "1,200+", label: "Mothers Assisted", subtext: "Maternal nutrition & care" },
      { number: "100%", label: "Free Diagnostic Services", subtext: "Zero financial burden on poor" }
    ],
    stories: [
      {
        name: "Kulsum Begum",
        role: "Mother of 2, Barpeta",
        location: "Barpeta District",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        quote: "The mobile medical van arrived in our flooded village right when my toddler had severe fever.",
        fullStory: "During the 2024 monsoon floods, Kulsum's village was surrounded by water. GAF's boat-clinic doctor treated her son and provided vital oral rehydration salts and antibiotics."
      },
      {
        name: "Dr. R. K. Sarma",
        role: "Lead Volunteer Medical Officer",
        location: "Hailakandi Unit",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
        quote: "Preventive health screenings catch chronic conditions like diabetes and anemia before they become fatal.",
        fullStory: "Dr. Sarma has spearheaded 50+ GAF health camps, ensuring elderly villagers receive continuous cardiac and diabetic medications at their doorstep."
      }
    ],
    videos: [
      {
        title: "GAF Mobile Clinic Operating in Flood Zones",
        desc: "Behind the scenes with GAF doctors navigating flood waters to treat patients.",
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        duration: "4:10",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Maternal Health & Nutrition Awareness Camp",
        desc: "Empowering young mothers with nutrition guidelines and health kits.",
        thumbnail: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
        duration: "2:50",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default Health;
