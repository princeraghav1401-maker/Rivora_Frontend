import { Heart, Menu, Search, ShoppingBag, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

export default function NavActions({ onSearch, onMenu }) {
  const cart = useCart();
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <motion.button whileTap={{ scale: .9 }} onClick={onSearch} className="nav-icon" aria-label="Search"><Search size={20} /></motion.button>
      <motion.button whileTap={{ scale: .9 }} onClick={() => navigate('/wishlist')} className="nav-icon relative hidden sm:grid" aria-label="Wishlist"><Heart size={20} />{cart.wishCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-forest-950">{cart.wishCount}</span>}</motion.button>
      <motion.button whileTap={{ scale: .9 }} onClick={() => navigate('/contact')} className="nav-icon hidden sm:grid" aria-label="Account"><UserRound size={20} /></motion.button>
      <motion.button whileTap={{ scale: .9 }} onClick={cart.open} className="nav-icon relative" aria-label="Cart">
        <ShoppingBag size={20} />
        {cart.count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-forest-950">{cart.count}</span>}
      </motion.button>
      <motion.button whileTap={{ scale: .9 }} onClick={onMenu} className="nav-icon lg:hidden" aria-label="Menu"><Menu size={22} /></motion.button>
    </div>
  );
}
