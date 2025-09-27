import React, { useState, useEffect } from "react";

export default function LocationScreen() {
  const [message, setMessage] = useState("Fetching location...");
  const airportLat = 28.5562;
  const airportLng = 77.1000;
  const radiusKm = 2;

  useEffect(() => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const distance = getDistanceFromLatLonInKm(
          latitude,
          longitude,
          airportLat,
          airportLng
        );

        if (distance <= radiusKm) {
          setMessage("Inside Airport Zone ✅");
        } else {
          setMessage("Outside Airport Zone ❌");
        }
      },
      (error) => {
        setMessage("Error fetching location. Please enable location services.");
        console.error(error);
      }
    );
  }, []);

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Location Check</h2>
      <p style={styles.message}>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: 400,
    margin: "3rem auto",
    backgroundColor: "#f9f9fc",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  title: {
    color: "#6200ee",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },
  message: {
    fontSize: "1.2rem",
    color: "#333",
    fontWeight: "500",
  },
};
