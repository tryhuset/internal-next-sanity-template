import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id}>
          {project.image && (
            <Image
              src={urlForImage(project.image).url()}
              alt={project.name}
              width={750}
              height={300}
            />
          )}
          <div>{project.name}</div>
        </Link>
      ))}
    </div>
  );
}
