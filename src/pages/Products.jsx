import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  
  // Update state if URL changes while component is mounted
  useEffect(() => {
    // Scroll to top on navigation to this page
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  // Derive unique categories and concerns from the data
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))].sort();
  }, []);

  const concerns = useMemo(() => {
    const allConcerns = products.flatMap((p) => p.concerns || []);
    return [...new Set(allConcerns)].sort();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleConcernChange = (concern) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by concern
    if (selectedConcerns.length > 0) {
      result = result.filter((p) =>
        p.concerns?.some((concern) => selectedConcerns.includes(concern))
      );
    }

    // Sort
    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'best-sellers') {
      result.sort((a, b) => (b.mostLoved || 0) - (a.mostLoved || 0));
    }

    return result;
  }, [selectedCategories, selectedConcerns, sortOrder]);

  return (
    <div className='flex min-h-dvh w-full flex-col bg-background pt-24 sm:pt-28 md:pt-32'>
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 md:px-8 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
        >
          <h1 className="font-heading text-4xl font-semibold text-primary md:text-5xl lg:text-6xl mb-4">
            Our Collection
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover the perfect additions to your skincare and beauty routine.
          </p>
        </motion.div>

        <ProductFilters
          categories={categories}
          concerns={concerns}
          selectedCategories={selectedCategories}
          selectedConcerns={selectedConcerns}
          sortOrder={sortOrder}
          onCategoryChange={handleCategoryChange}
          onConcernChange={handleConcernChange}
          onSortChange={setSortOrder}
        />

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {filteredAndSortedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-2xl font-medium text-foreground">No products found</h3>
            <p className="mt-2 text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
            <button
              onClick={() => {
                setSelectedCategories([]);
                setSelectedConcerns([]);
                setSortOrder('default');
              }}
              className="mt-6 rounded-full bg-primary text-primary-foreground px-6 py-2 transition-colors hover:opacity-90 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Products;
