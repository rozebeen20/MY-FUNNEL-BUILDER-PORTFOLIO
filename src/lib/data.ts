export interface Product {
  slug: string
  name: string
  price: number
  collection: string
  short: string
  description: string
  image: string
  gallery: string[]
  finishes: string[]
  benefits: { title: string; copy: string }[]
  details: { label: string; value: string }[]
  rating: number
  reviews: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'signature-gold-table-lamp',
    name: 'Signature Gold Table Lamp',
    price: 149,
    collection: 'Signature Collection',
    short: 'Warm, sculptural light for everyday spaces.',
    description:
      'A sculptural lighting piece designed to add warmth, depth, and understated luxury to your space. Hand-finished in warm brass tones with a linen shade that softens the glow.',
    image: '/assets/product-table-lamp-iPeHVF87.jpg',
    gallery: [
      '/assets/product-table-lamp-iPeHVF87.jpg',
      '/assets/room-living-BDLOeeMe.jpg',
      '/assets/atm-warm-B7eBTNZM.jpg',
    ],
    finishes: ['Brass', 'Matte Black', 'White'],
    benefits: [
      { title: 'Modern Design', copy: 'A sculptural silhouette that anchors a shelf, sideboard or table.' },
      { title: 'Premium Materials', copy: 'Solid brass details with a hand-finished linen shade.' },
      { title: 'Warm Ambient Light', copy: 'A soft, golden glow designed for evenings and calm mornings.' },
    ],
    details: [
      { label: 'Material', value: 'Brass, linen shade' },
      { label: 'Dimensions', value: 'H 52cm × Base 18cm' },
      { label: 'Finish', value: 'Brass / Matte Black / White' },
      { label: 'Dimming', value: 'In-line dimmer included' },
    ],
    rating: 4.9,
    reviews: 'Sample rating — portfolio demo, not a verified review.',
  },
  {
    slug: 'noir-arc-floor-lamp',
    name: 'Noir Arc Floor Lamp',
    price: 329,
    collection: 'Noir Collection',
    short: 'A dramatic sweep of brass and shadow.',
    description:
      'A statement arc in blackened steel and brushed brass, built to anchor a room and hold attention. Reaches high above seating for sculptural, diffused light.',
    image: '/assets/product-arc-lamp-RlYNwts8.jpg',
    gallery: [
      '/assets/product-arc-lamp-RlYNwts8.jpg',
      '/assets/style-luxury-Dl9n-Mgs.jpg',
      '/assets/atm-dramatic-wVm--4mL.jpg',
    ],
    finishes: ['Brass', 'Matte Black'],
    benefits: [
      { title: 'Statement Presence', copy: 'A dramatic arc that defines its corner of the room.' },
      { title: 'Premium Materials', copy: 'Blackened steel with brushed brass accents.' },
      { title: 'Designed for Evenings', copy: 'Broad, softened light that settles a room.' },
    ],
    details: [
      { label: 'Material', value: 'Blackened steel, brass' },
      { label: 'Dimensions', value: 'H 220cm × Base 30cm' },
      { label: 'Finish', value: 'Brass / Matte Black' },
      { label: 'Bulb', value: 'E27 LED compatible' },
    ],
    rating: 4.8,
    reviews: 'Sample rating — portfolio demo, not a verified review.',
  },
  {
    slug: 'luna-glass-pendant',
    name: 'Luna Glass Pendant',
    price: 219,
    collection: 'Luna Collection',
    short: 'Soft glass glow for tables and entryways.',
    description:
      'Hand-finished opal glass diffuses a soft, generous light — quiet enough to layer, refined enough to lead. Suspended over tables, counters or an entryway.',
    image: '/assets/product-pendant-D9DOvtLA.jpg',
    gallery: [
      '/assets/product-pendant-D9DOvtLA.jpg',
      '/assets/room-dining-DsjIWzv0.jpg',
      '/assets/atm-elegant-BNvHtkT4.jpg',
    ],
    finishes: ['Brass', 'Matte Black'],
    benefits: [
      { title: 'Soft Glass Glow', copy: 'Hand-finished opal glass diffuses light evenly.' },
      { title: 'Layered or Leading', copy: 'Quiet enough to layer, refined enough to lead.' },
      { title: 'Warm Materiality', copy: 'Brass details and a frosted glass shade.' },
    ],
    details: [
      { label: 'Material', value: 'Opal glass, brass' },
      { label: 'Dimensions', value: 'Ø 35cm, drop to 120cm' },
      { label: 'Finish', value: 'Brass / Matte Black' },
      { label: 'Bulb', value: 'E27 LED compatible' },
    ],
    rating: 4.9,
    reviews: 'Sample rating — portfolio demo, not a verified review.',
  },
]

