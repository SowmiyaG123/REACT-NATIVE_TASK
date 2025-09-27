import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

export default function ScanScreen() {
  const [scannedText, setScannedText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: 250,
      disableFlip: false,
    });

    scanner.render(
      (decodedText) => {
        setScannedText(decodedText);
        scanner.clear().catch((error) => {
          console.error("Failed to clear scanner:", error);
        });
      },
      (error) => {
        // Scan errors or no QR code found in frame, can be ignored or logged
        // console.warn("QR scan error:", error);
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Boarding Pass Scan</h2>
      <div id="reader" style={styles.reader}></div>
      {scannedText && (
        <p style={styles.scannedText}>
          <strong>Scanned Text:</strong> {scannedText}
        </p>
      )}
      <button onClick={() => navigate("/location")}>Check Location</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: 600,
    margin: "2rem auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    backgroundColor: "#f9f9fc",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#6200ee",
    fontWeight: "700",
    fontSize: "2rem",
    marginBottom: "1.25rem",
  },
  reader: {
    width: "100%",
    maxWidth: 500,
    margin: "0 auto 1.5rem",
  },
  scannedText: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "1.5rem",
  },
  button: {
    backgroundColor: "#6200ee",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
};
