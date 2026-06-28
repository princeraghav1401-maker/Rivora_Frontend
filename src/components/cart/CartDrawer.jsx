import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { money } from '../../utils/format';

export default function CartDrawer() {
  const cart = useCart();
  return (
    <AnimatePresence>
      {cart.isOpen && <motion.div className="fixed inset-0 z-[70]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <button onClick={cart.close} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 280, damping: 30 }} className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-cream p-6 text-forest-800 shadow-2xl">
          <div className="mb-6 flex items-center justify-between"><h2 className="font-display text-4xl font-semibold">Your Cart</h2><button onClick={cart.close} className="rounded-full bg-forest-700/10 p-2"><X /></button></div>
          {cart.items.length === 0 ? <div className="rounded-2xl bg-white p-5 text-forest-600"><p>Cart empty hai bhai.</p><Link onClick={cart.close} to="/collections" className="mt-4 inline-flex rounded-full bg-forest-700 px-5 py-3 text-cream">Shop Now</Link></div> : cart.items.map(item => <div key={item.id} className="mb-4 grid grid-cols-[78px_1fr] gap-4 rounded-2xl bg-white p-3 shadow-sm"><Link to={`/product/${item.id}`} onClick={cart.close}><img src={item.img} className="h-20 w-20 rounded-xl object-cover" /></Link><div><Link to={`/product/${item.id}`} onClick={cart.close} className="line-clamp-2 text-sm font-medium hover:text-gold-dark">{item.title}</Link><b className="mt-1 block">{money(item.price)}</b><div className="mt-2 flex items-center justify-between"><div className="flex items-center rounded-full bg-cream"><button onClick={() => cart.qty(item.id, -1)} className="p-2"><Minus size={14} /></button><span className="px-2 text-sm">{item.qty}</span><button onClick={() => cart.qty(item.id, 1)} className="p-2"><Plus size={14} /></button></div><button onClick={() => cart.remove(item.id)} className="text-red-700"><Trash2 size={17} /></button></div></div></div>)}
          <div className="sticky bottom-0 mt-6 rounded-3xl bg-forest-700 p-5 text-cream"><div className="mb-4 flex justify-between"><span>Total</span><b>{money(cart.total)}</b></div><Link onClick={cart.close} to="/checkout" className="block w-full rounded-full bg-gold py-3 text-center font-bold text-forest-950">Checkout</Link></div>
        </motion.aside>
      </motion.div>}
    </AnimatePresence>
  );
}
