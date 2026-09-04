export interface ProductNote {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductSize {
  name: string;
  price: number;
  badge?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Musk';
  price: number;
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  description: string;
  notes: ProductNote;
  intensity: 'Light' | 'Moderate' | 'Intense' | 'Rich';
  longevity: string;
  origin: string;
  images: string[];
  sizes: ProductSize[];
}

export interface Category {
  id: string;
  name: 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Musk';
  description: string;
  image: string;
  count: number;
  keyNotes: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'royal-oud-sublime',
    name: 'Royal Oud Sublime',
    subtitle: 'Aged Assam Oud & Warm Amber',
    category: 'Woody',
    price: 85,
    rating: 4.9,
    reviewsCount: 42,
    isFeatured: true,
    isBestSeller: true,
    description: 'Extracted from 30-year aged wild Agarwood from Assam, Royal Oud Sublime radiates timeless nobility. Deep resinous undertones intertwine with toasted saffron and velvety smoke.',
    notes: {
      top: ['Toasted Saffron', 'Wild Cardamom'],
      heart: ['Wild Agarwood (Oud)', 'Smoky Myrrh'],
      base: ['Cambodian Resin', 'Soft Cashmere', 'Black Amber']
    },
    intensity: 'Rich',
    longevity: '14 - 18 hours',
    origin: 'Assam, India',
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 85 },
      { name: '6ml', price: 155, badge: 'Popular' },
      { name: '12ml (Tola)', price: 280, badge: 'Best Value' }
    ]
  },
  {
    id: 'taif-rose-absolute',
    name: 'Taif Rose Absolute',
    subtitle: 'Cold-Pressed Arabian Damask Rose',
    category: 'Floral',
    price: 95,
    rating: 5.0,
    reviewsCount: 38,
    isFeatured: true,
    isBestSeller: false,
    description: 'Harvested at dawn in the high-altitude mountain valleys of Taif, this concentrated oil captures the dewy green stems, honeyed petals, and opulent warmth of pure Arabian Damask roses.',
    notes: {
      top: ['Morning Dewdrops', 'Green Violet Leaf'],
      heart: ['Taif Damask Rose Petals', 'Wild Honey'],
      base: ['White Sandalwood', 'Subtle Musk']
    },
    intensity: 'Moderate',
    longevity: '10 - 14 hours',
    origin: 'Taif, Saudi Arabia',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 95 },
      { name: '6ml', price: 175, badge: 'Popular' },
      { name: '12ml (Tola)', price: 320 }
    ]
  },
  {
    id: 'sandal-amber-radiance',
    name: 'Sandal Amber Radiance',
    subtitle: 'Mysore Sandalwood & Fossil Amber',
    category: 'Woody',
    price: 75,
    rating: 4.8,
    reviewsCount: 56,
    isFeatured: true,
    isBestSeller: true,
    description: 'Pure vintage Mysorean Sandalwood distilled in copper degs over traditional wood fires. Infused with warm fossilized golden amber for a buttery, meditative skin scent.',
    notes: {
      top: ['Bergamot Blossom', 'Nutmeg Essence'],
      heart: ['Mysore Sandalwood Heartwood', 'Orris Butter'],
      base: ['Golden Amber Resin', 'Benzoin Siam', 'Vanilla Bean']
    },
    intensity: 'Moderate',
    longevity: '12 - 16 hours',
    origin: 'Kannauj, India',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 75 },
      { name: '6ml', price: 135, badge: 'Popular' },
      { name: '12ml (Tola)', price: 240 }
    ]
  },
  {
    id: 'musk-kashmir-supreme',
    name: 'Musk Kashmir Supreme',
    subtitle: 'Velvety White Musk & Silk Iris',
    category: 'Musk',
    price: 70,
    rating: 4.9,
    reviewsCount: 64,
    isFeatured: true,
    isBestSeller: true,
    description: 'An ethereal, cloud-like botanical musk that melds imperceptibly with your natural body chemistry. Clean, comforting, and quietly seductive with powdery Florentine iris.',
    notes: {
      top: ['White Tea Leaves', 'Cotton Blossom'],
      heart: ['Florentine Iris', 'Rice Powder'],
      base: ['Clean Botanical Musk', 'Cedar Accord', 'Cashmeran']
    },
    intensity: 'Light',
    longevity: '12 - 14 hours',
    origin: 'Kashmir Valley',
    images: [
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 70 },
      { name: '6ml', price: 125, badge: 'Popular' },
      { name: '12ml (Tola)', price: 220 }
    ]
  },
  {
    id: 'saffron-gold-oriental',
    name: 'Saffron Gold Oriental',
    subtitle: 'Kashmiri Mogra Saffron & Labdanum',
    category: 'Oriental',
    price: 90,
    rating: 4.7,
    reviewsCount: 29,
    isFeatured: false,
    isBestSeller: false,
    description: 'Luminous red threads of Kashmiri saffron steeped in warm sweet balsam and dark labdanum. A rich, spicy oriental oil that leaves a shimmering trail of quiet luxury.',
    notes: {
      top: ['Kashmiri Red Saffron', 'Pink Peppercorn'],
      heart: ['Spanish Labdanum', 'Leather Blossom'],
      base: ['Tonka Infusion', 'Incense Smoke', 'Golden Oud']
    },
    intensity: 'Rich',
    longevity: '14 - 16 hours',
    origin: 'Pampore, Kashmir',
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 90 },
      { name: '6ml', price: 165 },
      { name: '12ml (Tola)', price: 300, badge: 'Collector Choice' }
    ]
  },
  {
    id: 'bergamot-solace-fresh',
    name: 'Bergamot Solace',
    subtitle: 'Calabrian Citrus & Green Vetiver',
    category: 'Fresh',
    price: 65,
    rating: 4.8,
    reviewsCount: 31,
    isFeatured: false,
    isBestSeller: false,
    description: 'Sun-drenched Calabrian bergamot zest suspended in crisp Haitian vetiver and crushed grapefruit leaves. Vibrant, uplifting, and crystal clean for warm serene afternoons.',
    notes: {
      top: ['Calabrian Bergamot', 'Grapefruit Zest'],
      heart: ['Crushed Neroli', 'Petitgrain'],
      base: ['Haitian Vetiver Root', 'White Cedar']
    },
    intensity: 'Light',
    longevity: '8 - 10 hours',
    origin: 'Reggio Calabria / Kannauj',
    images: [
      'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 65 },
      { name: '6ml', price: 115, badge: 'Popular' },
      { name: '12ml (Tola)', price: 195 }
    ]
  },
  {
    id: 'jasmine-sambac-nectar',
    name: 'Jasmine Sambac Nectar',
    subtitle: 'Night-Blooming Arabian Jasmine',
    category: 'Floral',
    price: 80,
    rating: 4.9,
    reviewsCount: 47,
    isFeatured: true,
    isBestSeller: false,
    description: 'Hand-picked hand-distilled Motia Jasmine (Jasmine Sambac) blooms. Indulgent, nectarous, and intoxicatingly fresh, resting over a silky sandalwood foundation.',
    notes: {
      top: ['Green Jasmine Buds', 'Mandarin Leaf'],
      heart: ['Night-Blooming Sambac', 'Tuberose Absolute'],
      base: ['Mysore Sandalwood Base', 'Golden Amber']
    },
    intensity: 'Moderate',
    longevity: '10 - 12 hours',
    origin: 'Madurai, India',
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 80 },
      { name: '6ml', price: 145 },
      { name: '12ml (Tola)', price: 260 }
    ]
  },
  {
    id: 'vetiver-imperiale',
    name: 'Vetiver Imperiale',
    subtitle: 'Khus Roots & Clay Mitti Attar',
    category: 'Fresh',
    price: 72,
    rating: 4.9,
    reviewsCount: 52,
    isFeatured: false,
    isBestSeller: true,
    description: 'The ancient art of Mitti Attar combined with wild Khus vetiver roots. Captures the intoxicating aroma of first rain pouring over sun-baked terracotta clay earth.',
    notes: {
      top: ['Rain-soaked Terracotta', 'Wild Khus Root'],
      heart: ['Green Patchouli', 'Earth Bark'],
      base: ['Clean Sandalwood Base', 'Oakmoss']
    },
    intensity: 'Moderate',
    longevity: '12 - 14 hours',
    origin: 'Kannauj, India',
    images: [
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 72 },
      { name: '6ml', price: 130, badge: 'Popular' },
      { name: '12ml (Tola)', price: 230 }
    ]
  },
  {
    id: 'amber-black-wood',
    name: 'Amber Blackwood',
    subtitle: 'Smoky Birch, Amber & Frankincense',
    category: 'Oriental',
    price: 88,
    rating: 4.8,
    reviewsCount: 23,
    isFeatured: false,
    isBestSeller: false,
    description: 'A shadowy, enchanting composition featuring Omani frankincense tears resin, charred birch bark, and dark balsamic amber. Majestic and deeply comforting.',
    notes: {
      top: ['Omani Frankincense Tears', 'Black Pepper'],
      heart: ['Smoky Birch Tar', 'Cinnamon Bark'],
      base: ['Dark Amber Resin', 'Guaiacwood', 'Castoreum Accord']
    },
    intensity: 'Intense',
    longevity: '14 - 18 hours',
    origin: 'Salalah, Oman',
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 88 },
      { name: '6ml', price: 160 },
      { name: '12ml (Tola)', price: 290 }
    ]
  },
  {
    id: 'white-gazelle-musk',
    name: 'White Gazelle Musk',
    subtitle: 'Soft Cashmere & Botanical Musk',
    category: 'Musk',
    price: 78,
    rating: 4.9,
    reviewsCount: 41,
    isFeatured: false,
    isBestSeller: false,
    description: 'A silky blend of clean botanical white musks woven with soft ambergris accord and creamy almond milk notes. Delicate, intimate, and persistent.',
    notes: {
      top: ['Almond Milk Blossom', 'White Lily'],
      heart: ['Botanical Musk', 'Cashmeran Wood'],
      base: ['White Ambergris Accord', 'Clean Cedar']
    },
    intensity: 'Moderate',
    longevity: '12 - 16 hours',
    origin: 'Kannauj, India',
    images: [
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: [
      { name: '3ml', price: 78 },
      { name: '6ml', price: 140, badge: 'Popular' },
      { name: '12ml (Tola)', price: 250 }
    ]
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'floral',
    name: 'Floral',
    description: 'Dewy petal extracts, night-blooming jasmines, and high-mountain Taif roses.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    count: 2,
    keyNotes: ['Taif Rose', 'Jasmine Sambac', 'Tuberose', 'Violet']
  },
  {
    id: 'woody',
    name: 'Woody',
    description: 'Rare aged Assam Agarwood, creamy Mysore Sandalwood, and cedar roots.',
    image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800',
    count: 2,
    keyNotes: ['Assam Oud', 'Mysore Sandalwood', 'Cedarwood', 'Cashmere']
  },
  {
    id: 'oriental',
    name: 'Oriental',
    description: 'Rich resinous labdanum, Kashmiri saffron threads, and warm balsamic ambers.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800',
    count: 2,
    keyNotes: ['Kashmiri Saffron', 'Frankincense', 'Smoky Birch', 'Labdanum']
  },
  {
    id: 'fresh',
    name: 'Fresh',
    description: 'Zesty sun-drenched bergamot, rainwater terracotta earth, and green khus roots.',
    image: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800',
    count: 2,
    keyNotes: ['Calabrian Bergamot', 'Mitti Attar', 'Wild Khus', 'Neroli']
  },
  {
    id: 'musk',
    name: 'Musk',
    description: 'Velvety clean white musks, Florentine iris powder, and silky cashmeran clouds.',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800',
    count: 2,
    keyNotes: ['Botanical White Musk', 'Florentine Iris', 'Cotton Blossom', 'Ambergris']
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'JBZ-948201',
    date: '2026-08-28',
    status: 'Delivered' as const,
    items: [
      {
        id: 'royal-oud-sublime',
        name: 'Royal Oud Sublime',
        size: '6ml',
        quantity: 1,
        price: 155,
        image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 'musk-kashmir-supreme',
        name: 'Musk Kashmir Supreme',
        size: '3ml',
        quantity: 1,
        price: 70,
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800'
      }
    ],
    subtotal: 225,
    shipping: 0,
    tax: 0,
    total: 225,
    shippingAddress: {
      name: 'Faiz Ahmed',
      address: '42 Sanctuary Avenue, Suite 4B',
      city: 'Dubai',
      zip: '00000',
      country: 'United Arab Emirates'
    }
  },
  {
    id: 'JBZ-730194',
    date: '2026-08-12',
    status: 'Delivered' as const,
    items: [
      {
        id: 'sandal-amber-radiance',
        name: 'Sandal Amber Radiance',
        size: '12ml (Tola)',
        quantity: 1,
        price: 240,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800'
      }
    ],
    subtotal: 240,
    shipping: 0,
    tax: 0,
    total: 240,
    shippingAddress: {
      name: 'Faiz Ahmed',
      address: '42 Sanctuary Avenue, Suite 4B',
      city: 'Dubai',
      zip: '00000',
      country: 'United Arab Emirates'
    }
  }
];
