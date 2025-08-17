import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Splash.css"; // We'll style it here
import BaseTemplate from './BaseTemplate'; // Update the path as per your project structure

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-image-wrapper">
        <img src="/img/splash-art.png" alt="Color" className="splash-image-color" />
        <img src="/img/splash-art-bw.png" alt="BW" className="splash-image-bw" />
      </div>
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
