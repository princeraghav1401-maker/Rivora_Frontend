import { ShieldCheck, Truck, Undo2, WalletCards } from 'lucide-react';

const features = [
  { icon: Truck, title: 'Fast Delivery', text: 'India-wide shipping UI' },
  { icon: ShieldCheck, title: 'Premium Quality', text: 'Curated handmade look' },
  { icon: Undo2, title: 'Easy Returns', text: 'Friendly policy section' },
  { icon: WalletCards, title: 'Secure Checkout', text: 'Cart-ready frontend' }
];

export default function FeatureStrip() {
  return <section className="grid border-y border-gold/15 bg-forest-800 md:grid-cols-4">{features.map(({ icon: Icon, title, text }) => <div key={title} className="flex items-center gap-4 border-gold/15 p-6 md:border-r lg:px-12"><Icon className="text-gold" /><div><b className="block text-cream">{title}</b><span className="text-sm text-sage-100">{text}</span></div></div>)}</section>;
}
