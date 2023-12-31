import { createClient, groq } from "next-sanity";
import { Project } from "@/src/types/Project";
import clientConfig from "./config/client-config";
import { Page } from "@/src/types/Page";

export const getProjectsQuery = groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      image,
      url,
      content
    }`;

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(getProjectsQuery);
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      image,
      url,
      content
    }`,
    { slug }
  );
}

export const getPagesQuery = groq`*[_type == "page"]{
  _id,
  _createdAt,
  title,
  "slug": slug.current
}`;
export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(getPagesQuery);
}

export const getPageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  content
}`;
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(getPageQuery, { slug });
}
