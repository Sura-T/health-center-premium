import React from 'react';
import { motion } from 'framer-motion';
import diagnosticsImage from '../../assets/images/advanced-diagnostics.png';
import mriImage from '../../assets/images/mri-scanner.png';
import labImage from '../../assets/images/laboratory.png';
import radiologyImage from '../../assets/images/radiology.png';

const diagnosticServices = [
  { text: "3T MRI Imaging", delay: 0.2, icon: "🔍" },
  { text: "CT Scan with AI Analysis", delay: 0.3, icon: "🖥️" },
  { text: "Advanced Blood Analytics", delay: 0.4, icon: "🧬" },
  { text: "Cardiac Imaging", delay: 0.5, icon: "❤️" },
  { text: "Real-time Results", delay: 0.6, icon: "⚡" }
];

const AdvancedDiagnostics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            Advanced Diagnostics
          </motion.h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            src={diagnosticsImage}
            alt="Advanced Diagnostic Equipment"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white max-w-2xl px-8"
            >
              <h2 className="text-4xl font-bold mb-4">State-of-the-Art Technology</h2>
              <p className="text-lg text-white/90">
                Experience diagnostic excellence with our cutting-edge equipment and expert analysis.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Services</h3>
            <ul className="space-y-4">
              {diagnosticServices.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: service.delay }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-lg">{service.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              Our advanced diagnostic center combines cutting-edge technology with expert analysis to provide 
              the most accurate and timely results. With AI-enhanced imaging and real-time reporting, 
              we ensure you receive the highest standard of diagnostic care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Diagnostic Test
            </motion.button>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { img: mriImage, title: "MRI Suite", desc: "Latest 3T MRI technology" },
            { img: labImage, title: "Advanced Laboratory", desc: "State-of-the-art analytics" },
            { img: radiologyImage, title: "Radiology Center", desc: "AI-powered imaging" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
                <p className="text-white/80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdvancedDiagnostics; 