import { Product } from "../components/ProductCard";

export const TRENDING: Product[] = [
  {
    id: "bandana",
    name: "Orbital Bandana 2‑Pack",
    price: 35,
    tag: "Trending",
    category: "Accessories",
    badge: "limited",
  },
  {
    id: "floaty-pen",
    name: "Zero‑G Floaty Pen 5‑Pack",
    price: 30,
    tag: "Trending",
    category: "Accessories",
  },
  {
    id: "vintage-starship",
    name: "Vintage Starship Tee",
    price: 40,
    category: "Mens",
    badge: "new",
  },
  {
    id: "schematic-hoodie",
    name: "Starlink Schematic Hoodie",
    price: 65,
    category: "Mens",
  },
];

export const MENS: Product[] = [
  ...TRENDING.filter((p) => p.category === "Mens"),
  {
    id: "track-jacket",
    name: "Orbital Track Jacket",
    price: 80,
    category: "Mens",
    badge: "limited",
  },
];

export const WOMENS: Product[] = [
  {
    id: "starbase-tank",
    name: "Starbase City Tank Top",
    price: 35,
    category: "Womens",
  },
];

export const KIDS: Product[] = [
  {
    id: "kids-starbase",
    name: "Kid's Starbase Tee",
    price: 25,
    category: "Kids",
  },
];

export const ACCESSORIES: Product[] = [
  {
    id: "torch",
    name: "Starship Torch",
    price: 175,
    category: "Accessories",
    badge: "limited",
  },
  {
    id: "sticker-pack",
    name: "Orbital Sticker Pack",
    price: 20,
    category: "Accessories",
  },
];

export const FLIGHT_SHIRTS: Product[] = [
  {
    id: "mission-patch-2025",
    name: "Starship 2025 Mission Patch",
    price: 15,
    category: "Flight Shirts",
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...TRENDING,
  ...MENS,
  ...WOMENS,
  ...KIDS,
  ...ACCESSORIES,
  ...FLIGHT_SHIRTS,
];


