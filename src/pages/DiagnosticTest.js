import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DiagnosticTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    testType: '',
    preferredDate: '',
    preferredTime: '',
    medicalHistory: '',
    symptoms: ''
  });

  const testTypes = [
    'MRI Scan',
    'CT Scan',
    'X-Ray',
    'Ultrasound',
    'Blood Tests',
    'ECG/EKG',
    'Other'
  ];

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
            Schedule Diagnostic Test
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book your diagnostic test with our state-of-the-art medical facilities
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
                Type of Test
              </label>
              <select
                required
                value={formData.testType}
                onChange={(e) => setFormData({ ...formData, testType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a test type</option>
                {testTypes.map((test) => (
                  <option key={test} value={test}>{test}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  required
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (9:00 - 12:00)</option>
                  <option value="afternoon">Afternoon (14:00 - 17:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brief Medical History
              </label>
              <textarea
                rows="3"
                value={formData.medicalHistory}
                onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Any relevant medical history..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Symptoms (if any)
              </label>
              <textarea
                rows="3"
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Describe your symptoms..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary-700 transition-all duration-300"
            >
              Schedule Test
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default DiagnosticTest; 