import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="grid gap-12 bg-forest-700 px-5 py-16 text-cream md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-14">
        <div>
          <h3 className="font-display text-5xl font-bold text-gold">रिवोरा</h3>
          <p className="mt-4 max-w-sm text-sage-100">Subscribe for mailers and get exciting offers on nature-inspired home decor.</p>
          <div className="mt-6 flex max-w-sm overflow-hidden rounded-2xl bg-white/10 p-2">
            <input placeholder="Email" className="min-w-0 flex-1 bg-transparent px-4 text-cream outline-none placeholder:text-cream/60" />
            <button className="grid h-11 w-11 place-items-center rounded-full bg-cream text-forest-800 transition hover:bg-gold"><Send size={18} /></button>
          </div>
          <div className="mt-6 flex gap-4 text-cream"><a href="https://facebook.com" target="_blank" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-forest-950">f</a><a href="https://instagram.com" target="_blank" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-forest-950">◎</a></div>
        </div>
        <div><h4 className="mb-4 font-semibold uppercase tracking-widest">Care</h4>{[['Contact','/contact'], ['Search','/collections'], ['Blog','/about']].map(([x,path]) => <Link to={path} className="block py-2 text-sage-100 hover:text-gold" key={x}>{x}</Link>)}</div>
        <div><h4 className="mb-4 font-semibold uppercase tracking-widest">Information</h4>{['Privacy Policy', 'Shipping Policy', 'Terms Of Service', 'Returns And Exchange', 'Track Order'].map(x => <Link to="/contact" className="block py-2 text-sage-100 hover:text-gold" key={x}>{x}</Link>)}</div>
        <div><h4 className="mb-4 font-semibold uppercase tracking-widest">Store</h4><p className="text-sage-100">Our Email: connect@paudhahome.com</p><p className="mt-4 text-sage-100">Company Name: Indian Luxury Homes</p><Link to="/collections" className="mt-6 inline-flex rounded-full border border-gold/25 px-5 py-3 text-gold transition hover:bg-gold hover:text-forest-950">Shop Collection</Link></div>
      </footer>
      <div className="bg-forest-950 px-5 py-5 text-center text-xs text-sage-100">© 2026 All Right Reserved, Rivora Nature</div>
    </>
  );
}
