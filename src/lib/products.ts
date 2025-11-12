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
    | "grandes-electrodomesticos"
    | "microondas-compacto"
    | "cafetera"
    | "hervidor-electrico";
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
    price: 15,
    type: "cargador-portatil",
    ...getImageData("product-11"),
  },
  {
    id: "12",
    name: "Teclado Mecánico RGB",
    price: 40,
    type: "teclado",
    ...getImageData("product-12"),
  },
  {
    id: "13",
    name: "Mouse Inalámbrico Logitech",
    price: 20,
    type: "mouse-inalambrico",
    ...getImageData("product-13"),
  },
  // Equipos tecnológicos - Costosos
  {
    id: "3",
    name: "Samsung Galaxy Pro",
    price: 550,
    type: "celular",
    ...getImageData("product-3"),
  },
  {
    id: "9",
    name: "IPhone 16",
    price: 1300,
    type: "celular",
    ...getImageData("product-9"),
  },
  {
    id: "8",
    name: "Tablet Samsung",
    price: 650,
    type: "tablet",
    ...getImageData("product-8"),
  },
  {
    id: "14",
    name: "PC Gamer Completa",
    price: 2800,
    type: "pc",
    ...getImageData("product-14"),
  },
  {
    id: "4",
    name: "Laptop de 16 pulgadas",
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
  {
    id: "18",
    name: "Microondas Compacto",
    price: 125,
    type: "microondas-compacto",
    ...getImageData("product-18"),
  },
  {
    id: "19",
    name: "Cafetera",
    price: 50,
    type: "cafetera",
    ...getImageData("product-19"),
  },
  {
    id: "20",
    name: "Hervidor Eléctrico",
    price: 30,
    type: "hervidor-electrico",
    ...getImageData("product-20"),
  }
  // Otros no especificados


 
];
