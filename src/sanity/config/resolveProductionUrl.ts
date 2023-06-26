import { SanityDocumentLike } from "sanity";

const BASE_URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export async function resolveProductionUrl(
  doc?: SanityDocumentLike & {
    slug?: any;
  }
) {
  let previewUrl: URL | null = null;

  try {
    previewUrl = new URL(`/enable`, BASE_URL);
  } catch (err) {
    console.error("Invalid productionUrl", err);
  }

  if (!previewUrl || !doc) {
    return "";
  }

  let path = "";

  if (typeof doc.pathname === "string") {
    previewUrl.searchParams.append(`path`, doc.pathname.slice(1));

    return previewUrl.toString();
  }

  switch (doc._type) {
    case "page":
      path += "/" + doc.slug?.current ?? "";
      break;
  }

  previewUrl.searchParams.append(`path`, path);

  return previewUrl.toString();
}

export default resolveProductionUrl;
