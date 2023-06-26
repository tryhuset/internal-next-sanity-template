/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import resolveProductionUrl from "@/src/sanity/config/resolveProductionUrl";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import schemas from "./src/sanity/schemas";
import { getDefaultDocumentNode } from "@/src/sanity/config/structure";

export default defineConfig({
  title: "Title",
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: { types: schemas },
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    productionUrl: async (prev, context) => {
      const { document } = context;

      return resolveProductionUrl(document);
    },
  },
});
