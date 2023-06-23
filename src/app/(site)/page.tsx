import { getProjects } from "@/sanity/sanity-utils";
import { draftMode } from "next/headers";
import PreviewProvider from "@/components/PreviewProvider";
import ProjectList from "@/components/ProjectList/ProjectList";
import PreviewProjectList from "@/components/ProjectList/PreviewProjectList";

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN! }
    : undefined;

  const projects = await getProjects();
  if (preview) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewProjectList data={projects} />
      </PreviewProvider>
    );
  }

  return <ProjectList data={projects} />;
}
