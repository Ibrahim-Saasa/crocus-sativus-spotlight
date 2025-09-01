import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
  };
  onBack: () => void;
}

const BlogPost = ({ post, onBack }: BlogPostProps) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    console.log("Back button clicked");
    onBack();
    navigate('/blog');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="scroll-animate animate">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-saffron-gold hover:text-saffron-light transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>
        
        <article className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-crocus-light mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </header>
          
          <div 
            className="prose prose-lg max-w-none text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;