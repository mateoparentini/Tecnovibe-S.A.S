"use client";

import { useState, useMemo, useEffect } from "react";
import { products as allProducts } from "@/lib/products";
import type { Product } from "@/lib/products";
import { Header } from "@/components/header";
import { Filters } from "@/components/filters";
import { ProductGrid } from "@/components/product-grid";
import { CartProvider } from "@/context/cart-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const maxPrice = useMemo(() => {
    if (allProducts.length === 0) return 1000;
    return Math.ceil(Math.max(...allProducts.map((p) => p.price)) / 100) * 100;
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [selectedTypes, setSelectedTypes] = useState<Product["type"][]>([]);

  useEffect(() => {
    setPriceRange([0, maxPrice]);
  }, [maxPrice]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(product.type);
      return matchesSearch && matchesPrice && matchesType;
    });
  }, [searchTerm, priceRange, selectedTypes]);

  const filtersComponent = (
    <Filters
      priceRange={priceRange}
      setPriceRange={setPriceRange}
      selectedTypes={selectedTypes}
      setSelectedTypes={setSelectedTypes}
      maxPrice={maxPrice}
    />
  );

  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="flex-1 container mx-auto py-6 px-4 md:px-6">
          <div className="grid md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-8">
            <aside className="hidden md:block">
              {isClient ? (
                filtersComponent
              ) : (
                <div className="sticky top-20 space-y-6">
                  <div className="h-48 w-full animate-pulse rounded-lg bg-muted" />
                  <div className="h-32 w-full animate-pulse rounded-lg bg-muted" />
                </div>
              )}
            </aside>
            <div className="flex-1">
              <div className="mb-4 md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Filter className="mr-2 h-4 w-4" />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[360px]">
                    <SheetHeader>
                      <SheetTitle>Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="py-4">{filtersComponent}</div>
                  </SheetContent>
                </Sheet>
              </div>
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
