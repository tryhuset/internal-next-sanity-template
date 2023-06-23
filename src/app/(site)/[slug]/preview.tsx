"use client";
import { Page as PageComponent } from "./page-component";
import { useLiveQuery } from "next-sanity/preview";
import { getPageQuery } from "@/sanity/sanity-utils";
import { Page } from "@/types/Page";

export function PreviewPage({
  initialData,
  slug,
}: {
  initialData: Page;
  slug: string;
}) {
  const [data, loading] = useLiveQuery(initialData, getPageQuery, {
    slug: slug,
  });

  if (loading) {
    return <>Loading...</>;
  }

  return <PageComponent page={data} />;
}
