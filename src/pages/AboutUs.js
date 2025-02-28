import React, { useState } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/images/about-hero.png';
import valuesImage from '../assets/images/values.png';
import videoThumbnail from '../assets/images/video-thumbnail.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Medical Experts" },
    { number: "10k+", label: "Satisfied Patients" },
    { number: "24/7", label: "Available Service" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Committed to delivering the highest standard of medical care",
      icon: "🏆"
    },
    {
      title: "Innovation",
      description: "Embracing cutting-edge medical technologies and treatments",
      icon: "💡"
    },
    {
      title: "Compassion",
      description: "Treating every patient with empathy and understanding",
      icon: "❤️"
    },
    {
      title: "Integrity",
      description: "Maintaining the highest ethical standards in healthcare",
      icon: "⭐"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-white to-blue-50"
    >
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img
          src={aboutImage}
          alt="Enat Health Center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Enat Health Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Where advanced medical care meets Ethiopian hospitality. 
              Experience healthcare excellence in the heart of Addis Ababa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience Enat Health Center
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art facilities and meet our dedicated team
            </p>
          </motion.div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {!isVideoPlaying ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative w-full h-full"
              >
                <img
                  src={videoThumbnail}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoPlaying(true)}
                    className="group relative"
                  >
                    {/* Play button with glow effect */}
                    <div className="absolute -inset-4 bg-primary-600/20 rounded-full blur-lg group-hover:bg-primary-600/30 transition-all duration-300"></div>
                    <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300">
                      <svg 
                        className="w-10 h-10 text-primary-600 translate-x-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </motion.button>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white font-medium mt-4 text-lg"
                  >
                    Click to watch our facility tour
                  </motion.p>
                </div>
              </motion.div>
            ) : (
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/p6_LtOgH5nI?si=hvrPSnQ5U2m7IT1s&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></motion.iframe>
            )}
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                To provide world-class healthcare services while maintaining the warmth 
                and personal touch of Ethiopian hospitality. We strive to be the leading 
                healthcare provider in East Africa, combining advanced medical technology 
                with compassionate care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <span className="text-3xl mb-3 block">{value.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src={valuesImage}
                alt="Our Values"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Premium Healthcare?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your consultation today and take the first step towards better health
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/book-consultation"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Book Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs; 