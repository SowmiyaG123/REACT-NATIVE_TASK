# Airport Check QR Scanner Web App

A simple React web application to scan QR codes and display the scanned text. Built with React, React Router, and `react-qr-reader`.

---

## Features

- Splash screen on app load
- User login screen
- QR code scanner using the device camera
- Displays scanned QR code text instantly
- Navigation between screens with React Router

---

## Tech Stack

- React 18+
- React Router DOM v6
- react-qr-reader
- HTML, CSS

---

## Screens

1. **SplashScreen** – App launch screen  
2. **LoginScreen** – User authentication (simple placeholder)  
3. **ScanScreen** – QR code scanner using device camera  
4. **LocationScreen** – Optional location display screen

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/airport-check-web.git
cd airport-check-web
Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:8080
 in your browser.

⚠️ Make sure to allow camera access for QR code scanning.

Project Structure
airport-check-web/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  └─ SplashScreen.js
│  ├─ Screens/
│  │  ├─ LoginScreen.js
│  │  ├─ ScanScreen.js
│  │  └─ LocationScreen.js
│  ├─ App.js
│  └─ index.js
├─ package.json
└─ README.md

Usage:

1.Launch the app

2.Navigate to the Scan page

3.Allow camera access

4.Point the camera at a QR code

5.The scanned text will display immediately

Troubleshooting:

1.White screen / blank page

=>Make sure React and React DOM versions match

=>Ensure react-qr-reader is installed correctly

2.Camera not working

=>Grant camera permissions in your browser

=>Use HTTPS or localhost

3.QR code not detected

=>Ensure the QR code contains plain text

=>Hold the camera steady and close enough for detection


Screenshots

<img width="1320" height="795" alt="Screenshot 2025-09-27 163902" src="https://github.com/user-attachments/assets/8001380c-4830-4491-ab61-e9615d663503" />

<img width="1421" height="685" alt="Screenshot 2025-09-27 163845" src="https://github.com/user-attachments/assets/f59c282c-a766-4c08-8a55-9163e90c956d" />

<img width="1436" height="437" alt="Screenshot 2025-09-27 163829" src="https://github.com/user-attachments/assets/9c34f4f6-3a6f-4033-9adc-1a1ba163cd81" />
