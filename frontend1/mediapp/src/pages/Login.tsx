// src/pages/Login.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: '', // Changed to identifier to accept either email or phone
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store user data and token
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));

      // Navigate to the appropriate dashboard based on user type
      const userType = data.userType;
      if (userType === 'doctor') {
        navigate('/doctor-dashboard');
      } else {
        navigate('/patient-dashboard');
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white relative">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-50 flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>

      {/* Left Section - Illustration */}
      <div className="w-1/2 bg-blue-600 relative overflow-hidden">
        {/* Logo */}
        <div className="absolute top-6 left-6 flex items-center text-white">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
              fill="currentColor"
            />
          </svg>
          <span className="text-lg font-semibold">medexplorer</span>
        </div>

        {/* Medical Illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/undraw_medicine_hqqg.svg" 
            alt="Medical illustration" 
            className="w-4/5 h-auto"
          />
        </div>

        {/* Background Design */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-64 bg-blue-700 rounded-tr-[100px]"></div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-16">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-blue-900 mb-12">Welcome Back!</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="Email or Phone Number"
                  className="w-full px-5 py-3 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 text-sm"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-5 py-3 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-cyan-500 text-white py-3 rounded-full hover:bg-cyan-600 transition-all duration-200 text-sm font-medium mt-8 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Logging in...' : 'LOGIN'}
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/signup" className="text-blue-600 hover:text-blue-700">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}







