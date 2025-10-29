"use client";

import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";

export function CartSheet() {
  const { cartItems, itemCount, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex h-full flex-col">
      {itemCount > 0 ? (
        <>
          <ScrollArea className="flex-1">
            <div className="py-4 pr-6">
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id, index)}
                      aria-label={`Eliminar ${item.name} del carrito`}
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
          <div className="mt-auto border-t p-4 pr-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full mt-4">Proceder al pago</Button>
          </div>
        </>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-muted-foreground">Tu carrito está vacío.</p>
        </div>
      )}
    </div>
  );
}
