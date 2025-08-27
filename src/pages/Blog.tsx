import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BlogPost from "@/components/BlogPost";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  useScrollAnimation();

  const blogPosts = [
    {
      id: "saffron-trading-history",
      title: "The History of Saffron Trading",
      excerpt: "Explore how saffron became one of the most valuable commodities in ancient trade routes, shaping economies and cultures across continents.",
      author: "Dr. Elena Rossi",
      date: "March 15, 2024",
      readTime: "5 min read",
      content: `
        <p className="mb-6">For over 3,000 years, saffron has commanded prices that rival precious metals, earning its nickname "red gold." This extraordinary spice, derived from the delicate stigmas of Crocus sativus, has shaped trade routes, influenced economies, and even triggered wars.</p>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Ancient Origins</h2>
        <p className="mb-6">The earliest evidence of saffron cultivation dates back to ancient Persia, where it was prized not only for its culinary properties but also for its medicinal benefits and vibrant dye. Persian traders jealously guarded their cultivation secrets, creating an early monopoly that would influence global trade for millennia.</p>

        <p className="mb-6">Archaeological evidence from the Palace of Knossos in Crete shows frescoes depicting saffron harvesting as early as 1500 BCE, indicating that the spice had already spread throughout the ancient Mediterranean world.</p>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">The Silk Road and Medieval Trade</h2>
        <p className="mb-6">As trade routes expanded, saffron became one of the most sought-after commodities along the Silk Road. Merchants would travel thousands of miles, braving bandits and harsh weather, to transport small quantities of this precious spice.</p>

        <p className="mb-6">During the Middle Ages, saffron was literally worth its weight in gold. In 14th-century Europe, one pound of saffron was valued at the same price as a horse. This incredible value made saffron adulteration a serious crime, punishable by death in some regions.</p>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">The Saffron Wars</h2>
        <p className="mb-6">The value of saffron was so great that it sparked conflicts. The famous "Saffron War" of 1374 lasted 14 weeks when a shipment of saffron worth 800 pounds was hijacked. This conflict demonstrates just how central saffron had become to medieval commerce.</p>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Modern Trade</h2>
        <p className="mb-6">Today, Iran produces approximately 90% of the world's saffron, continuing a tradition that spans millennia. Despite modern transportation and communication, saffron remains one of the world's most expensive spices by weight, testament to the labor-intensive cultivation and harvesting process that has remained essentially unchanged since ancient times.</p>

        <p className="mb-6">The global saffron market continues to grow, with increasing appreciation for authentic, high-quality saffron in modern cuisine and traditional medicine. From ancient Persia to modern kitchens worldwide, saffron's journey through history is a testament to humanity's enduring quest for exceptional flavors and experiences.</p>
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
        <p className="mb-6">Successfully growing Crocus sativus requires understanding its unique seasonal needs. Unlike many flowers, saffron crocuses have a reversed growing cycle, blooming in autumn and growing through winter, making proper seasonal care crucial for a successful harvest.</p>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Spring: Foliage and Preparation</h2>
        <p className="mb-6">As spring arrives, your saffron crocuses will be in their active growth phase. The narrow, grass-like leaves emerge and photosynthesize to build energy reserves in the corms (bulbs) for the autumn flowering period.</p>

        <p className="mb-6"><strong>Key Spring Tasks:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Allow foliage to grow naturally - never cut it back early as it's building energy for next year's blooms</li>
          <li>Apply a balanced, low-nitrogen fertilizer to support healthy growth</li>
          <li>Ensure good drainage to prevent corm rot during wet spring weather</li>
          <li>Remove any weeds that compete for nutrients and water</li>
          <li>Plan for any new plantings or corm divisions needed in summer</li>
        </ul>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Summer: Dormancy and Division</h2>
        <p className="mb-6">Summer is the dormant period for saffron crocuses. The foliage dies back completely, and the corms rest underground. This is the ideal time for maintenance and propagation.</p>

        <p className="mb-6"><strong>Summer Care Guidelines:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Keep soil dry during dormancy - overwatering can cause corm rot</li>
          <li>This is the perfect time to lift and divide overcrowded corms (every 3-4 years)</li>
          <li>Inspect corms for signs of disease or damage before replanting</li>
          <li>Plant new corms in late summer, about 6-8 weeks before expected blooming</li>
          <li>Prepare planting areas with well-draining, slightly alkaline soil</li>
        </ul>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Autumn: Blooming and Harvest</h2>
        <p className="mb-6">Autumn is the magical season when your patience is rewarded with beautiful purple blooms and precious saffron threads. The flowering period typically lasts 2-3 weeks and requires careful attention for optimal harvest.</p>

        <p className="mb-6"><strong>Autumn Priorities:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Monitor daily for flower emergence - they can appear overnight</li>
          <li>Harvest flowers early morning when they first open for best quality saffron</li>
          <li>Protect blooms from heavy rain and wind with temporary covers if needed</li>
          <li>Begin light watering as flowers emerge to support blooming</li>
          <li>Remove spent flowers promptly to direct energy back to the corms</li>
        </ul>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Winter: Active Growth Protection</h2>
        <p className="mb-6">While dormant above ground during summer, saffron crocuses are actually quite active during winter. The roots grow and the corms develop, preparing for spring foliage emergence.</p>

        <p className="mb-6"><strong>Winter Care Essentials:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Ensure adequate moisture but avoid waterlogged conditions</li>
          <li>Apply mulch in extremely cold regions to protect from hard freezes</li>
          <li>Monitor for pest activity, particularly rodents that may eat corms</li>
          <li>Avoid walking on planting areas to prevent soil compaction</li>
          <li>Plan next year's garden layout and order any additional corms needed</li>
        </ul>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Year-Round Success Tips</h2>
        <p className="mb-6">Consistency in care and attention to seasonal rhythms are key to long-term success with saffron cultivation. Remember that these plants are making a significant investment in each bloom, and proper care throughout all seasons ensures the best possible harvest year after year.</p>

        <p className="mb-6">Most importantly, be patient. Newly planted corms may not bloom in their first year as they establish themselves. With proper seasonal care, your saffron patch will reward you with increasing yields and exceptional quality for many years to come.</p>
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
        <p className="mb-6">Harvesting saffron is perhaps the most critical and delicate phase of saffron cultivation. The quality, aroma, and value of your saffron depend entirely on proper timing, technique, and post-harvest handling. This ancient art, unchanged for millennia, requires patience, precision, and perfect timing.</p>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Timing is Everything</h2>
        <p className="mb-6">Saffron flowers have an extremely narrow harvest window. The flowers typically bloom for just one day, opening in the early morning and closing by afternoon. Missing this window can significantly reduce the quality of your saffron.</p>

        <p className="mb-6"><strong>Optimal Harvest Timing:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Harvest at dawn, just as flowers begin to open (6-8 AM is ideal)</li>
          <li>Never harvest wet flowers - wait for dew to evaporate</li>
          <li>Flowers should be fully purple with bright red stigmas visible</li>
          <li>Avoid harvesting during rain or high humidity</li>
          <li>Complete harvest within 2-3 hours of flower opening</li>
        </ul>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">The Harvesting Process</h2>
        <p className="mb-6">Each flower contains exactly three precious stigmas (saffron threads). The goal is to remove these delicate structures without damaging them or including any yellow stamens or white styles, which would reduce quality.</p>

        <p className="mb-6"><strong>Step-by-Step Harvest Method:</strong></p>
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          <li><strong>Gather flowers gently:</strong> Pick the entire flower by pinching the stem just below the bloom. Handle with extreme care to avoid crushing the delicate petals.</li>
          <li><strong>Work in shade:</strong> Move to a cool, shaded area immediately. Direct sunlight can quickly degrade the saffron quality.</li>
          <li><strong>Open flowers carefully:</strong> Gently pull apart the purple petals to expose the reproductive parts inside.</li>
          <li><strong>Identify the stigmas:</strong> Look for three bright red, thread-like stigmas. These are your precious saffron.</li>
          <li><strong>Extract with precision:</strong> Using tweezers or your fingernails, carefully pinch and pull each red stigma where it meets the white style. Include only the red portion.</li>
          <li><strong>Avoid contamination:</strong> Never include the yellow stamens, white styles, or purple petals, as these will reduce quality and value.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Quality Control During Harvest</h2>
        <p className="mb-6">Premium saffron requires strict quality control during harvest. Each stigma should be examined to ensure it meets the highest standards.</p>

        <p className="mb-6"><strong>Quality Indicators:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Deep crimson-red color throughout the stigma</li>
          <li>No yellow or white portions attached</li>
          <li>Intact, unbroken threads</li>
          <li>Strong, characteristic honey-like aroma</li>
          <li>Dry, brittle texture (after proper drying)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Immediate Post-Harvest Handling</h2>
        <p className="mb-6">Proper handling immediately after harvest is crucial for maintaining saffron quality. Fresh stigmas are delicate and must be processed quickly to prevent deterioration.</p>

        <p className="mb-6"><strong>Post-Harvest Steps:</strong></p>
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          <li><strong>Quick inspection:</strong> Remove any damaged or inferior stigmas immediately.</li>
          <li><strong>Begin drying promptly:</strong> Fresh stigmas should be dried within 2-3 hours of harvest.</li>
          <li><strong>Avoid moisture:</strong> Keep harvested stigmas in a dry environment until processing.</li>
          <li><strong>Handle minimally:</strong> Excessive handling can break the delicate threads and reduce quality.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Drying Process</h2>
        <p className="mb-6">Proper drying is essential for preserving saffron quality and preventing spoilage. Traditional methods remain the most effective for small-scale production.</p>

        <p className="mb-6"><strong>Traditional Drying Method:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Spread stigmas on fine mesh screens or clean paper</li>
          <li>Place in a warm (60-70°F), dry, dark location with good air circulation</li>
          <li>Avoid direct heat or sunlight which can damage delicate compounds</li>
          <li>Drying should be complete within 12-24 hours</li>
          <li>Properly dried saffron will be brittle and darker red in color</li>
        </ul>

        <h2 className="text-2xl font-semibold text-crocus-light mt-8 mb-4">Yield Expectations</h2>
        <p className="mb-6">Understanding typical yields helps set realistic expectations and plan your harvest strategy.</p>

        <p className="mb-6"><strong>Typical Yields:</strong></p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>150-200 flowers produce approximately 1 gram of dried saffron</li>
          <li>Each flower yields 3 stigmas weighing about 2 milligrams each when fresh</li>
          <li>Fresh stigmas lose about 80% of their weight during drying</li>
          <li>A mature corm typically produces 1-3 flowers per season</li>
          <li>Peak production occurs 3-5 years after initial planting</li>
        </ul>

        <p className="mb-6">Remember, harvesting saffron is both an art and a science. With practice, you'll develop the timing, technique, and intuition needed to consistently produce high-quality saffron that rivals the world's finest commercial grades.</p>
      `
    }
  ];

  const currentPost = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

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
                <div key={post.id} className={`scroll-animate scroll-animate-delay-${index + 1}`}>
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

            <div className="scroll-animate scroll-animate-delay-4 text-center mt-12">
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