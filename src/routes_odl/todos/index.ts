import { api } from "./_api";
import { json, redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ locals }) => {
  // locals.userid comes from src/hooks.server.ts
  const response = await api("GET", `todos/${locals.userid}`);

  if (response.status === 404) {
    return json({ todos: [] });
  }

  if (response.status === 200) {
    return json({ todos: await response.json() });
  }

  return new Response(null, { status: response.status });
};

export const POST: RequestHandler = async ({ request, locals }) => {
  const form = await request.formData();

  await api("POST", `todos/${locals.userid}`, {
    text: form.get("text"),
  });

  return new Response(null, { status: 204 });
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
export const PATCH: RequestHandler = async ({ request, locals }) => {
  const form = await request.formData();

  await api("PATCH", `todos/${locals.userid}/${form.get("uid")}`, {
    text: form.has("text") ? form.get("text") : undefined,
    done: form.has("done") ? !!form.get("done") : undefined,
  });

  redirect(303, "/todos");
};

export const DELETE: RequestHandler = async ({ request, locals }) => {
  const form = await request.formData();

  await api("DELETE", `todos/${locals.userid}/${form.get("uid")}`);

  redirect(303, "/todos");
};
