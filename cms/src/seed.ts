import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  console.log('Initializing Payload for seeding...')
  const payload = await getPayload({ config })

  // 1. Admin user with username Admin and password Admin
  const existingUsers = await payload.find({
    collection: 'users',
    where: {
      username: {
        equals: 'Admin',
      },
    },
  })

  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        username: 'Admin',
        password: 'Admin',
        email: 'admin@greenahom.org',
        name: 'Admin',
      },
    })
    console.log('✓ Created Admin user: username="Admin", password="Admin"')
  } else {
    console.log('✓ Admin user already exists')
  }

  // 2. Global Site Settings
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'Green Ahom Federation',
      tagline: 'Pioneering ecological preservation and sustainable cultural landscapes in Assam.',
      contactEmail: 'contact@greenahom.org',
      contactPhone: '+91 98765 43210',
      address: 'Guwahati, Assam, India',
    },
  })
  console.log('✓ Configured SiteSettings global')

  // 3. Seed GreenAhom Programs
  const samplePrograms = [
    {
      title: 'TB Patients Nutritional Food Packets',
      slug: 'tb-nutri-25',
      year: 'FY 2024-2025',
      category: 'HEALTH',
      desc: 'Supplying nutrient-dense protein food kits to vulnerable tuberculosis patients undergoing continuous medical treatments to reinforce immune response and prevent treatment default.',
      location: 'Patharkandi Block, Karimganj District',
      budget: '₹14,45,000',
      metric: 'Treatment Adherence Supported',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p5_img1.jpg',
      iconName: 'health',
      status: 'published' as const,
    },
    {
      title: 'Eye Camp – Spectacles for Refractive Error',
      slug: 'eye-spec-25',
      year: 'FY 2024-2025',
      category: 'HEALTH',
      desc: 'Free vision screening and distribution of high-quality corrective spectacles for rural students and daily wage earners suffering from refractive vision barriers.',
      location: 'Lala Block, Hailakandi District',
      budget: '₹2,69,750',
      metric: 'Free Spectacles Distributed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p6_img4.jpg',
      iconName: 'health',
      status: 'published' as const,
    },
    {
      title: 'Winter Warm Clothing Distribution',
      slug: 'winter-cloth-23',
      year: 'FY 2022-2023',
      category: 'RELIEF',
      desc: 'Protecting the vulnerable from cold waves through the structured distribution of high-grade blankets and thermal wear.',
      location: 'Barpeta & Nalbari Districts',
      budget: '₹2,68,000',
      metric: 'Winter Blankets Distributed',
      progress: 100,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2022-23_p10_img12.jpg',
      iconName: 'relief',
      status: 'published' as const,
    },
    {
      title: 'Green Riverbank Revival & Afforestation',
      slug: 'riverbank-revival-25',
      year: 'FY 2024-2025',
      category: 'ENVIRONMENT',
      desc: 'Riparian buffer restoration and indigenous bamboo embankment stabilization along the Brahmaputra tributaries.',
      location: 'Majuli & Jorhat, Assam',
      budget: '₹8,50,000',
      metric: 'Native Trees & Bamboo Planted',
      progress: 85,
      imageUrl: '/extracted_images/ANNUAL_REPORT_2024-2025_p5_img1.jpg',
      iconName: 'environment',
      status: 'published' as const,
    },
  ]

  for (const prog of samplePrograms) {
    const existing = await payload.find({
      collection: 'programs',
      where: {
        slug: {
          equals: prog.slug,
        },
      },
    })
    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'programs',
        data: prog,
      })
      console.log(`✓ Created program: ${prog.title}`)
    }
  }

  console.log('Database initialization & seeding complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seeding failed:', err)
  process.exit(1)
})
