import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/types/Project";

const ProjectList = ({ data }: { data: Project[] }) => {
  return (
    <div>
      {data.map((project) => (
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
};

export default ProjectList;
