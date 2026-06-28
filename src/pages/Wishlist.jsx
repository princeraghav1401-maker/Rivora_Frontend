import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/home/ProductCard';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Wishlist() {
  const cart = useCart();
  const wished = products.filter((p) => cart.wishlist.includes(p.id));
  return <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-cream px-5 py-16 text-forest-800 lg:px-14"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[.35em] text-gold-dark">Saved items</p><h1 className="mt-3 font-display text-5xl md:text-7xl">Wishlist</h1>{wished.length === 0 ? <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm"><p>Wishlist empty hai bhai.</p><Link to="/collections" className="mt-5 inline-flex rounded-full bg-forest-700 px-6 py-3 text-cream">Explore Products</Link></div> : <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{wished.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div>}</div></motion.main>;
}
