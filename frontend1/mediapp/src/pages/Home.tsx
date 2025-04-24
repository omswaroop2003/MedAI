import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, Stethoscope, Clock, Shield, Users, Activity, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PLACEHOLDER_IMAGE = "/undraw_medicine_hqqg.svg";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced artificial intelligence to assist in medical diagnosis and treatment recommendations."
    },
    {
      icon: Stethoscope,
      title: "24/7 Health Monitoring",
      description: "Continuous monitoring of vital signs and health metrics for proactive care."
    },
    {
      icon: Clock,
      title: "Instant Consultations",
      description: "Connect with healthcare professionals instantly through our secure platform."
    },
    {
      icon: Shield,
      title: "Secure Health Records",
      description: "Your medical data is protected with state-of-the-art encryption and security measures."
    },
    {
      icon: Users,
      title: "Patient-Doctor Connection",
      description: "Seamless communication between patients and healthcare providers."
    }
  ];

  const stats = [
    { value: "98%", label: "Success Rate" },
    { value: "50K+", label: "Active Users" },
    { value: "24/7", label: "Support" },
    { value: "100+", label: "Expert Doctors" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-100 opacity-20 pattern-grid"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20"
          />
        </div>

        <section className="relative pt-24 pb-12 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-8 md:mb-0"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Your Complete
                  <span className="text-blue-600"> Medical Assistant</span>
                  <br />
                  Powered by AI
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Experience healthcare reimagined with AI-driven insights, real-time monitoring,
                  and personalized care recommendations.
                </p>
                <div className="flex space-x-4">
                  <Link 
                    to="/signup" 
                    className="group px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    Get Started
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/about"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2"
              >
                <div className="relative">
                  <motion.img 
                    src={PLACEHOLDER_IMAGE}
                    alt="Medical AI Illustration" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Comprehensive Healthcare Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-gray-600"
            >
              Discover how Med-AI is transforming healthcare delivery
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of healthcare providers and patients already using Med-AI
            </p>
            <Link
              to="/signup"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
