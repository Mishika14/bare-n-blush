export const products = [
  // GLOSS
  {
    id: "g1",
    name: "Berrilicious Lip Gloss",
    category: "gloss",
    image: new URL("../assets/gloss/Berrilicious.jpg", import.meta.url).href,
    description: "A beautiful berry-tinted gloss that leaves lips looking juicy, hydrated, and plump.",
    ingredients: ["Jojoba Oil", "Vitamin E", "Hyaluronic Acid", "Berry Extract"],
    bestFor: "Everyday wear and deep hydration.",
    concerns: ["Hydration", "Dryness"],
    price: 699,
    mostLoved: 3450
  },
  {
    id: "g2",
    name: "Candy Crush Lip Gloss",
    category: "gloss",
    image: new URL("../assets/gloss/Candy Crush.jpg", import.meta.url).href,
    description: "Sweet, shining, and irresistible. This candy-pink gloss offers a non-sticky, high-shine finish.",
    ingredients: ["Shea Butter", "Coconut Oil", "Peppermint Extract"],
    bestFor: "A sweet daytime look with a cooling effect.",
    concerns: ["Dryness"],
    price: 649,
    mostLoved: 2890
  },
  {
    id: "g3",
    name: "Fuchsia Pop Lip Gloss",
    category: "gloss",
    image: new URL("../assets/gloss/Fuchsia Pop.jpg", import.meta.url).href,
    description: "Make a statement with this vibrant fuchsia gloss that delivers intense color and supreme moisture.",
    ingredients: ["Mango Seed Oil", "Vitamin E", "Vegan Collagen"],
    bestFor: "Bold looks and long-lasting wear.",
    concerns: ["Hydration", "Anti-aging"],
    price: 799,
    mostLoved: 4120
  },
  {
    id: "g4",
    name: "Mauve Floss Lip Gloss",
    category: "gloss",
    image: new URL("../assets/gloss/Mauve Floss.jpg", import.meta.url).href,
    description: "A stunning mauve shade that compliments all skin tones while keeping lips buttery soft.",
    ingredients: ["Avocado Oil", "Rosehip Oil", "Hyaluronic Acid"],
    bestFor: "Sophisticated, subtle evening glow.",
    concerns: ["Hydration", "Dryness"],
    price: 750,
    mostLoved: 5200
  },
  {
    id: "g5",
    name: "Red Berry Lip Gloss",
    category: "gloss",
    image: new URL("../assets/gloss/Red Berry.jpg", import.meta.url).href,
    description: "A rich, classic red berry shade for a confident, high-shine finish.",
    ingredients: ["Jojoba Oil", "Pomegranate Extract", "Vitamin E"],
    bestFor: "Classic glamour and intense hydration.",
    concerns: ["Hydration"],
    price: 680,
    mostLoved: 1850
  },

  // MOISTURIZER
  {
    id: "m1",
    name: "Cloud Berry Moisturizer",
    category: "mosturizer",
    image: new URL("../assets/mosturizer/Cloud Berry.jpg", import.meta.url).href,
    description: "A lightweight cloud-like moisturizer packed with berry antioxidants for a radiant complexion.",
    ingredients: ["Cloudberry Extract", "Squalane", "Ceramides"],
    bestFor: "Dull skin needing a bright, dewy finish.",
    concerns: ["Dullness", "Hydration", "Barrier Repair"],
    price: 999,
    mostLoved: 4890
  },
  {
    id: "m2",
    name: "Cloud Cocoa Moisturizer",
    category: "mosturizer",
    image: new URL("../assets/mosturizer/Cloud Cocoa.jpg", import.meta.url).href,
    description: "Deeply nourishing and rich, this cocoa-infused cream locks in moisture and repairs the skin barrier.",
    ingredients: ["Cocoa Butter", "Shea Butter", "Niacinamide"],
    bestFor: "Dry, sensitive, or damaged skin.",
    concerns: ["Dryness", "Sensitive Skin", "Barrier Repair"],
    price: 1099,
    mostLoved: 3750
  },
  {
    id: "m3",
    name: "Cloud Kiss Moisturizer",
    category: "mosturizer",
    image: new URL("../assets/mosturizer/Cloud Kiss.jpg", import.meta.url).href,
    description: "A gentle, hydrating formula that kisses the skin with moisture without leaving a greasy residue.",
    ingredients: ["Aloe Vera", "Glycerin", "Green Tea Extract"],
    bestFor: "Oily and combination skin types.",
    concerns: ["Hydration", "Oil Control"],
    price: 899,
    mostLoved: 6200
  },
  {
    id: "m4",
    name: "Mango Sunshine Moisturizer",
    category: "mosturizer",
    image: new URL("../assets/mosturizer/Mango Sunshine.jpeg", import.meta.url).href,
    description: "Brighten your mornings with this tropical mango moisturizer that invigorates and hydrates.",
    ingredients: ["Mango Butter", "Vitamin C", "Papaya Extract"],
    bestFor: "Uneven skin tone and achieving a natural glow.",
    concerns: ["Dullness", "Brightening", "Dryness"],
    price: 949,
    mostLoved: 2980
  },

  // SCRUB
  {
    id: "sc1",
    name: "Coffee Scrub",
    category: "scrub",
    image: new URL("../assets/scrub/Coffee Scrub.jpg", import.meta.url).href,
    description: "An energizing coffee body scrub that exfoliates dead skin cells and stimulates circulation.",
    ingredients: ["Robusta Coffee Grounds", "Cold-pressed Coconut Oil", "Brown Sugar"],
    bestFor: "Smoothing rough patches and firming the skin.",
    concerns: ["Exfoliation", "Firming", "Dryness"],
    price: 750,
    mostLoved: 8150
  },
  {
    id: "sc2",
    name: "Rosy Plum Scrub",
    category: "scrub",
    image: new URL("../assets/scrub/Rosy Plum.jpeg", import.meta.url).href,
    description: "A gentle sugar scrub infused with rose and plum extracts for a delicate, luxurious exfoliation.",
    ingredients: ["Fine Sugar", "Rose Water", "Plum Seed Oil"],
    bestFor: "Gentle exfoliation for sensitive skin.",
    concerns: ["Exfoliation", "Sensitive Skin", "Dryness"],
    price: 849,
    mostLoved: 4500
  },
  {
    id: "sc3",
    name: "Sugared Sheacot Scrub",
    category: "scrub",
    image: new URL("../assets/scrub/Sugared Sheacot.jpg", import.meta.url).href,
    description: "A deeply moisturizing scrub blending shea butter and apricot for ultra-soft, revitalized skin.",
    ingredients: ["Shea Butter", "Apricot Kernel Powder", "Raw Sugar"],
    bestFor: "Dry skin that needs intense exfoliation and moisture.",
    concerns: ["Exfoliation", "Dryness", "Hydration"],
    price: 799,
    mostLoved: 3200
  },

  // SERUM
  {
    id: "sr1",
    name: "Avocado Ceramide Serum",
    category: "serum",
    image: new URL("../assets/serum/Avocado Ceramide.jpg", import.meta.url).href,
    description: "A soothing, strengthening serum that restores the skin barrier and reduces redness.",
    ingredients: ["Avocado Extract", "Ceramides", "Allantoin"],
    bestFor: "Sensitive and redness-prone skin.",
    concerns: ["Sensitive Skin", "Redness", "Barrier Repair"],
    price: 1199,
    mostLoved: 5800
  },
  {
    id: "sr2",
    name: "Blackberyy Retinol Serum",
    category: "serum",
    image: new URL("../assets/serum/Blackberyy Retinol.jpg", import.meta.url).href,
    description: "An age-defying serum that blends the power of retinol with antioxidant-rich blackberry.",
    ingredients: ["Encapsulated Retinol", "Blackberry Extract", "Peptides"],
    bestFor: "Fine lines, wrinkles, and anti-aging.",
    concerns: ["Anti-aging", "Fine Lines", "Firming"],
    price: 1499,
    mostLoved: 7400
  },
  {
    id: "sr3",
    name: "Citrus Glow Serum",
    category: "serum",
    image: new URL("../assets/serum/Citrus Glow.jpg", import.meta.url).href,
    description: "A powerful Vitamin C serum that brightens dark spots and evens out skin tone.",
    ingredients: ["15% Vitamin C", "Grapefruit Extract", "Hyaluronic Acid"],
    bestFor: "Hyperpigmentation and dullness.",
    concerns: ["Brightening", "Dullness", "Hyperpigmentation"],
    price: 1399,
    mostLoved: 9200
  },
  {
    id: "sr4",
    name: "Guava Vitamin C Serum",
    category: "serum",
    image: new URL("../assets/serum/Guava Vitamin C .jpg", import.meta.url).href,
    description: "A tropical, illuminating serum that defends against free radicals and boosts collagen.",
    ingredients: ["Guava Extract", "Vitamin C", "Vitamin E"],
    bestFor: "Environmental protection and brightening.",
    concerns: ["Brightening", "Anti-aging", "Dullness"],
    price: 1299,
    mostLoved: 3100
  },
  {
    id: "sr5",
    name: "Hydra Collagen Serum",
    category: "serum",
    image: new URL("../assets/serum/Hydra Collagen.jpg", import.meta.url).href,
    description: "Plump and firm your skin with this deeply hydrating collagen-boosting serum.",
    ingredients: ["Vegan Collagen", "Multi-molecular Hyaluronic Acid", "Panthenol"],
    bestFor: "Loss of firmness and dehydration.",
    concerns: ["Hydration", "Anti-aging", "Firming"],
    price: 1350,
    mostLoved: 4850
  },
  {
    id: "sr6",
    name: "Morrocan Glow Serum",
    category: "serum",
    image: new URL("../assets/serum/Morrocan Glow.jpg", import.meta.url).href,
    description: "An elixir of luxury oils that gives a radiant, lit-from-within glow.",
    ingredients: ["Argan Oil", "Rosehip Oil", "Squalane"],
    bestFor: "Dry skin looking for a natural, luminous finish.",
    concerns: ["Dryness", "Brightening", "Hydration"],
    price: 1150,
    mostLoved: 6300
  },
  {
    id: "sr7",
    name: "Plum Glow Serum",
    category: "serum",
    image: new URL("../assets/serum/Plum Glow.jpg", import.meta.url).href,
    description: "A super-fruit serum that floods the skin with intense hydration and vitamins.",
    ingredients: ["Kakadu Plum Extract", "Polyglutamic Acid", "Glycerin"],
    bestFor: "Intense hydration and bouncy skin.",
    concerns: ["Hydration", "Dullness", "Anti-aging"],
    price: 1249,
    mostLoved: 5120
  },
  {
    id: "sr8",
    name: "Strawberry Milk Serum",
    category: "serum",
    image: new URL("../assets/serum/Strawberry Milk.jpg", import.meta.url).href,
    description: "A milky, calming serum that quenches thirsty skin while softening the texture.",
    ingredients: ["Strawberry Extract", "Oat Milk", "Niacinamide"],
    bestFor: "Calming irritation and improving skin texture.",
    concerns: ["Sensitive Skin", "Redness", "Hydration"],
    price: 1199,
    mostLoved: 8900
  },

  // TONER
  {
    id: "t1",
    name: "Ocean Dew Toner",
    category: "toner",
    image: new URL("../assets/Toner/Ocean Dew Toner.jpeg", import.meta.url).href,
    description: "A refreshing, ocean-mineral infused toner that balances pH levels and preps your skin for maximum absorption.",
    ingredients: ["Sea Kelp Extract", "Hyaluronic Acid", "Blue Tansy"],
    bestFor: "Oily and combination skin needing hydration without heaviness.",
    concerns: ["Hydration", "Oil Control", "Dullness"],
    price: 799,
    mostLoved: 4200
  },
  {
    id: "t2",
    name: "Purple Dew Toner",
    category: "toner",
    image: new URL("../assets/Toner/Purple Dew Toner.jpeg", import.meta.url).href,
    description: "An antioxidant-rich purple toner that tightens pores and evens out skin tone with every swipe.",
    ingredients: ["Butterfly Pea Flower", "Witch Hazel", "Niacinamide"],
    bestFor: "Enlarged pores and uneven skin texture.",
    concerns: ["Brightening", "Exfoliation", "Hyperpigmentation"],
    price: 899,
    mostLoved: 5600
  },
  {
    id: "t3",
    name: "Rose Dew Toner",
    category: "toner",
    image: new URL("../assets/Toner/Rose Dew Toner.jpeg", import.meta.url).href,
    description: "A calming, rose-infused mist toner that soothes irritation and delivers a dewy, fresh-faced glow.",
    ingredients: ["Damask Rose Water", "Glycerin", "Allantoin"],
    bestFor: "Sensitive, dry, or irritated skin.",
    concerns: ["Sensitive Skin", "Hydration", "Redness"],
    price: 749,
    mostLoved: 7100
  }
];
