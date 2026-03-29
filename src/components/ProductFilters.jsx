import React, { useState } from 'react';
import { SlidersHorizontal, ArrowDownUp, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductFilters = ({
  categories,
  concerns,
  selectedCategories,
  selectedConcerns,
  sortOrder,
  onCategoryChange,
  onConcernChange,
  onSortChange,
}) => {
  const [activeTab, setActiveTab] = useState(null); // 'filter', 'sort', or null

  const activeFiltersCount = selectedCategories.length + selectedConcerns.length;

  return (
    <div className="relative mb-8 w-full">
      {/* Action Bar */}
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <button
          onClick={() => setActiveTab(activeTab === 'filter' ? null : 'filter')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
            activeTab === 'filter'
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-muted text-foreground hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <SlidersHorizontal size={16} />
          <span>Filter</span>
          {activeFiltersCount > 0 && (
            <span className={`ml-1 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
              activeTab === 'filter' ? 'bg-background text-primary' : 'bg-primary text-primary-foreground'
            }`}>
              {activeFiltersCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab(activeTab === 'sort' ? null : 'sort')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
            activeTab === 'sort'
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-muted text-foreground hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <ArrowDownUp size={16} />
          <span>Sort</span>
        </button>

        {/* Clear Filters (shows when filters are active) */}
        {activeFiltersCount > 0 && activeTab !== 'filter' && (
          <button
            onClick={() => {
              categories.forEach(c => selectedCategories.includes(c) && onCategoryChange(c));
              concerns.forEach(c => selectedConcerns.includes(c) && onConcernChange(c));
            }}
            className="ml-auto flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={14} /> Clear all
          </button>
        )}
      </div>

      {/* Expanded Panels */}
      <AnimatePresence mode="wait">
        {activeTab === 'filter' && (
          <motion.div
            key="filter-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-primary/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                <button
                  onClick={() => setActiveTab(null)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Categories */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Category
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => onCategoryChange(cat)}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                          selectedCategories.includes(cat)
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background text-foreground hover:border-primary/50'
                        }`}
                      >
                        {selectedCategories.includes(cat) && <Check size={14} />}
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Concerns */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Skin Concern
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {concerns.map((concern) => (
                      <button
                        key={concern}
                        onClick={() => onConcernChange(concern)}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                          selectedConcerns.includes(concern)
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background text-foreground hover:border-primary/50'
                        }`}
                      >
                        {selectedConcerns.includes(concern) && <Check size={14} />}
                        {concern}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'sort' && (
          <motion.div
            key="sort-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-primary/10 max-w-sm">
              <div className="flex flex-col gap-1">
                {[
                  { id: 'default', label: 'Featured' },
                  { id: 'best-sellers', label: 'Best Sellers' },
                  { id: 'price-asc', label: 'Price: Low to High' },
                  { id: 'price-desc', label: 'Price: High to Low' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      onSortChange(option.id);
                      setActiveTab(null);
                    }}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      sortOrder === option.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {option.label}
                    {sortOrder === option.id && <Check size={16} />}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFilters;
