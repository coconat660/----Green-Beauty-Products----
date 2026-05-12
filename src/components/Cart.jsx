import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const img_url = "https://julietfungo.alwaysdata.net/static/images/";

export default function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    itemCount,
    totalAmount,
    removeFromCart,
    setQuantity,
    clearCart,
  } = useCart();

  return (
    <div className="container py-3">
      <h3 className="text-success">Your cart</h3>
      <p className="text-muted">{itemCount} item(s)</p>

      {cart.items.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.items.map((item) => (
              <div key={item.product_id} className="card shadow mb-3">
                <div className="card-body d-flex align-items-center gap-3">
                  <img
                    src={img_url + item.product_photo}
                    alt={item.product_photo}
                    style={{ width: 90, height: 90, objectFit: "contain" }}
                  />

                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.product_name}</h5>
                    <div className="text-warning">
                      KES {Number(item.product_cost).toFixed(0)}
                    </div>

                    <div className="d-flex align-items-center gap-2 mt-2">
                      <label className="mb-0">Qty</label>
                      <input
                        type="number"
                        min={1}
                        className="form-control"
                        style={{ width: 110 }}
                        value={item.quantity}
                        onChange={(e) =>
                          setQuantity(item.product_id, e.target.value)
                        }
                      />

                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromCart(item.product_id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-end">
                    <div className="fw-bold">
                      KES {Number(item.product_cost) * item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Total</h5>
              <div className="fs-4 text-warning">
                KES {Number(totalAmount).toFixed(0)}
              </div>

              <div className="d-grid gap-2 mt-3">
                <button
                  className="btn btn-dark"
                  onClick={() =>
                    navigate("/checkout", {
                      state: { totalAmount: totalAmount, items: cart.items },
                    })
                  }
                >
                  Checkout
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
