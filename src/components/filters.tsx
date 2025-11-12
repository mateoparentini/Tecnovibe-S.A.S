"use client";

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/lib/products";
import { Separator } from "./ui/separator";

const filterGroups = [
  {
    title: "Equipos Tecnológicos",
    types: [
      "cargador-portatil",
      "teclado",
      "mouse-inalambrico",
      "celular",
      "tablet",
      "pc",
      "notebook",
      "otros-tecnologicos",
      "auriculares-inalambricos",
      "soporte-celular",
    ],
  },
  {
    title: "Aparatos Electrodomésticos",
    types: ["air-frier", "sandwichera", "licuadora", "cafetera", "hervidor-electrico"],
  },
  {
    title: "Electrodomésticos de Cocina",
    types: [
      "horno-electrico",
      "procesador-de-alimentos",
      "grandes-electrodomesticos",
      "microondas-compacto",
    ],
  },
];

type FiltersProps = {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedTypes: Product["type"][];
  setSelectedTypes: (types: Product["type"][]) => void;
  maxPrice: number;
};

export function Filters({
  priceRange,
  setPriceRange,
  selectedTypes,
  setSelectedTypes,
  maxPrice,
}: FiltersProps) {
  const handleGroupChange = (groupTypes: Product["type"][]) => {
    const anySelected = groupTypes.some((type) => selectedTypes.includes(type));
    let newSelectedTypes;
    if (anySelected) {
      newSelectedTypes = selectedTypes.filter(
        (type) => !groupTypes.includes(type)
      );
    } else {
      newSelectedTypes = [...selectedTypes, ...groupTypes];
    }
    setSelectedTypes([...new Set(newSelectedTypes)]);
  };

  return (
    <Card className="sticky top-20 shadow-none border">
      <CardHeader>
        <CardTitle>Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-md">Rango de Precios</h3>
          <Slider
            min={0}
            max={maxPrice}
            step={10}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="font-semibold text-md">Categoría</h3>
          <div className="space-y-3">
            {filterGroups.map((group) => (
              <div key={group.title} className="flex items-center space-x-2">
                <Checkbox
                  id={group.title}
                  checked={group.types.some((type) =>
                    selectedTypes.includes(type as Product["type"])
                  )}
                  onCheckedChange={() =>
                    handleGroupChange(group.types as Product["type"][])
                  }
                />
                <Label htmlFor={group.title} className="font-normal">
                  {group.title}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
