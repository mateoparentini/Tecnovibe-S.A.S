import imageData from "./placeholder-images.json";

const { placeholderImages } = imageData;

export type Product = {
  id: string;
  name: string;
  price: number;
  type: "appliance" | "electronics" | "cellphone";
  imageUrl: string;
  imageHint: string;
};

const getImageData = (id: string) => {
  const image = placeholderImages.find((img) => img.id === id);
  if (!image) {
    return {
      imageUrl: "https://picsum.photos/seed/placeholder/600/600",
      imageHint: "placeholder image",
    };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
};

export const products: Product[] = [
  {
    id: "1",
    name: "Smart Refrigerator",
    price: 1299,
    type: "appliance",
    ...getImageData("product-1"),
  },
  {
    id: "2",
    name: "Quantum 4K TV",
    price: 899,
    type: "electronics",
    ...getImageData("product-2"),
  },
  {
    id: "3",
    name: "Galaxy Pro Smartphone",
    price: 999,
    type: "cellphone",
    ...getImageData("product-3"),
  },
  {
    id: "4",
    name: "Creator's Laptop 16-inch",
    price: 2499,
    type: "electronics",
    ...getImageData("product-4"),
  },
  {
    id: "5",
    name: "Eco-Smart Washer",
    price: 749,
    type: "appliance",
    ...getImageData("product-5"),
  },
  {
    id: "6",
    name: "SilentClean Dishwasher",
    price: 599,
    type: "appliance",
    ...getImageData("product-6"),
  },
  {
    id: "7",
    name: "NextGen Gaming Console",
    price: 499,
    type: "electronics",
    ...getImageData("product-7"),
  },
  {
    id: "8",
    name: "Air Tablet 11-inch",
    price: 650,
    type: "electronics",
    ...getImageData("product-8"),
  },
  {
    id: "9",
    name: "Pixel 8a Smartphone",
    price: 499,
    type: "cellphone",
    ...getImageData("product-9"),
  },
  {
    id: "10",
    name: "Convection Microwave",
    price: 329,
    type: "appliance",
    ...getImageData("product-10"),
  },
];
