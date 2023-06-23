import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";
import { resolveProductionUrl } from "@/sanity/config/resolveProductionUrl";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .title("Preview")
        .options({
          url: resolveProductionUrl,
          defaultSize: "desktop",
          reload: {
            button: true,
          },
          attributes: {},
        }),
    ]);
  }
};
