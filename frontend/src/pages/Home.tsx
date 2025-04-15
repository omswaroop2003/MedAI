import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Your AI-powered Healthcare Companion
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get real-time health insights, instant AI consultations, and
              emergency response—all in one smart platform.
            </p>
            <Link
              to="/signup" // Assuming "Start Now" goes to signup
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
            >
              Start Now
            </Link>
          </div>

          {/* Right Column: Placeholder Image */}
          <div className="flex items-center justify-center">
            <div className="w-full h-64 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
