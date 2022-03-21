import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.OPENSEA_CLONE_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.OPENSEA_CLONE_API_TOKEN || '',
  useCdn: false,
})
