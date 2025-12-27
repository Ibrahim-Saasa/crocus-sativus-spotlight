import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Flower2, 
  Crown, 
  Ship, 
  Castle, 
  Landmark, 
  FlaskConical, 
  Globe2, 
  Sparkles,
  BookOpen,
  Palette,
  Heart,
  Coins
} from "lucide-react";

const timelineEvents = [
  {
    era: "Ancient Origins",
    year: "3000+ BCE",
    title: "The Birth of Saffron Cultivation",
    description: "Crocus sativus emerges in the Bronze Age Aegean, likely on the island of Crete. Ancient Minoans depicted saffron gatherers in elaborate frescoes, showing the flower's sacred significance in their rituals and medicine.",
    details: [
      "Earliest evidence found in Minoan palace frescoes at Knossos",
      "Used in religious ceremonies and as offerings to deities",
      "Prized for its vivid color in dyeing royal garments"
    ],
    Icon: Flower2,
    color: "from-amber-500 to-orange-600"
  },
  {
    era: "Egyptian Empire",
    year: "1500 BCE",
    title: "Cleopatra's Secret",
    description: "Egyptian pharaohs and nobility embraced saffron as a symbol of ultimate luxury. Cleopatra famously bathed in saffron-infused milk before meeting her lovers, believing it enhanced her beauty and allure.",
    details: [
      "Used in embalming practices for royalty",
      "Applied as perfume and cosmetic ingredient",
      "Traded along the Nile as currency equivalent"
    ],
    Icon: Crown,
    color: "from-yellow-500 to-amber-600"
  },
  {
    era: "Persian Empire",
    year: "500 BCE",
    title: "The Persian Saffron Empire",
    description: "Persia became the epicenter of saffron cultivation, a legacy that continues today with Iran producing over 90% of the world's saffron. Persian gardens featured saffron crocus as both ornamental and medicinal plants.",
    details: [
      "Introduced systematic cultivation techniques",
      "Developed sophisticated harvesting and drying methods",
      "Integrated into Persian cuisine, medicine, and poetry"
    ],
    Icon: Landmark,
    color: "from-purple-500 to-violet-600"
  },
  {
    era: "Silk Road Era",
    year: "200 BCE - 1400 CE",
    title: "Spice of the Silk Road",
    description: "Saffron became one of the most valuable commodities traded along the legendary Silk Road. Merchants risked their lives carrying small pouches of the precious spice across thousands of miles.",
    details: [
      "Worth more than its weight in gold",
      "Caused the 'Saffron War' in 14th century Europe",
      "Adulteration punishable by death in some regions"
    ],
    Icon: Ship,
    color: "from-blue-500 to-indigo-600"
  },
  {
    era: "Medieval Europe",
    year: "1300 - 1500 CE",
    title: "The European Saffron Boom",
    description: "The Black Death paradoxically increased saffron's value as it was believed to cure the plague. European nobility paid fortunes for the spice, and towns like Saffron Walden in England grew wealthy from cultivation.",
    details: [
      "Used extensively in medieval medicine and cuisine",
      "Symbol of wealth in Renaissance paintings",
      "Monasteries maintained secret cultivation gardens"
    ],
    Icon: Castle,
    color: "from-rose-500 to-pink-600"
  },
  {
    era: "Scientific Age",
    year: "1800 - 1900 CE",
    title: "Science Meets Tradition",
    description: "Scientists began analyzing saffron's chemical compounds, discovering crocin (color), picrocrocin (flavor), and safranal (aroma). This era validated many traditional medicinal uses through rigorous study.",
    details: [
      "Identification of over 150 volatile compounds",
      "First standardization of quality grading systems",
      "Industrial applications in dyes and pharmaceuticals"
    ],
    Icon: FlaskConical,
    color: "from-teal-500 to-cyan-600"
  },
  {
    era: "Modern Era",
    year: "2000 CE - Present",
    title: "Saffron Renaissance",
    description: "Today's research reveals saffron's remarkable potential in treating depression, Alzheimer's, and cancer. Sustainable farming initiatives and AI-powered quality control are revolutionizing the industry.",
    details: [
      "Clinical trials show antidepressant properties",
      "Blockchain tracking ensures authenticity",
      "Climate-controlled indoor cultivation emerging"
    ],
    Icon: Globe2,
    color: "from-emerald-500 to-green-600"
  }
];

const saffronFacts = [
  {
    title: "The Most Expensive Spice",
    description: "A single gram of premium saffron requires approximately 150-200 flowers, with each flower producing only 3 stigmas. At peak prices, saffron has sold for over $10,000 per kilogram.",
    Icon: Coins
  },
  {
    title: "Medicinal Marvel",
    description: "Modern research confirms saffron's antioxidant, anti-inflammatory, and neuroprotective properties. Studies show promise in treating depression with effectiveness comparable to prescription medications.",
    Icon: Heart
  },
  {
    title: "Artistic Legacy",
    description: "From illuminated manuscripts to Renaissance masterpieces, saffron provided the radiant golden-yellow pigment that adorned sacred texts and iconic paintings throughout history.",
    Icon: Palette
  },
  {
    title: "Literary Significance",
    description: "Homer, Virgil, and countless poets celebrated saffron in their works. Persian poetry especially revered the flower as a symbol of love, sacrifice, and divine beauty.",
    Icon: BookOpen
  }
];

