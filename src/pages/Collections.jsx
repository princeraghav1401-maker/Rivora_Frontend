import ProductShowcase from '../components/home/ProductShowcase';
import CategoryGrid from '../components/home/CategoryGrid';

export default function Collections({ category, setCategory }) {
  return <><div className="bg-forest-900 px-5 py-16 text-center lg:px-14"><p className="text-xs uppercase tracking-[.35em] text-gold">Rivora collections</p><h1 className="mt-3 font-display text-5xl text-cream md:text-7xl">Shop Now</h1></div><CategoryGrid setCategory={setCategory} /><ProductShowcase category={category} setCategory={setCategory} /></>;
}
