import { motion } from 'framer-motion';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { money } from '../../utils/format';

export default function ProductCard({ product, index = 0 }) {
  const cart = useCart();
  const wished = cart.wishlist.includes(product.id);
  return (
    <motion.article layout initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * .035, duration: .45 }} whileHover={{ y: -8 }} className="group text-forest-800">
      <div className="relative h-[340px] overflow-hidden rounded-[1.4rem] bg-white shadow-sm md:h-[410px]">
        <Link to={`/product/${product.id}`}><img src={product.img} alt={product.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /></Link>
        <div className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-forest-700 shadow">{product.off}% off</div>
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
          <button onClick={() => cart.toggleWish(product.id)} className={`grid h-10 w-10 place-items-center rounded-full bg-cream/90 shadow transition ${wished ? 'text-red-600' : 'text-forest-700 hover:text-gold'}`}><Heart size={18} fill={wished ? 'currentColor' : 'none'} /></button>
          <Link to={`/product/${product.id}`} className="grid h-10 w-10 place-items-center rounded-full bg-cream/90 text-forest-700 shadow transition hover:text-gold"><Eye size={18} /></Link>
        </div>
        <button onClick={() => cart.add(product)} className="absolute bottom-4 left-4 right-4 flex translate-y-20 items-center justify-center gap-2 rounded-full bg-forest-700 px-5 py-3 font-semibold text-cream transition duration-300 hover:bg-gold hover:text-forest-950 group-hover:translate-y-0"><ShoppingBag size={18} /> Add to cart</button>
      </div>
      <div className="pt-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="rounded-full bg-forest-700/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-forest-600">{product.tag}</span>
          <span className="flex items-center gap-1 text-sm text-forest-600"><Star size={14} className="fill-gold text-gold" /> {product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`} className="line-clamp-2 block min-h-12 text-[15px] font-medium leading-6 transition hover:text-gold-dark">{product.title}</Link>
        <div className="mt-3 flex flex-wrap items-center gap-3"><b>{money(product.price)}</b><del className="text-sm text-forest-600/55">{money(product.old)}</del></div>
      </div>
    </motion.article>
  );
}
