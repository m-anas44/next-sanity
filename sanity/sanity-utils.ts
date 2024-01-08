import { createClient, groq } from "next-sanity";
import { ProjectTypes } from "../types/projectTypes";
import { revalidatePath } from "next/cache";
import { Page } from "../types/page";

export async function getProjects(): Promise<ProjectTypes[]> {
  const client = createClient({
    projectId: "oho4fzhb",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: false,
  });

  const query = groq`*[_type == "project"]{
        _id, 
        _createdAt,
        name, 
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`;

  try {
    const projects = await client.fetch(query, { next: { revalidate: 3600 } });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export async function getProject(slug: string): Promise<ProjectTypes> {
  try {
    const client = createClient({
      projectId: "oho4fzhb",
      dataset: "production",
      apiVersion: '2021-08-31',
    });
    console.log("Slug value:", slug);
    if (!slug) {
      throw new Error("Slug is undefined or empty");
    }

    const result = await client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
            _id, 
            _createdAt,
            name, 
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
      { slug: slug }
    );

    if (!result) {
      throw new Error("Project not found");
    }

    return result;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}

export async function getPages(): Promise<Page[]> {
  const client = createClient({
    projectId: "oho4fzhb",
    dataset: "production",
    apiVersion: '2021-08-31',
  });

  const query = groq`*[_type == "page"]{
        _id, 
        _createdAt,
        title,
        "slug": slug.current,
    }`;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

export async function getPage(slug : string): Promise<Page> {
  try {
    const client = createClient({
      projectId: "oho4fzhb",
      dataset: "production",
      apiVersion: '2021-08-31',
    });
    console.log("Slug value:", slug);
    if (!slug) {
      throw new Error("Slug is undefined or empty");
    }

    const result = await client.fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
            _id, 
            _createdAt,
            title,
            "slug": slug.current,
            content,
        }`,
      { slug: slug }
    );

    if (!result) {
      throw new Error("Project not found");
    }

    return result;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
}
