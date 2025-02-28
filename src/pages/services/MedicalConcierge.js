import React from 'react';
import { motion } from 'framer-motion';
import conciergeImage from '../../assets/images/medical-concierge.png';
import { useNavigate } from 'react-router-dom';

const services = [
  { text: "24/7 Direct Physician Access", delay: 0.2 },
  { text: "Priority Appointment Scheduling", delay: 0.3 },
  { text: "Home Visits", delay: 0.4 },
  { text: "Travel Medicine Support", delay: 0.5 },
  { text: "Medical Emergency Coordination", delay: 0.6 }
];

const MedicalConcierge = () => {
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
            Private Medical Concierge
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
                Experience healthcare on your terms with our 24/7 private medical concierge service. 
                We provide immediate access to medical professionals and personalized care coordination 
                whenever you need it, ensuring your health is always our top priority.
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-gray-800 mb-6"
              >
                Premium Services Include:
              </motion.h2>

              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: service.delay }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, color: '#0284c7' }}
                      className="flex-shrink-0 h-6 w-6 text-primary-600"
                    >
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </motion.span>
                    <span>{service.text}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/concierge-enrollment')}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enroll Now
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services/private-medical-concierge#details')}
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-primary-600 bg-primary-50 hover:bg-primary-100 transition-all duration-300 shadow-lg hover:shadow-xl ml-4"
                >
                  Learn More
                  <motion.svg
                    className="ml-2 h-5 w-5"
                    whileHover={{ x: 5 }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
                src={conciergeImage}
                alt="Medical Concierge Service"
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
                  24/7 Personalized Healthcare Support
                </p>
                <p className="text-white/80 mt-2">
                  Your dedicated medical team is always just a call away
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow-lg"
                >
                  <div className="text-primary-600 mb-2">
                    {index === 0 && "24/7"}
                    {index === 1 && "Global"}
                    {index === 2 && "Private"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {index === 0 && "Always Available"}
                    {index === 1 && "Worldwide Access"}
                    {index === 2 && "Confidential Care"}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MedicalConcierge; 