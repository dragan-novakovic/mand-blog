import { json } from "@sveltejs/kit";
import posts from "../blog/_posts.js";

const summaries = posts.map((post) => ({
  title: post.title,
  slug: post.slug,
}));

export function GET() {
  return json(summaries);
}
