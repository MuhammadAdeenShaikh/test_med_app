import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required!");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(form.email)) {
      setError("Enter a valid email!");
      return;
    }

    setError("");
    
    // Login data console par print karein
    console.log("Login Data:", form);
    alert("Login Successful!");
    
    // Form reset karein
    setForm({ email: "", password: "" });
  };

  const handleReset = () => {
    setForm({ email: "", password: "" });
    setError("");
  };

  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>

        <div className="login-text">
          Are you a new member?{" "}
          <span>
            <a href="/signup" style={{ color: "#2190FF" }}>
              Sign Up Here
            </a>
          </span>
        </div>

        <br />

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="Enter your password"
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>

              <button type="button" className="btn btn-danger" onClick={handleReset}>
                Reset
              </button>
            </div>

            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;