export function getProduct(slug?: string): Product | null {
  return PRODUCTS.find((p) => p.slug === slug) ?? null
}

export const formatPrice = (n: number): string =>
  `$${n.toFixed(2).replace(/\.00$/, '')}`

export interface QuizOption {
  value: string
  title: string
  description: string
  image: string
}

export interface QuizQuestion {
  key: string
  label: string
  question: string
  subheading: string
  options: QuizOption[]
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    key: 'location',
    label: 'Location',
    question: 'Where are you lighting?',
    subheading: 'Choose the space you want to transform.',
    options: [
      { value: 'Living Room', title: 'Living Room', description: 'For everyday comfort and style', image: '/assets/room-living-BDLOeeMe.jpg' },
      { value: 'Bedroom', title: 'Bedroom', description: 'For a calm and relaxing atmosphere', image: '/assets/room-bedroom-Coi1PNJA.jpg' },
      { value: 'Dining Room', title: 'Dining Room', description: 'For memorable gatherings', image: '/assets/room-dining-DsjIWzv0.jpg' },
      { value: 'Home Office', title: 'Home Office', description: 'For focus and productivity', image: '/assets/room-office-DC9j_s0k.jpg' },
      { value: 'Entryway', title: 'Entryway', description: 'For a warm and welcoming first impression', image: '/assets/room-entryway-BKHF1VnJ.jpg' },
    ],
  },
  {
    key: 'style',
    label: 'Style',
    question: "What's your interior style?",
    subheading: 'Pick the language your home already speaks.',
    options: [
      { value: 'Modern', title: 'Modern', description: 'Contemporary architectural lines', image: '/assets/style-modern-BVVEcaGQ.jpg' },
      { value: 'Minimalist', title: 'Minimalist', description: 'Clean, neutral and uncluttered', image: '/assets/style-minimalist-5YM85Yo6.jpg' },
      { value: 'Classic', title: 'Classic', description: 'Elegant and traditional', image: '/assets/style-classic-CCjXBHw3.jpg' },
      { value: 'Contemporary', title: 'Contemporary', description: 'Sophisticated and current', image: '/assets/style-contemporary-Bb15a22k.jpg' },
      { value: 'Luxury / Glamorous', title: 'Luxury / Glamorous', description: 'Marble, brass and drama', image: '/assets/style-luxury-Dl9n-Mgs.jpg' },
    ],
  },
  {
    key: 'atmosphere',
    label: 'Atmosphere',
    question: 'What atmosphere do you want?',
    subheading: 'Light sets the mood before anything else does.',
    options: [
      { value: 'Warm & Cozy', title: 'Warm & Cozy', description: 'Amber light, softened evenings', image: '/assets/atm-warm-B7eBTNZM.jpg' },
      { value: 'Elegant & Sophisticated', title: 'Elegant & Sophisticated', description: 'Refined and composed', image: '/assets/atm-elegant-BNvHtkT4.jpg' },
      { value: 'Bright & Energizing', title: 'Bright & Energizing', description: 'Open, airy and awake', image: '/assets/atm-bright-3WEHPfJ9.jpg' },
      { value: 'Dramatic & Statement-Making', title: 'Dramatic & Statement-Making', description: 'Deep contrast, bold presence', image: '/assets/atm-dramatic-wVm--4mL.jpg' },
    ],
  },
  {
    key: 'look',
    label: 'Look',
    question: "What's your preferred look?",
    subheading: 'How much should the fixture itself speak?',
    options: [
      { value: 'Subtle', title: 'Subtle', description: 'Understated and quiet', image: '/assets/look-subtle-BuZuZTkz.jpg' },
      { value: 'Balanced', title: 'Balanced', description: 'Layered but restrained', image: '/assets/look-balanced-DisXuxfj.jpg' },
      { value: 'Bold', title: 'Bold', description: 'Sculptural and confident', image: '/assets/look-bold-B8jyfZEu.jpg' },
      { value: 'Showstopping', title: 'Showstopping', description: 'Unmistakably the centrepiece', image: '/assets/look-showstopping-C_RCo3Nk.jpg' },
    ],
  },
]

