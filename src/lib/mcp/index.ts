import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listBlogPostsTool from "./tools/list-blog-posts";
import getBlogPostTool from "./tools/get-blog-post";
import createBlogPostTool from "./tools/create-blog-post";
import updateBlogPostTool from "./tools/update-blog-post";
import deleteBlogPostTool from "./tools/delete-blog-post";
import listMyPostsTool from "./tools/list-my-posts";

// The OAuth issuer MUST be the direct Supabase host (not the .lovable.cloud
// proxy). Read the project ref from the Vite-inlined VITE_SUPABASE_PROJECT_ID —
// safe at module eval, no runtime env read.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "crocus-sativus-mcp",
  title: "Crocus Sativus Blog MCP",
  version: "0.1.0",
  instructions:
    "Read and manage saffron blog posts on the Crocus Sativus site. Use list_blog_posts and get_blog_post to browse, list_my_blog_posts to see your own posts, and create_blog_post / update_blog_post / delete_blog_post to publish or edit your contributions. Only the signed-in user's own posts can be modified.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    listBlogPostsTool,
    getBlogPostTool,
    listMyPostsTool,
    createBlogPostTool,
    updateBlogPostTool,
    deleteBlogPostTool,
  ],
});