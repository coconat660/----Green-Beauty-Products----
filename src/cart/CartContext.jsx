import React, { createContext, useEffect, useMemo, useReducer } from "react";
import {
  cartReducer,
  CART_ADD,
  CART_CLEAR,
  CART_REMOVE,
  CART_SET_QUANTITY,
} from "./cartReducer";

const CART_STORAGE_KEY = "greenbeauty_cart_v1";

const CartContext = createContext(null);

const defaultState = {
  items: [],
};

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, defaultState, (initial) => {
    if (typeof window === "undefined") return initial;
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return initial;
    const parsed = safeParse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return initial;
    return { items: parsed.items };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalAmount = state.items.reduce(
      (sum, i) => sum + Number(i.product_cost) * i.quantity,
      0,
    );

    return {
      cart: state,
      itemCount,
      totalAmount,
      addToCart: (product, quantity = 1) =>
        dispatch({ type: CART_ADD, payload: { ...product, quantity } }),
      removeFromCart: (product_id) =>
        dispatch({ type: CART_REMOVE, payload: product_id }),
      setQuantity: (product_id, quantity) =>
        dispatch({
          type: CART_SET_QUANTITY,
          payload: { product_id, quantity },
        }),
      clearCart: () => dispatch({ type: CART_CLEAR }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
