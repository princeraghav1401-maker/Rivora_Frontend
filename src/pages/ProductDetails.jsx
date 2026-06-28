import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Heart, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { money } from '../utils/format';
import ProductCard from '../components/home/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const cart = useCart();
  const related = products.filter((p) => p.cat === product.cat && p.id !== product.id).slice(0, 4);
  const wished = cart.wishlist.includes(product.id);
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-cream text-forest-800">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-2 lg:px-14 lg:py-20">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl"><img src={product.img} className="h-full min-h-[440px] w-full object-cover" /><span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-2 text-sm font-bold text-forest-950">{product.off}% OFF</span></motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col justify-center">
          <Link to="/collections" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-600 hover:text-gold-dark"><ArrowLeft size={17} /> Back to Collections</Link>
          <p className="text-xs uppercase tracking-[.35em] text-gold-dark">{product.cat}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">{product.title}</h1>
          <p className="mt-5 text-lg leading-8 text-forest-600">{product.desc}</p>
          <div className="mt-5 flex items-center gap-3"><span className="flex items-center gap-1 rounded-full bg-forest-700/10 px-3 py-1"><Star size={16} className="fill-gold text-gold" /> {product.rating}</span><span className="text-sm text-forest-600">Premium handcrafted quality</span></div>
          <div className="mt-7 flex flex-wrap items-end gap-4"><b className="font-display text-4xl text-forest-800">{money(product.price)}</b><del className="text-xl text-forest-600/50">{money(product.old)}</del></div>
          <div className="mt-8 flex flex-wrap gap-4"><button onClick={() => cart.add(product)} className="btn-primary"><ShoppingBag size={18} /> Add to Cart</button><button onClick={() => cart.toggleWish(product.id)} className="btn-ghost !border-forest-700/20 !text-forest-800 hover:!bg-forest-700/10"><Heart size={18} fill={wished ? 'currentColor' : 'none'} /> Wishlist</button></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">{[[Truck, 'Fast Delivery', 'India-wide premium shipping'], [ShieldCheck, 'Secure Quality', 'Inspected handcrafted pieces']].map(([Icon, title, text]) => <div key={title} className="rounded-2xl border border-forest-700/10 bg-white p-5"><Icon className="text-gold-dark" /><b className="mt-3 block">{title}</b><p className="text-sm text-forest-600">{text}</p></div>)}</div>
        </motion.div>
      </section>
      <section className="px-5 pb-20 lg:px-14"><div className="mx-auto max-w-7xl"><h2 className="mb-8 font-display text-4xl">Related Products</h2><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div></div></section>
    </motion.main>
  );
}
