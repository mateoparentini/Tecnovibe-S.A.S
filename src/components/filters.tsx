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

const productTypes: Exclude<Product["type"], undefined>[] = [
  "appliance",
  "electronics",
  "cellphone",
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
  const handleTypeChange = (type: Product["type"]) => {
    if (!type) return;
    const newSelectedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newSelectedTypes);
  };

  return (
    <Card className="sticky top-20 shadow-none border">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-md">Price Range</h3>
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
          <h3 className="font-semibold text-md">Category</h3>
          <div className="space-y-3">
            {productTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={type}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={() => handleTypeChange(type)}
                />
                <Label htmlFor={type} className="capitalize font-normal">
                  {type === "cellphone" ? "Cellphones" : type}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
