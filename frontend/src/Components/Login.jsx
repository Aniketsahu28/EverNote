import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const BACKEND_URL = process.env.BACKEND_URL;

const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = credentials;
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        console.log(localStorage.getItem("token"));
        props.showAlert("Logged in successfully", "success");
        navigate("/");
      } else {
        props.showAlert("Invalid details", "danger");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="container my-5"
      style={{
        border: "1px solid grey",
        padding: "10px 10px",
        width: "80vw",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
      onSubmit={handleSubmit}
    >
      <h2 style={{ textAlign: "center", color: "green" }} className="my-3">
        Login
      </h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>

      <p className="mt-3">
        Don't have an account ? <Link to="/signup">Signup</Link>
      </p>
    </form>
  );
};

export default Login;
