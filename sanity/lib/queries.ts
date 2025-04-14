import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == "startup"]{
    _id,
    title,
    slug,
    author->{
        _id,
        name,
        image,
        bio
    },
    views,
    description,
    category,
    image,
    _createdAt,
}`);
