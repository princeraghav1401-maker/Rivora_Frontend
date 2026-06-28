import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories, products } from '../../data/products';
import SectionTitle from '../common/SectionTitle';

export default function CategoryGrid({ setCategory }) {
  return (
    <section className="bg-forest-900 px-5 py-20 lg:px-14">
      <SectionTitle eyebrow="Shop by category" title="Natural textures, elegant details" text="Choose from cushions, tablewares, kitchen linens and home decor with sage-green premium styling." />
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.slice(1).map((cat, i) => {
          const product = products.find(p => p.cat === cat);
          return <motion.div key={cat} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .07 }} viewport={{ once: true }}>
            <Link to="/collections" onClick={() => setCategory(cat)} className="group relative block h-72 overflow-hidden rounded-[1.8rem] border border-gold/20 bg-forest-700 shadow-xl">
              <img src={product.img} alt={cat} className="h-full w-full object-cover brightness-75 transition duration-700 group-hover:scale-110 group-hover:brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
              <span className="absolute bottom-6 left-6 font-display text-3xl font-semibold text-cream">{cat}</span>
            </Link>
          </motion.div>;
        })}
      </div>
    </section>
  );
}
