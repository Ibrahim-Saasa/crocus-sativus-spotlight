import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Thermometer, Droplets, Sun, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GrowingGuide = () => {
  useScrollAnimation();
  const growingStages = [
    {
      stage: "Planting",
      icon: <Calendar className="w-8 h-8" />,
      timeline: "August - September",
      description: "Plant bulbs 4-6 inches deep in well-draining soil",
      details: [
        "Choose healthy, firm bulbs from reputable suppliers",
        "Plant in late summer before the rainy season",
        "Space bulbs 4-6 inches apart in rows",
        "Ensure soil temperature is below 20°C (68°F)"
      ]
    },
    {
      stage: "Rooting",
      icon: <Droplets className="w-8 h-8" />,
      timeline: "September - October",
      description: "Bulbs develop root systems during autumn rains",
      details: [
        "Roots emerge when soil temperature drops",
        "Moderate watering if rainfall is insufficient",
        "Avoid waterlogged conditions",
        "First shoots may appear in late October"
      ]
    },
    {
      stage: "Flowering",
      icon: <Sun className="w-8 h-8" />,
      timeline: "October - November",
      description: "Beautiful purple flowers bloom for 2-3 weeks",
      details: [
        "Flowers emerge before leaves in most varieties",
        "Each bulb produces 1-7 flowers",
        "Blooming period lasts 15-20 days",
        "Flowers open in early morning hours"
      ]
    },
    {
      stage: "Harvesting",
      icon: <Scissors className="w-8 h-8" />,
      timeline: "October - November",
      description: "Delicate hand-harvesting of precious stigmas",
      details: [
        "Harvest at dawn when flowers first open",
        "Carefully remove the 3 red stigmas per flower",
        "Work quickly - flowers close within hours",
        "About 150 flowers needed for 1 gram of saffron"
      ]
    }
  ];

  const conditions = [
    {
      title: "Climate",
      icon: <Thermometer className="w-6 h-6" />,
      requirement: "Mediterranean",
      details: "Hot, dry summers (35°C+) and cool, wet winters (0-10°C)"
    },
    {
      title: "Soil",
      icon: <Droplets className="w-6 h-6" />,
      requirement: "Well-draining",
      details: "pH 6.0-8.0, rich in organic matter, never waterlogged"
    },
    {
      title: "Sunlight",
      icon: <Sun className="w-6 h-6" />,
      requirement: "Full Sun",
      details: "6-8 hours direct sunlight daily, south-facing slopes ideal"
    },
    {
      title: "Altitude",
      icon: <Calendar className="w-6 h-6" />,
      requirement: "High Elevation",
      details: "Best between 1,500-2,000m elevation for optimal quality"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-dark-glow">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center scroll-animate">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-crocus-light mb-6">
            Cultivating Crocus Sativus
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn the ancient art of growing saffron crocus. From planting bulbs to harvesting 
            the precious stigmas, discover the complete process of cultivating the world's most valuable spice.
          </p>
        </div>
      </section>

      {/* Growing Stages */}
      <section className="py-16 px-6 scroll-animate scroll-animate-delay-1">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-crocus-purple text-glow text-center mb-16">
            The Growing Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growingStages.map((stage, index) => (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-glow transition-all duration-500 bg-white/80 backdrop-blur-sm border-crocus-light/30 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {stage.icon}
                  </div>
                  <CardTitle className="text-xl text-crocus-deep">{stage.stage}</CardTitle>
                  <p className="text-saffron-gold font-semibold">{stage.timeline}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-center mb-4 font-medium">
                    {stage.description}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {stage.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-saffron-gold rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Conditions */}
      <section className="py-16 px-6 bg-gradient-card scroll-animate scroll-animate-delay-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-crocus-purple text-glow text-center mb-16">
            Essential Growing Conditions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conditions.map((condition, index) => (
              <Card 
                key={index} 
                className="text-center shadow-elegant hover:shadow-glow transition-all duration-300 bg-white/70 backdrop-blur-sm border-crocus-light/30 hover-scale"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-saffron-light/30 rounded-full flex items-center justify-center mx-auto mb-4 text-crocus-deep">
                    {condition.icon}
                  </div>
                  <CardTitle className="text-lg text-crocus-deep">{condition.title}</CardTitle>
                  <p className="text-saffron-gold font-semibold">{condition.requirement}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {condition.details}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 px-6 scroll-animate scroll-animate-delay-3">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-glow bg-gradient-accent text-white border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Success Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Do's</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• Choose certified disease-free bulbs</li>
                    <li>• Plant in raised beds for drainage</li>
                    <li>• Harvest stigmas immediately when flowers open</li>
                    <li>• Dry stigmas quickly to preserve quality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Don'ts</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• Never plant in waterlogged soil</li>
                    <li>• Don't harvest wet flowers</li>
                    <li>• Avoid fertilizing during flowering</li>
                    <li>• Don't disturb bulbs during dormancy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-crocus-deep text-white text-center scroll-animate scroll-animate-delay-3">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Growing?</h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            Growing saffron requires patience and dedication, but the reward of harvesting 
            your own precious spice makes every effort worthwhile.
          </p>
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-saffron-gold hover:bg-saffron-gold/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Explore More About Crocus Sativus
            </Button>
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default GrowingGuide;