import Hero from '../components/home/Hero';
import FeatureStrip from '../components/home/FeatureStrip';
import CategoryGrid from '../components/home/CategoryGrid';
import ProductShowcase from '../components/home/ProductShowcase';
import SaleBanner from '../components/home/SaleBanner';
import Story from '../components/home/Story';

export default function Home({ category, setCategory }) {
  return <><Hero /><FeatureStrip /><CategoryGrid setCategory={setCategory} /><ProductShowcase category={category} setCategory={setCategory} /><SaleBanner setCategory={setCategory} /><Story /></>;
}
