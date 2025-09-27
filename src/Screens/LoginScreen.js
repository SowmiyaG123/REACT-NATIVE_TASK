import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    navigate("/scan");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back!</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "0 1rem",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem 3rem",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: 400,
  },
  title: {
    marginBottom: "1.5rem",
    color: "#6200ee",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "0.8rem 1rem",
    marginBottom: "1rem",
    borderRadius: 8,
    border: "1.5px solid #6200ee",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    backgroundColor: "#6200ee",
    color: "#ffffff",
    padding: "0.8rem",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
};

