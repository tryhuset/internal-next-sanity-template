import { PortableTextBlock, Image } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: Image;
  url: string;
  content: PortableTextBlock[];
};
