import React, { useState } from 'react';
import { motion } from 'framer-motion';
import vipImage from '../assets/images/vip-service.png';
import standardImage from '../assets/images/standard-service.png';

const BookAppointment = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const plans = [
    {
      type: 'VIP',
      price: '1,000',
      image: vipImage,
      features: [
        'Priority Scheduling',
        'Luxury Private Suite',
        'Dedicated Concierge',
        'Premium Amenities',
        'Personal Care Team',
        'Direct Doctor Contact'
      ],
      color: 'bg-gradient-to-r from-amber-600 to-yellow-500'
    },
    {
      type: 'Standard',
      price: '200',
      image: standardImage,
      features: [
        'Regular Scheduling',
        'Standard Room',
        'Professional Care',
        'Basic Amenities',
        'Care Team Support',
        'Doctor Consultation'
      ],
      color: 'bg-gradient-to-r from-blue-600 to-blue-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 pt-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred service level and experience healthcare tailored to your needs
          </p>
        </motion.div>

        {!showForm ? (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <img
                    src={plan.image}
                    alt={plan.type}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {plan.type} Service
                      </h3>
                      <p className="text-2xl text-white/90 mb-4">
                        ${plan.price} <span className="text-lg">per visit</span>
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="flex items-center text-white"
                          >
                            <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedPlan(plan.type);
                        setShowForm(true);
                      }}
                      className={`${plan.color} text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Select {plan.type} Plan
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedPlan} Appointment Booking
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back to Plans
              </button>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full ${
                  selectedPlan === 'VIP' 
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-500' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-500'
                } text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Confirm Booking
              </motion.button>
            </form>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BookAppointment; 