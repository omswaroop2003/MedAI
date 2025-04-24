import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, Shield, Users, Award, Zap, Activity, Stethoscope } from 'lucide-react';
import Navbar from '../components/Navbar';

// Import local images
import medicalAiImg from '../assets/medical-ai.jpg';
import iotHealthcareImg from '../assets/iot-healthcare.jpg';
import medicalIllustration from '../assets/medical-illustration.jpg';

const About = () => {
  // Define animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      {/* New Hero Section */}
      <div className="relative overflow-hidden pt-16">
        {/* Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: '0.1'
          }}></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-1 mb-6">
                  <span className="animate-pulse">
                    <Activity className="w-4 h-4 text-blue-600" />
                  </span>
                  <span className="text-blue-600 font-medium text-sm">
                    Transforming Healthcare
                  </span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Future of
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Healthcare Innovation</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none">
                    <path d="M2 6C75.6667 2.66667 149.333 1 223 1C296.667 1 370.333 2.66667 444 6" stroke="#60A5FA" strokeWidth="2"/>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                We're combining advanced AI technology with human expertise to create 
                a healthcare system that's more accurate, accessible, and personalized than ever before.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Users, value: "50,000+", label: "Active Users" },
                  { icon: Award, value: "99.9%", label: "Accuracy Rate" },
                  { icon: Shield, value: "100%", label: "HIPAA Compliant" },
                  { icon: Stethoscope, value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <stat.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Interactive Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Cards */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -right-8 w-48 h-48 bg-white rounded-2xl shadow-xl p-4 z-20"
                >
                  <Brain className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">AI Diagnosis</h3>
                  <p className="text-sm text-gray-600">Advanced machine learning for accurate predictions</p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [2, -2, 2]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-8 -left-8 w-48 h-48 bg-white rounded-2xl shadow-xl p-4 z-20"
                >
                  <HeartPulse className="w-8 h-8 text-red-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Real-time Monitoring</h3>
                  <p className="text-sm text-gray-600">24/7 health tracking and alerts</p>
                </motion.div>

                {/* Central Image */}
                <div className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-1">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <img
                      src={medicalAiImg}
                      alt="Healthcare Innovation"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                We envision a world where advanced AI technology serves as a trusted healthcare companion, 
                making preliminary diagnoses, monitoring vital signs, and providing personalized health 
                insights accessible to everyone.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI-Powered Innovation</h3>
                  <p className="text-gray-600">Leveraging cutting-edge machine learning algorithms</p>
                </div>
              </div>
            </div>

            {/* New Enhanced Image Section */}
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4">
                <div className="w-full h-full mx-auto rotate-2 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur-lg"></div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
                  <HeartPulse className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-cyan-100 rounded-lg flex items-center justify-center animate-float-delayed">
                  <Brain className="w-10 h-10 text-cyan-600" />
                </div>
                
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={medicalAiImg}
                    alt="Medical Innovation" 
                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">50K+</div>
                        <div className="text-sm text-gray-600">Users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              className="space-y-2"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0 }}
            >
              <div className="text-4xl font-bold">98%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              <div className="text-4xl font-bold">50K+</div>
              <div className="text-blue-100">Users Worldwide</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-blue-100">AI Availability</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
            >
              <div className="text-4xl font-bold">100+</div>
              <div className="text-blue-100">Medical Experts</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Med-AI?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your health data is encrypted and secured with military-grade protection"
              },
              {
                icon: Zap,
                title: "Real-time Analysis",
                description: "Get instant health insights and recommendations powered by AI"
              },
              {
                icon: Users,
                title: "Expert Backed",
                description: "Our AI is trained and validated by leading medical professionals"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Technology Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Innovation Through Technology</h2>
            <p className="text-gray-600 mt-4">
              Leveraging cutting-edge AI and advanced medical technology to transform healthcare
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* AI Technology Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <img
                  src={medicalAiImg}
                  alt="AI Medical Analysis"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI systems process millions of medical data points in real-time, providing accurate diagnostics and personalized healthcare recommendations.
                </p>
                <div className="mt-4 flex items-center text-blue-600">
                  <Brain className="w-5 h-5 mr-2" />
                  <span className="font-medium">Powered by Neural Networks</span>
                </div>
              </div>
            </motion.div>

            {/* IoT Integration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform -rotate-2 group-hover:-rotate-3 transition-transform"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                <img
                  src={iotHealthcareImg}
                  alt="IoT Healthcare"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IoT Health Monitoring</h3>
                <p className="text-gray-600">
                  Seamlessly connect with smart medical devices for real-time health monitoring and instant emergency response systems.
                </p>
                <div className="mt-4 flex items-center text-purple-600">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="font-medium">Real-time Monitoring</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Innovation Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 rounded-2xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">System Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">AI Models</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-600 mb-2">50M+</div>
              <div className="text-gray-600">Data Points</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">200ms</div>
              <div className="text-gray-600">Response Time</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;









