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
  name: "delete_blog_post",
  title: "Delete blog post",
  description:
    "Permanently delete one of the signed-in user's own blog posts. Users cannot delete other authors' posts.",
  inputSchema: {
    id: z.string().uuid().describe("The UUID of the blog post to delete."),
  },
  annotations: { readOnlyHint: false, destructiveHint: true, openWorldHint: false },
  handler: async ({ id }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated." }], isError: true };
    }

    const { data, error } = await supabaseForUser(ctx)
      .from("blog_posts")
      .delete()
      .eq("id", id)
      .eq("user_id", ctx.getUserId())
      .select("id, title")
      .maybeSingle();

    if (error) {
      return { content: [{ type: "text", text: `Error deleting post: ${error.message}` }], isError: true };
    }
    if (!data) {
      return {
        content: [{ type: "text", text: `No post found with id ${id} that you own. You can only delete your own posts.` }],
        isError: true,
      };
    }

    return {
      content: [{ type: "text", text: `Deleted blog post "${data.title}".` }],
      structuredContent: { deleted: data },
    };
  },
});