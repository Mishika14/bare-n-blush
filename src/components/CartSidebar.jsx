import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Sidebar */}
          <motion.aside
            key="sidebar"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-primary" />
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  Your Bag
                </h2>
                {totalItems > 0 && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                  <ShoppingBag size={52} className="text-muted-foreground/40" strokeWidth={1.2} />
                  <p className="font-heading text-xl font-medium text-foreground">Your bag is empty</p>
                  <p className="text-sm text-muted-foreground">Add something beautiful to get started.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-4 py-4 border-b border-border last:border-0">
                        {/* Product Image */}
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-card ring-1 ring-primary/10">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                          <p className="font-heading text-sm font-semibold text-foreground leading-tight line-clamp-2">
                            {item.name}
                          </p>
                          <span className="text-xs font-medium capitalize text-muted-foreground">
                            {item.category}
                          </span>
                          <p className="text-sm font-bold text-primary mt-auto">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity + Remove */}
                        <div className="flex flex-col items-end justify-between gap-2 shrink-0">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground/60 hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>

                          <div className="flex items-center gap-2 rounded-full bg-muted px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="flex h-6 w-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="min-w-[1.5rem] text-center text-sm font-semibold text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="flex h-6 w-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer — only show when cart has items */}
            {cartItems.length > 0 && (
              <div className="border-t border-border px-6 py-6 flex flex-col gap-4">
                {/* Order Summary */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between font-semibold text-foreground text-base pt-2 border-t border-border">
                    <span>Total</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full rounded-full bg-cta py-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-cta-foreground shadow-lg shadow-cta/20 transition-all hover:-translate-y-0.5 hover:bg-cta/90 hover:shadow-cta/40 active:translate-y-0">
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full rounded-full border border-border py-3 text-center text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
