import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Splash.css"; // We'll style it here
import BaseTemplate from './BaseTemplate'; // Update the path as per your project structure

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src="/img/splash-art.png" alt="Splash" className="splash-image" />
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
          <Router>
            <Routes>

              {/* Catch-all route for all other paths */}
              <Route path="*" element={<MainApp />} />
            </Routes>
          </Router>
      )}
    </>
  );
}

function MainApp() {
  return (
    <div className="App">
      <BaseTemplate />
    </div>
  );
}

export default App;
