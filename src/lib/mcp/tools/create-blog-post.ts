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
  name: "create_blog_post",
  title: "Create blog post",
  description:
    "Create a new saffron blog post authored by the signed-in user. Requires a title, short excerpt, and full post content.",
  inputSchema: {
    title: z.string().trim().min(1).max(200).describe("Post title."),
    excerpt: z.string().trim().min(1).max(500).describe("Short summary shown on the blog listing."),
    content: z.string().trim().min(1).describe("Full post body (plain text or markdown)."),
    author_name: z
      .string()
      .trim()
      .min(1)
      .max(100)
      .optional()
      .describe("Optional display name for the author. Defaults to the signed-in user's email."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ title, excerpt, content, author_name }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated." }], isError: true };
    }

    const fallbackName = ctx.getUserEmail() ?? "Anonymous";
    const { data, error } = await supabaseForUser(ctx)
      .from("blog_posts")
      .insert({
        user_id: ctx.getUserId(),
        title,
        excerpt,
        content,
        author_name: author_name ?? fallbackName,
      })
      .select("id, title, excerpt, author_name, created_at")
      .single();

    if (error) {
      return { content: [{ type: "text", text: `Error creating post: ${error.message}` }], isError: true };
    }

    return {
      content: [{ type: "text", text: `Created blog post "${data.title}" (id: ${data.id}).` }],
      structuredContent: { post: data },
    };
  },
});