import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BlogPost from "@/components/BlogPost";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  useScrollAnimation();
  
  console.log("Blog component rendered, selectedPost:", selectedPost);

  const blogPosts = [
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
        <p style="margin-bottom: 1.5rem;">The earliest evidence of saffron cultivation dates back to ancient Persia, where it was prized not only for its culinary properties but also for its medicinal benefits and vibrant dye. Persian traders jealously guarded their cultivation secrets, creating an early monopoly that would influence global trade for millennia.</p>

        <p style="margin-bottom: 1.5rem;">Archaeological evidence from the Palace of Knossos in Crete shows frescoes depicting saffron harvesting as early as 1500 BCE, indicating that the spice had already spread throughout the ancient Mediterranean world.</p>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">The Silk Road and Medieval Trade</h2>
        <p style="margin-bottom: 1.5rem;">As trade routes expanded, saffron became one of the most sought-after commodities along the Silk Road. Merchants would travel thousands of miles, braving bandits and harsh weather, to transport small quantities of this precious spice.</p>

        <p style="margin-bottom: 1.5rem;">During the Middle Ages, saffron was literally worth its weight in gold. In 14th-century Europe, one pound of saffron was valued at the same price as a horse. This incredible value made saffron adulteration a serious crime, punishable by death in some regions.</p>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">The Saffron Wars</h2>
        <p style="margin-bottom: 1.5rem;">The value of saffron was so great that it sparked conflicts. The famous "Saffron War" of 1374 lasted 14 weeks when a shipment of saffron worth 800 pounds was hijacked. This conflict demonstrates just how central saffron had become to medieval commerce.</p>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Modern Trade</h2>
        <p style="margin-bottom: 1.5rem;">Today, Iran produces approximately 90% of the world's saffron, continuing a tradition that spans millennia. Despite modern transportation and communication, saffron remains one of the world's most expensive spices by weight, testament to the labor-intensive cultivation and harvesting process that has remained essentially unchanged since ancient times.</p>

        <p style="margin-bottom: 1.5rem;">The global saffron market continues to grow, with increasing appreciation for authentic, high-quality saffron in modern cuisine and traditional medicine. From ancient Persia to modern kitchens worldwide, saffron's journey through history is a testament to humanity's enduring quest for exceptional flavors and experiences.</p>
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
        <p style="margin-bottom: 1.5rem;">Successfully growing Crocus sativus requires understanding its unique seasonal needs. Unlike many flowers, saffron crocuses have a reversed growing cycle, blooming in autumn and growing through winter, making proper seasonal care crucial for a successful harvest.</p>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Spring: Foliage and Preparation</h2>
        <p style="margin-bottom: 1.5rem;">As spring arrives, your saffron crocuses will be in their active growth phase. The narrow, grass-like leaves emerge and photosynthesize to build energy reserves in the corms (bulbs) for the autumn flowering period.</p>

        <p style="margin-bottom: 1.5rem;"><strong>Key Spring Tasks:</strong></p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">Allow foliage to grow naturally - never cut it back early as it's building energy for next year's blooms</li>
          <li style="margin-bottom: 0.5rem;">Apply a balanced, low-nitrogen fertilizer to support healthy growth</li>
          <li style="margin-bottom: 0.5rem;">Ensure good drainage to prevent corm rot during wet spring weather</li>
          <li style="margin-bottom: 0.5rem;">Remove any weeds that compete for nutrients and water</li>
          <li style="margin-bottom: 0.5rem;">Plan for any new plantings or corm divisions needed in summer</li>
        </ul>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Summer: Dormancy and Division</h2>
        <p style="margin-bottom: 1.5rem;">Summer is the dormant period for saffron crocuses. The foliage dies back completely, and the corms rest underground. This is the ideal time for maintenance and propagation.</p>

        <p style="margin-bottom: 1.5rem;"><strong>Summer Care Guidelines:</strong></p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">Keep soil dry during dormancy - overwatering can cause corm rot</li>
          <li style="margin-bottom: 0.5rem;">This is the perfect time to lift and divide overcrowded corms (every 3-4 years)</li>
          <li style="margin-bottom: 0.5rem;">Inspect corms for signs of disease or damage before replanting</li>
          <li style="margin-bottom: 0.5rem;">Plant new corms in late summer, about 6-8 weeks before expected blooming</li>
          <li style="margin-bottom: 0.5rem;">Prepare planting areas with well-draining, slightly alkaline soil</li>
        </ul>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Winter: Active Growth Protection</h2>
        <p style="margin-bottom: 1.5rem;">While dormant above ground during summer, saffron crocuses are actually quite active during winter. The roots grow and the corms develop, preparing for spring foliage emergence.</p>

        <p style="margin-bottom: 1.5rem;">Consistency in care and attention to seasonal rhythms are key to long-term success with saffron cultivation.</p>
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
        <p style="margin-bottom: 1.5rem;">Saffron flowers have an extremely narrow harvest window. The flowers typically bloom for just one day, opening in the early morning and closing by afternoon. Missing this window can significantly reduce the quality of your saffron.</p>

        <p style="margin-bottom: 1.5rem;"><strong>Optimal Harvest Timing:</strong></p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">Harvest at dawn, just as flowers begin to open (6-8 AM is ideal)</li>
          <li style="margin-bottom: 0.5rem;">Never harvest wet flowers - wait for dew to evaporate</li>
          <li style="margin-bottom: 0.5rem;">Flowers should be fully purple with bright red stigmas visible</li>
          <li style="margin-bottom: 0.5rem;">Avoid harvesting during rain or high humidity</li>
          <li style="margin-bottom: 0.5rem;">Complete harvest within 2-3 hours of flower opening</li>
        </ul>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">The Harvesting Process</h2>
        <p style="margin-bottom: 1.5rem;">Each flower contains exactly three precious stigmas (saffron threads). The goal is to remove these delicate structures without damaging them or including any yellow stamens or white styles.</p>

        <h2 style="font-size: 1.5rem; font-weight: 600; color: hsl(var(--crocus-light)); margin-top: 2rem; margin-bottom: 1rem;">Yield Expectations</h2>
        <p style="margin-bottom: 1.5rem;">Understanding typical yields helps set realistic expectations and plan your harvest strategy.</p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">150-200 flowers produce approximately 1 gram of dried saffron</li>
          <li style="margin-bottom: 0.5rem;">Each flower yields 3 stigmas weighing about 2 milligrams each when fresh</li>
          <li style="margin-bottom: 0.5rem;">Fresh stigmas lose about 80% of their weight during drying</li>
        </ul>

        <p style="margin-bottom: 1.5rem;">Remember, harvesting saffron is both an art and a science. With practice, you'll develop the timing and technique needed to produce high-quality saffron.</p>
      `
    }
  ];

  const currentPost = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;
  
  console.log("currentPost:", currentPost);
  console.log("Rendering blog with selectedPost:", selectedPost);

  return (
    <main className="min-h-screen bg-gradient-dark-glow">
      <Navigation />
      
      <div className="pt-32 pb-16 px-6">
        {currentPost ? (
          <BlogPost 
            post={currentPost} 
            onBack={() => setSelectedPost(null)} 
          />
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
            
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="opacity-100">
                  <article className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-scale cursor-pointer transition-all duration-300">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>By {post.author}</span>
                      <span>•</span>
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
                    
                    <button 
                      onClick={() => setSelectedPost(post.id)}
                      className="text-saffron-gold font-medium hover:text-saffron-light transition-colors"
                    >
                      Read More →
                    </button>
                  </article>
                </div>
              ))}
            </div>

            <div className="scroll-animate scroll-animate-delay-4 text-center mt-12 opacity-100">
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
        )}
      </div>
    </main>
  );
};

export default Blog;