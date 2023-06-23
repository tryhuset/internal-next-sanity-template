import { getPage } from "@/sanity/sanity-utils";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";
import { Page as PageComponent } from "./page-component";
import { PreviewPage } from "./preview";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN! }
    : undefined;
  const page = await getPage(params.slug);

  if (preview) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewPage initialData={page} slug={params.slug} />
      </PreviewProvider>
    );
  }

  return <PageComponent page={page} />;
}
