import { error } from "@sveltejs/kit";
import posts from "../_posts.js";

const lookup = new Map(posts.map((post) => [post.slug, post]));

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const post = lookup.get(params.slug);

  if (!post) {
    error(404, "Not found");
  }

  return { post };
}
