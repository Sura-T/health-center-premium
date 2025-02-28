import React from 'react';
import { motion } from 'framer-motion';
import executiveImage from '../../assets/images/executive-screening.png';
import { useNavigate } from 'react-router-dom';

const features = [
  { text: "Comprehensive Physical Examination", delay: 0.2 },
  { text: "Advanced Cardiovascular Screening", delay: 0.3 },
  { text: "Full Body Imaging", delay: 0.4 },
  { text: "Genetic Risk Assessment", delay: 0.5 },
  { text: "Personalized Health Plan", delay: 0.6 }
];

const ExecutiveHealthScreen = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 pt-20 bg-gradient-to-b from-white to-blue-50"
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
            Executive Health Screening
          </motion.h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="prose prose-lg text-gray-500">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8 text-lg leading-relaxed"
              >
                Our executive health screening program is designed for busy professionals who prioritize their health but value their time. This comprehensive assessment provides a thorough evaluation of your health status in a single day.
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-gray-800 mb-6"
              >
                What's Included:
              </motion.h2>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: feature.delay }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, color: '#0284c7' }}
                      className="flex-shrink-0 h-6 w-6 text-primary-600"
                    >
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.span>
                    <span>{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/screening-appointment')}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Screening
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
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 lg:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <motion.img
                src={executiveImage}
                alt="Executive Health Screening"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ height: '600px' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 rounded-b-2xl"
              >
                <p className="text-white text-lg font-medium">
                  State-of-the-art facilities and equipment
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExecutiveHealthScreen; 