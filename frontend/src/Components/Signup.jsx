import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  // const host = "http://localhost:5000";
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/login");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="container my-2"
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
        Signup
      </h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Enter your name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          onChange={onChange}
          name="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={onChange}
          name="email"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={onChange}
          name="password"
          required
          minLength={5}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="cpassword"
          onChange={onChange}
          name="cpassword"
          required
          minLength={5}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </form>
  );
};

export default Signup;
