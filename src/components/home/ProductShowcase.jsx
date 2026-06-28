import { useState } from 'react';
import { categories, products } from '../../data/products';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import SectionTitle from '../common/SectionTitle';
import ProductCard from './ProductCard';

export default function ProductShowcase({ category, setCategory }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('rating');
  const visible = useFilteredProducts(products, category, query, sort);

  return (
    <section id="products" className="bg-cream px-5 py-20 lg:px-14">
      <SectionTitle dark={false} eyebrow="New arrivals" title={category === 'All' ? 'Fresh picks for your home' : category} text="A clean product-grid like your reference screenshots, but with premium hover states and cart interactions." />
      <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 rounded-[1.5rem] border border-forest-700/10 bg-white p-3 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map(c => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-2 text-sm transition ${category === c ? 'bg-forest-700 text-cream' : 'bg-forest-700/5 text-forest-700 hover:bg-forest-700/10'}`}>{c}</button>)}
        </div>
        <div className="flex gap-3">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." className="min-w-0 rounded-full border border-forest-700/10 bg-cream px-4 py-2 text-sm text-forest-800 outline-none focus:border-gold" />
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border border-forest-700/10 bg-cream px-4 py-2 text-sm text-forest-800 outline-none">
            <option value="rating">Top Rated</option><option value="discount">Best Discount</option><option value="price-low">Price Low</option><option value="price-high">Price High</option>
          </select>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((product, i) => <ProductCard product={product} index={i} key={product.id} />)}
      </div>
    </section>
  );
}
