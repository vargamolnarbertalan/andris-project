import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseTemplate from './BaseTemplate'; // Update the path as per your project structure
import NikiGift from './NikiGift';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/BoldogEvfordulot2025" element={<ExternalRedirectNiki />} />

        {/* Catch-all route for all other paths */}
        <Route path="*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

/*

function ExternalRedirectAnya() {
  React.useEffect(() => {
    window.location.href = "https://gofile.io/d/Y81TaQ"; // Replace with your external URL
  }, []);

  return <div>Boldog karácsonyt Anya!</div>;
}
*/

function ExternalRedirectNiki() {
  return (
    <div className="gift">
      <NikiGift />
    </div>
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
