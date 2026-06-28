import ProductShowcase from '../components/home/ProductShowcase';
import SaleBanner from '../components/home/SaleBanner';

export default function Sale({ setCategory }) {
  return <><SaleBanner setCategory={setCategory} /><ProductShowcase category="Tablewares" setCategory={setCategory} /></>;
}
