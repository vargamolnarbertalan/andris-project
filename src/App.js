import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseTemplate from './BaseTemplate'; // Update the path as per your project structure

function App() {
  return (
    <Router>
      <Routes>

        {/* Catch-all route for all other paths */}
        <Route path="*" element={<MainApp />} />
      </Routes>
    </Router>
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
