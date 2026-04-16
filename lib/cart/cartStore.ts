import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  subscriptionAnnual?: number;
  includeSubscription: boolean;
  quantity: number;
  slug: string;
  category: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleSubscription: (id: string) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        const qtyToAdd = item.quantity || 1;

        if (existing) {
          set((s) => ({
            items: s.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + qtyToAdd } : i
            ),
          }));
        } else {
          set((s) => ({ items: [...s.items, { ...item, quantity: qtyToAdd }] }));
        }
      },

      removeItem: (id) =>
        set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((s) => ({
          items: s.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        }));
      },

      toggleSubscription: (id) =>
        set((s) => ({
          items: s.items.map((i) =>
            i.id === id ? { ...i, includeSubscription: !i.includeSubscription } : i
          ),
        })),

      clearCart: () => set({ items: [] }),

      total: () => {
        const items = get().items;
        return items.reduce((acc, item) => {
          const deviceTotal = item.price * item.quantity;
          const subTotal = item.includeSubscription && item.subscriptionAnnual
            ? item.subscriptionAnnual * item.quantity
            : 0;
          return acc + deviceTotal + subTotal;
        }, 0);
      },
    }),
    {
      name: 'travio-cart',
      storage: {
        getItem: (name) => {
          if (typeof window === 'undefined') return null;
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          if (typeof window === 'undefined') return;
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          if (typeof window === 'undefined') return;
          localStorage.removeItem(name);
        },
      },
    }
  )
);
