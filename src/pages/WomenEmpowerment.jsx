import ProgramPageLayout from '../components/ProgramPageLayout';

const WomenEmpowerment = () => {
  const data = {
    title: "Women Empowerment & Skill Training",
    subtitle: "Catalyzing financial independence for women in rural Assam through tailoring training, handicraft skill development, and vocational programmes.",
    badgeText: "WOMEN EMPOWERMENT INITIATIVE",
    heroImages: [
      "/client_content/program_images/Skill Training Programme for Women/women skill training.JPG",
      "/client_content/program_images/Skill Training Programme for Women/IMG_20260510_155454_0750.jpg",
      "/client_content/program_images/Skill Training on Handicraft Programme/handicraft train 1.jfif"
    ],
    whySection: {
      heading: "Why Women Empowerment is Essential in Rural Assam",
      leadText: "In many rural parts of Assam, women face economic dependency, limited access to formal banking, and lack of marketable vocational skills.",
      descriptionPoints: [
        {
          title: "Financial Exclusion",
          desc: "Rural women rarely own land titles or micro-business capital, restricting their financial decision-making power."
        },
        {
          title: "Menstrual Health Stigma & Deficits",
          desc: "Lack of affordable sanitary pads leads to reproductive tract infections and school/work absenteeism."
        },
        {
          title: "Skill Gaps in Marketable Trades",
          desc: "Traditional weaving and food processing skills require modern quality control and market linkage to become profitable."
        }
      ],
      image: "/client_content/program_images/Skill Training Programme for Women/IMG_20260218_154635_0346.jpg",
      highlightStat: "Hundreds",
      highlightLabel: "Women Trained Through Skill Development Programmes"
    },
    approach: [
      {
        icon: "🧵",
        title: "Tailoring & Sewing Training",
        desc: "Multi-district tailoring skill training programmes equipping women with sewing machines and vocational skills for income generation.",
        points: ["Professional tailoring training", "Sewing machine provision"]
      },
      {
        icon: "🎨",
        title: "Handicraft Skill Development",
        desc: "Training women in traditional and modern handicraft techniques across Cachar, Hailakandi, Nagaon, NC Hills, Algapur, and Lakhipur areas.",
        points: ["Traditional craft skills", "Modern design techniques"]
      },
      {
        icon: "🩸",
        title: "Project 'Suchita' Menstrual Hygiene",
        desc: "Distributing free hygiene kits to adolescent girls and conducting de-stigmatization health workshops in rural communities.",
        points: ["Low-cost biodegradable sanitary pads", "De-stigmatization health workshops"]
      },
      {
        icon: "👩‍💼",
        title: "Grassroots Leadership & Rights",
        desc: "Empowering women leaders to take active roles in community decision-making, legal awareness, and financial independence.",
        points: ["Legal rights awareness sessions", "Financial literacy workshops"]
      }
    ],
    impactSection: {
      heading: "Building Economic & Social Independence",
      summary: "GAF's women empowerment initiatives across Hailakandi, Cachar, Nagaon, NC Hills, and Lakhipur have enabled hundreds of women to gain vocational skills and confidence.",
      image1: "/client_content/program_images/Skill Training Programme for Women/IMG_20260510_173853.jpg",
      image2: "/client_content/program_images/Skill Training on Handicraft Programme/handicraft training 2.jfif",
      highlights: [
        {
          icon: "🧵",
          title: "Multi-District Skill Training",
          desc: "Tailoring and handicraft training programmes across Cachar, Hailakandi, Nagaon, NC Hills, Algapur, and Lakhipur."
        },
        {
          icon: "💪",
          title: "Vocational Skills & Confidence",
          desc: "Women gained practical skills to improve confidence and create livelihood opportunities."
        },
        {
          icon: "🌸",
          title: "Sustainable Economic Development",
          desc: "Skill training programmes helping women move towards sustainable economic independence."
        }
      ]
    },
    stats: [
      { number: "Hundreds", label: "Women Trained", subtext: "Tailoring & handicraft skills" },
      { number: "6+", label: "Areas Covered", subtext: "Cachar, Hailakandi, Nagaon, NC Hills" },
      { number: "Active", label: "Handicraft Programme", subtext: "Traditional & modern crafts" },
      { number: "100%", label: "Women-Led Initiatives", subtext: "Community-driven empowerment" }
    ],
    stories: [],
    videos: []
  };

  return <ProgramPageLayout programData={data} />;
};

export default WomenEmpowerment;
