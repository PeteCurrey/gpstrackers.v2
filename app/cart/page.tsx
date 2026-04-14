import type { Metadata } from 'next';
import CartPageClient from '@/components/cart/CartPageClient';

export const metadata: Metadata = {
  title: 'Your Cart | Travio GPS Trackers',
  description: 'Review your order and prepare for checkout. Secure UK-based GPS tracking.',
};

export default function CartPage() {
  return (
    <div className="bg-void min-h-screen pt-40 pb-20">
      <div className="container">
        <h1 className="display-xl text-white mb-12">Your Cart</h1>
        <CartPageClient />
      </div>
    </div>
  );
}
