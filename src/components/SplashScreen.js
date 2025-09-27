import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Airport Check</h1>
      <div style={styles.loader}></div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6200ee",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "2rem",
    fontWeight: "bold",
  },
  loader: {
    width: 40,
    height: 40,
    border: "5px solid #fff",
    borderTop: "5px solid #a98cff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  // CSS animation keyframes cannot be declared here, so ensure you add in css file:
  // @keyframes spin {
  //   0% { transform: rotate(0deg); }
  //   100% { transform: rotate(360deg); }
  // }
};
