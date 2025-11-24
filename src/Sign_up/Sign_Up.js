import React, { useState } from "react";
import "./Sign_Up.css";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.password) {
      setError("All fields are required!");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setError("Phone number must be 10 digits!");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(form.email)) {
      setError("Enter a valid email!");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    setError("");
    
    // Form data console par print karein
    console.log("Sign Up Data:", form);
    alert("Sign Up Successful!");
    
    // Form reset karein
    setForm({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  const handleReset = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
    setError("");
  };

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>

        <div className="signup-text1">
          Already a member?
          <span>
            <a href="/login" style={{ color: "#2190FF" }}>
              Login
            </a>
          </span>
        </div>

        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Enter your phone number"
                maxLength="10"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                Submit
              </button>
              <button type="button" className="btn btn-danger" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;