import { defineQuery } from "next-sanity";

export const projects_query = defineQuery(`*[_type=="post" && defined(slug.current)] | order(_createdAt desc)`);