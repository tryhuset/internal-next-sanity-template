import { getProjects } from "@/src/sanity/sanity-utils";
import { draftMode } from "next/headers";
import PreviewProvider from "@/src/components/PreviewProvider";
import ProjectList from "@/src/components/ProjectList/ProjectList";
import PreviewProjectList from "@/src/components/ProjectList/PreviewProjectList";

export default async function Home() {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN! }
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
