import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Lightweight page that forwards checkout data to Mpesa payment.

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};

  const { totalAmount, items } = state;

  // Fallback if user lands here directly.
  if (!items || !Array.isArray(items) || items.length === 0) {
    return (
      <div className="container py-3">
        <div className="alert alert-warning">No items to checkout.</div>
        <button className="btn btn-success" onClick={() => navigate("/cart")}>
          Go to cart
        </button>
      </div>
    );
  }

  // Ensure totalAmount is numeric.
  const amount = Number(totalAmount);

  return (
    <div className="container py-3">
      <h3 className="text-success">Checkout</h3>
      <p className="text-muted">
        You are about to pay <b>KES {Number(amount).toFixed(0)}</b>.
      </p>

      <div className="card shadow p-3">
        <h5>Items</h5>
        <ul className="mb-0">
          {items.map((i) => (
            <li key={i.product_id}>
              {i.product_name} × {i.quantity}
            </li>
          ))}
        </ul>

        <div className="d-grid gap-2 mt-4">
          <button
            className="btn btn-dark"
            onClick={() =>
              navigate("/makepayment", {
                state: {
                  cartCheckout: true,
                  totalAmount: amount,
                  items,
                },
              })
            }
          >
            Proceed to Mpesa Payment
          </button>
        </div>
      </div>
    </div>
  );
}
