import { useMemo } from 'react';

export function useFilteredProducts(products, category, query, sort) {
  return useMemo(() => {
    const text = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const catMatch = category === 'All' || p.cat === category;
      const textMatch = !text || `${p.title} ${p.cat} ${p.tag}`.toLowerCase().includes(text);
      return catMatch && textMatch;
    });

    if (sort === 'price-low') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-high') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'discount') list = [...list].sort((a, b) => b.off - a.off);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, category, query, sort]);
}
