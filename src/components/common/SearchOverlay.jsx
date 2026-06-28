import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { money } from '../../utils/format';

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.cat.toLowerCase().includes(query.toLowerCase())).slice(0, 6), [query]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-start bg-forest-950/85 p-4 pt-24 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div initial={{ y: -30, opacity: 0, scale: .96 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -30, opacity: 0, scale: .96 }} className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-gold/25 bg-forest-700 shadow-2xl">
            <div className="flex items-center gap-3 p-4">
              <Search className="text-gold" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} autoFocus placeholder="Search cushions, tablewares, acacia wood..." className="w-full bg-transparent p-4 text-cream outline-none placeholder:text-cream/45" />
              <button onClick={onClose} className="nav-icon"><X /></button>
            </div>
            <div className="border-t border-gold/10 p-4">
              {(query ? results : products.slice(0, 4)).map((p, i) => <motion.div key={p.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }}><Link onClick={onClose} to={`/product/${p.id}`} className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-gold/10"><img src={p.img} className="h-14 w-14 rounded-xl object-cover" /><span className="min-w-0 flex-1"><b className="line-clamp-1 text-sm text-cream">{p.title}</b><small className="text-sage-100">{p.cat}</small></span><b className="text-gold">{money(p.price)}</b></Link></motion.div>)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
