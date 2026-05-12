export const CART_ADD = "CART_ADD";
export const CART_REMOVE = "CART_REMOVE";
export const CART_CLEAR = "CART_CLEAR";
export const CART_SET_QUANTITY = "CART_SET_QUANTITY";

// Cart item shape (front-end):
// {
//   product_id, product_name, product_cost, product_photo, quantity
// }

const toNumber = (v) => {
  if (typeof v === "number") return v;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ADD: {
      const item = action.payload;
      const id = item.product_id;
      const cost = toNumber(item.product_cost);

      const existing = state.items.find((i) => i.product_id === id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product_id === id
              ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
              : i,
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...item,
            product_cost: cost,
            quantity: item.quantity ?? 1,
          },
        ],
      };
    }

    case CART_REMOVE: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.filter((i) => i.product_id !== id),
      };
    }

    case CART_SET_QUANTITY: {
      const { product_id, quantity } = action.payload;
      const q = Math.max(1, toNumber(quantity));
      return {
        ...state,
        items: state.items.map((i) =>
          i.product_id === product_id ? { ...i, quantity: q } : i,
        ),
      };
    }

    case CART_CLEAR:
      return { ...state, items: [] };

    default:
      return state;
  }
}
