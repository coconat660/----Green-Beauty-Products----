import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  // Declaring state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Status messages
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //navigation
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");
    try {
      //Retrieving user Data
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      //adding base url
      const response = await axios.post(
        "https://julietfungo.alwaysdata.net/api/signin",
        formData,
      );

      if (response.data.user) {
        setSuccess(response.data.message);
        setLoading("");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        //navigatio on successsful signing
        navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container-fluid row justify-content-center">
      <div className="col-md-6 card shadow mt-2 p-2">
        <div className="sign-in">
          <h1 className="text-center text-dark">Sign in</h1>

          {/* Binding */}
          {loading}
          <br />
          {error}
          <br />
          {success}
          <br />

          <form onSubmit={handleSignin}>
            <label htmlFor="" className="text-light">
              Email or Username
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <input
              type="submit"
              value="Log in"
              className="btn btn-success w-100"
            />
            <br />

            <p className="text-light">
              Don't Have an Account?{" "}
              <Link to="/signup" className="text-light">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
