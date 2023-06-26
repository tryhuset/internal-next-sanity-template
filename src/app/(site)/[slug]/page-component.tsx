import { PortableText } from "@portabletext/react";
import { Page } from "@/src/types/Page";

export function Page({ page }: { page: Page }) {
  return (
    <div>
      <h1>{page?.title}</h1>
      <div>
        <PortableText value={page?.content} />
      </div>
    </div>
  );
}
