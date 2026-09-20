import type { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'location', 'status'],
  },
  access: {
    read: () => true, // Publicly readable for frontend
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'year',
      type: 'text',
      defaultValue: 'FY 2024-2025',
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g. HEALTH, EDUCATION, RELIEF, ENVIRONMENT, INFRASTRUCTURE, COMMUNITY',
      },
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'budget',
      type: 'text',
    },
    {
      name: 'metric',
      type: 'text',
    },
    {
      name: 'progress',
      type: 'number',
      defaultValue: 100,
    },
    {
      name: 'imageUrl',
      type: 'text',
    },
    {
      name: 'iconName',
      type: 'text',
      defaultValue: 'environment',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      required: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
