import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavActions from './NavActions';
import MobileMenu from './MobileMenu';
import SearchOverlay from '../common/SearchOverlay';

export default function Navbar({ setCategory }) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 120], ['rgba(79,87,59,.72)', 'rgba(26,36,28,.94)']);

  return (
    <>
      <div className="bg-forest-950 py-2 text-center text-xs text-sage-100">Free shipping above ₹999 • Premium handcrafted home decor</div>
      <motion.header style={{ backgroundColor: bg }} className="sticky top-0 z-40 border-b border-gold/15 px-4 backdrop-blur-xl lg:px-14">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <NavLinks onCategory={setCategory} />
          <Logo />
          <NavActions onSearch={() => setSearch(true)} onMenu={() => setMenu(true)} />
        </nav>
      </motion.header>
      <MobileMenu open={menu} onClose={() => setMenu(false)} onCategory={setCategory} />
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  );
}
