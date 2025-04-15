import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Full Medical Gen AI
          </h1>
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Login
          </Link>
        </div>

        {/* Main Content */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Create an Account{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          {/* Adding emoji from wireframe */}
        </h2>

        <form className="space-y-5">
          <div>
            {/* Full Name Label (removed as per wireframe) */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
            />
          </div>
          <div>
            {/* Email Label (removed as per wireframe) */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
            />
          </div>
          <div>
            {/* Password Label (removed as per wireframe) */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none"
            />
          </div>

          {/* Removed the "I agree to the Terms..." checkbox as per wireframe */}

          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 transition-all duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Removed the "Already have an account? Sign in" link as per wireframe */}
      </div>
    </div>
  );
}
