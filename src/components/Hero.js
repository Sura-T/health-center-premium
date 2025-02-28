import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage1 from '../assets/images/healthcare.webp';
import heroImage2 from '../assets/images/laboratory.png';
import heroImage3 from '../assets/images/radiology.png';
import heroImage4 from '../assets/images/consultation.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: heroImage1,
      alt: "Luxury Healthcare Facility"
    },
    {
      src: heroImage2,
      alt: "Modern Medical Equipment"
    },
    {
      src: heroImage3,
      alt: "Professional Medical Staff"
    },
    {
      src: heroImage4,
      alt: "Patient Care Excellence"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative bg-gradient-to-r from-white to-blue-50 overflow-hidden mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="block"
                >
                  Enat Health Center
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="block text-primary-600"
                >
                  For Distinguished Lives
                </motion.span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Experience world-class medical care in an environment of ultimate privacy and luxury. 
                Where excellence meets exclusivity in healthcare.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow hover:transform hover:scale-105 transition-all duration-300">
                  <button 
                    onClick={() => handleNavigation('/book-consultation')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                  >
                    Book Consultation
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 hover:transform hover:scale-105 transition-all duration-300">
                  <button
                    onClick={() => handleNavigation('/about')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
      <motion.div 
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-2xl"
          />
        </AnimatePresence>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 