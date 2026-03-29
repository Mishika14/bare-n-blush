import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-md ring-1 ring-primary/5"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-md">
          {product.category}
        </div>
        {/* Most Loved badge */}
        {product.mostLoved > 7000 && (
          <div className="absolute top-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-md">
            ❤ Bestseller
          </div>
        )}
      </div>
      
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-medium leading-tight text-foreground">
            {product.name}
          </h3>
          <span className="shrink-0 text-lg font-semibold text-primary">
            ₹{product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4">
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.97 }}
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-cta text-cta-foreground hover:bg-cta/90'
            }`}
          >
            {added ? (
              <>
                <Check size={15} strokeWidth={2.5} />
                Added!
              </>
            ) : (
              <>
                <ShoppingBag size={15} />
                Add to Cart
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
