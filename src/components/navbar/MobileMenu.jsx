import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { categories, navItems } from '../../data/products';
import logo from '../../assets/logo-rivora.png';

export default function MobileMenu({ open, onClose, onCategory }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={onClose} />
          <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 260, damping: 30 }} className="relative h-full w-[86%] max-w-sm overflow-y-auto border-r border-gold/20 bg-forest-900 p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3"><img src={logo} className="h-12 w-12 rounded-full object-cover" /><h2 className="font-display text-3xl text-gold">रिवोरा</h2></div>
              <button onClick={onClose} className="nav-icon"><X size={20} /></button>
            </div>
            <div className="space-y-2">
              {[...navItems, { label: 'Wishlist', path: '/wishlist' }].map((item) => <NavLink key={item.label} to={item.path} onClick={onClose} className="block rounded-2xl px-4 py-3 text-cream/80 hover:bg-gold/10 hover:text-gold">{item.label}</NavLink>)}
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-gold">Shop Categories</p>
            <div className="mt-3 grid gap-2">
              {categories.slice(1).map(cat => <NavLink to="/collections" key={cat} onClick={() => { onCategory(cat); onClose(); }} className="rounded-2xl bg-white/5 px-4 py-3 text-cream/70 hover:bg-gold/10 hover:text-gold">{cat}</NavLink>)}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
