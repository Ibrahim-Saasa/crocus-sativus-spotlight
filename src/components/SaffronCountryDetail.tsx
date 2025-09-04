import { X, MapPin, Users, Calendar, Thermometer, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import iranSaffron from "@/assets/iran-saffron.jpg";
import kashmirSaffron from "@/assets/kashmir-saffron.jpg";
import spainSaffron from "@/assets/spain-saffron.jpg";
import greeceSaffron from "@/assets/greece-saffron.jpg";
import moroccoSaffron from "@/assets/morocco-saffron.jpg";
import franceSaffron from "@/assets/france-saffron.jpg";
import italySaffron from "@/assets/italy-saffron.jpg";
import afghanistanSaffron from "@/assets/afghanistan-saffron.jpg";

interface CountryDetailProps {
  country: {
    iso: string;
    name: string;
    production: string;
    fact: string;
    coordinates: [number, number];
  } | null;
  onClose: () => void;
}

const countryDetails = {
  "IRN": {
    image: iranSaffron,
    climate: "Semi-arid continental climate",
    harvestSeason: "Late October to November",
    employmentStats: "Over 200,000 farmers involved",
    quality: "ISO 3632 Grade I",
    exportValue: "$1.2 billion annually",
    regions: "Khorasan Razavi, South Khorasan, Kerman",
    harvestingMethod: "Hand-picked at dawn, traditional family farming",
    uniqueFeatures: [
      "World's largest producer with 90% market share",
      "Cultivation dates back over 3,000 years",
      "Each flower yields only 3 stigmas",
      "Requires 150-200 flowers for 1g of saffron"
    ],
    challenges: "Water scarcity, labor-intensive harvesting, market volatility"
  },
  "IND": {
    image: kashmirSaffron,
    climate: "Temperate continental climate",
    harvestSeason: "October to November",
    employmentStats: "40,000+ families dependent",
    quality: "Kashmiri saffron - Premium grade",
    exportValue: "$15 million annually",
    regions: "Pampore, Kishtwar, Budgam districts",
    harvestingMethod: "Traditional hand harvesting, family cooperatives",
    uniqueFeatures: [
      "Grown at 1,600-1,800m altitude",
      "Longest stigma length in the world",
      "Rich in crocin and safranal compounds",
      "GI (Geographical Indication) protected"
    ],
    challenges: "Climate change, urbanization, younger generation migration"
  },
  "ESP": {
    image: spainSaffron,
    climate: "Continental Mediterranean climate",
    harvestSeason: "Late October to early November",
    employmentStats: "3,000+ farmers involved",
    quality: "Azafrán de La Mancha DOP",
    exportValue: "$12 million annually",
    regions: "Castilla-La Mancha, Albacete, Toledo",
    harvestingMethod: "Traditional dawn harvesting, family operations",
    uniqueFeatures: [
      "Protected Designation of Origin status",
      "Second oldest saffron tradition in Europe",
      "High crocin content for intense flavor",
      "Sustainable farming practices"
    ],
    challenges: "Aging farmer population, competition from imports, mechanization needs"
  },
  "GRC": {
    image: greeceSaffron,
    climate: "Mediterranean continental climate",
    harvestSeason: "Mid-October to November",
    employmentStats: "1,200+ cooperative members",
    quality: "Krokos Kozanis PDO",
    exportValue: "$8 million annually",
    regions: "Kozani prefecture, Western Macedonia",
    harvestingMethod: "Cooperative-based harvesting, traditional techniques",
    uniqueFeatures: [
      "Cultivated for over 300 years in region",
      "PDO certification since 1999",
      "High altitude cultivation (600-1000m)",
      "Unique terroir characteristics"
    ],
    challenges: "Limited production area, market competition, weather dependency"
  },
  "MAR": {
    image: moroccoSaffron,
    climate: "Semi-arid Mediterranean climate",
    harvestSeason: "October to November",
    employmentStats: "2,000+ families involved",
    quality: "Taliouine saffron - Premium grade",
    exportValue: "$4 million annually",
    regions: "Taliouine, Atlas Mountains region",
    harvestingMethod: "Traditional Berber harvesting techniques, cooperative farming",
    uniqueFeatures: [
      "Grown at 1,200-1,800m altitude in Atlas Mountains",
      "Cultivated by Berber communities for centuries",
      "Organic farming practices in mountainous terrain",
      "Unique terroir influenced by mountain climate"
    ],
    challenges: "Water scarcity, limited arable land, competition from imports"
  },
  "FRA": {
    image: franceSaffron,
    climate: "Continental Mediterranean climate",
    harvestSeason: "Late October to November",
    employmentStats: "150+ artisan producers",
    quality: "Safran du Quercy - Artisan grade",
    exportValue: "$2 million annually",
    regions: "Quercy, Lot department, Occitanie",
    harvestingMethod: "Artisan family farming, traditional French techniques",
    uniqueFeatures: [
      "Revival of medieval saffron cultivation tradition",
      "Artisan production with high quality standards",
      "Protected regional product certification",
      "Sustainable farming practices"
    ],
    challenges: "Small scale production, high labor costs, limited market awareness"
  },
  "ITA": {
    image: italySaffron,
    climate: "Continental mountain climate",
    harvestSeason: "Late October to November",
    employmentStats: "300+ family producers",
    quality: "Zafferano dell'Aquila DOP",
    exportValue: "$3 million annually",
    regions: "L'Aquila province, Abruzzo, Navelli plain",
    harvestingMethod: "Traditional family farming, small-scale cooperative harvesting",
    uniqueFeatures: [
      "Most expensive saffron in the world by weight",
      "DOP (Protected Designation of Origin) status",
      "Grown in unique high-altitude karst plateau",
      "Medieval cultivation tradition dating to 13th century"
    ],
    challenges: "Earthquake recovery, aging population, limited production area"
  },
  "AFG": {
    image: afghanistanSaffron,
    climate: "Continental arid climate",
    harvestSeason: "October to November",
    employmentStats: "30,000+ farmers involved",
    quality: "Herat saffron - ISO Grade I",
    exportValue: "$25 million annually",
    regions: "Herat, Farah, Ghor provinces",
    harvestingMethod: "Traditional irrigation farming, family-based harvesting",
    uniqueFeatures: [
      "Second largest producer globally",
      "High crocin content rivaling Iranian saffron",
      "Alternative crop replacing opium poppy cultivation",
      "Women-led processing cooperatives"
    ],
    challenges: "Political instability, limited export infrastructure, market access"
  }
};

const SaffronCountryDetail = ({ country, onClose }: CountryDetailProps) => {
  if (!country) return null;

  const details = countryDetails[country.iso as keyof typeof countryDetails];
  if (!details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-glow bg-gradient-card border-crocus-light/30">
        <CardContent className="p-0">
          {/* Header with Image */}
          <div className="relative">
            <img 
              src={details.image} 
              alt={`Saffron farming in ${country.name}`}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-3xl font-bold mb-2">{country.name}</h2>
              <p className="text-xl text-saffron-light">{country.production}</p>
            </div>
          </div>

          <div className="p-8">
            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-crocus-light mb-4">Saffron Cultivation Overview</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {country.fact}
              </p>
            </div>

            {/* Key Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-card/30 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Thermometer className="h-5 w-5 text-saffron-gold" />
                  <h4 className="font-semibold text-crocus-light">Climate</h4>
                </div>
                <p className="text-muted-foreground">{details.climate}</p>
              </div>

              <div className="bg-card/30 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-saffron-gold" />
                  <h4 className="font-semibold text-crocus-light">Harvest Season</h4>
                </div>
                <p className="text-muted-foreground">{details.harvestSeason}</p>
              </div>

              <div className="bg-card/30 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-saffron-gold" />
                  <h4 className="font-semibold text-crocus-light">Employment</h4>
                </div>
                <p className="text-muted-foreground">{details.employmentStats}</p>
              </div>

              <div className="bg-card/30 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-saffron-gold" />
                  <h4 className="font-semibold text-crocus-light">Main Regions</h4>
                </div>
                <p className="text-muted-foreground">{details.regions}</p>
              </div>

              <div className="bg-card/30 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Droplets className="h-5 w-5 text-saffron-gold" />
                  <h4 className="font-semibold text-crocus-light">Quality Grade</h4>
                </div>
                <p className="text-muted-foreground">{details.quality}</p>
              </div>

              <div className="bg-card/30 rounded-lg p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 bg-saffron-gold rounded-full" />
                  <h4 className="font-semibold text-crocus-light">Export Value</h4>
                </div>
                <p className="text-muted-foreground">{details.exportValue}</p>
              </div>
            </div>

            {/* Unique Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-crocus-light mb-4">Unique Features</h3>
              <ul className="space-y-3">
                {details.uniqueFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-saffron-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Harvesting Methods */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-crocus-light mb-4">Harvesting Methods</h3>
              <p className="text-muted-foreground leading-relaxed">
                {details.harvestingMethod}
              </p>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-semibold text-crocus-light mb-4">Current Challenges</h3>
              <p className="text-muted-foreground leading-relaxed">
                {details.challenges}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaffronCountryDetail;