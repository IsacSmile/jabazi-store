// Products Data for Jabazi Store

export const CATEGORIES = [
  {
    id: "all",
    name: "All Collection",
    shortName: "All",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    count: 8
  },
  {
    id: "premium-attars",
    name: "Premium Attars",
    shortName: "Premium Attars",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80",
    count: 4
  },
  {
    id: "oud",
    name: "Oud",
    shortName: "Oud",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80",
    count: 2
  },
  {
    id: "floral",
    name: "Floral",
    shortName: "Floral",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80",
    count: 1
  },
  {
    id: "woody",
    name: "Woody",
    shortName: "Woody",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    count: 2
  },
  {
    id: "fresh",
    name: "Fresh",
    shortName: "Fresh",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
    count: 1
  },
  {
    id: "musk",
    name: "Musk",
    shortName: "Musk",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=600&q=80",
    count: 2
  }
];

export const PRODUCTS = [
  {
    id: "royal-oud",
    name: "Royal Oud",
    category: "oud",
    categoryLabel: "Oud",
    isPremium: true,
    price: 120,
    originalPrice: 150,
    rating: 4.9,
    reviewsCount: 142,
    shortDescription: "Deep, mystical Cambodian agarwood infused with warm amber and rare oriental spices.",
    fullDescription: "Royal Oud is our signature creation — a masterpiece of ancient perfumery. Sourced from 50-year-old wild agarwood trees in Cambodia, this oil matures over months in sandalwood casks to develop its opulent, smoky-sweet resonance.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#2A1810",
    accentColor: "#C5A059",
    notes: {
      top: ["Cambodian Oud", "Cinnamon", "Cardamom"],
      heart: ["Amber Resin", "Rose Petals", "Leather"],
      base: ["Aged Agarwood", "Mysore Sandalwood", "Dark Vanilla"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  },
  {
    id: "white-musk",
    name: "White Musk",
    category: "musk",
    categoryLabel: "Musk",
    isPremium: false,
    price: 65,
    originalPrice: 80,
    rating: 4.8,
    reviewsCount: 98,
    shortDescription: "Pure, velvety white musk with delicate hints of powdery jasmine and soft lily.",
    fullDescription: "An ethereal and luminous fragrance. White Musk wraps the wearer in an aura of pristine warmth, innocence, and timeless elegance. Perfectly suited for daily luxury.",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#F4F0EA",
    accentColor: "#D4AF37",
    notes: {
      top: ["Pure White Musk", "Morning Dew"],
      heart: ["Jasmine Sambac", "White Lily"],
      base: ["Powdery Amber", "Light Cedarwood"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  },
  {
    id: "arabian-rose",
    name: "Arabian Rose",
    category: "floral",
    categoryLabel: "Floral",
    isPremium: true,
    price: 85,
    originalPrice: 105,
    rating: 4.9,
    reviewsCount: 116,
    shortDescription: "Hand-picked Taif roses blended with warm creamy sandalwood and golden saffron.",
    fullDescription: "distilled from thousand-petaled Taif roses collected at dawn in the high mountains. Arabian Rose captures the intense passion of blossoming roses cradled in velvety saffron warmth.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#3D141D",
    accentColor: "#E0909A",
    notes: {
      top: ["Taif Rose", "Saffron Threads"],
      heart: ["Damask Rose", "Geranium"],
      base: ["Mysore Sandalwood", "Wild Honey", "Amber"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  },
  {
    id: "amber-noir",
    name: "Amber Noir",
    category: "woody",
    categoryLabel: "Woody",
    isPremium: true,
    price: 95,
    originalPrice: 120,
    rating: 4.7,
    reviewsCount: 79,
    shortDescription: "Dark resinous amber layered with smoky birch wood and crushed black pepper.",
    fullDescription: "A seductive evening scent crafted around rich fossilized amber. Amber Noir weaves together dark spices, charred woods, and sweet resinous accords for an irresistible presence.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#1A1512",
    accentColor: "#C58B39",
    notes: {
      top: ["Crushed Black Pepper", "Bergamot Essence"],
      heart: ["Dark Amber", "Smoky Birch Wood"],
      base: ["Tonka Bean", "Labdanum", "Patchouli"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  },
  {
    id: "sandal-essence",
    name: "Sandal Essence",
    category: "woody",
    categoryLabel: "Woody",
    isPremium: false,
    price: 78,
    originalPrice: 90,
    rating: 4.9,
    reviewsCount: 165,
    shortDescription: "Creamy, golden sandalwood harvested from ancient groves, aged to silky perfection.",
    fullDescription: "Pure distilled heartwood of Indian Sandalwood. Known for its soothing, meditative properties, Sandal Essence radiates warmth with a subtle milky woodiness that lasts over 24 hours on skin.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#3B2E1E",
    accentColor: "#D4A359",
    notes: {
      top: ["Green Cardamom", "Nutmeg"],
      heart: ["Creamy Sandalwood", "Cedar Bark"],
      base: ["Cashmere Musk", "Golden Amber"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  },
  {
    id: "fresh-citrus",
    name: "Fresh Citrus",
    category: "fresh",
    categoryLabel: "Fresh",
    isPremium: false,
    price: 55,
    originalPrice: 70,
    rating: 4.6,
    reviewsCount: 54,
    shortDescription: "Bright Calabrian bergamot and sparkling neroli with a warm amber-musk anchor.",
    fullDescription: "An invigorating splash of sun-ripened Mediterranean citrus fruits balanced with precious floral neroli and anchored by a light, alcohol-free concentrated oil base.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#1B2A26",
    accentColor: "#5DB889",
    notes: {
      top: ["Calabrian Bergamot", "Sparkling Lemon"],
      heart: ["Neroli Blossom", "Petitgrain"],
      base: ["Haitian Vetiver", "Clean Amber"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  },
  {
    id: "black-oud",
    name: "Black Oud",
    category: "oud",
    categoryLabel: "Oud",
    isPremium: true,
    price: 135,
    originalPrice: 165,
    rating: 5.0,
    reviewsCount: 210,
    shortDescription: "Intense, mysterious black agarwood steeped in dark plum, smoked oak, and patchouli.",
    fullDescription: "Our boldest and most potent elixir. Black Oud combines triple-distilled dark agarwood resin with ripe black plum and vintage oak barrels. Designed for true connoisseurs of oriental perfumery.",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#0D0D0D",
    accentColor: "#A67C42",
    notes: {
      top: ["Black Plum", "Saffron"],
      heart: ["Aged Black Oud", "Smoked Oakwood"],
      base: ["Indonesian Patchouli", "Black Amber"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  },
  {
    id: "vanilla-musk",
    name: "Vanilla Musk",
    category: "musk",
    categoryLabel: "Musk",
    isPremium: false,
    price: 70,
    originalPrice: 85,
    rating: 4.8,
    reviewsCount: 88,
    shortDescription: "Sweet Madagascar vanilla bean harmonized with warm sensual musk and rich cedar.",
    fullDescription: "A comforting gourmet blend of sun-cured Bourbon vanilla beans intertwined with soft skin-musk and delicate benzoin resin. Irresistibly sweet yet grounded and sophisticated.",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    bottleColor: "#2D221C",
    accentColor: "#E0B36E",
    notes: {
      top: ["Madagascar Vanilla Pods"],
      heart: ["Golden Sensual Musk", "Benzoin Resin"],
      base: ["Atlas Cedarwood", "Warm Amber"]
    },
    volume: "12ml Tobera Bottle",
    inStock: true
  }
];

export const DUMMY_INITIAL_ORDERS = [
  {
    id: "JAB-9482",
    date: "2026-09-01",
    totalAmount: 205,
    status: "Delivered",
    shippingAddress: {
      name: "Syed Isac",
      phone: "+91 98765 43210",
      email: "isac@jabazi.com",
      address: "Suite 402, Royal Palms Colony",
      city: "Kochi",
      state: "Kerala",
      pincode: "682001"
    },
    items: [
      {
        id: "royal-oud",
        name: "Royal Oud",
        price: 120,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "arabian-rose",
        name: "Arabian Rose",
        price: 85,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];
