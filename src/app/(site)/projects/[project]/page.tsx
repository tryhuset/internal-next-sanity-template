import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header>
        <h1>{project.name}</h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>

      <div>
        <PortableText value={project.content} />
      </div>

      <Image
        src={urlForImage(project.image).url()}
        alt={project.name}
        width={1920}
        height={1080}
      />
    </div>
  );
}
