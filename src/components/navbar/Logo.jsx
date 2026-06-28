import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo-rivora.png';

export default function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <motion.span whileHover={{ rotate: 6, scale: 1.06 }} className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-gold/30 bg-forest-950/55 shadow-gold">
        <img src={logo} alt="Rivora" className="h-full w-full object-cover" />
      </motion.span>
      <span className="leading-none">
        <span className="block font-display text-3xl font-bold tracking-tight text-cream transition group-hover:text-gold">रि-वोरा</span>
        <span className="block text-[9px] uppercase tracking-[0.28em] text-sage-200">Nature Home</span>
      </span>
    </Link>
  );
}
