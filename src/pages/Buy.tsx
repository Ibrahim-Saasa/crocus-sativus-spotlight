import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, MapPin, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  origin: string;
  price: number;
  unit: string;
  rating: number;
  reviews: number;
  description: string;
  category: "saffron" | "accessory" | "food";
  grade?: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Premium Negin Saffron",
    origin: "Iran",
    price: 18.99,
    unit: "1g",
    rating: 4.9,
    reviews: 234,
    description: "The highest grade of Iranian saffron with long, deep red threads and intense aroma.",
    category: "saffron",
    grade: "Negin",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Kashmiri Mongra Saffron",
    origin: "India",
    price: 24.99,
    unit: "1g",
    rating: 4.8,
    reviews: 156,
    description: "Rare Kashmiri Mongra grade saffron, hand-picked from the valleys of Kashmir.",
    category: "saffron",
    grade: "Mongra",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    badge: "Rare",
  },
  {
    id: "3",
    name: "Spanish La Mancha Saffron",
    origin: "Spain",
    price: 14.99,
    unit: "1g",
    rating: 4.7,
    reviews: 189,
    description: "D.O. La Mancha certified saffron with a distinctive earthy flavor and deep color.",
    category: "saffron",
    grade: "Coupé",
    image: "https://images.unsplash.com/photo-1599909631715-37c0418c6cd0?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Greek Red Saffron",
    origin: "Greece",
    price: 16.99,
    unit: "1g",
    rating: 4.6,
    reviews: 98,
    description: "PDO Kozani saffron from the Macedonian region, known for its strong coloring power.",
    category: "saffron",
    grade: "Category I",
    image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Afghan Premium Saffron",
    origin: "Afghanistan",
    price: 15.99,
    unit: "1g",
    rating: 4.7,
    reviews: 112,
    description: "Award-winning Afghan saffron from Herat province with exceptional flavor profile.",
    category: "saffron",
    grade: "Super Negin",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    badge: "Award Winner",
  },
  {
    id: "6",
    name: "Moroccan Taliouine Saffron",
    origin: "Morocco",
    price: 13.99,
    unit: "1g",
    rating: 4.5,
    reviews: 76,
    description: "Hand-harvested saffron from the Taliouine region, the saffron capital of Morocco.",
    category: "saffron",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
  },
  {
    id: "7",
    name: "Saffron Infused Honey",
    origin: "Iran",
    price: 12.99,
    unit: "250ml",
    rating: 4.8,
    reviews: 203,
    description: "Pure wildflower honey infused with premium saffron threads. Perfect for tea and desserts.",
    category: "food",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop",
    badge: "Popular",
  },
  {
    id: "8",
    name: "Saffron Tea Blend",
    origin: "India",
    price: 9.99,
    unit: "50g",
    rating: 4.6,
    reviews: 145,
    description: "A luxurious blend of green tea, cardamom, and genuine saffron threads.",
    category: "food",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
  },
  {
    id: "9",
    name: "Ceramic Saffron Mortar & Pestle",
    origin: "Spain",
    price: 29.99,
    unit: "1 set",
    rating: 4.9,
    reviews: 87,
    description: "Handcrafted ceramic mortar and pestle designed specifically for grinding saffron threads.",
    category: "accessory",
    image: "https://images.unsplash.com/photo-1585837575652-267c041d77d4?w=400&h=400&fit=crop",
  },
  {
    id: "10",
    name: "Saffron Storage Tin Set",
    origin: "Italy",
    price: 19.99,
    unit: "3 tins",
    rating: 4.7,
    reviews: 64,
    description: "Airtight, light-blocking tins to preserve saffron freshness and potency for months.",
    category: "accessory",
    image: "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?w=400&h=400&fit=crop",
  },
  {
    id: "11",
    name: "Saffron Rice Seasoning",
    origin: "Iran",
    price: 7.99,
    unit: "30g",
    rating: 4.5,
    reviews: 178,
    description: "Pre-mixed saffron seasoning with cumin and turmeric, perfect for paella and biryani.",
    category: "food",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop",
  },
  {
    id: "12",
    name: "Italian Sardinian Saffron",
    origin: "Italy",
    price: 22.99,
    unit: "1g",
    rating: 4.8,
    reviews: 54,
    description: "Prized DOP San Gavino saffron from Sardinia, with an unmistakable floral bouquet.",
    category: "saffron",
    grade: "DOP",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop",
    badge: "Limited",
  },
];

type Category = "all" | "saffron" | "food" | "accessory";

const Buy = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All Products" },
    { key: "saffron", label: "Saffron" },
    { key: "food", label: "Food & Drink" },
    { key: "accessory", label: "Accessories" },
  ];

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--saffron-gold)/0.12),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            <ShoppingCart className="w-3 h-3 mr-1" />
            Shop Collection
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-[hsl(var(--saffron-light))] bg-clip-text text-transparent">
            The World's Finest Saffron
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium saffron sourced directly from the best growing regions across the globe, along with curated saffron-infused products.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.key)}
              className={activeCategory === cat.key
                ? "bg-accent text-accent-foreground hover:bg-accent/90"
                : "border-border text-muted-foreground hover:text-foreground"}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Card
              key={product.id}
              className="group bg-card border-border overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(var(--saffron-gold)/0.1)]"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
                    {product.badge}
                  </Badge>
                )}
                {product.grade && (
                  <Badge variant="outline" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground text-xs border-border">
                    {product.grade}
                  </Badge>
                )}
              </div>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {product.origin}
                </div>
                <h3 className="font-semibold text-foreground leading-tight line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div>
                    <span className="text-lg font-bold text-foreground">${product.price}</span>
                    <span className="text-xs text-muted-foreground ml-1">/ {product.unit}</span>
                  </div>
                  <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 text-center py-12 border border-dashed border-border rounded-2xl">
          <p className="text-muted-foreground text-sm">
            🛒 More products and direct purchasing coming soon. Stay tuned!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buy;
