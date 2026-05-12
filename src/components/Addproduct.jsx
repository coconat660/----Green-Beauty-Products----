import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Addproduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");

    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const response = await axios.post(
        "https://julietfungo.alwaysdata.net/api/add_product",
        formData,
      );

      setLoading("");
      setSuccess(response.data.success);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div
      className="row justify-content-center add-product"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://public/greenbeauty6.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="col-md-6 card shadow mt-2 p-4"
        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="p-2 text-success">Add Product</h2>

          <p className="text-info">{loading}</p>
          <p className="text-danger">{error}</p>
          <p className="text-success">{success}</p>

          <nav>
            <Link to="/" className="btn btn-dark mb-3">
              GET ALL PRODUCTS
            </Link>
          </nav>

          <input
            type="text"
            placeholder="Enter product name"
            className="form-control"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <br />

          <textarea
            className="form-control"
            placeholder="Enter product description"
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
          <br />

          <input
            type="number"
            placeholder="Enter product cost"
            className="form-control"
            onChange={(e) => setProductCost(e.target.value)}
            required
          />
          <br />

          <input
            type="file"
            className="form-control"
            onChange={(e) => setProductPhoto(e.target.files[0])}
            required
          />
          <br />

          <input
            type="submit"
            value="Add Product"
            className="btn btn-success w-100"
          />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
