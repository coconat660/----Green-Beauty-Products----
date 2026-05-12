import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";

export default function SimpleCartBadge() {
  const { itemCount } = useCart();
  return (
    <Link to="/cart" className="btn btn-outline-success ms-2">
      Cart{" "}
      {itemCount > 0 ? (
        <span className="badge bg-success ms-1">{itemCount}</span>
      ) : null}
    </Link>
  );
}
