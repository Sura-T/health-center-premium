import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConciergeEnrollment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membership: 'standard', // standard or premium
    startDate: '',
    specialRequirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
            Enroll in Medical Concierge Service
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our exclusive medical concierge program for personalized healthcare service
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Membership Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                  <input
                    type="radio"
                    name="membership"
                    value="standard"
                    className="sr-only"
                    checked={formData.membership === 'standard'}
                    onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <span className="block text-lg font-medium text-gray-900">Standard</span>
                      <span className="mt-1 flex items-center text-sm text-gray-500">Basic concierge services</span>
                    </span>
                  </span>
                </label>
                <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                  <input
                    type="radio"
                    name="membership"
                    value="premium"
                    className="sr-only"
                    checked={formData.membership === 'premium'}
                    onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <span className="block text-lg font-medium text-gray-900">Premium</span>
                      <span className="mt-1 flex items-center text-sm text-gray-500">Enhanced concierge services</span>
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Start Date
              </label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requirements or Notes
              </label>
              <textarea
                rows="4"
                value={formData.specialRequirements}
                onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary-700 transition-all duration-300"
            >
              Submit Enrollment
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ConciergeEnrollment; 