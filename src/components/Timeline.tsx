import { Landmark, ScrollText, Ship, Globe2, Building2, Leaf } from "lucide-react";

const events = [
  {
    year: "c. 1200 BCE",
    title: "Early Cultivation",
    description:
      "Saffron cultivation begins in ancient Persia and the Aegean, prized for dye, medicine, and ritual.",
    Icon: Leaf,
  },
  {
    year: "5th century BCE",
    title: "Classical Era Trade",
    description:
      "Saffron spreads through Greek and Roman worlds, valued for fragrance and cuisine.",
    Icon: Landmark,
  },
  {
    year: "8th–10th century",
    title: "To Iberia via the Moors",
    description:
      "Cultivation flourishes in Spain (La Mancha) and the Mediterranean.",
    Icon: Ship,
  },
  {
    year: "13th–15th century",
    title: "European Golden Age",
    description:
      "Saffron becomes a luxury across Europe—used in guild feasts and apothecaries.",
    Icon: Building2,
  },
  {
    year: "18th–19th century",
    title: "Kashmiri Distinction",
    description:
      "Kashmir refines cultivation—renowned for deep color and aroma.",
    Icon: ScrollText,
  },
  {
    year: "Modern era",
    title: "Global Craft",
    description:
      "Iran leads production; artisanal growers thrive from Greece to Morocco and beyond.",
    Icon: Globe2,
  },
] as const;

export default function Timeline() {
  return (
    <section id="saffron-timeline" aria-labelledby="saffron-history" className="scroll-animate scroll-animate-delay-4 mt-8">
      <header className="mb-6 text-center">
        <h2 id="saffron-history" className="text-3xl md:text-4xl font-bold text-crocus-purple">
          Saffron Through the Ages
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          A concise timeline of the flower’s journey—from ancient dye to modern culinary treasure.
        </p>
      </header>

      <ol className="relative border-l border-border/60 pl-6 space-y-8">
        {events.map(({ year, title, description, Icon }, idx) => (
          <li key={idx} className="relative">
            <span className="absolute -left-2 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-saffron-gold shadow" aria-hidden>
              {/* decorative dot */}
            </span>

            <div className="bg-card/70 backdrop-blur-md rounded-xl border border-white/20 p-5 hover-scale">
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5 rounded-md p-2 bg-gradient-card border border-crocus-light/30">
                  <Icon className="h-5 w-5 text-crocus-light" aria-hidden />
                </div>
                <article className="flex-1">
                  <header>
                    <time className="text-xs uppercase tracking-wide text-muted-foreground">
                      {year}
                    </time>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{title}</h3>
                  </header>
                  <p className="text-muted-foreground mt-1 leading-relaxed">{description}</p>
                </article>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
