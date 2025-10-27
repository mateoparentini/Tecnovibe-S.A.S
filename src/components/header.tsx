"use client";

import Link from "next/link";
import { Search, ShoppingCart, Store } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  const { itemCount } = useCart();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          aria-label="eBoutique Lite Home"
        >
          <Store className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">
            eBoutique Lite
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <form
            className="flex-1 sm:flex-initial"
            onSubmit={handleSearchSubmit}
          >
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[200px] md:w-[200px] lg:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label={`Shopping cart with ${itemCount} items`}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
