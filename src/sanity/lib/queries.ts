import { defineQuery } from "next-sanity";

export const projects_query = defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug {
    current
  },
  publishedAt,
  mainImage {
    asset -> {
      _ref,
      url
    },
    alt
  },
  author -> {
    _id,
    name
  },
  categories[] -> {
    _id,
    title
  },
  body[] {
    _type,
    style,
    children[] {
      _type,
      text
    }
  }
}
`);