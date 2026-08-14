/* Pearls Collective — product catalogue
   Images are the brand's own photography from @pearlscollective.
   ─────────────────────────────────────────────────────────────────────────
   PRICES: edit the `price` number. Plain number in EUR, nothing else.
     Correct:  price: 85      price: 32.5
     Wrong:    price: "€85"   price: 32,50

   TEXT: `name`, `desc` and `details` carry both languages, { sq, en }.
   The proper name stays as it is in both — only the descriptive part is
   translated, so "Céleste Bridal Set" becomes "Seti Céleste".
   ───────────────────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "celeste-bridal-set",
    name: { sq: "Seti Céleste", en: "Céleste Bridal Set" },
    price: 85,
    category: "bridal",
    isNew: true,
    imgs: ["assets/img/hi-p01-b.jpg", "assets/img/hi-p01-a.jpg"],
    pos: "50% 45%",
    desc: {
      sq: "Një set i plotë për nuse — gjerdan kristali që bie si kaskadë, vathë pikë që i shkojnë, byzylyk i hollë dhe unazë solitare, të gjitha në kutinë tonë smerald.",
      en: "A complete bridal parure — cascading crystal necklace, matching drop earrings, a delicate tennis bracelet and a solitaire ring, presented in our signature emerald keepsake box."
    },
    details: {
      sq: ["Tunxh i veshur me rodium dhe cirkon kubik", "Përfshin gjerdan, vathë, byzylyk dhe unazë", "Hipoalergjik · pa nikel", "Vjen në kutinë Pearls Collective"],
      en: ["Rhodium-plated brass with cubic zirconia", "Necklace, earrings, bracelet & ring included", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"]
    },
    variants: null
  },
  {
    id: "celeste-cascade-necklace",
    name: { sq: "Gjerdani Céleste", en: "Céleste Cascade Necklace" },
    price: 48,
    category: "necklaces",
    isNew: false,
    imgs: ["assets/img/hi-p01-a.jpg", "assets/img/hi-p01-b.jpg"],
    pos: "50% 40%",
    desc: {
      sq: "Një gjerdan kristali me dy rreshta që rrjedh në një pikë Y — krijuar ta kapë dritën me çdo lëvizje, nga shikimi i parë te vallëzimi i fundit.",
      en: "A fluid double-row crystal necklace that falls into a graceful Y-drop — designed to catch the light with every movement, from the first look to the last dance."
    },
    details: {
      sq: ["Tunxh i veshur me rodium dhe cirkon kubik", "Gjatësi e rregullueshme 38–44 cm", "Hipoalergjik · pa nikel"],
      en: ["Rhodium-plated brass with cubic zirconia", "Adjustable length 38–44 cm", "Hypoallergenic · nickel free"]
    },
    variants: null
  },
  {
    id: "aurora-statement-earrings",
    name: { sq: "Vathët Aurora", en: "Aurora Statement Earrings" },
    price: 32,
    category: "earrings",
    isNew: true,
    imgs: ["assets/img/hi-p03-a.jpg"],
    pos: "50% 55%",
    desc: {
      sq: "Spirale skulpturore me kristale bagetë të holluara dhe një zemër pavé — vathë që e kornizojnë fytyrën si vetë drita.",
      en: "Sculptural swirls of tapered baguette crystals with a pavé heart — a statement earring that frames the face like light itself."
    },
    details: {
      sq: ["Kristale bagetë të holluara dhe pavé", "Mbyllje me kapëse flutur", "Gjatësia rreth 4 cm", "Hipoalergjik · pa nikel"],
      en: ["Tapered baguette & pavé crystals", "Butterfly push-back closure", "Length approx. 4 cm", "Hypoallergenic · nickel free"]
    },
    variants: null
  },
  {
    id: "vienna-baguette-set",
    name: { sq: "Seti Vienna", en: "Vienna Baguette Set" },
    price: 78,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/hi-p04-c.jpg", "assets/img/hi-p04-f.jpg"],
    pos: "50% 45%",
    desc: {
      sq: "Gurë bagetë dhe markizë të shpërndarë mbi një bazë të hollë e të lëvizshme — një set qetësisht modern për nusen që do linja të pastra.",
      en: "Scattered baguette and marquise stones on a fine articulated band — a quietly modern set for the bride who loves clean lines."
    },
    details: {
      sq: ["Gjerdan, vathë pikë, unazë dhe byzylyk", "Kristale bagetë, markizë dhe të rrumbullakëta", "Hipoalergjik · pa nikel", "Vjen në kutinë Pearls Collective"],
      en: ["Necklace, drop earrings, ring & bracelet", "Mixed baguette, marquise & round crystals", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"]
    },
    variants: null
  },
  {
    id: "vienna-baguette-necklace",
    name: { sq: "Gjerdani Vienna", en: "Vienna Baguette Necklace" },
    price: 42,
    category: "necklaces",
    isNew: false,
    imgs: ["assets/img/hi-p04-f.jpg", "assets/img/hi-p04-c.jpg"],
    pos: "50% 20%",
    desc: {
      sq: "Një gjerdan i hollë në gjatësi chokeri me grupime bagetë dhe theks markizë — i mbajtur vetëm ose i shtresuar për mbrëmje.",
      en: "A fine choker-length necklace of alternating baguette clusters and marquise accents — worn alone or layered for the evening."
    },
    details: {
      sq: ["Gjatësi chokeri, e rregullueshme 36–42 cm", "Kristale bagetë dhe markizë", "Hipoalergjik · pa nikel"],
      en: ["Choker length, adjustable 36–42 cm", "Baguette & marquise crystals", "Hypoallergenic · nickel free"]
    },
    variants: null
  },
  {
    id: "flora-marquise-ring",
    name: { sq: "Unaza Flora", en: "Flora Marquise Ring" },
    price: 24,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/hi-p05-a.jpg"],
    pos: "50% 45%",
    desc: {
      sq: "Petale në prerje markizë të mbledhura në tri lule të holla që mbështillen butësisht rreth gishtit — copa jonë më e dashur.",
      en: "Marquise-cut petals gathered into three delicate blooms that wrap softly across the finger — our most-loved something-sparkling."
    },
    details: {
      sq: ["Lule nga cirkon kubik në prerje markizë", "Bazë e hapur · lehtësisht e rregullueshme", "Hipoalergjik · pa nikel"],
      en: ["Marquise-cut cubic zirconia florals", "Open band · lightly adjustable", "Hypoallergenic · nickel free"]
    },
    variants: [{
      label: { sq: "Madhësia", en: "Size" },
      options: [
        { sq: "S (16 mm)", en: "S (16 mm)" },
        { sq: "M (17 mm)", en: "M (17 mm)" },
        { sq: "L (18 mm)", en: "L (18 mm)" }
      ]
    }]
  },
  {
    id: "odessa-fringe-set",
    name: { sq: "Seti Odessa", en: "Odessa Fringe Set" },
    price: 95,
    category: "bridal",
    isNew: true,
    imgs: ["assets/img/hi-p06-a.jpg"],
    pos: "50% 40%",
    desc: {
      sq: "Seti ynë më dramatik — një jakë me franxha nga pika dardhë dhe markizë, me vathë llambadar, byzylyk dhe unazë. Bërë për rrugën drejt altarit.",
      en: "Our most dramatic parure — a fringe collar of pear and marquise drops with matching chandelier earrings, bracelet and ring. Made for the aisle."
    },
    details: {
      sq: ["Gjerdan jakë me franxha", "Përfshin vathë llambadar, byzylyk dhe unazë", "Hipoalergjik · pa nikel", "Vjen në kutinë Pearls Collective"],
      en: ["Statement fringe collar necklace", "Chandelier earrings, bracelet & ring included", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"]
    },
    variants: null
  },
  {
    id: "soleil-baguette-hoops",
    name: { sq: "Rrathët Soleil", en: "Soleil Baguette Hoops" },
    price: 28,
    category: "earrings",
    isNew: false,
    imgs: ["assets/img/hi-p07-a.jpg"],
    pos: "50% 50%",
    desc: {
      sq: "Një rreth i plotë me kristale bagetë të holluara — mjaft i vogël për çdo ditë, mjaft rrezatues për festën.",
      en: "A full circle of tapered baguette crystals — small enough for every day, radiant enough for the reception."
    },
    details: {
      sq: ["Diametri rreth 2.5 cm", "Kristale bagetë të holluara", "Mbyllje me kapëse flutur", "Hipoalergjik · pa nikel"],
      en: ["Diameter approx. 2.5 cm", "Tapered baguette crystals", "Butterfly push-back closure", "Hypoallergenic · nickel free"]
    },
    variants: null
  },
  {
    id: "riviera-stacking-bracelets",
    name: { sq: "Byzylykët Riviera", en: "Riviera Stacking Bracelets" },
    price: 18,
    category: "bracelets",
    isNew: false,
    imgs: ["assets/img/hi-p08-a.jpg"],
    pos: "50% 55%",
    desc: {
      sq: "Byzylykë të hollë, krijuar për t'u shtresuar — kristal në prerje smeraldi, theks safiri, gjethe markizë ose gur qendror rozë. Mblidhini të gjithë, ose mbani vetëm një.",
      en: "Slim tennis bracelets designed to stack — emerald-cut crystal, sapphire-blue accents, marquise leaves or a blush centre stone. Collect them all, or wear one alone."
    },
    details: {
      sq: ["Çmimi për një byzylyk", "Mbyllje palosëse · 16–18 cm", "Hipoalergjik · pa nikel"],
      en: ["Price per bracelet", "Fold-over clasp · 16–18 cm", "Hypoallergenic · nickel free"]
    },
    variants: [{
      label: { sq: "Stili", en: "Style" },
      options: [
        { sq: "Kristal prerje smeraldi", en: "Emerald-cut crystal" },
        { sq: "Theks safiri", en: "Sapphire accent" },
        { sq: "Gjethe markizë", en: "Marquise leaf" },
        { sq: "Gur rozë", en: "Blush stone" }
      ]
    }]
  },
  {
    id: "wisteria-leaf-necklace",
    name: { sq: "Gjerdani Wisteria", en: "Wisteria Leaf Necklace" },
    price: 52,
    category: "necklaces",
    isNew: true,
    imgs: ["assets/img/hi-p09-a.jpg", "assets/img/hi-p09-b.jpg"],
    pos: "50% 45%",
    desc: {
      sq: "Grupime petalesh markizë që rrjedhin në një shirit kristali të endur dhe një pikë dardhë — romantik, i lëvizshëm dhe i paharrueshëm mbi lëkurë.",
      en: "Clusters of marquise petals trail into a woven crystal ribbon and a single pear drop — romantic, fluid and unforgettable against bare skin."
    },
    details: {
      sq: ["Shirit kristali i endur me pikë dardhë", "Gjatësi e rregullueshme 38–44 cm", "Hipoalergjik · pa nikel"],
      en: ["Woven crystal ribbon with pear drop", "Adjustable length 38–44 cm", "Hypoallergenic · nickel free"]
    },
    variants: null
  },
  {
    id: "wisteria-bridal-set",
    name: { sq: "Seti Wisteria", en: "Wisteria Bridal Set" },
    price: 89,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/hi-p09-b.jpg", "assets/img/hi-p09-a.jpg"],
    pos: "50% 40%",
    desc: {
      sq: "Gjerdani Wisteria i shoqëruar nga vathët llambadar, byzylyku me gjethe dhe unaza markizë — një set që lëviz si një kurorë drite.",
      en: "The Wisteria necklace joined by its chandelier earrings, leaf bracelet and marquise ring — a set that moves like a garland of light."
    },
    details: {
      sq: ["Përfshin gjerdan, vathë, byzylyk dhe unazë", "Kristale markizë dhe dardhë", "Hipoalergjik · pa nikel", "Vjen në kutinë Pearls Collective"],
      en: ["Necklace, earrings, bracelet & ring included", "Marquise & pear-cut crystals", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"]
    },
    variants: null
  },
  {
    id: "perle-drop-set",
    name: { sq: "Seti Perle", en: "Perle Drop Set" },
    price: 72,
    category: "bridal",
    isNew: false,
    imgs: ["assets/img/ig-12.jpg"],
    pos: "50% 50%",
    desc: {
      sq: "Një jakë e hollë e mbushur me pika bagetë, me unazën dhe vathët që i shkojnë — shkëlqim i përmbajtur për nusen minimaliste.",
      en: "A fine collar scattered with baguette drops, with its matching ring and earrings — understated sparkle for the minimalist bride."
    },
    details: {
      sq: ["Përfshin gjerdan, unazë dhe vathë", "Pika në prerje bagetë mbi bazë të hollë", "Hipoalergjik · pa nikel", "Vjen në kutinë Pearls Collective"],
      en: ["Necklace, ring & earrings included", "Baguette-cut drops on a fine band", "Hypoallergenic · nickel free", "Arrives in the Pearls Collective keepsake box"]
    },
    variants: null
  }
];

const CATEGORY_LABELS = {
  bridal:    { sq: "Nuse",               en: "Bridal" },
  earrings:  { sq: "Vathë",              en: "Earrings" },
  necklaces: { sq: "Gjerdanë",           en: "Necklaces" },
  bracelets: { sq: "Byzylykë",           en: "Bracelets" },
  hair:      { sq: "Bizhuteri flokësh",  en: "Hair Jewellery" },
  new:       { sq: "Të reja",            en: "New In" }
};

/* Category label in the active language. */
function categoryLabel(key) {
  return I18N.pick(CATEGORY_LABELS[key]);
}
