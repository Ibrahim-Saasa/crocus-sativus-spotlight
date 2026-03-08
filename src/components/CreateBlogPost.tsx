import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send } from "lucide-react";

interface EditData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author_name: string;
}

interface CreateBlogPostProps {
  onBack: () => void;
  onCreated: () => void;
  editData?: EditData | null;
}

const CreateBlogPost = ({ onBack, onCreated, editData }: CreateBlogPostProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [title, setTitle] = useState(editData?.title || "");
  const [excerpt, setExcerpt] = useState(editData?.excerpt || "");
  const [content, setContent] = useState(editData?.content || "");
  const [authorName, setAuthorName] = useState(
    editData?.author_name || user?.user_metadata?.display_name || ""
  );
  const [submitting, setSubmitting] = useState(false);

  const isEditing = !!editData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !excerpt.trim() || !content.trim() || !authorName.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    let error;

    if (isEditing) {
      ({ error } = await supabase
        .from("blog_posts")
        .update({
          title: title.trim(),
          excerpt: excerpt.trim(),
          content: content.trim(),
          author_name: authorName.trim(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", editData.id));
    } else {
      ({ error } = await supabase.from("blog_posts").insert({
        user_id: user!.id,
        title: title.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        author_name: authorName.trim(),
      }));
    }

    setSubmitting(false);

    if (error) {
      toast({
        title: "Error",
        description: `Failed to ${isEditing ? "update" : "create"} post. Please try again.`,
        variant: "destructive",
      });
    } else {
      toast({
        title: isEditing ? "Post updated!" : "Post published!",
        description: isEditing ? "Your changes have been saved." : "Your blog post is now live.",
      });
      onCreated();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-saffron-gold hover:text-saffron-light transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </button>

      <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
        <h2 className="text-3xl font-bold text-crocus-light mb-8">
          {isEditing ? "Edit Post" : "Write a New Post"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Author Name
            </label>
            <Input
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Your name"
              maxLength={100}
              className="bg-background/50 border-white/10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              maxLength={200}
              className="bg-background/50 border-white/10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Excerpt
            </label>
            <Textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A short summary of your post..."
              maxLength={500}
              rows={2}
              className="bg-background/50 border-white/10"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Content
            </label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog post here..."
              rows={12}
              className="bg-background/50 border-white/10"
            />
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="bg-saffron-gold hover:bg-saffron-gold/90 text-white font-semibold px-6 py-3 rounded-full"
          >
            <Send className="w-4 h-4 mr-2" />
            {submitting ? (isEditing ? "Saving..." : "Publishing...") : (isEditing ? "Save Changes" : "Publish Post")}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPost;
