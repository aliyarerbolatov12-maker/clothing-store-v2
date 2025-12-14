import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  srcImg: string;
  color?: string;
  size?: string;
};

type CartState = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, color?: string, size?: string) => void;
  updateQuantity: (
    id: string,
    quantity: number,
    color?: string,
    size?: string
  ) => void;
  clearCart: () => void;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addItem: (item: CartItem) => {
        set((state) => {
          const exists = state.cart.find(
            (i) =>
              i.id === item.id && i.color === item.color && i.size === item.size
          );

          if (exists) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id &&
                i.color === item.color &&
                i.size === item.size
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          return { cart: [...state.cart, item] };
        });
      },

      removeItem: (id, color, size) => {
        set((state) => ({
          cart: state.cart.filter(
            (i) => !(i.id === id && i.color === color && i.size === size)
          ),
        }));
      },

      updateQuantity: (id, quantity, color, size) => {
        set((state) => ({
          cart: state.cart.map((i) =>
            i.id === id && i.color === color && i.size === size
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      totalPrice: () =>
        get().cart.reduce((acc, i) => acc + i.price * i.quantity, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);
