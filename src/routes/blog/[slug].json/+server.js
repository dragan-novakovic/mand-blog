import { json } from "@sveltejs/kit";
import posts from "../_posts.js";

const lookup = new Map(posts.map((post) => [post.slug, post]));

export function GET({ params }) {
  const post = lookup.get(params.slug);

  if (!post) {
    return json({ message: "Not found" }, { status: 404 });
  }

  return json(post);
}
