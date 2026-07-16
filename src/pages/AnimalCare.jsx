import ProgramPageLayout from '../components/ProgramPageLayout';

const AnimalCare = () => {
  const data = {
    title: "Animal Care & Livestock Protection",
    subtitle: "Protecting stray animals, flood-affected livestock, and wildlife through emergency veterinary camps, fodder distribution, and rescue operations.",
    badgeText: "ANIMAL WELFARE INITIATIVE",
    heroImages: [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80"
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
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
      highlightStat: "12,800+",
      highlightLabel: "Animals Treated & Rescued"
    },
    approach: [
      {
        icon: "🚜",
        title: "Emergency Cattle Fodder Drives",
        desc: "Transporting tons of dry straw, green fodder, and mineral supplements to flood high-grounds for stranded farm animals.",
        points: ["Dry fodder bag distribution", "Mineral lick block installation"]
      },
      {
        icon: "💉",
        title: "Mobile Veterinary Camps",
        desc: "Deploying certified veterinary doctors to vaccinate cattle and treat injured strays across rural districts.",
        points: ["Foot-and-Mouth disease vaccination", "Deworming & wound care"]
      },
      {
        icon: "🛟",
        title: "Wildlife & Livestock Rescue Squads",
        desc: "Operating boat rescue units to extract trapped cows, goats, and domestic animals from flooded riverlands.",
        points: ["Waterproof cattle transport rafts", "24/7 animal emergency line"]
      },
      {
        icon: "🐶",
        title: "Stray Animal Sterilization & Rabies Drives",
        desc: "Conducting anti-rabies vaccination (ARV) drives and humane spay-neuter campaigns in rural market hubs.",
        points: ["Rabies-free village campaigns", "Community animal feeder network"]
      }
    ],
    impactSection: {
      heading: "Safeguarding Rural Livelihoods & Animal Lives",
      summary: "In Assam, livestock represent the primary financial security for rural families. GAF's intervention protects both animal lives and family economies.",
      image1: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
      image2: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80",
      highlights: [
        {
          icon: "🐮",
          title: "8,500+ Cattle Saved from Starvation",
          desc: "Over 120 tons of dry fodder distributed during high-flood periods in Hailakandi & Barpeta."
        },
        {
          icon: "💉",
          title: "100% Vaccination Coverage in Targeted Hubs",
          desc: "Prevented mass livestock epidemics during monsoon post-flood recovery phases."
        },
        {
          icon: "🐾",
          title: "4,300+ Anti-Rabies Shots Administered",
          desc: "Protected stray dogs and rural residents against rabies transmission."
        }
      ]
    },
    stats: [
      { number: "12,800+", label: "Animals Treated", subtext: "Cattle, strays & rescued wildlife" },
      { number: "120 Tons", label: "Fodder Distributed", subtext: "During peak flood months" },
      { number: "4,300+", label: "Vaccinations Administered", subtext: "ARV & Foot-and-Mouth protection" },
      { number: "100%", label: "Humane Rescue Operations", subtext: "Certified veterinary supervision" }
    ],
    stories: [
      {
        name: "Mukesh Boro",
        role: "Dairy Farmer",
        location: "Darrang District",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
        quote: "GAF's fodder boat arrived when my 4 cows had eaten nothing for three continuous days of flooding.",
        fullStory: "Mukesh depends on his cows for milk production. When floodwaters covered his village pasture, GAF delivered dry fodder and essential veterinary care right to his embankment shelter."
      },
      {
        name: "Dr. Dipankar Nath",
        role: "Veterinary Officer, GAF Squad",
        location: "Barpeta Rescue Unit",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
        quote: "Protecting livestock protects the backbone of Assam's agricultural family economy.",
        fullStory: "Dr. Nath has personally conducted 60+ veterinary camps in remote riverine villages, treating cattle and domestic animals free of charge."
      }
    ],
    videos: [
      {
        title: "GAF Livestock Rescue Boat Operations",
        desc: "Rescuing stranded cattle from submerged islands in Assam during monsoon peak.",
        thumbnail: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80",
        duration: "3:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Free Veterinary & Fodder Distribution Drive",
        desc: "High-impact veterinary treatment and vaccination for village cattle.",
        thumbnail: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80",
        duration: "2:40",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  };

  return <ProgramPageLayout programData={data} />;
};

export default AnimalCare;
