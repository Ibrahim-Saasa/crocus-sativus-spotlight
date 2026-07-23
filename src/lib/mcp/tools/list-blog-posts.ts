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
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List all published saffron blog posts, most recent first. Returns title, author, excerpt, creation date, and post ID.",
  inputSchema: {
    limit: z.number().int().min(1).max(50).optional().describe("Max number of posts to return (default 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated." }], isError: true };
    }
    const { data, error } = await supabaseForUser(ctx)
      .from("blog_posts")
      .select("id, title, excerpt, author_name, created_at, updated_at, user_id")
      .order("created_at", { ascending: false })
      .limit(limit ?? 20);

    if (error) {
      return { content: [{ type: "text", text: `Error: ${error.message}` }], isError: true };
    }

    const currentUserId = ctx.getUserId();
    const items = (data ?? []).map((p) => ({
      id: p.id,
      title: p.title,
      excerpt: p.excerpt,
      author: p.author_name,
      created_at: p.created_at,
      updated_at: p.updated_at,
      is_yours: p.user_id === currentUserId,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { posts: items, total: items.length },
    };
  },
});