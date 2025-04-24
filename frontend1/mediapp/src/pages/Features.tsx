import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import {
  Brain,
  Activity,
  MessageSquare,
  Shield,
  Users,
  Stethoscope,
  Clock,
  HeartPulse,
  LineChart,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced artificial intelligence to assist in medical diagnosis and treatment recommendations.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      delay: 0.1
    },
    {
      icon: Activity,
      title: "24/7 Health Monitoring",
      description: "Continuous monitoring of vital signs and health metrics for proactive care.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Instant Consultations",
      description: "Connect with healthcare professionals instantly through our secure platform.",
      color: "bg-green-100",
      iconColor: "text-green-600",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Secure Health Records",
      description: "Your medical data is protected with state-of-the-art encryption and security measures.",
      color: "bg-red-100",
      iconColor: "text-red-600",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Patient-Doctor Connection",
      description: "Seamless communication between patients and healthcare providers.",
      color: "bg-amber-100",
      iconColor: "text-amber-600",
      delay: 0.5
    }
  ];

  const stats = [
    { icon: HeartPulse, value: "99.9%", label: "Diagnostic Accuracy" },
    { icon: Clock, value: "24/7", label: "Availability" },
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: LineChart, value: "1M+", label: "Diagnoses Made" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Advanced Healthcare Features
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the future of healthcare with our cutting-edge technology and comprehensive features
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future of Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied users who trust our platform
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;

