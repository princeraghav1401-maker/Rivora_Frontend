import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';

export default function Contact() {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-cream px-5 py-20 text-forest-800 lg:px-14">
      <SectionTitle dark={false} eyebrow="Need help" title="Contact" text="Questions, bulk orders, collaborations or support — message us below." />
      <form className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
        <input className="form-input" placeholder="Name" />
        <input className="form-input" placeholder="Email *" />
        <input className="form-input md:col-span-2" placeholder="Phone number" />
        <textarea className="form-input min-h-40 md:col-span-2" placeholder="Comment" />
        <button type="button" className="w-fit rounded-full bg-forest-700 px-8 py-4 font-semibold text-cream transition hover:bg-gold hover:text-forest-950">Send Message</button>
      </form>
    </motion.section>
  );
}
