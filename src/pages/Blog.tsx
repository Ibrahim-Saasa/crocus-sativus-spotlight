import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BlogPost from "@/components/BlogPost";
import CreateBlogPost from "@/components/CreateBlogPost";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  userId?: string;
  rawContent?: string;
  authorName?: string;
}

const staticPosts: BlogPostData[] = [
  {
    id: "saffron-trading-history",
    title: "The History of Saffron Trading",
    excerpt: "Explore how saffron became one of the most valuable commodities in ancient trade routes, shaping economies and cultures across continents.",
    author: "Dr. Elena Rossi",
    date: "March 15, 2024",
    readTime: "5 min read",
    content: `
      <p style="margin-bottom: 1.5rem;">For over 3,000 years, saffron has commanded prices that rival precious metals, earning its nickname "red gold." This extraordinary spice, derived from the delicate stigmas of Crocus sativus, has shaped trade routes, influenced economies, and even triggered wars.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Ancient Origins</h2>
      <p style="margin-bottom: 1.5rem;">The earliest evidence of saffron cultivation dates back to ancient Persia, where it was prized not only for its culinary properties but also for its medicinal benefits and vibrant dye.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">The Silk Road and Medieval Trade</h2>
      <p style="margin-bottom: 1.5rem;">As trade routes expanded, saffron became one of the most sought-after commodities along the Silk Road. During the Middle Ages, one pound of saffron was valued at the same price as a horse.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Modern Trade</h2>
      <p style="margin-bottom: 1.5rem;">Today, Iran produces approximately 90% of the world's saffron, continuing a tradition that spans millennia.</p>
    `
  },
  {
    id: "seasonal-care-crocus",
    title: "Seasonal Care for Crocus Sativus",
    excerpt: "Learn the essential care tips for each season to ensure healthy blooms and quality saffron harvest year after year.",
    author: "Marcus Thompson",
    date: "March 10, 2024",
    readTime: "7 min read",
    content: `
      <p style="margin-bottom: 1.5rem;">Successfully growing Crocus sativus requires understanding its unique seasonal needs. Unlike many flowers, saffron crocuses have a reversed growing cycle, blooming in autumn and growing through winter.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Spring: Foliage and Preparation</h2>
      <p style="margin-bottom: 1.5rem;">As spring arrives, your saffron crocuses will be in their active growth phase. Allow foliage to grow naturally and apply a balanced fertilizer.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Summer: Dormancy and Division</h2>
      <p style="margin-bottom: 1.5rem;">Summer is the dormant period. Keep soil dry and divide overcrowded corms every 3-4 years.</p>
    `
  },
  {
    id: "harvesting-saffron-guide",
    title: "Harvesting Saffron: A Step-by-Step Guide",
    excerpt: "Master the delicate art of harvesting saffron stigmas at the perfect moment to ensure the highest quality and yield.",
    author: "Isabella Chen",
    date: "March 5, 2024",
    readTime: "6 min read",
    content: `
      <p style="margin-bottom: 1.5rem;">Harvesting saffron is perhaps the most critical and delicate phase of saffron cultivation. The quality, aroma, and value of your saffron depend entirely on proper timing, technique, and post-harvest handling.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Timing is Everything</h2>
      <p style="margin-bottom: 1.5rem;">Saffron flowers have an extremely narrow harvest window. Harvest at dawn, just as flowers begin to open.</p>
      <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Yield Expectations</h2>
      <p style="margin-bottom: 1.5rem;">150-200 flowers produce approximately 1 gram of dried saffron.</p>
    `
  }
];

function estimateReadTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [editingPost, setEditingPost] = useState<{ id: string; title: string; excerpt: string; content: string; author_name: string } | null>(null);
  const [dbPosts, setDbPosts] = useState<BlogPostData[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();
  useScrollAnimation();

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setDbPosts(
        data.map((p: any) => ({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt,
          content: `<p style="margin-bottom: 1.5rem;">${p.content.replace(/\n\n/g, '</p><p style="margin-bottom: 1.5rem;">')}</p>`,
          rawContent: p.content,
          author: p.author_name,
          authorName: p.author_name,
          date: new Date(p.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: estimateReadTime(p.content),
          userId: p.user_id,
        }))
      );
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (postId: string) => {
    setDeletingId(postId);
    const { error } = await supabase.from("blog_posts").delete().eq("id", postId);
    setDeletingId(null);

    if (error) {
      toast({ title: "Error", description: "Failed to delete post.", variant: "destructive" });
    } else {
      toast({ title: "Post deleted", description: "Your post has been removed." });
      fetchPosts();
    }
  };

  const allPosts = [...dbPosts, ...staticPosts];
  const currentPost = selectedPost
    ? allPosts.find((post) => post.id === selectedPost)
    : null;

  // Show create/edit form
  if ((showCreate || editingPost) && user) {
    return (
      <main className="min-h-screen bg-gradient-dark-glow">
        <Navigation />
        <div className="pt-32 pb-16 px-6">
          <CreateBlogPost
            onBack={() => { setShowCreate(false); setEditingPost(null); }}
            onCreated={() => {
              setShowCreate(false);
              setEditingPost(null);
              fetchPosts();
            }}
            editData={editingPost}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-dark-glow">
      <Navigation />

      <div className="pt-32 pb-16 px-6">
        {currentPost ? (
          <BlogPost post={currentPost} onBack={() => setSelectedPost(null)} />
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="opacity-100">
              <h1 className="text-4xl md:text-6xl font-bold text-crocus-light mb-4 text-center">
                Saffron Blog
              </h1>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Stories, tips, and insights about the world of Crocus Sativus
              </p>
            </div>

            {user && (
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setShowCreate(true)}
                  className="flex items-center gap-2 bg-saffron-gold hover:bg-saffron-gold/90 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Plus className="w-4 h-4" />
                  New Post
                </button>
              </div>
            )}

            <div className="space-y-8">
              {allPosts.map((post) => {
                const isOwner = user && post.userId === user.id;

                return (
                  <div key={post.id} className="opacity-100">
                    <article className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-scale cursor-pointer transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        {isOwner && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setEditingPost({
                                  id: post.id,
                                  title: post.title,
                                  excerpt: post.excerpt,
                                  content: post.rawContent || post.excerpt,
                                  author_name: post.authorName || post.author,
                                });
                              }}
                              className="p-2 rounded-lg text-muted-foreground hover:text-crocus-light hover:bg-white/5 transition-colors"
                              title="Edit post"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (confirm("Are you sure you want to delete this post?")) {
                                  handleDelete(post.id);
                                }
                              }}
                              disabled={deletingId === post.id}
                              className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-white/5 transition-colors disabled:opacity-50"
                              title="Delete post"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>

                      <h2 className="text-2xl font-semibold text-crocus-light mb-4 hover:text-saffron-gold transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      <button
                        onClick={() => setSelectedPost(post.id)}
                        className="text-saffron-gold font-medium hover:text-saffron-light transition-colors"
                      >
                        Read More →
                      </button>
                    </article>
                  </div>
                );
              })}
            </div>

            {!user && (
              <div className="scroll-animate scroll-animate-delay-4 text-center mt-12 opacity-100">
                <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-crocus-light mb-4">
                    Want to contribute?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Share your saffron growing experiences and join our community of enthusiasts.
                  </p>
                  <Link to="/auth?from=blog">
                    <button className="bg-saffron-gold hover:bg-saffron-gold/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
