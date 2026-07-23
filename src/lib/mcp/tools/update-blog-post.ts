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
  name: "update_blog_post",
  title: "Update blog post",
  description:
    "Update one of the signed-in user's own blog posts. Only fields provided are changed. Users cannot edit other authors' posts.",
  inputSchema: {
    id: z.string().uuid().describe("The UUID of the blog post to update."),
    title: z.string().trim().min(1).max(200).optional().describe("New post title."),
    excerpt: z.string().trim().min(1).max(500).optional().describe("New excerpt."),
    content: z.string().trim().min(1).optional().describe("New full post body."),
    author_name: z.string().trim().min(1).max(100).optional().describe("New display name for the author."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ id, title, excerpt, content, author_name }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated." }], isError: true };
    }

    const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (title !== undefined) patch.title = title;
    if (excerpt !== undefined) patch.excerpt = excerpt;
    if (content !== undefined) patch.content = content;
    if (author_name !== undefined) patch.author_name = author_name;

    if (Object.keys(patch).length === 1) {
      return { content: [{ type: "text", text: "Nothing to update — provide at least one field." }], isError: true };
    }

    const { data, error } = await supabaseForUser(ctx)
      .from("blog_posts")
      .update(patch)
      .eq("id", id)
      .eq("user_id", ctx.getUserId())
      .select("id, title, excerpt, author_name, updated_at")
      .maybeSingle();

    if (error) {
      return { content: [{ type: "text", text: `Error updating post: ${error.message}` }], isError: true };
    }
    if (!data) {
      return {
        content: [{ type: "text", text: `No post found with id ${id} that you own. You can only edit your own posts.` }],
        isError: true,
      };
    }

    return {
      content: [{ type: "text", text: `Updated blog post "${data.title}".` }],
      structuredContent: { post: data },
    };
  },
});