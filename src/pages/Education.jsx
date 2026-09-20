import ProgramPageLayout from '../components/ProgramPageLayout';

const Education = () => {
  const data = {
    title: "Inclusive & Rural Education",
    subtitle: "Empowering rural children in Assam with quality learning resources, STEM kits, digital literacy, and eco-friendly school infrastructure.",
    badgeText: "EDUCATION INITIATIVE",
    heroImages: [
      "/extracted_images/ANNUAL_REPORT_2024-2025_p13_img24.jpg",
      "/extracted_images/ANNUAL_REPORT_2024-2025_p13_img25.jpg",
      "/client_content/program_images/Plantation Drive Programme/IMG20250221104038.jpg"
    ],
    whySection: {
      heading: "Why Rural Education Matters in Assam",
      leadText: "Deep inside Assam's remote riverine islands (chars) and hilly tea garden belts, thousands of children lack access to fundamental learning tools, functional classrooms, and modern digital education.",
      descriptionPoints: [
        {
          title: "Infrastructure Gaps",
          desc: "Many flood-prone rural schools lack basic desk infrastructure, clean drinking water, and flood-resilient structures."
        },
        {
          title: "High Dropout Rates",
          desc: "Economic pressures and seasonal monsoon disruptions lead to high dropout rates among adolescent girls and vulnerable youth."
        },
        {
          title: "Digital Divide",
          desc: "Remote classrooms rarely have access to computers or interactive STEM modules, leaving students at a disadvantage."
        }
      ],
      image: "/extracted_images/ANNUAL_REPORT_2024-2025_p13_img25.jpg",
      highlightStat: "364",
      highlightLabel: "Students Enrolled at Ideal Academy"
    },
    approach: [
      {
        icon: "🎒",
        title: "Kit & Desk Distribution",
        desc: "Equipping underprivileged elementary and middle school students with eco-friendly textbook bags, stationery sets, and sturdy dual-benches.",
        points: ["Zero-plastic cloth bags", "Solar study lamps for non-electrified hamlets"]
      },
      {
        icon: "💻",
        title: "Rural Digital Smart Classrooms",
        desc: "Installing solar-powered tablet labs and offline digital learning modules in remote tea garden and riverine schools.",
        points: ["Interactive regional language modules", "Teacher digital empowerment workshops"]
      },
      {
        icon: "🌱",
        title: "Eco-Clubs & Environmental Education",
        desc: "Fostering young environmental stewards through hands-on tree planting, seed bombing, and plastic waste recycling campaigns.",
        points: ["School biodiversity gardens", "Youth Green Ambassador badges"]
      },
      {
        icon: "🏫",
        title: "School Restoration & Sanitation",
        desc: "Renovating flood-damaged classroom roofs, painting vibrant educational murals, and building gender-segregated bio-toilets.",
        points: ["Clean drinking water filtration", "Flood-resistant high-plinth classrooms"]
      }
    ],
    impactSection: {
      heading: "Building Long-Term Educational Resilience",
      summary: "Through strategic interventions in Hailakandi, Barpeta, and Karimganj districts, Green Ahom Federation has rejuvenated rural educational ecosystems.",
      image1: "/extracted_images/ANNUAL_REPORT_2024-2025_p13_img24.jpg",
      image2: "/client_content/program_images/Plantation Drive Programme/IMG20250221104214.jpg",
      highlights: [
        {
          icon: "📈",
          title: "364 Students at Ideal Academy",
          desc: "Quality, affordable education from Nursery to Class X for underprivileged rural children."
        },
        {
          icon: "👧",
          title: "Inclusive Enrollment",
          desc: "Supporting SC, ST, OBC, MOBC, Minority, and economically backward communities."
        },
        {
          icon: "🏆",
          title: "Conceptual Learning Model",
          desc: "Intensive mentoring, hostel support, and guided academic facilities for first-generation learners."
        }
      ]
    },
    stats: [
      { number: "364", label: "Students Enrolled", subtext: "At Ideal Academy, Hailakandi" },
      { number: "Nursery–X", label: "Academic Coverage", subtext: "Full primary to secondary" },
      { number: "5", label: "Districts Covered", subtext: "Education programmes" },
      { number: "100%", label: "Audited Transparency", subtext: "Verified CSR tracking" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default Education;
