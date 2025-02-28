import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/elite.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-12 w-auto" src={logo} alt="Enat Health Center" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/services')}
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/doctors')}
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Doctors
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigation('/book-appointment')}
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="mobile-menu md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigation('/')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('/doctors')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              Doctors
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation('/book-appointment')}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              Book Appointment
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 