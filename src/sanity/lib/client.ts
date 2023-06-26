import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn, envToken } from "../env";

const config = {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  envToken,
};

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    ...config,
    token: envToken,
    studioUrl: "/studio",
    perspective: "published",
    logger: console,
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}
