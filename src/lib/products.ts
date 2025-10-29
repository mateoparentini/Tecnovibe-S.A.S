import imageData from "./placeholder-images.json";

const { placeholderImages } = imageData;

export type Product = {
  id: string;
  name: string;
  price: number;
  type:
    | "cargador-portatil"
    | "teclado"
    | "mouse-inalambrico"
    | "celular"
    | "tablet"
    | "pc"
    | "notebook"
    | "air-frier"
    | "sandwichera"
    | "horno-electrico"
    | "procesador-de-alimentos"
    | "otros-tecnologicos"
    | "grandes-electrodomesticos";
  imageUrl: string;
  imageHint: string;
};

const getImageData = (id: string) => {
  const image = placeholderImages.find((img) => img.id === id);
  if (!image) {
    return {
      imageUrl: `https://picsum.photos/seed/${id}/600/600`,
      imageHint: "placeholder image",
    };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
};

export const products: Product[] = [
  // Equipos tecnológicos - Económicos
  {
    id: "11",
    name: "Cargador Portátil Rápido",
    price: 45,
    type: "cargador-portatil",
    ...getImageData("product-11"),
  },
  {
    id: "12",
    name: "Teclado Mecánico RGB",
    price: 80,
    type: "teclado",
    ...getImageData("product-12"),
  },
  {
    id: "13",
    name: "Mouse Inalámbrico Ergonómico",
    price: 35,
    type: "mouse-inalambrico",
    ...getImageData("product-13"),
  },
  // Equipos tecnológicos - Costosos
  {
    id: "3",
    name: "Smartphone Galaxy Pro",
    price: 999,
    type: "celular",
    ...getImageData("product-3"),
  },
  {
    id: "9",
    name: "Smartphone Pixel 8a",
    price: 499,
    type: "celular",
    ...getImageData("product-9"),
  },
  {
    id: "8",
    name: "Tableta Air de 11 pulgadas",
    price: 650,
    type: "tablet",
    ...getImageData("product-8"),
  },
  {
    id: "14",
    name: "PC Gamer Extrema",
    price: 2800,
    type: "pc",
    ...getImageData("product-14"),
  },
  {
    id: "4",
    name: "Laptop para Creadores de 16 pulgadas",
    price: 2499,
    type: "notebook",
    ...getImageData("product-4"),
  },
  // Aparatos electrodomésticos
  {
    id: "15",
    name: "Air Frier Digital",
    price: 120,
    type: "air-frier",
    ...getImageData("product-15"),
  },
  {
    id: "16",
    name: "Sandwichera 3-en-1",
    price: 55,
    type: "sandwichera",
    ...getImageData("product-16"),
  },
  // Electrodomésticos de cocina mediano
  {
    id: "10",
    name: "Horno Eléctrico de Convección",
    price: 329,
    type: "horno-electrico",
    ...getImageData("product-10"),
  },
  {
    id: "17",
    name: "Procesador de Alimentos Multifunción",
    price: 150,
    type: "procesador-de-alimentos",
    ...getImageData("product-17"),
  },
  // Otros no especificados
  {
    id: "2",
    name: "Televisor Quantum 4K",
    price: 899,
    type: "otros-tecnologicos",
    ...getImageData("product-2"),
  },
  {
    id: "7",
    name: "Consola de Videojuegos de Nueva Generación",
    price: 499,
    type: "otros-tecnologicos",
    ...getImageData("product-7"),
  },
  {
    id: "1",
    name: "Refrigerador Inteligente",
    price: 1299,
    type: "grandes-electrodomesticos",
    ...getImageData("product-1"),
  },
  {
    id: "5",
    name: "Lavadora Eco-Inteligente",
    price: 749,
    type: "grandes-electrodomesticos",
    ...getImageData("product-5"),
  },
  {
    id: "6",
    name: "Lavavajillas SilentClean",
    price: 599,
    type: "grandes-electrodomesticos",
    ...getImageData("product-6"),
  },
];
