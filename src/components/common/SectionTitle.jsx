import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, text, dark = true }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className={`font-display text-4xl font-semibold md:text-6xl ${dark ? 'text-cream' : 'text-forest-700'}`}>{title}</h2>
      {text && <p className={`mx-auto mt-4 max-w-2xl leading-8 ${dark ? 'text-sage-100' : 'text-forest-600/75'}`}>{text}</p>}
    </motion.div>
  );
}
