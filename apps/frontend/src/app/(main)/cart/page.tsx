"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import Container from "@/layout/Container";

export default function Cart() {
  const { cart, removeItem, updateQuantity, clearCart, totalPrice } =
    useCartStore();

  return (
    <Container className="mb-8">
      <div className="space-y-6">
        {cart.length === 0 && (
          <p className="text-center py-10 text-gray-500">Корзина пуста</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id + item.color + item.size}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center border-b border-gray-200 pb-4"
          >
            {item.srcImg && (
              <div className="w-full sm:w-20 aspect-square relative flex-shrink-0">
                <Image
                  src={item.srcImg}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 w-full gap-3">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-base">{item.name}</p>
                {item.color && (
                  <p className="text-sm text-gray-600">Цвет: {item.color}</p>
                )}
                {item.size && (
                  <p className="text-sm text-gray-600">Размер: {item.size}</p>
                )}
                <p className="text-sm font-medium">Цена: ${item.price}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        Math.max(1, item.quantity - 1),
                        item.color,
                        item.size
                      )
                    }
                    className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity + 1,
                        item.color,
                        item.size
                      )
                    }
                    className="px-3 py-1 border rounded hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id, item.color, item.size)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 font-semibold gap-4">
            <p className="text-lg">Итого: ${totalPrice()}</p>
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Очистить корзину
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}
