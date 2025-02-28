import React from 'react';
import { motion } from 'framer-motion';
import suiteImage from '../../assets/images/luxury-suite.png';
import diningImage from '../../assets/images/luxury-dining.png';
import loungeImage from '../../assets/images/recovery-lounge.png';
import gardenImage from '../../assets/images/healing-garden.png';
import { useNavigate } from 'react-router-dom';

const amenities = [
  { text: "Private Luxury Suites", delay: 0.2, icon: "🏨" },
  { text: "24/7 Concierge Service", delay: 0.3, icon: "👨‍💼" },
  { text: "Gourmet Dining", delay: 0.4, icon: "🍽️" },
  { text: "Healing Gardens", delay: 0.5, icon: "🌿" },
  { text: "Spa Services", delay: 0.6, icon: "💆‍♂️" }
];

const LuxuryRecovery = () => {
  const navigate = useNavigate();

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
            Luxury Recovery Suites
          </motion.h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Main Suite Showcase */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            src={suiteImage}
            alt="Luxury Recovery Suite"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white max-w-2xl px-8"
            >
              <h2 className="text-4xl font-bold mb-4">Where Luxury Meets Recovery</h2>
              <p className="text-xl text-white/90">
                Experience healing in an environment of unparalleled comfort and sophistication.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900">Premium Amenities</h3>
            <div className="grid grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: amenity.delay }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <span className="text-3xl mb-2 block">{amenity.icon}</span>
                  <h4 className="text-lg font-semibold text-gray-900">{amenity.text}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Suite Features</h3>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center space-x-3">
                <span className="text-primary-600">✓</span>
                <span>Spacious 500 sq ft private suite</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-600">✓</span>
                <span>Premium bedding and furnishings</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-600">✓</span>
                <span>Private bathroom with luxury amenities</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-600">✓</span>
                <span>Smart room controls</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-600">✓</span>
                <span>Personal entertainment system</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/suite-booking')}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Suite
              <motion.svg
                className="ml-2 h-5 w-5"
                whileHover={{ x: 5 }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { img: diningImage, title: "Gourmet Dining", desc: "Personalized meal service" },
            { img: loungeImage, title: "Recovery Lounge", desc: "Comfortable relaxation space" },
            { img: gardenImage, title: "Healing Gardens", desc: "Therapeutic outdoor areas" }
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

export default LuxuryRecovery; 