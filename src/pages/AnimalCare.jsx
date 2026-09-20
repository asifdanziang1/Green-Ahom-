import ProgramPageLayout from '../components/ProgramPageLayout';

const AnimalCare = () => {
  const data = {
    title: "Animal Care & Livestock Protection",
    subtitle: "Protecting stray animals, flood-affected livestock, and wildlife through emergency veterinary camps, fodder distribution, and rescue operations.",
    badgeText: "ANIMAL WELFARE INITIATIVE",
    heroImages: [
      "/client_content/program_images/Animal Welfare Rescue, Feeding & Medical Support Programme/ANIMAL WELFARE 1.jfif",
      "/client_content/program_images/Animal Welfare Rescue, Feeding & Medical Support Programme/animal feed 1.jfif",
      "/client_content/program_images/Animal Welfare Rescue, Feeding & Medical Support Programme/ANIMAL WELFARE 2.jfif"
    ],
    whySection: {
      heading: "Why Animal & Livestock Welfare is Vital in Assam",
      leadText: "During Assam's severe annual monsoon floods, hundreds of thousands of farm cattle and stray animals face drowning, starvation, and fatal foot-and-mouth infections.",
      descriptionPoints: [
        {
          title: "Livestock Starvation During Floods",
          desc: "Submerged pastures destroy green fodder, leaving village cattle starving and vulnerable to severe malnutrition."
        },
        {
          title: "High Risk of Disease Outbreaks",
          desc: "Stagnant flood waters cause rapid spread of anthrax, black quarter, and parasitic infestations among farm animals."
        },
        {
          title: "Injured & Stranded Stray Animals",
          desc: "Urban and rural stray dogs and cattle face trauma, vehicle accidents, and lack of basic medical treatment."
        }
      ],
      image: "/client_content/program_images/Animal Welfare Rescue, Feeding & Medical Support Programme/animal medi.jfif",
      highlightStat: "₹35.4L",
      highlightLabel: "Annual Animal Welfare Budget Allocation"
    },
    approach: [
      {
        icon: "🐄",
        title: "Animal Feeding Programmes",
        desc: "Regular feeding drives for stray and vulnerable animals including cattle, dogs, and other domestic animals across rural and semi-urban areas.",
        points: ["Community animal feeder network", "Emergency food supply during floods"]
      },
      {
        icon: "💉",
        title: "Veterinary Medical Support",
        desc: "Deploying veterinary doctors and medical teams to provide treatment, vaccination, and wound care for injured and sick animals.",
        points: ["Foot-and-Mouth disease vaccination", "Deworming & wound care"]
      },
      {
        icon: "🛟",
        title: "Animal Rescue Operations",
        desc: "Operating rescue units to extract trapped animals from flood-affected areas and provide immediate shelter and care.",
        points: ["Flood rescue operations", "Injured animal rehabilitation"]
      },
      {
        icon: "🐶",
        title: "Stray Animal Welfare",
        desc: "Conducting anti-rabies vaccination drives and humane care campaigns in rural market hubs and urban areas.",
        points: ["Rabies vaccination drives", "Community awareness programmes"]
      }
    ],
    impactSection: {
      heading: "Safeguarding Rural Livelihoods & Animal Lives",
      summary: "In Assam, livestock represent the primary financial security for rural families. GAF's intervention protects both animal lives and family economies.",
      image1: "/client_content/program_images/Animal Welfare Rescue, Feeding & Medical Support Programme/download (1).jfif",
      image2: "/client_content/program_images/Animal Welfare Rescue, Feeding & Medical Support Programme/download (2).jfif",
      highlights: [
        {
          icon: "🐮",
          title: "Regular Animal Feeding",
          desc: "Feeding programmes for stray and vulnerable animals across multiple districts."
        },
        {
          icon: "💉",
          title: "Medical Support & Vaccination",
          desc: "Veterinary camps providing free treatment and vaccination for injured and sick animals."
        },
        {
          icon: "🐾",
          title: "Rescue & Rehabilitation",
          desc: "Active rescue operations during floods and emergencies to save stranded animals."
        }
      ]
    },
    stats: [
      { number: "₹35.4L", label: "Annual Budget", subtext: "Animal welfare allocation" },
      { number: "Multiple", label: "Districts Covered", subtext: "Feeding & rescue operations" },
      { number: "Regular", label: "Feeding Drives", subtext: "Stray & vulnerable animals" },
      { number: "100%", label: "Humane Operations", subtext: "Compassion for all living beings" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default AnimalCare;
