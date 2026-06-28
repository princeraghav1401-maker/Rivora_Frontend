import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero-premium.png';

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-forest-900">
      <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} src={hero} alt="Rivora premium hero" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/65 via-forest-950/20 to-forest-950/10" />
      <motion.div animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }} transition={{ duration: 9, repeat: Infinity }} className="absolute right-[8%] top-[12%] hidden h-40 w-40 rounded-full border border-gold/20 lg:block" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 py-20 lg:px-14">
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: .85 }} className="max-w-2xl">
          <motion.div whileHover={{ scale: 1.03 }} className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-forest-950/30 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold backdrop-blur-xl">
            <Sparkles size={15} /> Nature. Elegance. Home.
          </motion.div>
          <motion.h1 variants={fadeUp} transition={{ delay: .12 }} className="font-display text-5xl font-bold leading-[1.02] text-cream drop-shadow-2xl md:text-7xl">Natural textures, elegant details</motion.h1>
          <motion.p variants={fadeUp} transition={{ delay: .2 }} className="mt-6 max-w-xl text-base leading-8 text-sage-100 md:text-lg">Discover premium home decor and lifestyle essentials crafted from nature, designed for timeless living.</motion.p>
          <motion.div variants={fadeUp} transition={{ delay: .3 }} className="mt-8 flex flex-wrap gap-4">
            <Link to="/collections" className="btn-primary group">Shop Collection <ArrowRight size={18} className="transition group-hover:translate-x-1" /></Link>
            <Link to="/about" className="btn-ghost">Explore Story</Link>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ delay: .42 }} className="mt-10 grid grid-cols-1 gap-4 border-t border-gold/15 pt-7 text-sm text-cream/85 sm:grid-cols-3">
            {[['Natural', 'Materials', Leaf], ['Handcrafted', 'With Care', Home], ['Premium', 'Quality', ShieldCheck]].map(([a, b, Icon]) => <div key={a} className="flex items-center gap-3"><Icon className="text-gold" size={24} /><span><b className="block uppercase tracking-widest">{a}</b><small className="uppercase tracking-widest text-sage-100">{b}</small></span></div>)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