export type Answers = Record<string, string>

const RECOMMENDATION_RULES: { slug: string; match: Record<string, string[]> }[] = [
  {
    slug: 'noir-arc-floor-lamp',
    match: {
      location: ['Living Room', 'Home Office'],
      style: ['Luxury / Glamorous', 'Contemporary'],
      atmosphere: ['Dramatic & Statement-Making'],
      look: ['Bold', 'Showstopping'],
    },
  },
  {
    slug: 'luna-glass-pendant',
    match: {
      location: ['Dining Room', 'Entryway'],
      style: ['Classic', 'Contemporary'],
      atmosphere: ['Elegant & Sophisticated', 'Bright & Energizing'],
      look: ['Balanced'],
    },
  },
  {
    slug: 'signature-gold-table-lamp',
    match: {
      location: ['Living Room', 'Bedroom'],
      style: ['Modern', 'Minimalist', 'Classic'],
      atmosphere: ['Warm & Cozy', 'Elegant & Sophisticated'],
      look: ['Subtle', 'Balanced'],
    },
  },
]

export function recommendMatch(answers: Answers): Product {
  let bestScore = -1
  let bestSlug = RECOMMENDATION_RULES[0].slug
  for (const rule of RECOMMENDATION_RULES) {
    let score = 0
    for (const [key, values] of Object.entries(rule.match)) {
      if (values.includes(answers[key])) score += 1
    }
    if (score > bestScore) {
      bestScore = score
      bestSlug = rule.slug
    }
  }
  return getProduct(bestSlug)!
}

export const NAV_ITEMS = [
  { to: '/', label: 'Home', exact: true },
  { to: '/pre-sale', label: 'Pre-Sale', exact: false },
  { to: '/quiz', label: 'Quiz', exact: false },
  { to: '/shop', label: 'Shop', exact: false },
  { to: '/sample-builder', label: 'Sample Builder', exact: false },
  { to: '/case-study', label: 'CRO Case Study', exact: false },
]

export const FOOTER_FUNNEL = [
  { to: '/ad-creative', label: 'Ad Creative' },
  { to: '/pre-sale', label: 'Pre-Sale Page' },
  { to: '/quiz', label: 'Lighting Quiz' },
  { to: '/match', label: 'Personalized Match' },
  { to: '/checkout', label: 'Cart & Checkout' },
]

export const FOOTER_STUDIO = [
  { to: '/case-study', label: 'Case Study' },
  { to: '/method', label: 'Method' },
  { to: '/work-with-me', label: 'Work With Me' },
]

export const ROOM_IMAGES = [
  { title: 'Living Room', image: '/assets/room-living-BDLOeeMe.jpg' },
  { title: 'Bedroom', image: '/assets/room-bedroom-Coi1PNJA.jpg' },
  { title: 'Dining Room', image: '/assets/room-dining-DsjIWzv0.jpg' },
  { title: 'Home Office', image: '/assets/room-office-DC9j_s0k.jpg' },
  { title: 'Entryway', image: '/assets/room-entryway-BKHF1VnJ.jpg' },
]

export const AD_CONCEPTS = [
  {
    id: 'Ad 01',
    title: 'Your Room Deserves Better Light.',
    copy: 'Most rooms are lit by accident. A single considered piece changes the whole feeling of a space.',
    image: '/assets/ad-01-CVF0NlLA.jpg',
  },
  {
    id: 'Ad 02',
    title: 'Find the Light That Fits Your Space.',
    copy: 'Answer four questions and see the piece that suits your room, your style and your mood.',
    image: '/assets/ad-02-TtvF0FXT.jpg',
  },
  {
    id: 'Ad 03',
    title: 'Luxury Begins With Atmosphere.',
    copy: 'Before the furniture, before the art — light is what makes a home feel expensive.',
    image: '/assets/ad-03-t75aAq8D.jpg',
  },
]

export const FALLBACK_ORDER_ID = '#LI-10023'