import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const ScanScreen = () => {
  const [scannedText, setScannedText] = useState("");
  const html5QrCodeRef = useRef(null);
  const timerRef = useRef(null);
  const cameraIdRef = useRef(null);

  useEffect(() => {
    // Initialize Html5Qrcode
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCodeRef.current = html5QrCode;

    // Get camera list and start scanning
    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          cameraIdRef.current = devices[0].id;
          startScanning();
        } else {
          console.error("No camera found");
        }
      })
      .catch((err) => console.error("Error getting cameras", err));

    return () => {
      stopScanning();
    };
  }, []);

  const startScanning = () => {
    if (!html5QrCodeRef.current || !cameraIdRef.current) return;

    html5QrCodeRef.current
      .start(
        cameraIdRef.current,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          console.log("QR Code detected:", decodedText);
          setScannedText(decodedText);
          resetTimer(); // reset inactivity timer
        },
        (errorMessage) => {
          // handle decode errors or just ignore
        }
      )
      .then(() => {
        console.log("QR scanning started.");
        resetTimer();
      })
      .catch((err) => console.error("Error starting scan", err));
  };

  const stopScanning = () => {
    if (html5QrCodeRef.current) {
      html5QrCodeRef.current.stop().catch((err) => console.error(err));
    }
    clearTimeout(timerRef.current);
  };

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      console.log("Stopped scanning due to inactivity.");
      stopScanning();
    }, 15000); // stop after 15s of no QR detection
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>QR Scanner</h2>
      <div
        id="reader"
        style={{ width: "300px", margin: "auto", border: "1px solid #ccc" }}
      ></div>
      <h3>Scanned Text:</h3>
      <p>{scannedText || "No QR code detected yet."}</p>
      <button onClick={startScanning} style={{ padding: "10px 20px" }}>
        Start Scanning
      </button>
      <button onClick={stopScanning} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Stop Scanning
      </button>
    </div>
  );
};

export default ScanScreen;
