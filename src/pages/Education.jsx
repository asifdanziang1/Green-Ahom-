import ProgramPageLayout from '../components/ProgramPageLayout';

const Education = () => {
  const data = {
    title: "Inclusive & Rural Education",
    subtitle: "Empowering rural children in Assam with quality learning resources, STEM kits, digital literacy, and eco-friendly school infrastructure.",
    badgeText: "EDUCATION INITIATIVE",
    heroImages: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
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
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      highlightStat: "15,400+",
      highlightLabel: "Students Supported Across 62 Schools"
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
      image1: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "📈",
          title: "38% Increase in Attendance",
          desc: "Better classroom infrastructure and digital learning modules led to a sharp rise in daily attendance rates."
        },
        {
          icon: "👧",
          title: "Gender Parity in Retention",
          desc: "Constructing private sanitation units helped retain adolescent female students through senior grades."
        },
        {
          icon: "🏆",
          title: "STEM & Science Olympiad Winners",
          desc: "Rural students from GAF smart-labs earned regional top spots in Assam State Science Olympiads."
        }
      ]
    },
    stats: [
      { number: "15,400+", label: "Students Enrolled", subtext: "Across Hailakandi & Barpeta" },
      { number: "62", label: "Schools Upgraded", subtext: "Smart labs & sanitation" },
      { number: "4,500+", label: "Solar Lamps Distributed", subtext: "For night study" },
      { number: "100%", label: "Audited Transparency", subtext: "Verified CSR tracking" }
    ],
    stories: [
      {
        name: "Anamika Das",
        role: "Class 9 Student, Hailakandi",
        location: "Hailakandi District",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
        quote: "The solar study lamp enabled me to study for my matriculation exams even during monsoon blackouts.",
        fullStory: "Anamika's village experienced regular evening electricity outages. With GAF's solar study lamp and digital learning kit, she scored 88% in her board examinations."
      },
      {
        name: "Biren Rabha",
        role: "Headmaster, Rural LP School",
        location: "Goalpara District",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        quote: "Our school went from flood-damaged walls to a vibrant, solar-lit digital learning sanctuary.",
        fullStory: "Before GAF's intervention, attendance dropped by half during rains. Now with restored roofs, desks, and tablet learning, attendance stands at 95% year-round."
      }
    ],
    videos: [
      {
        title: "Bringing Digital Labs to Tea Garden Schools",
        desc: "Documentary showing GAF solar tablet installation in rural Hailakandi classrooms.",
        thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
        duration: "3:40",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Youth Green Ambassadors in Action",
        desc: "Students establishing biodiversity gardens in village school premises.",
        thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
        duration: "2:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default Education;
