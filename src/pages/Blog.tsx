import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Blog = () => {
  useScrollAnimation();

  const blogPosts = [
    {
      title: "The History of Saffron Trading",
      excerpt: "Explore how saffron became one of the most valuable commodities in ancient trade routes.",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Seasonal Care for Crocus Sativus",
      excerpt: "Learn the essential care tips for each season to ensure healthy blooms and quality saffron.",
      date: "March 10, 2024",
      readTime: "7 min read"
    },
    {
      title: "Harvesting Saffron: A Step-by-Step Guide",
      excerpt: "Master the delicate art of harvesting saffron stigmas at the perfect moment.",
      date: "March 5, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-dark-glow">
      <Navigation />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <h1 className="text-4xl md:text-6xl font-bold text-crocus-light mb-4 text-center">
              Saffron Blog
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Stories, tips, and insights about the world of Crocus Sativus
            </p>
          </div>
          
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <div key={index} className={`scroll-animate scroll-animate-delay-${index + 1}`}>
                <article className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-scale cursor-pointer transition-all duration-300">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-crocus-light mb-4 hover:text-saffron-gold transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-saffron-gold font-medium hover:text-saffron-light transition-colors">
                    Read More →
                  </button>
                </article>
              </div>
            ))}
          </div>

          <div className="scroll-animate scroll-animate-delay-3 text-center mt-12">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-crocus-light mb-4">
                Want to contribute?
              </h3>
              <p className="text-muted-foreground mb-6">
                Share your saffron growing experiences and join our community of enthusiasts.
              </p>
              <button className="bg-saffron-gold hover:bg-saffron-gold/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;