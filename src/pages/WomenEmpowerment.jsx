import ProgramPageLayout from '../components/ProgramPageLayout';

const WomenEmpowerment = () => {
  const data = {
    title: "Women Empowerment & Self-Help Groups",
    subtitle: "Catalyzing financial independence for women in rural Assam through Self-Help Groups (SHGs), skill training, sanitary hygiene, and leadership programs.",
    badgeText: "WOMEN EMPOWERMENT INITIATIVE",
    heroImages: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80"
    ],
    whySection: {
      heading: "Why Women Empowerment is Essential in Rural Assam",
      leadText: "In many rural parts of Assam, women face economic dependency, limited access to formal banking, and severe period poverty due to lack of affordable menstrual hygiene products.",
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
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      highlightStat: "9,600+",
      highlightLabel: "Women Enrolled in GAF SHGs & Skill Hubs"
    },
    approach: [
      {
        icon: "🧵",
        title: "Micro-Enterprise & Sewing Collectives",
        desc: "Equipping women Self-Help Groups (SHGs) with automatic sewing machines, raw material loans, and tailoring contracts.",
        points: ["School uniform manufacturing orders", "Eco-friendly tote bag production"]
      },
      {
        icon: "🩸",
        title: "Project 'Suchita' Menstrual Hygiene",
        desc: "Establishing community sanitary napkin micro-factories run by rural women and distributing free hygiene kits to adolescent girls.",
        points: ["Low-cost biodegradable sanitary pads", "De-stigmatization health workshops"]
      },
      {
        icon: "🏦",
        title: "Financial Literacy & Micro-Credit",
        desc: "Training SHG members in digital banking, UPI payments, savings management, and accessing government Mudra micro-loans.",
        points: ["Direct bank account opening drives", "Financial independence workshops"]
      },
      {
        icon: "👩‍💼",
        title: "Grassroots Leadership & Rights Advocacy",
        desc: "Empowering women leaders to take active roles in Panchayat governance, legal awareness, and community decision-making.",
        points: ["Legal rights awareness sessions", "Panchayat leadership bootcamps"]
      }
    ],
    impactSection: {
      heading: "Building Economic & Social Independence",
      summary: "GAF's women empowerment initiatives across Hailakandi, Barpeta, and Goalpara have enabled thousands of women to become primary household earners.",
      image1: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "💰",
          title: "₹6,500 Average Monthly Income Added",
          desc: "Women artisans and tailors now earn stable monthly incomes to support family nutrition and children's education."
        },
        {
          icon: "🌸",
          title: "65,000+ Sanitary Pads Distributed",
          desc: "Project Suchita improved menstrual health for adolescent girls and women across 50 villages."
        },
        {
          icon: "🏛️",
          title: "320 SHGs Formed & Bank-Linked",
          desc: "100% of GAF-supported SHGs operate active bank accounts with regular revolving micro-credit."
        }
      ]
    },
    stats: [
      { number: "9,600+", label: "Women Empowered", subtext: "In SHGs & tailoring hubs" },
      { number: "320+", label: "Active SHGs Formed", subtext: "With full banking linkage" },
      { number: "65,000+", label: "Sanitary Pads Distributed", subtext: "Free hygiene kits provided" },
      { number: "100%", label: "Women-Led Operations", subtext: "Managed by local women leaders" }
    ],
    stories: [
      {
        name: "Monowara Khatun",
        role: "President, Silk Weavers SHG",
        location: "Barpeta District",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
        quote: "Starting our sewing collective gave us financial dignity. Now I pay for my daughter's college fees myself.",
        fullStory: "Monowara led a group of 12 village women. With GAF tailoring machines and uniform contracts, her SHG earned over ₹4 Lakhs last financial year."
      },
      {
        name: "Pooja Roy",
        role: "Menstrual Health Educator",
        location: "Hailakandi Unit",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
        quote: "Breaking the silence around period health keeps our young girls in school and confident.",
        fullStory: "Pooja conducts weekly Suchita hygiene sessions in rural high schools, distributing sanitary kits and dispelling taboos."
      }
    ],
    videos: [
      {
        title: "Women Weavers & Tailors of Green Ahom",
        desc: "Inspirational documentary on rural women achieving financial freedom.",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        duration: "3:50",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Project Suchita: Menstrual Hygiene Revolution",
        desc: "How GAF micro-factories produce affordable sanitary pads for rural Assam.",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
        duration: "2:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default WomenEmpowerment;
