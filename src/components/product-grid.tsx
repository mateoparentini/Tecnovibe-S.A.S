import type { Product } from "@/lib/products";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/20">
        <h2 className="text-2xl font-semibold text-muted-foreground">
          No Products Found
        </h2>
        <p className="mt-2 text-muted-foreground">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
