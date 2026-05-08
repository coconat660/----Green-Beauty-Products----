import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 50, 30, 0.6)",
        }}
      />

      {/* Contact Form Container */}
      <div
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "500px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#2e7d32" }}>
          Contact Green Beauty
        </h2>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          We’d love to hear from you 🌿
        </p>

        <form>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={{ ...inputStyle, resize: "none" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
  outline: "none",
};

export default ContactUs;
