import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SaleBanner({ setCategory }) {
  return (
    <section id="sale" className="overflow-hidden bg-forest-800 px-5 py-16 lg:px-14">
      <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2.3rem] border border-gold/20 bg-[linear-gradient(135deg,#263120,#4f573b)] p-8 shadow-2xl md:flex-row md:items-center lg:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Clearance sale</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream md:text-6xl">Up to 70% off on tablewares</h2>
          <p className="mt-4 max-w-2xl text-sage-100">Warm wood, sage green, botanical patterns — perfect for a luxury dining section.</p>
        </div>
        <Link to="/sale" onClick={() => setCategory('Tablewares')} className="btn-primary shrink-0">Explore Deals <ArrowRight size={18} /></Link>
      </motion.div>
    </section>
  );
}
