import React, { memo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';

// Memoize route components to prevent unnecessary re-renders
const MemoizedHome = memo(Home);
const MemoizedFeatures = memo(Features);
const MemoizedAbout = memo(About);
const MemoizedContact = memo(Contact);
const MemoizedLogin = memo(Login);
const MemoizedSignup = memo(Signup);
const MemoizedDoctorDashboard = memo(DoctorDashboard);
const MemoizedPatientDashboard = memo(PatientDashboard);

function App() {
  // Remove console.log in production
  if (process.env.NODE_ENV === 'development') {
    console.log('App rendering');
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<MemoizedHome />} />
          <Route path="/features" element={<MemoizedFeatures />} />
          <Route path="/about" element={<MemoizedAbout />} />
          <Route path="/contact" element={<MemoizedContact />} />
          <Route path="/login" element={<MemoizedLogin />} />
          <Route path="/signup" element={<MemoizedSignup />} />
          <Route path="/doctor-dashboard/*" element={<MemoizedDoctorDashboard />} />
          <Route path="/patient-dashboard/*" element={<MemoizedPatientDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

// Memoize the entire App component
export default memo(App);

