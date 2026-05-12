import React, { useEffect, useState } from "react";
import image from "../logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
const Getproduct = () => {
  const { addToCart } = useCart();
  // Declaring state variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  // image url
  const img_url = "https://julietfungo.alwaysdata.net/static/images/";

  // navigation
  const navigate = useNavigate();

  // Function to call the products
  const getProducts = async () => {
    setLoading("Please wait as we retrieve products...");

    try {
      const response = await axios.get(
        "https://julietfungo.alwaysdata.net/api/get_product_details",
      );
      setProducts(response.data);
      setLoading("");
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect to retrieve  products automatically
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="row">
      <h3 className="text-success">Available products</h3>
      {loading}
      {error}
      {/* Designing the products card */}

      {products.map((product) => (
        <div
          className="col-md-3 justify-content-center mb-4"
          key={product.product_id}
        >
          <div className="card shadow card-margin">
            <img
              className="mt-2 product_img"
              src={img_url + product.product_photo}
              alt={product.product_photo}
            />

            {/* The product details */}
            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-warning">KES. {product.product_cost}</b>
              <br />
              <div className="d-grid gap-2 mt-2">
                <button
                  className="btn btn-success w-100"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-dark w-100"
                  onClick={() =>
                    navigate("/makepayment", { state: { product } })
                  }
                >
                  Purchase now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getproduct;
