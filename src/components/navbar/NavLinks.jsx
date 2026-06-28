import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { categories, navItems } from '../../data/products';

export default function NavLinks({ onCategory }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const activeClass = ({ isActive }) => `relative py-8 transition duration-300 hover:text-gold after:absolute after:left-0 after:bottom-6 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${isActive ? 'text-gold after:w-full' : 'after:w-0 hover:after:w-full'}`;

  return (
    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-cream/80">
      {navItems.map((item) => item.label === 'Collections' ? (
        <div key={item.label} ref={ref} className="relative py-8">
          <button type="button" onClick={() => setOpen((v) => !v)} className={`flex items-center gap-1 transition hover:text-gold ${open ? 'text-gold' : ''}`}>
            Shop Now <ChevronDown size={15} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ opacity: 0, y: 18, scale: .96, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, y: 12, scale: .96, filter: 'blur(8px)' }} transition={{ duration: .24 }} className="absolute left-0 top-[76px] z-50 w-[310px] overflow-hidden rounded-[1.6rem] border border-gold/20 bg-forest-900/95 p-3 shadow-2xl backdrop-blur-2xl">
                <div className="mb-2 rounded-2xl border border-gold/10 bg-gold/10 p-4">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[.25em] text-gold"><Sparkles size={13} /> Premium Menu</p>
                  <p className="mt-1 text-xs leading-5 text-sage-100">Choose a category and explore curated home essentials.</p>
                </div>
                {categories.slice(1).map((cat, i) => (
                  <motion.button key={cat} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }} onClick={() => { onCategory(cat); setOpen(false); navigate('/collections'); }} className="block w-full rounded-xl px-4 py-3 text-left text-cream/75 transition hover:bg-gold/10 hover:pl-6 hover:text-gold">{cat}</motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <NavLink key={item.label} to={item.path} className={activeClass}>{item.label}</NavLink>
      ))}
    </div>
  );
}
