import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'Green Ahom Federation',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Pioneering ecological preservation and sustainable cultural landscapes in Assam.',
    },
    {
      name: 'contactEmail',
      type: 'email',
      defaultValue: 'contact@greenahom.org',
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '+91 98765 43210',
    },
    {
      name: 'address',
      type: 'textarea',
      defaultValue: 'Guwahati, Assam, India',
    },
  ],
}
