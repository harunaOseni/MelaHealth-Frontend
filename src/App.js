import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import SymptomChecker from './pages/SymptomChecker';
import WellnessTipsPage from './pages/WellnessTipsPage';
import LocalResourcesPage from './pages/LocalResourcesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/wellness-tips" element={<WellnessTipsPage />} />
          <Route path="/local-resources" element={<LocalResourcesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;