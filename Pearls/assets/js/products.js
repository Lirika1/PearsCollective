/* Pearls Collective — product catalogue
   Images are the brand's own photography from @pearlscollective. */
const PRODUCTS = [
  {
    id: "celeste-bridal-set",
    name: "Céleste Bridal Set",
    price: 85,
    category: "bridal",
    isNew: true,
    imgs: ["assets/img/hi-p01-b.jpg", "assets/img/hi-p01-a.jpg"],
    pos: "50% 45%",
    desc: "A complete bridal parure — cascading crystal necklace, matching drop earrings, a delicate tennis bracelet and a solitaire ring, presented in our signature emerald keepsake box.",
    details: ["Rhodium-plated brass with cubic zirconia", "Necklace, earrings, bracelet & ring included", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"],
    variants: null
  },
  {
    id: "celeste-cascade-necklace",
    name: "Céleste Cascade Necklace",
    price: 48,
    category: "necklaces",
    isNew: false,
    imgs: ["assets/img/hi-p01-a.jpg", "assets/img/hi-p01-b.jpg"],
    pos: "50% 40%",
    desc: "A fluid double-row crystal necklace that falls into a graceful Y-drop — designed to catch the light with every movement, from the first look to the last dance.",
    details: ["Rhodium-plated brass with cubic zirconia", "Adjustable length 38–44 cm", "Hypoallergenic · nickel free"],
    variants: null
  },
  {
    id: "aurora-statement-earrings",
    name: "Aurora Statement Earrings",
    price: 32,
    category: "earrings",
    isNew: true,
    imgs: ["assets/img/hi-p03-a.jpg"],
    pos: "50% 55%",
    desc: "Sculptural swirls of tapered baguette crystals with a pavé heart — a statement earring that frames the face like light itself.",
    details: ["Tapered baguette & pavé crystals", "Butterfly push-back closure", "Length approx. 4 cm", "Hypoallergenic · nickel free"],
    variants: null
  },
  {
    id: "vienna-baguette-set",
    name: "Vienna Baguette Set",
    price: 78,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/hi-p04-c.jpg", "assets/img/hi-p04-f.jpg"],
    pos: "50% 45%",
    desc: "Scattered baguette and marquise stones on a fine articulated band — a quietly modern set for the bride who loves clean lines.",
    details: ["Necklace, drop earrings, ring & bracelet", "Mixed baguette, marquise & round crystals", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"],
    variants: null
  },
  {
    id: "vienna-baguette-necklace",
    name: "Vienna Baguette Necklace",
    price: 42,
    category: "necklaces",
    isNew: false,
    imgs: ["assets/img/hi-p04-f.jpg", "assets/img/hi-p04-c.jpg"],
    pos: "50% 20%",
    desc: "A fine choker-length necklace of alternating baguette clusters and marquise accents — worn alone or layered for the evening.",
    details: ["Choker length, adjustable 36–42 cm", "Baguette & marquise crystals", "Hypoallergenic · nickel free"],
    variants: null
  },
  {
    id: "flora-marquise-ring",
    name: "Flora Marquise Ring",
    price: 24,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/hi-p05-a.jpg"],
    pos: "50% 45%",
    desc: "Marquise-cut petals gathered into three delicate blooms that wrap softly across the finger — our most-loved something-sparkling.",
    details: ["Marquise-cut cubic zirconia florals", "Open band · lightly adjustable", "Hypoallergenic · nickel free"],
    variants: [{ label: "Size", options: ["S (16 mm)", "M (17 mm)", "L (18 mm)"] }]
  },
  {
    id: "odessa-fringe-set",
    name: "Odessa Fringe Set",
    price: 95,
    category: "bridal",
    isNew: true,
    imgs: ["assets/img/hi-p06-a.jpg"],
    pos: "50% 40%",
    desc: "Our most dramatic parure — a fringe collar of pear and marquise drops with matching chandelier earrings, bracelet and ring. Made for the aisle.",
    details: ["Statement fringe collar necklace", "Chandelier earrings, bracelet & ring included", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"],
    variants: null
  },
  {
    id: "soleil-baguette-hoops",
    name: "Soleil Baguette Hoops",
    price: 28,
    category: "earrings",
    isNew: false,
    imgs: ["assets/img/hi-p07-a.jpg"],
    pos: "50% 50%",
    desc: "A full circle of tapered baguette crystals — small enough for every day, radiant enough for the reception.",
    details: ["Diameter approx. 2.5 cm", "Tapered baguette crystals", "Butterfly push-back closure", "Hypoallergenic · nickel free"],
    variants: null
  },
  {
    id: "riviera-stacking-bracelets",
    name: "Riviera Stacking Bracelets",
    price: 18,
    category: "bracelets",
    isNew: false,
    imgs: ["assets/img/hi-p08-a.jpg"],
    pos: "50% 55%",
    desc: "Slim tennis bracelets designed to stack — emerald-cut crystal, sapphire-blue accents, marquise leaves or a blush centre stone. Collect them all, or wear one alone.",
    details: ["Price per bracelet", "Fold-over clasp · 16–18 cm", "Hypoallergenic · nickel free"],
    variants: [{ label: "Style", options: ["Emerald-cut crystal", "Sapphire accent", "Marquise leaf", "Blush stone"] }]
  },
  {
    id: "wisteria-leaf-necklace",
    name: "Wisteria Leaf Necklace",
    price: 52,
    category: "necklaces",
    isNew: true,
    imgs: ["assets/img/hi-p09-a.jpg", "assets/img/hi-p09-b.jpg"],
    pos: "50% 45%",
    desc: "Clusters of marquise petals trail into a woven crystal ribbon and a single pear drop — romantic, fluid and unforgettable against bare skin.",
    details: ["Woven crystal ribbon with pear drop", "Adjustable length 38–44 cm", "Hypoallergenic · nickel free"],
    variants: null
  },
  {
    id: "wisteria-bridal-set",
    name: "Wisteria Bridal Set",
    price: 89,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/hi-p09-b.jpg", "assets/img/hi-p09-a.jpg"],
    pos: "50% 40%",
    desc: "The Wisteria necklace joined by its chandelier earrings, leaf bracelet and marquise ring — a set that moves like a garland of light.",
    details: ["Necklace, earrings, bracelet & ring included", "Marquise & pear-cut crystals", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"],
    variants: null
  },
  {
    id: "perle-drop-set",
    name: "Perle Drop Set",
    price: 72,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/ig-12.jpg"],
    pos: "50% 50%",
    desc: "A fine collar scattered with baguette drops, with its matching ring and earrings — understated sparkle for the minimalist bride.",
    details: ["Necklace, ring & earrings included", "Baguette-cut drops on a fine band", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"],
    variants: null
  }
];

const CATEGORY_LABELS = {
  bridal: "Bridal",
  earrings: "Earrings",
  necklaces: "Necklaces",
  bracelets: "Bracelets",
  hair: "Hair Jewellery",
  new: "New In"
};