const History = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-crocus-deep via-background to-crocus-deep">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crocus-deep/90 via-crocus-purple/50 to-background"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-crocus-light/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:translate-y-0">
            <Sparkles className="w-16 h-16 text-saffron-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow">
              The Golden Thread of History
            </h1>
            <p className="text-xl md:text-2xl text-crocus-light mb-4">
              5,000 Years of Saffron's Journey Through Civilization
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              From ancient Minoan frescoes to modern medical laboratories, 
              saffron has woven itself into the fabric of human culture, 
              medicine, art, and commerce—a story more precious than gold itself.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-saffron-gold rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 scroll-animate opacity-0 translate-y-8 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:translate-y-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Saffron Through the Ages
            </h2>
            <p className="text-xl text-crocus-light">
              A journey through time with the world's most precious spice
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-saffron-gold via-crocus-light to-saffron-gold hidden lg:block"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={event.era}
                className={`relative flex flex-col lg:flex-row items-center mb-24 scroll-animate opacity-0 translate-y-12 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:translate-y-0`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Left Content (odd items) */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:order-3 lg:text-left lg:pl-12'}`}>
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                    <span className="text-saffron-gold font-semibold text-sm uppercase tracking-wider">
                      {event.era}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-crocus-light/90 leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <ul className="space-y-2">
                      {event.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                          <span className="text-saffron-gold mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="lg:w-2/12 flex justify-center my-8 lg:my-0 lg:order-2">
                  <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg shadow-saffron-gold/20 ring-4 ring-background`}>
                    <event.Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Year Badge */}
                <div className={`lg:w-5/12 flex ${index % 2 === 0 ? 'lg:order-3 lg:justify-start lg:pl-12' : 'lg:justify-end lg:pr-12'}`}>
                  <div className="bg-saffron-gold/20 border border-saffron-gold/30 rounded-full px-6 py-2">
                    <span className="text-saffron-gold font-bold text-lg">{event.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-background via-crocus-purple/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:translate-y-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fascinating Facts
            </h2>
            <p className="text-xl text-crocus-light">
              Discover what makes saffron truly extraordinary
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {saffronFacts.map((fact, index) => (
              <div
                key={fact.title}
                className="scroll-animate opacity-0 translate-y-8 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:translate-y-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron-gold to-saffron-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <fact.Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {fact.title}
                      </h3>
                      <p className="text-crocus-light/80 leading-relaxed">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center scroll-animate opacity-0 scale-95 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:scale-100">
          <div className="text-6xl text-saffron-gold mb-8">"</div>
          <blockquote className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-8">
            The saffron crocus does not yield its treasure easily. 
            Each crimson thread must be plucked by hand at dawn, 
            when the flowers first open—a ritual unchanged for millennia.
          </blockquote>
          <cite className="text-crocus-light text-lg">
            — Ancient Persian Proverb
          </cite>
        </div>
      </section>

      {/* Crocus Sativus Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-crocus-deep/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate opacity-0 -translate-x-8 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:translate-x-0">
              <span className="text-saffron-gold font-semibold uppercase tracking-wider text-sm">
                The Flower
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                Crocus Sativus
              </h2>
              <p className="text-crocus-light/90 text-lg leading-relaxed mb-6">
                Unlike its wild ancestors, Crocus sativus is a sterile cultivar that cannot reproduce naturally. 
                Every saffron flower in existence today has been deliberately planted and tended by human hands—a 
                testament to our 5,000-year partnership with this remarkable plant.
              </p>
              <p className="text-crocus-light/80 leading-relaxed mb-6">
                The flower blooms for only one to two weeks each autumn, opening just before dawn. 
                Within those precious hours, skilled harvesters must carefully pluck the three delicate 
                stigmas from each blossom before the sun wilts them.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-saffron-gold">150+</div>
                  <div className="text-white/60 text-sm">Flowers per gram</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-saffron-gold">3</div>
                  <div className="text-white/60 text-sm">Stigmas per flower</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-saffron-gold">2</div>
                  <div className="text-white/60 text-sm">Week bloom window</div>
                </div>
              </div>
            </div>

            <div className="scroll-animate opacity-0 translate-x-8 transition-all duration-1000 [&.animate]:opacity-100 [&.animate]:translate-x-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-saffron-gold/20 to-crocus-purple/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">The Anatomy of Saffron</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <div>
                        <div className="text-white font-semibold">Stigma (Saffron Thread)</div>
                        <div className="text-white/60 text-sm">The prized crimson threads containing crocin and safranal</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <div>
                        <div className="text-white font-semibold">Style</div>
                        <div className="text-white/60 text-sm">Connects stigma to the ovary, sometimes included in lower grades</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                      <div>
                        <div className="text-white font-semibold">Petals</div>
                        <div className="text-white/60 text-sm">Distinctive purple tepals that attract pollinators</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-4 h-4 rounded-full bg-amber-700"></div>
                      <div>
                        <div className="text-white font-semibold">Corm</div>
                        <div className="text-white/60 text-sm">Underground bulb-like structure for propagation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
