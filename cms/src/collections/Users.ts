import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'username',
    defaultColumns: ['username', 'email'],
  },
  auth: {
    loginWithUsername: {
      allowEmailLogin: true,
      requireEmail: false,
    },
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
    },
  ],
  versions: false,
}
