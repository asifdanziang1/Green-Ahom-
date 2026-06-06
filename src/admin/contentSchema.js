export function getDefaultContent() {
  return {
    home: {
      meta: { title: 'Home | Green Ahom Federation', slug: '/', description: 'Green Ahom Federation - Nurturing Assam\'s Ecological Legacy & Community Dignity' },
      sections: [
        {
          id: 'home_hero',
          type: 'hero',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'Grassroots Section 8 NPO',
          heading: "Nurturing Assam's Ecological Legacy & Community Dignity",
          subtitle: "From water engineering legacies inspired by the Ahom Kingdom to taming food insecurity, providing conceptual education at Ideal Academy, and empowering rural women—we build sustainable futures.",
          cta_primary: { text: 'Support a Campaign', link: '/donate' },
          cta_secondary: { text: 'Explore Our 20 Programs', link: '/work' },
        },
        {
          id: 'home_stats',
          type: 'stats',
          name: 'Stats Dashboard',
          visible: true,
          order: 2,
          status: 'published',
          badge: 'Live Tracker',
          heading: 'Grassroots Operations Dashboard',
          subtitle: 'Our verified biological and social outcomes. Mapped, CA-audited, and publicly transparent.',
          metrics: [
            { id: 'stat_1', label: 'Students Enrolled', value: 364, context: 'Across Ideal Academy', prefix: '', suffix: '', decimals: 0 },
            { id: 'stat_2', label: 'Funds Mobilized', value: 23870590, context: 'CSR and exempt donations', prefix: '₹', suffix: ' Cr', decimals: 2, transform: 'divide_10000000' },
            { id: 'stat_3', label: 'Beneficiaries Reached', value: 2635, context: 'Health and nutrition programs', prefix: '', suffix: '', decimals: 0 },
            { id: 'stat_4', label: 'Animal Welfare Budget', value: 3541090, context: 'Annual allocation', prefix: '₹', suffix: ' Lakh', decimals: 1, transform: 'divide_100000' }
          ]
        },
        {
          id: 'home_initiatives',
          type: 'initiatives',
          name: 'Signature Initiatives',
          visible: true,
          order: 3,
          status: 'published',
          badge: 'OUR INTERVENTIONS',
          heading: 'Featured Grassroots Programmes',
          subtitle: 'GAF combines immediate humanitarian disaster relief with long-term conceptual capacity building using actual cover assets.',
          items: [
            {
              id: 'init_1',
              title: 'Ideal Academy, Hailakandi',
              category: 'INCLUSIVE EDUCATION',
              desc: 'GAF acquired Ideal Academy (UDISE: 18230124113) in FY 2025-26 to provide quality, affordable conceptual learning (Nursery to Class X) and hostel support for 364 underprivileged rural children.',
              bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p13_img24.jpg'
            },
            {
              id: 'init_2',
              title: 'Tuberculosis & Eye Care Camps',
              category: 'HEALTH & NUTRITION',
              desc: 'Partnered with ONGC Silchar CSR to distribute dense nutritional supplements to registered TB patients and fully sponsor refractive spectacles and cataract surgeries inside Hailakandi Blocks.',
              bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p5_img1.jpg'
            },
            {
              id: 'init_3',
              title: 'Tailoring & Stitching for Women',
              category: 'WOMEN EMPOWERMENT',
              desc: 'Active vocational training campuses across Cachar, Hailakandi, Nagaon, and NC Hills, giving thousands of rural women stitching skills and equipped sewing machines to earn independent livelihoods.',
              bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p9_img13.jpg'
            },
            {
              id: 'init_4',
              title: 'Eliminating Hunger & Food Security',
              category: 'HUMANITARIAN AID',
              desc: 'Large-scale dry ration packets distribution drives (budgeting ₹46.06L in FY 2024-25 alone) to ежеднев daily wage earners, widows, and flood survivors in Assam.',
              bgImage: '/extracted_images/ANNUAL_REPORT_2024-2025_p11_img19.jpg'
            }
          ]
        },
        {
          id: 'home_restoration',
          type: 'slider',
          name: 'Before/After Restoration Showcase',
          visible: true,
          order: 4,
          status: 'published',
          badge: 'ENVIRONMENTAL ACTION',
          heading: 'Witness Ecological Restoration',
          subtitle: 'Our community plantation and cleanout drives transform barren eroded soil into secure biological sanctuaries.'
        },
        {
          id: 'home_highlights',
          type: 'highlights',
          name: 'Working Approach',
          visible: true,
          order: 5,
          status: 'published',
          badge: 'WORKING APPROACH',
          heading: 'Integrated Grassroots Development',
          content: 'Through community-led initiatives and local partnerships, we work to create sustainable and inclusive social development. Our programs are designed to combine urgent relief packages with capacity building, ensuring high community ownership.',
          quote: '"Our programs combine health, nutrition, livelihood, awareness, environmental sustainability, and humanitarian support to create long-term impact rather than short-term relief alone."',
          quote_cite: '— Green Ahom Federation operational statement',
          cta: { text: 'About Our Approach', link: '/about' }
        },
        {
          id: 'home_cta',
          type: 'cta_banner',
          name: 'Call to Action Section',
          visible: true,
          order: 6,
          status: 'published',
          badge: 'GET INVOLVED',
          heading: 'Support Grassroots Social Development',
          content: 'Sponsor education for children in Hailakandi District, support nutritional programs for TB patients, provide emergency flood dry rations, or rescue strays.',
          cta_primary: { text: 'Donate to GAF', link: '/donate' },
          cta_secondary: { text: 'Apply to Volunteer', link: '/volunteer' }
        }
      ]
    },
    about: {
      meta: { title: 'About Us | Green Ahom Federation', slug: '/about', description: 'About Green Ahom Federation' },
      sections: [
        {
          id: 'about_hero',
          type: 'hero',
          name: 'About Hero',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'ABOUT US',
          heading: 'Green Ahom Federation',
          subtitle: 'Rooted in the ecological heritage of Assam. Working towards statutory compliance, human dignity, and sustainable grassroots empowerment.'
        },
        {
          id: 'about_legacy',
          type: 'legacy',
          name: 'Historical Legacy',
          visible: true,
          order: 2,
          status: 'published',
          badge: 'PHILOSOPHICAL ANCHOR',
          heading: 'The Legacy of Ahom Water Engineering',
          content: '<p>Green Ahom Federation draws its profound philosophical and operational inspiration from the sophisticated water engineering, environmental resource management, and ecological heritage of the historic Ahom Kingdom.</p><p>For over six hundred years, the Ahom rulers demonstrated a flawless grasp of hydrology and ecological balance. They constructed massive earthen embankments (bunds) to tame the mighty Brahmaputra river system, and excavated grand historical reservoirs—such as Joysagar, Sivasagar, and Gaurisagar—which served as advanced rainwater harvesting hubs. These systems successfully prevented catastrophic flooding while supplying clean water to hundreds of agricultural settlements.</p><p>GAF aims to revive this historic ethos of ecological balance and community-driven water preservation in modern Northeast India. By implementing comprehensive school plantation drives, taming erosion through community action, and initiating rural street illumination, we honor our ancestors\' sophisticated environmental engineering with direct grassroots action.</p>',
          visual_title: 'Ahom Ecological Legacy',
          visual_desc: 'Honoring 600 years of sophisticated water engineering, earth embankments, and sustainable community hydrology through local ecological action.'
        },
        {
          id: 'about_compliance',
          type: 'compliance',
          name: 'Statutory Compliance',
          visible: true,
          order: 3,
          status: 'published',
          badge: 'STATUTORY INTEGRITY',
          heading: 'Legal Framework & Compliance',
          subtitle: 'Green Ahom Federation is bound by absolute compliance under Section 8 of the Indian Companies Act, 2013.',
          content: '<h3>Non-Profit Constitutional Safeguards</h3><p>Under GAF\'s Altered Memorandum of Association (MOA) and Articles of Association (AOA) witnessed in Delhi on <strong>April 28, 2026</strong>, GAF operates under rigid Section 8 constitutional limits:</p><ul class="bullet-checks-list mt-3"><li><strong>Absolute Dividend Prohibition:</strong> 100% of profits or income are solely applied to the promotion of GAF’s public welfare and ecological objectives. No dividends or bonuses can be paid directly or indirectly to any subscriber or member.</li><li><strong>Limited Liability:</strong> The liability of the subscribers is limited strictly to the nominal value of their shares.</li><li><strong>Authorized Share Capital:</strong> ₹50,000 divided into 5,000 equity shares of ₹10 each.</li><li><strong>Certified CA Audit:</strong> All ledger transactions are fully verified by certified witness and accountant <strong>ACA Ashu Bhardwaj (M. No. 560437)</strong>.</li></ul>',
          cert_title: 'Ministry of Corporate Affairs',
          cert_desc: 'Incorporated under the Indian Companies Act, 2013.',
          cert_meta: [
            { label: 'ROC Oversight:', value: 'ROC Shillong (State of Assam)' },
            { label: 'Registration Type:', value: 'Section 8 (Limited by Shares)' },
            { label: 'CA Sign-off Date:', value: '28.04.2026' }
          ]
        },
        {
          id: 'about_directors',
          type: 'directors',
          name: 'Board of Directors',
          visible: true,
          order: 4,
          status: 'published',
          badge: 'GOVERNANCE',
          heading: 'Board of Subscriber-Directors',
          subtitle: 'Meet GAF\'s founding social activist subscribers, who hold direct stewardship over GAF\'s multi-district operations and compliance.',
          items: [
            {
              id: 'dir_1',
              name: 'Shamil Emonar Rahman Laskar',
              role: 'Founder Director & Subscriber',
              shares: '360 Shares (36% Ratio)',
              address: '56/38(C), Silchar Road, Ward No.1, via Gudam Ghat Road, Hailakandi, Assam - 788151',
              background: 'A dedicated social activist and grassroots leader in the Barak Valley. Instrumental in coordinating GAF’s massive flood response and primary health campaigns.'
            },
            {
              id: 'dir_2',
              name: 'Rofik Ahmed Barbhuiya',
              role: 'Director & Subscriber',
              shares: '340 Shares (34% Ratio)',
              address: 'Sahabad Pt 2, Hailakandi, Assam - 788163',
              background: 'Experienced community organizer focusing on youth mobilization, athletic programs, and municipal light logistics across Cachar and Hailakandi districts.'
            },
            {
              id: 'dir_3',
              name: 'Habiba Khanam Barbhuiya',
              role: 'Director & Subscriber',
              shares: '300 Shares (30% Ratio)',
              address: 'H/No-53, Vill Nun Nagar, PO Katirail, Cachar, Assam - 788804',
              background: 'Passionate advocate for maternal nutrition and women empowerment. Spearheads GAF’s multi-district tailoring skill training and village handicraft programs.'
            }
          ]
        },
        {
          id: 'about_academy',
          type: 'academy',
          name: 'Flagship Educational Programme',
          visible: true,
          order: 5,
          status: 'published',
          badge: 'FLAGSHIP EDUCATIONAL PROGRAMME',
          heading: 'Ideal Academy, Hailakandi',
          subtitle: 'An Educational Initiative acquired in FY 2025–26, empowering rural children through intensive, conceptual, and affordable learning.',
          school_info: [
            { label: 'School Name:', value: 'Ideal Academy, Hailakandi' },
            { label: 'Managed By:', value: 'Green Ahom Federation (GAF)' },
            { label: 'UDISE Code:', value: '18230124113' },
            { label: 'Location:', value: 'Hailakandi, Assam' },
            { label: 'Academic Coverage:', value: 'Nursery to Class X' },
            { label: 'Current Strength:', value: '364 Students', isGold: true }
          ],
          content: '<p>The primary objective behind GAF\'s statutory acquisition and reinforcement of Ideal Academy in FY 2025-26 was to establish a sustainable educational framework where rural children from marginalized families can receive quality conceptual education, moral guidance, and hostel support at an affordable cost.</p><p>Green Ahom Federation believes that education is the ultimate accelerator for meaningful engagement. We tackle school dropout rates by actively counseling parents and supporting students with basic educational necessities.</p><h4 class="mt-4">The institution specifically focuses on:</h4><ul class="bullet-checks-list mt-2"><li>Providing quality and affordable education to rural and semi-urban students</li><li>Ensuring inclusive education for SC, ST, OBC, MOBC, Minority, and economically backward communities</li><li>Reducing school dropout rates in underserved regions</li><li>Promoting conceptual and intensive learning methods</li><li>Developing discipline, moral values, leadership, and social responsibility among students</li><li>Supporting students with hostel and guided academic facilities</li><li>Creating a safe and nurturing educational environment for first-generation learners</li></ul>',
          contributions_heading: 'Major Contributions During the Last Year',
          items: [
            { id: 'contrib_1', title: 'Academic Strengthening', desc: 'Improved classroom learning systems with conceptual teaching approaches. Enhanced student mentoring and regular academic monitoring. Introduced intensive learning support for weak and first-generation learners. Strengthened English, Science, Mathematics, and General Knowledge education.' },
            { id: 'contrib_2', title: 'Inclusion of Vulnerable Communities', desc: 'Increased admission opportunities for students from economically weaker families. Encouraged enrollment of SC, ST, OBC, MOBC, and minority children. Reduced educational inequality by making affordable education accessible in rural areas.' },
            { id: 'contrib_3', title: 'Hostel & Student Support', desc: 'Expanded hostel-based learning support for students from distant rural villages. Provided a disciplined and secure academic atmosphere for children. Supported students with basic educational necessities and mentoring guidance.' },
            { id: 'contrib_4', title: 'Social & Community Impact', desc: 'Helped prevent school dropouts among financially vulnerable students. Encouraged parents from low-income households to continue children’s education. Generated educational awareness in underserved communities of Hailakandi District. Promoted girls’ education and equal learning opportunities.' }
          ]
        },
        {
          id: 'about_working_approach',
          type: 'working_approach',
          name: 'Our Working Approach',
          visible: true,
          order: 6,
          status: 'published',
          badge: 'OPERATIONS',
          heading: 'Our Working Approach',
          subtitle: 'How GAF translates its sustainable mission into grassroot activities across Northeast India.',
          items: [
            { id: 'approach_1', title: 'Community-Based Interventions', desc: 'We work closely with local communities, volunteers, schools, healthcare workers, and grassroots leaders to understand real needs and ensure inclusive participation.' },
            { id: 'approach_2', title: 'Integrated Development Model', desc: 'Our programmes combine health, nutrition, livelihood, awareness, environmental sustainability, and humanitarian support to create long-term impact rather than short-term relief alone.' },
            { id: 'approach_3', title: 'Grassroots Outreach', desc: 'We implement field-based programmes in rural and underserved regions across Assam, especially in areas with limited access to services and opportunities.' },
            { id: 'approach_4', title: 'Sustainable Empowerment', desc: 'We focus on building local capacity through skill development, awareness, infrastructure support, and community ownership.' },
            { id: 'approach_5', title: 'Rapid Humanitarian Response', desc: 'During emergencies such as floods, food insecurity, or health crises, our teams mobilize quickly to support vulnerable populations with essential aid and relief services.' }
          ]
        }
      ]
    },
    work: {
      meta: { title: 'Our Work | Green Ahom Federation', slug: '/work', description: 'Our Work' },
      sections: []
    },
    impact: {
      meta: { title: 'Impact | Green Ahom Federation', slug: '/impact', description: 'Impact' },
      sections: [
        {
          id: 'impact_hero',
          type: 'hero_simple',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'VERIFIED Biological & Social Outcomes',
          heading: 'Grassroots Impact Dashboard',
          subtitle: 'We translate community contributions into audited grassroots actions across Assam. Explore our verified indicators and direct field testimonies.'
        },
        {
          id: 'impact_metrics',
          type: 'metrics',
          name: 'Audited Metrics',
          visible: true,
          order: 2,
          status: 'published',
          badge: 'VERIFIABLE OUTCOMES',
          heading: 'Ecological & Humanitarian Indicators',
          items: [
            { id: 'funds', title: 'Aggregated Operations', val: '₹2.38Cr', suffix: ' Audited Expenditure', desc: 'GAF successfully scaled its grassroots programmatic disbursements from ₹3.58L in FY 2022-23 to ₹37.15L in FY 2023-24, reaching ₹1.97Cr in FY 2024-25.', iconName: 'funds' },
            { id: 'education', title: 'Ideal Academy Students', val: '364', suffix: ' Enrolled Children', desc: 'Providing intensive, quality conceptual Nursery to Class X learning and Hostel support inside Ideal Academy, Hailakandi (UDISE: 18230124113).', iconName: 'education' },
            { id: 'health', title: 'Public Health Care', val: '2,635+', suffix: ' Patients Supported', desc: 'Delivering nutritional support kits to 935 registered TB patients (ONGC Silchar sponsored), 1,200 pregnant women and children (Luairpoa Karimganj), and 500+ eye care screening patients.', iconName: 'health' },
            { id: 'relief', title: 'Dry Rations & Relief', val: '₹48.3L', suffix: ' Hunger Elimination Aid', desc: 'Direct food security dry rations mobilized across Nalbari, NC Hills, Cachar, Hailakandi, and Karimganj districts to support daily wage earners and flood survivors.', iconName: 'relief' }
          ]
        },
        {
          id: 'impact_slider',
          type: 'slider',
          name: 'Transformation Slider',
          visible: true,
          order: 3,
          status: 'published',
          badge: 'ENVIRONMENTAL TRANSFORMATION',
          heading: 'Witness Ecological Reforestation',
          subtitle: 'See the visual before/after changes that GAF community-led tree plantation and green awareness drives make inside educational institutions and public zones.'
        },
        {
          id: 'impact_stories',
          type: 'stories',
          name: 'Field Stories',
          visible: true,
          order: 4,
          status: 'published',
          badge: 'VOICES FROM THE SOIL',
          heading: 'Grassroots Stories of Change',
          subtitle: 'Read the real testimonies of parents, healthcare workers, and disaster relief coordinators whose lives are directly touched by GAF.',
          items: [
            { id: 'story-1', title: 'A Ray of Hope in Hailakandi', author: 'Dilip Namasudra, Parent (Daily Wage Earner)', quote: 'My children were dropping out of school because I could not afford standard tuition fees. GAF’s acquisition of Ideal Academy was a blessing. Today, my daughter studies in Class VIII with high-quality conceptual learning and hostel support, dreaming of becoming a doctor.', iconName: 'education' },
            { id: 'story-2', title: 'ONGC CSR TB Patient Recovery', author: 'Anjali Gogoi, Health Worker Outreach', quote: 'Medical treatment alone is not enough to cure tuberculosis; rich nutritional care is critical. The high-protein ration packs that GAF distributes directly to our patient cohorts with ONGC Silchar support have successfully improved treatment success rates by providing human dignity.', iconName: 'health' },
            { id: 'story-3', title: 'Luairpoa Maternal Nutrition Campaign', author: 'Rina Begum, Lactating Mother (Karimganj)', quote: 'GAF distributed highly nutritious food supplements directly to 1,200 pregnant women and young children below three years in our Luairpoa area. It helped ensure healthy pregnancy outcomes and basic infant immunity during deep financial hardship.', iconName: 'health' }
          ]
        },
        {
          id: 'impact_cta',
          type: 'cta',
          name: 'Call to Action',
          visible: true,
          order: 5,
          status: 'published',
          badge: 'CREATE AN OUTCOME',
          heading: 'Be a Catalyst for Human Dignity',
          subtitle: 'Your support directly funds monthly tuberculosis nutrition packs, disaster dry rations, student hostel mentoring, street light installations, and stray animal veterinary supplies.',
          cta_primary: { text: 'Donate to a Campaign', link: '/donate' },
          cta_secondary: { text: 'View Our 20 Programs', link: '/work' }
        }
      ]
    },
    gallery: {
      meta: { title: 'Gallery | Green Ahom Federation', slug: '/gallery', description: 'Gallery' },
      sections: [
        {
          id: 'gallery_hero',
          type: 'hero_simple',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'VISUAL ARCHIVE',
          heading: 'GAF Field Gallery',
          subtitle: 'Explore photos capturing our community work, reforestation drives, weaving co-operatives, and returning wildlife in Assam.'
        },
        {
          id: 'gallery_grid',
          type: 'gallery_grid',
          name: 'Gallery Items',
          visible: true,
          order: 2,
          status: 'published',
          categories: ['ALL', 'FORESTS', 'WETLANDS', 'ARTISANS', 'COMMUNITY'],
          items: [
            { id: 'gal-1', title: 'Majuli Canopy Plantation', category: 'FORESTS', location: 'Tezpur Embankments, Sonitpur', desc: 'Local youth squads working alongside field rangers to plant deep-rooted native saplings to prevent Brahmaputra riverbed erosion.', imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80', iconName: 'forest' },
            { id: 'gal-2', title: 'Muga Silk Thread Weaving', category: 'ARTISANS', location: 'Weaving Co-op, Majuli Island', desc: 'Artisan leaders reeling organic gold-tinted silk yarn from Som-fed silkworms using modern solar-powered spinning kits.', imageUrl: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80', iconName: 'artisan' },
            { id: 'gal-3', title: 'Deepor Beel Bird Sanctuary', category: 'WETLANDS', location: 'Deepor Beel Wetland, Guwahati', desc: 'Migratory waterfowl returning to local waters after GAF volunteers successfully cleared invasive green hyacinth stalks.', imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80', iconName: 'wetland' },
            { id: 'gal-4', title: 'Botanical Seed Preservation Drive', category: 'FORESTS', location: 'GAF Organic Seed Nursery, Tezpur', desc: 'Assamese botanists cataloguing endangered seed structures collected from deep tropical forests for germination vaulting.', imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80', iconName: 'seed' },
            { id: 'gal-5', title: 'Bamboo Craft Workshop', category: 'ARTISANS', location: 'Eco-Craft Secretariat, Jorhat', desc: 'Young community craftsmen carving premium, sustainable bamboo housewares as part of our green livelihood campaign.', imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80', iconName: 'craft' },
            { id: 'gal-6', title: 'Youth Squad Training', category: 'COMMUNITY', location: 'GAF Field Camp, Tezpur', desc: 'A vibrant group of 40+ local college volunteers holding endemic forest saplings before deploying on the riverbanks.', imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', iconName: 'community' }
          ]
        }
      ]
    },
    partners: {
      meta: { title: 'Partners | Green Ahom Federation', slug: '/partners', description: 'Partners' },
      sections: [
        {
          id: 'partners_hero',
          type: 'hero_simple',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'COLLABORATION',
          heading: 'CSR Partnerships & Patrons',
          subtitle: 'We collaborate with premier corporate entities, public administrations, and academic campuses to deploy verified social welfare programs across Northeast India.'
        },
        {
          id: 'partners_credentials',
          type: 'credentials_grid',
          name: 'Statutory Credentials',
          visible: true,
          order: 2,
          status: 'published',
          badge: 'TRUST FRAMEWORK',
          heading: 'Our Statutory CSR Credentials',
          subtitle: 'Green Ahom Federation complies with all statutory non-profit regulations of the Ministry of Corporate Affairs, India.',
          items: [
            { id: 'csr1', title: 'MCA CSR-1 Implementing Agency', desc: 'GAF is officially registered with the Ministry of Corporate Affairs to execute CSR projects under Section 135 of the Indian Companies Act, 2013.' },
            { id: '80g', title: '80G Tax Exemption Status', desc: 'Allows GAF’s corporate and individual patrons to claim 50% tax deductions on all charity donations under Section 80G.' },
            { id: '12a', title: '12A Non-Profit Registration', desc: 'Registered under Section 12A of the Income Tax Act, 1961, establishing GAF’s verified tax-free charity status.' },
            { id: 'companiesAct', title: 'Section 8 Constitutional Charter', desc: 'Strict dividend distribution prohibition, ensuring 100% of mobilized budgets directly support field projects.' }
          ]
        },
        {
          id: 'partners_institutional',
          type: 'partners_grid',
          name: 'Institutional Patrons',
          visible: true,
          order: 3,
          status: 'published',
          badge: 'COLLABORATORS',
          heading: 'Our Verified Institutional Patrons',
          subtitle: 'Detailing GAF\'s official partnerships with corporate CSR wings, technical institutions, and college districts.',
          items: [
            { name: 'Oil and Natural Gas Corporation (ONGC Silchar)', role: 'CSR Sponsorship Patron', desc: 'Generously sponsored GAF’s massive Nutritional Food Packet Distribution for 935 registered TB patients in Cachar and Hailakandi districts (FY 2023-24 CSR, budget ₹14,85,000), as well as GAF’s Cataract surgery support program (FY 2024-25, budget ₹1,59,590).', badge: 'ONGC SILCHAR', logoText: 'ONGC' },
            { name: 'ITI Srikona Campus (Silchar, Cachar District)', role: 'Educational Training Partner', desc: 'Collaborated with GAF in FY 2022-23 to host the intensive Skill Training Class on Financial Literacy & Management, enabling technical students and rural youth to master banking systems and UPI budgeting.', badge: 'ITI SRIKONA', logoText: 'ITI' },
            { name: 'BH College (Howli, Barpeta District)', role: 'Rural Infrastructure Collaborator', desc: 'Academic and logistical collaboration for GAF’s landmark Community Centre construction program inside Barpeta (FY 2024-25, total program budget ₹42,37,000), creating durable local development spaces.', badge: 'BH COLLEGE', logoText: 'BHC' },
            { name: 'Cachar Cancer Hospital', role: 'Humanitarian Health Partner', desc: 'Professional coordination partner for GAF’s voluntary Blood Donation Camps and emergency volunteer mobilization efforts, supporting critical oncology patient care systems.', badge: 'CACHAR CANCER', logoText: 'CCH' }
          ]
        },
        {
          id: 'partners_cta',
          type: 'cta',
          name: 'Call to Action',
          visible: true,
          order: 4,
          status: 'published',
          badge: 'CSR INTEGRATION',
          heading: 'Partner with Green Ahom Federation',
          subtitle: 'We facilitate seamless CSR-1 project integration under Schedule VII of the Companies Act, providing GIS geo-tagged beneficiary logs, monthly progress sheets, and professional third-party audit dossiers.',
          cta_primary: { text: 'Review Audited Ledgers', link: '/reports' },
          cta_secondary: { text: 'Initiate CSR Proposal', link: '/contact' }
        }
      ]
    },
    volunteer: {
      meta: { title: 'Volunteer | Green Ahom Federation', slug: '/volunteer', description: 'Volunteer' },
      sections: [
        {
          id: 'volunteer_hero',
          type: 'hero_simple',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'JOIN THE SQUAD',
          heading: 'Volunteer With Us',
          subtitle: 'Be the boots on the ground. Pitch your energy, professional skills, or local insights to help protect and restore Assam\'s precious biomes.'
        },
        {
          id: 'volunteer_roles',
          type: 'roles_grid',
          name: 'Volunteer Roles',
          visible: true,
          order: 2,
          status: 'published',
          badge: 'VOLUNTEER ROLES',
          heading: 'Find Your Calling In the Canopy',
          items: [
            { id: 'canopy', title: 'Canopy Sower', desc: 'Participate in weekend seed-gathering treks and coordinate local bank re-wilding tree drives in Sonitpur and Tezpur.', iconName: 'forest', commitment: '4 hours / week' },
            { id: 'heritage', title: 'Heritage Ambassador', desc: 'Assist in women weaving co-operatives with logistics, digital inventory management, and marketing organic silk fabrics.', iconName: 'artisan', commitment: '6 hours / week' },
            { id: 'ranger', title: 'Wetland Ranger', desc: 'Deploy with local river squads to clear plastic waste, clear water hyacinths, and document bird species nesting seasons.', iconName: 'wetland', commitment: '5 hours / week' },
            { id: 'digital', title: 'Digital Catalyst', desc: 'Spread conservation awareness, design visual content, or build mapping extensions for our open-source canopy registry from home.', iconName: 'digital', commitment: 'Flexible hours' }
          ]
        },
        {
          id: 'volunteer_form_info',
          type: 'text_block',
          name: 'Form Information',
          visible: true,
          order: 3,
          status: 'published',
          badge: 'BECOME A MEMBER',
          heading: 'Register Your Application',
          desc: 'Submit your credentials below. Our Field Operations Coordinator will review your submission and contact you within 3 business days for a brief digital orientation.',
          inductionHeading: 'Squad Inductions Include:',
          inductionItems: [
            'Endemic Seed Germination training.',
            'First-Aid and forest navigation certifications.',
            'Official GAF Field Ranger organic cotton T-shirt & Field Journal.',
            'Invitation to our annual Majuli Island Eco-Stewardship Summit.'
          ]
        }
      ]
    },
    donate: {
      meta: { title: 'Donate | Green Ahom Federation', slug: '/donate', description: 'Donate' },
      sections: [
        {
          id: 'donate_hero',
          type: 'hero_simple',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'SUPPORT GAF',
          heading: 'Sow the Seeds of Community Hope',
          subtitle: 'Sponsor conceptual education in Hailakandi, monthly nutrition packs for tuberculosis patients, emergency flood dry rations, or stray animal veterinary rescues.'
        },
        {
          id: 'donate_calculator',
          type: 'calculator',
          name: 'Impact Calculator',
          visible: true,
          order: 2,
          status: 'published',
          heading: 'Dynamic Impact Calculator',
          subtitle: 'Drag the slider to customize your contribution and see your specific grassroots output instantly.',
          quickAmounts: [1500, 3000, 5000, 10000],
          outcomesHeading: 'Your Grassroots Social Outcome',
          outcomesBadge: 'HUMANITARIAN OUTCOMES',
          outcomesSubtitle: 'At Green Ahom Federation, we ensure direct field utilization. Here is exactly what your contribution funds:',
          metrics: [
            { id: 'education', iconName: 'education', label: 'Scholars', subLabel: 'Hailakandi Support / Month', divisor: 1500 },
            { id: 'health', iconName: 'health', label: 'TB Patients', subLabel: 'Nutrition Packs Funded', divisor: 500 },
            { id: 'relief', iconName: 'relief', label: 'Families', subLabel: 'Flood Dry Rations Distributed', divisor: 600 },
            { id: 'animal', iconName: 'animal', label: 'Strays', subLabel: 'Veterinary Medical Packs', divisor: 250 }
          ],
          trustHeading: 'Guaranteed Exemption under Section 80G',
          trustText: 'Green Ahom Federation is a legally registered Section 8 NPO with active statutory tax approvals. All contributions generate CA-audited secure receipt certificates instantly.'
        }
      ]
    },
    contact: {
      meta: { title: 'Contact Us | Green Ahom Federation', slug: '/contact', description: 'Contact' },
      sections: [
        {
          id: 'contact_hero',
          type: 'hero_simple',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'GET IN TOUCH',
          heading: 'Connect With GAF',
          subtitle: 'Have questions about CSR sponsorships, volunteering logistics, or our biological seeds vault? Drop us a message or visit our Secretariat.'
        },
        {
          id: 'contact_info',
          type: 'contact_info',
          name: 'Contact Details',
          visible: true,
          order: 2,
          status: 'published',
          formHeading: 'Send a Message',
          formSubtitle: 'We monitor inboxes 24/7 and reply to standard inquiries in 24 hours.',
          officeBadge: 'OFFICES',
          officeHeading: 'GAF Secretariat',
          locations: [
            { iconName: 'map', title: 'Headquarters Secretariat', text: 'GAF Secretariat, Zoo Road Tiniali, Guwahati, Assam - 781024' },
            { iconName: 'mail', title: 'Direct Email Support', text: 'info@greenahom.org | csr@greenahom.org' },
            { iconName: 'phone', title: 'Help Desk Hotlines', text: '+91 (0361) 2938-1200 | +91 98450-AHOM-12' }
          ]
        },
        {
          id: 'contact_faqs',
          type: 'faqs',
          name: 'FAQs',
          visible: true,
          order: 3,
          status: 'published',
          badge: 'COMMON QUESTIONS',
          heading: 'Knowledge Base',
          subtitle: 'Quick answers for immediate reference.',
          items: [
            { q: 'Are my donations eligible for income tax exemptions?', a: 'Yes, absolutely. Green Ahom Federation is a registered public NPO with valid Section 80G credentials. Indian tax payers are eligible to claim a 50% tax deduction on all donations. Your tax receipt is generated instantly upon payment.' },
            { q: 'How are sowed saplings tracked and monitored?', a: 'We map every sapling with geographical coordination logs (GIS tags). Our Field Rangers conduct physical growth audits twice a year. Donors receive bi-annual growth and survival index reports directly mapped to their sponsored corridor.' },
            { q: 'Can I volunteer if I reside outside of Assam?', a: 'Yes! We have a highly active Remote Squad under our Digital Catalyst role. You can assist with software development, GIS mapping, writing, or promoting ecological awareness online from anywhere in the world.' },
            { q: 'Does GAF support physical corporate CSR site visits?', a: 'Absolutely. For our Platinum and Diamond corporate patrons, we coordinate guided site visits to our Majuli som plantations and Tezpur nursery banks to witness audited CSR utilization firsthand.' }
          ]
        }
      ]
    },
    reports: {
      meta: { title: 'Annual Reports | Green Ahom Federation', slug: '/annual-reports', description: 'Reports' },
      sections: [
        {
          id: 'reports_hero',
          type: 'hero_simple',
          name: 'Hero Section',
          visible: true,
          order: 1,
          status: 'published',
          badge: 'STATUTORY AUDIT & COMPLIANCE',
          heading: 'Governance & Financial Disclosures',
          subtitle: 'Green Ahom Federation operates under absolute public transparency. Review our official Section 8 INC-13 constitutional charters, certified ROC filings, and multi-year CA-audited ledger sheets.'
        },
        {
          id: 'reports_governance',
          type: 'governance_info',
          name: 'Governance Info',
          visible: true,
          order: 2,
          status: 'published',
          badge: 'GOVERNING BOARD',
          heading: 'Section 8 Corporate Structure & Registry',
          subtitle: 'Statutory details of Green Ahom Federation as incorporated under Section 8 of the Indian Companies Act, 2013 (situated in the State of Assam).'
        },
        {
          id: 'reports_fiscal',
          type: 'fiscal_dashboard',
          name: 'Fiscal Dashboard',
          visible: true,
          order: 3,
          status: 'published',
          badge: 'FINANCIAL TRACKER',
          heading: 'Multi-Year Audited Expenditure Ledger',
          subtitle: 'Explore the complete 3-year grassroots expenditure progression of Green Ahom Federation. Select a financial year below to review block locations, budgets, and outcomes.',
          data: {
            '2024-2025': {
              expenditure: '₹1,97,96,490',
              description: 'The financial year 2024–25 represented a massive phase of institutional scaling for Green Ahom Federation. Backed by private philanthropy, CSR partnerships, and community stakeholders, GAF successfully completed 10 large-scale programs spanning 7 districts (Cachar, Hailakandi, Karimganj, Barpeta, Nalbari, Nagaon, and Dima Hasao). This year marked the construction of 3 community centres, multi-district tailoring courses for women, and public health cataract screenings.',
              programs: [
                { name: 'Nutritional Food Packets Distribution to TB Patients', location: 'Patharkandi Block, Karimganj District', budget: '₹14,45,000', impact: 'Substantial nutrition for TB patients undergoing prolonged treatment.' },
                { name: 'Eye Camp – Spectacles Purchase (Refractive Error)', location: 'Lala Block, Hailakandi District', budget: '₹2,69,750', impact: 'Corrective vision support to rural low-income families.' },
                { name: 'Eye Camp – Cataract Surgery Support (ONGC CSR)', location: 'Lala, South Hailakandi & Algapur Blocks', budget: '₹1,59,590', impact: 'Avoidable blindness elimination and surgical management.' },
                { name: 'Street Light Distribution Programme', location: 'Dholai & Sonai Blocks, Cachar District', budget: '₹6,60,000', impact: 'Safety and mobility illumination in remote rural paths.' },
                { name: 'Skill Training Programme for Women (Tailoring)', location: 'Cachar, Hailakandi, Nagaon & NC Hills', budget: '₹32,82,000', impact: 'Vocational training and tailoring kits for financial independence.' },
                { name: 'Plantation Drive Programme', location: 'Hailakandi, Cachar & Karimganj Districts', budget: '₹3,28,000', impact: 'Afforestation saplings in schools and public premises.' },
                { name: 'Food Distribution Programme for Eliminating Hunger', location: 'Hailakandi, Cachar, Nalbari & NC Hills', budget: '₹46,06,060', impact: 'Food security dry rations for vulnerable daily wage earners.' },
                { name: 'Animal Feeding & Medical Support Programme', location: 'Barak Valley Districts', budget: '₹35,41,090', impact: 'Veterinary aid and daily street stray feeding campaigns.' },
                { name: 'Community Centre Construction Work', location: 'Howli Barpeta (BH College), Borkhola Cachar, Algapur Hailakandi', budget: '₹42,37,000', impact: 'Constructed three durable socio-development hubs.' },
                { name: 'Skill Training on Handicraft Programme', location: 'Chandipur Village (Algapur), Lakhipur Cachar', budget: '₹12,68,000', impact: 'Preservation of traditional crafts and rural livelihood creation.' }
              ]
            },
            '2023-2024': {
              expenditure: '₹37,15,400',
              description: 'During FY 2023–24, GAF refined its programmatic approach, establishing key strategic partnerships to optimize outcomes. A highlight of the fiscal year was our public health collaboration with Oil and Natural Gas Corporation (ONGC Silchar CSR) to distribute specialized protein-dense food packets to 935 registered TB patients. The year also integrated deep ophthalmology screenings and maternal health coverage in remote blocks.',
              programs: [
                { name: 'Nutritional Food Packet Distribution to 935 TB Patients (ONGC Silchar)', location: 'Cachar & Hailakandi Districts', budget: '₹14,85,000', impact: 'Supported treatment adherence, recovery, and immunity levels.' },
                { name: 'Eye Camp, Spectacle Distribution & Cataract Identification', location: 'Lala Block, Hailakandi District', budget: '₹11,17,500', impact: 'Screened 500 patients, distributed free corrective spectacles.' },
                { name: 'Dry Ration Distribution to Daily Wage Earners', location: 'Barak Valley District Blocks', budget: '₹65,000', impact: 'Independence Day humanitarian support to low-income families.' },
                { name: 'Nutritional Food Packet Distribution for Pregnant Women & Children', location: 'Luairpoa Area, Karimganj District', budget: '₹10,47,900', impact: 'Maternal and infant nutrition kits distributed to 1,200 beneficiaries.' }
              ]
            },
            '2022-2023': {
              expenditure: '₹3,58,700',
              description: 'The financial year 2022–23 represented a pivotal grassroots phase for GAF, following a massive flood disaster that paralyzed Northeast India. GAF mobilized a dedicated local volunteer network to deploy essential food security kits, while establishing initial training blocks in financial literacy to combat youth unemployment.',
              programs: [
                { name: 'Skill Training Class on Financial Literacy & Management', location: 'ITI Srikona Campus, Silchar, Cachar District', budget: '₹25,000', impact: 'Trained youth in personal savings, budgeting, and digital banking.' },
                { name: 'Flood Relief Dry Ration Distribution Programme', location: 'Cachar, Hailakandi, Karimganj Districts', budget: '₹1,27,000', impact: 'Distributed immediate dry ration kits to flood-displaced families.' },
                { name: 'Plantation Drive on World Environment Day', location: 'Various Educational Institutions, Barak Valley', budget: '₹56,000', impact: 'Planted fruit-bearing and medicinal saplings in rural schools.' },
                { name: 'Awareness Campaign Against Child Labour', location: 'Rural Primary Schools & Wage Settlements', budget: '₹35,700', impact: 'Motivational school retention counseling for parents and children.' },
                { name: 'Animal Welfare stray Feeding & Injuries Rescue', location: 'Barak Valley Urban Margins', budget: '₹15,000', impact: 'Rescued injured stray cows and established daily feeding routes.' },
                { name: 'Dry Ration Distribution to Daily Wage Earners', location: 'Hailakandi District Settlements', budget: '₹1,00,000', impact: 'Essential food security kits distributed to rickshaw pullers and labourers.' }
              ]
            }
          }
        },
        {
          id: 'reports_downloads',
          type: 'downloads_list',
          name: 'Downloads',
          visible: true,
          order: 4,
          status: 'published',
          badge: 'PUBLIC ARCHIVE',
          heading: 'Document Repository',
          items: [
            { year: '2025', title: 'Annual Report 2024-2025', summary: 'Statutory Operational and Financial Audit for the period ending March 31, 2025. Detail sheets outlining multi-district women tailoring training, Karimganj Patharkandi block TB patient nutrition support, Hailakandi block cataract surgeries (ONGC Silchar CSR), Sonai/Dholai street lights, stray rescues, and Howli Barpeta community center construction.', metrics: '₹1,97,96,490 Expenditures | 10 Programs | Multi-District Assam', fileUrl: '/client_content/ANNUAL REPORT 2024-2025.pdf', size: '3.3 MB', type: 'Statutory Audit' },
            { year: '2024', title: 'Annual Report 2023-2024', summary: 'Audited financial balance sheets and comprehensive field logs for the period ending March 31, 2024. Details public health interventions, ONGC Silchar sponsored TB nutrition kits, Hailakandi Lala block eye care screening, Independence Day daily wage earners rations, and Karimganj Luairpoa maternal and child nutrition programs.', metrics: '₹37,15,400 Expenditures | 4 Programs | 935 TB Patients', fileUrl: '/client_content/ANNUAL REPORT 23-24.pdf', size: '2.0 MB', type: 'Financial Audit' },
            { year: '2023', title: 'Annual Report 2022-2023', summary: 'Grassroots operational log and financial ledger detailing the second-year expansion progress. Outlines Srikona ITI Silchar financial literacy courses, emergency flood relief dry ration distributions across Barak Valley, World Environment Day afforestation, child labour retention counseling, and stray animal welfare activities.', metrics: '₹3,58,700 Expenditures | 6 Programs | Barak Valley Relief', fileUrl: '/client_content/ANNUAL REPORT 2022-23.pdf', size: '2.1 MB', type: 'General Audit' },
            { year: 'AOA', title: 'Altered Articles of Association (AOA)', summary: 'Official constitutional charter outlining Green Ahom Federation’s strict non-profit status, absolute dividend prohibition, membership guidelines, shares structures, and governing board code of conduct under Section 8 of the Companies Act, 2013.', metrics: 'Articles of Association | Section 8 Constitutional | Assam ROC', fileUrl: '/client_content/Altered AOA OF GREEN AHOM.pdf', size: '1.0 MB', type: 'Constitutional Charter' },
            { year: 'MOA', title: 'Altered Memorandum of Association (MOA)', summary: 'Registered constitutional memorandum defining the main statutory objectives: promoting conceptual education (acquiring Ideal Academy, Hailakandi), healthcare clinics, CSR collaborations, rural street lights, sports programs, and emergency humanitarian relief services.', metrics: 'Memorandum of Association | INC-13 Official | Delhi CA Witnessed', fileUrl: '/client_content/Altered INC-13 MOA OF GREEN AHOM.pdf', size: '0.7 MB', type: 'Statutory Objective' }
          ]
        },
        {
          id: 'reports_cta',
          type: 'cta_form',
          name: 'CSR Request Form',
          visible: true,
          order: 5,
          status: 'published',
          badge: 'CSR INVESTORS',
          heading: 'Request Full CSR Audit Dossier',
          subtitle: 'Corporate CSR committees require intensive due diligence. Submit your credentials below to request full CA-certified ITR sheets, FCRA validations, and un-redacted field operations logs for your ESG evaluations.'
        }
      ]
    },
    navigation: {
      logo: { text: 'GREEN AHOM FEDERATION', image: '/logo.png' },
      items: [
        { id: 'nav_1', label: 'About', link: '/about' },
        { id: 'nav_2', label: 'Our Work', link: '/work' },
        { id: 'nav_3', label: 'Impact', link: '/impact' },
        { id: 'nav_4', label: 'Gallery', link: '/gallery' },
        { id: 'nav_5', label: 'Partners', link: '/partners' },
        { id: 'nav_6', label: 'Volunteer', link: '/volunteer' },
        { id: 'nav_7', label: 'Contact', link: '/contact' }
      ],
      cta: { text: 'Donate Now', link: '/donate' }
    },
    footer: {
      description: 'Dedicated to the ecological renaissance of Assam and uplifting rural communities through inclusive education, sustainable livelihoods, and humanitarian aid.',
      copyright: '© 2026 Green Ahom Federation. All rights reserved.',
      links: [
        { label: 'Privacy Policy', link: '/privacy-policy' },
        { label: 'Terms & Conditions', link: '/terms-conditions' },
        { label: 'Refund Policy', link: '/refund-policy' }
      ]
    }
  };
}

export function getDefaultLegalPages() {
  return {
    'terms-conditions': {
      title: 'Terms and Conditions',
      slug: 'terms-conditions',
      content: '## Terms and Conditions\\n\\nWelcome to Green Ahom Federation.\\n\\n...',
      lastUpdated: '2026-06-01'
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content: '## Privacy Policy\\n\\nYour privacy is important to us.\\n\\n...',
      lastUpdated: '2026-06-01'
    },
    'refund-policy': {
      title: 'Refund Policy',
      slug: 'refund-policy',
      content: '## Refund Policy\\n\\nDonations are generally non-refundable.\\n\\n...',
      lastUpdated: '2026-06-01'
    }
  };
}

export function getDefaultSeoSettings() {
  return {
    home: { title: 'Home | Green Ahom Federation', description: '', ogImage: '' },
  };
}

export function getDefaultPrograms() {
  return [
    {
      id: 'tb-nutri-25',
      year: 'FY 2024-2025',
      title: 'TB Patients Nutritional Food Packets',
      category: 'HEALTH',
      desc: 'Supplying nutrient-dense protein food kits to vulnerable tuberculosis patients undergoing continuous medical treatments to reinforce immune response and prevent treatment default.',
      location: 'Patharkandi Block, Karimganj District',
      budget: '₹14,45,000',
      metric: 'Treatment Adherence Supported',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p5_img1.jpg',
      iconName: 'health',
      status: 'published'
    },
    {
      id: 'eye-spec-25',
      year: 'FY 2024-2025',
      title: 'Eye Camp – Spectacles for Refractive Error',
      category: 'HEALTH',
      desc: 'Free vision screening and distribution of high-quality corrective spectacles for rural students and daily wage earners suffering from refractive vision barriers.',
      location: 'Lala Block, Hailakandi District',
      budget: '₹2,69,750',
      metric: 'Free Spectacles Distributed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p6_img4.jpg',
      iconName: 'health',
      status: 'published'
    },
    {
      id: 'eye-cataract-25',
      year: 'FY 2024-2025',
      title: 'ONGC CSR Cataract Surgery Support',
      category: 'HEALTH',
      desc: 'Surgical diagnostic screening and fully sponsored cataract operations to eliminate avoidable blindness in underserved rural elderly patients.',
      location: 'Lala, South Hailakandi & Algapur Blocks',
      budget: '₹1,59,590',
      metric: 'Cataract Referrals Completed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p7_img7.jpg',
      iconName: 'health',
      status: 'published'
    },
    {
      id: 'street-lights-25',
      year: 'FY 2024-2025',
      title: 'Rural Street Light Installation Campaign',
      category: 'INFRASTRUCTURE',
      desc: 'Installing energy-efficient illumination light poles in remote and unlit village paths to significantly improve security and mobility during night hours.',
      location: 'Dholai & Sonai Blocks, Cachar District',
      budget: '₹6,60,000',
      metric: 'Safety Lumination Units Placed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p8_img10.jpg',
      iconName: 'infrastructure',
      status: 'published'
    },
    {
      id: 'tailoring-25',
      year: 'FY 2024-2025',
      title: 'Women’s Tailoring & Stitching Livelihoods',
      category: 'LIVELIHOODS',
      desc: 'A large-scale vocational empowerment camp providing rural women with intensive tailoring training and fully equipped industrial stitching sewing machines.',
      location: 'Cachar, Hailakandi, Nagaon & NC Hills',
      budget: '₹32,82,000',
      metric: 'Tailoring Machines Gifted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p9_img13.jpg',
      iconName: 'livelihoods',
      status: 'published'
    },
    {
      id: 'plantation-25',
      year: 'FY 2024-2025',
      title: 'Schools Eco-Restoration Plantation Campaign',
      category: 'ENVIRONMENT',
      desc: 'World Environment Day community drives. Planted fruit-bearing, shade, and medicinal saplings inside educational institutions and block offices.',
      location: 'Hailakandi, Cachar & Karimganj Districts',
      budget: '₹3,28,000',
      metric: 'Survival Audited Saplings Placed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p10_img16.jpg',
      iconName: 'environment',
      status: 'published'
    },
    {
      id: 'hunger-25',
      year: 'FY 2024-2025',
      title: 'Food Security (Eliminating Hunger Initiative)',
      category: 'RELIEF',
      desc: 'Large-scale humanitarian dry ration kits mobilization (rice, pulses, oil, sugar) to low-income wage earners and widow-headed households.',
      location: 'Hailakandi, Cachar, Nalbari & NC Hills',
      budget: '₹46,06,060',
      metric: 'Vulnerable Households Fed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p11_img19.jpg',
      iconName: 'relief',
      status: 'published'
    },
    {
      id: 'animal-25',
      year: 'FY 2024-2025',
      title: 'Barak Valley Stray Animal Medical & Feed Care',
      category: 'ANIMAL CARE',
      desc: 'Humane compassionate treatment drives. Daily feeding routes for stray street dogs and emergency rescue of injured stray cows.',
      location: 'Barak Valley Districts (Assam)',
      budget: '₹35,41,090',
      metric: 'Daily Stray Feeds Provided',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p12_img21.jpg',
      iconName: 'animal',
      status: 'published'
    },
    {
      id: 'community-25',
      year: 'FY 2024-2025',
      title: 'Socio-Development Community Centre Construction',
      category: 'INFRASTRUCTURE',
      desc: 'Building permanent, durable brick-and-mortar community centres to host vocational classes, public meetings, and social gatherings.',
      location: 'Howli Barpeta (BH College), Borkhola Cachar, Algapur Hailakandi',
      budget: '₹42,37,000',
      metric: 'Welfare Hubs Completed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p13_img24.jpg',
      iconName: 'infrastructure',
      status: 'published'
    },
    {
      id: 'handicraft-25',
      year: 'FY 2024-2025',
      title: 'Traditional Handicraft Livelihoods Promotion',
      category: 'LIVELIHOODS',
      desc: 'Vocational training sessions in bamboo, cane, and traditional loom crafts, assisting local youths and women in establishing direct market linkages.',
      location: 'Chandipur Village (Algapur) & Lakhipur Cachar',
      budget: '₹12,68,000',
      metric: 'Rural Handicraft Artisans Empowered',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p14_img26.jpg',
      iconName: 'livelihoods',
      status: 'published'
    },
    {
      id: 'tb-nutri-24',
      year: 'FY 2023-2024',
      title: 'TB Patients 935 Nutritional Packets (ONGC Silchar)',
      category: 'HEALTH',
      desc: 'A core CSR-supported public health drive in coordination with local clinics, distributing protein-rich supplements and dietary essentials to 935 registered TB patients.',
      location: 'Cachar & Hailakandi Districts',
      budget: '₹14,85,000',
      metric: '935 Registered TB Patients Fed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p5_img1.jpg',
      iconName: 'health',
      status: 'published'
    },
    {
      id: 'eye-camp-24',
      year: 'FY 2023-2024',
      title: 'Ophthalmology camp & Spectacles Distribution',
      category: 'HEALTH',
      desc: 'Organized screening camps with qualified doctors, dispensing 500+ free custom corrective spectacles to rural students and agricultural workers.',
      location: 'Lala Block, Hailakandi District',
      budget: '₹11,17,500',
      metric: '500+ Patients Tested & Supported',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p8_img6.jpg',
      iconName: 'health',
      status: 'published'
    },
    {
      id: 'rations-24',
      year: 'FY 2023-2024',
      title: 'Independence Day Wage Earners Rations Support',
      category: 'RELIEF',
      desc: 'Immediate food relief dry packets distributed to daily wage labourers and rickshaw pullers to cushion against inflation and unemployment.',
      location: 'Barak Valley Blocks',
      budget: '₹65,000',
      metric: 'Vulnerable Labourers Assisted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p10_img11.jpg',
      iconName: 'relief',
      status: 'published'
    },
    {
      id: 'maternal-24',
      year: 'FY 2023-2024',
      title: 'Maternal & Infant Nutrition Packet Distribution',
      category: 'HEALTH',
      desc: 'Distributing custom nutritional kits to 1,200 pregnant women, lactating mothers, and young infants to combat local rural malnutrition.',
      location: 'Luairpoa Area, Karimganj District',
      budget: '₹10,47,900',
      metric: '1,200 Women & Infants Assisted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_23-24_p12_img15.jpg',
      iconName: 'health',
      status: 'published'
    },
    {
      id: 'finance-lit-23',
      year: 'FY 2022-2023',
      title: 'ITI Srikona Silchar Financial Literacy Camp',
      category: 'EDUCATION',
      desc: 'Trained technical school trainees in personal financial planning, bank savings schemes, and digital banking to prevent banking fraud.',
      location: 'ITI Srikona Campus, Silchar, Cachar District',
      budget: '₹25,000',
      metric: 'Youth Trainees Graduated',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p4_img2.jpg',
      iconName: 'education',
      status: 'published'
    },
    {
      id: 'flood-relief-23',
      year: 'FY 2022-2023',
      title: 'Emergency Flood Relief Rations Deployment',
      category: 'RELIEF',
      desc: 'Dispatched emergency dry rations, dal, edible oil, and clean drinking water to remote villages submerged during the destructive Barak Valley floods.',
      location: 'Cachar, Hailakandi & Karimganj Flood Zones',
      budget: '₹1,27,000',
      metric: 'Flood-Displaced Households Rushed Aid',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p6_img4.jpg',
      iconName: 'relief',
      status: 'published'
    },
    {
      id: 'plantation-23',
      year: 'FY 2022-2023',
      title: 'World Environment Day Reforestation Drive',
      category: 'ENVIRONMENT',
      desc: 'Planting endemic and fruit saplings inside multiple educational institutions to cultivate green consciousness among youth.',
      location: 'Barak Valley Educational Institutes',
      budget: '₹56,000',
      metric: 'Eco-Saplings Planted',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p7_img6.jpg',
      iconName: 'environment',
      status: 'published'
    },
    {
      id: 'child-labour-23',
      year: 'FY 2022-2023',
      title: 'Awareness Campaign Against Child Labour',
      category: 'COMMUNITY',
      desc: 'Community retainment meetings and interactive counseling with daily-wage parents, preventing school dropouts in rural brick-kilns.',
      location: 'Rural Primary Schools, Cachar',
      budget: '₹35,700',
      metric: 'Retention Counselling Sessions Completed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p9_img10.jpg',
      iconName: 'community',
      status: 'published'
    },
    {
      id: 'winter-cloth-23',
      year: 'FY 2022-2023',
      title: 'Winter Warm Clothing Distribution',
      category: 'RELIEF',
      desc: 'Protecting the vulnerable from cold waves through the structured distribution of high-grade blankets and thermal wear.',
      location: 'Barpeta & Nalbari Districts',
      budget: '₹2,68,000',
      metric: 'Winter Blankets Distributed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p10_img12.jpg',
      iconName: 'relief',
      status: 'published'
    },
    {
      id: 'health-camp-23',
      year: 'FY 2022-2023',
      title: 'Free Health Checkup and Pharmacy Camp',
      category: 'HEALTH',
      desc: 'Multi-speciality screening covering general medicine, orthopaedics, and pediatrics, paired with free generic medicine dispensaries.',
      location: 'Katigorah & Algapur Blocks',
      budget: '₹48,900',
      metric: 'Patients Diagnosed & Treated',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p13_img16.jpg',
      iconName: 'health',
      status: 'published'
    }
  ];
}
