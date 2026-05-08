import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-success">About Green Beauty 🌿</h1>
        <p className="text-muted">
          Enhancing natural beauty with safe, organic, and eco-friendly
          cosmetics.
        </p>
      </div>

      {/* About Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
            alt="Green Beauty"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h3>Who We Are</h3>
          <p>
            Green Beauty is a cosmetic brand dedicated to providing
            high-quality, natural, and environmentally friendly beauty products.
            We believe that beauty should never come at the cost of your health
            or the planet.
          </p>

          <h4>Our Mission</h4>
          <p>
            To empower individuals with safe, effective, and sustainable beauty
            solutions made from nature’s finest ingredients.
          </p>

          <h4>Our Vision</h4>
          <p>
            To become a leading eco-conscious beauty brand that promotes
            confidence, self-care, and environmental responsibility.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-5">
        <h2 className="text-center text-success mb-4">
          Why Choose Green Beauty?
        </h2>

        <div className="row text-center">
          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>🌿 Natural Ingredients</h5>
              <p>We use 100% natural and skin-friendly ingredients.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>🐰 Cruelty-Free</h5>
              <p>We never test our products on animals.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>♻️ Eco-Friendly</h5>
              <p>Our packaging is sustainable and recyclable.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow">
              <h5>✨ Proven Results</h5>
              <p>Our products are trusted and loved by many customers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h4>Join the Green Beauty Movement 💚</h4>
        <p>
          Experience the power of nature and transform your beauty routine
          today.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
