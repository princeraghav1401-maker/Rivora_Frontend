import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.items.find((item) => item.id === action.product.id);
      const items = exists
        ? state.items.map((item) => item.id === action.product.id ? { ...item, qty: item.qty + 1 } : item)
        : [...state.items, { ...action.product, qty: 1 }];
      return { ...state, items, isOpen: true };
    }
    case 'REMOVE': return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    case 'QTY': return { ...state, items: state.items.map((item) => item.id === action.id ? { ...item, qty: Math.max(1, item.qty + action.delta) } : item) };
    case 'OPEN': return { ...state, isOpen: true };
    case 'CLOSE': return { ...state, isOpen: false };
    case 'WISH': return { ...state, wishlist: state.wishlist.includes(action.id) ? state.wishlist.filter((id) => id !== action.id) : [...state.wishlist, action.id] };
    default: return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false, wishlist: [] });
  const value = useMemo(() => ({
    ...state,
    count: state.items.reduce((sum, item) => sum + item.qty, 0),
    wishCount: state.wishlist.length,
    total: state.items.reduce((sum, item) => sum + item.price * item.qty, 0),
    add: (product) => dispatch({ type: 'ADD', product }),
    remove: (id) => dispatch({ type: 'REMOVE', id }),
    qty: (id, delta) => dispatch({ type: 'QTY', id, delta }),
    open: () => dispatch({ type: 'OPEN' }),
    close: () => dispatch({ type: 'CLOSE' }),
    toggleWish: (id) => dispatch({ type: 'WISH', id })
  }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
