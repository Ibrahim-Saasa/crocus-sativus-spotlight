import { createClient } from "@supabase/supabase-js";
import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { z } from "zod";

function supabaseForUser(ctx: ToolContext) {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description:
    "Fetch the full content of a single saffron blog post by its ID (title, author, excerpt, and full body).",
  inputSchema: {
    id: z.string().uuid().describe("The UUID of the blog post to fetch."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ id }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated." }], isError: true };
    }
    const { data, error } = await supabaseForUser(ctx)
      .from("blog_posts")
      .select("id, title, excerpt, content, author_name, created_at, updated_at, user_id")
      .eq("id", id)
      .maybeSingle();

    if (error) return { content: [{ type: "text", text: `Error: ${error.message}` }], isError: true };
    if (!data) return { content: [{ type: "text", text: `No blog post found with id ${id}.` }], isError: true };

    const post = {
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      author: data.author_name,
      created_at: data.created_at,
      updated_at: data.updated_at,
      is_yours: data.user_id === ctx.getUserId(),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(post, null, 2) }],
      structuredContent: { post },
    };
  },
});