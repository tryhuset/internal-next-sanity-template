"use client";

import { useLiveQuery } from "next-sanity/preview";
import ProjectList from "./ProjectList";
import { getProjectsQuery } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";

export default function PreviewProjectList({
  data: initialData,
}: {
  data: Project[];
}) {
  const [data, loading] = useLiveQuery(initialData, getProjectsQuery);

  if (loading) {
    return <>Loading...</>;
  }

  return <ProjectList data={data} />;
}
