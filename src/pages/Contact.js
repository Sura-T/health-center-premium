import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const socialMedia = [
    { icon: <FaFacebook size={40} />, name: 'Facebook', link: 'https://facebook.com/enatHealth', color: 'text-blue-600' },
    { icon: <FaInstagram size={40} />, name: 'Instagram', link: 'https://instagram.com/enatHealth', color: 'text-pink-600' },
    { icon: <FaTwitter size={40} />, name: 'Twitter', link: 'https://twitter.com/enatHealth', color: 'text-blue-400' },
    { icon: <FaLinkedin size={40} />, name: 'LinkedIn', link: 'https://linkedin.com/company/enatHealth', color: 'text-blue-700' },
    { icon: <FaTelegram size={40} />, name: 'Telegram', link: 'https://t.me/enatHealth', color: 'text-blue-500' },
    { icon: <FaWhatsapp size={40} />, name: 'WhatsApp', link: 'https://wa.me/1234567890', color: 'text-green-500' },
    { icon: <FaYoutube size={40} />, name: 'YouTube', link: 'https://youtube.com/enatHealth', color: 'text-red-600' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
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
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Social Media Carousel */}
        <div className="mb-20 overflow-hidden">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="flex space-x-8 animate-scroll"
          >
            {[...socialMedia, ...socialMedia].map((platform, index) => (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center space-y-2 p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${platform.color}`}
              >
                {platform.icon}
                <span className="text-sm font-medium text-gray-600">{platform.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Contact Form */}
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
                  Name
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
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="6"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-primary-700 transition-all duration-300 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 