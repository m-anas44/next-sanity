import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  api: {
    // CORS configuration
    cors: {
      origin: ['https://next-sanity-delta.vercel.app'], // Replace with the actual URL of your Next.js application
      credentials: true,
    },
  },
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
