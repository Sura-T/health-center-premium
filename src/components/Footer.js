import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/elite.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="Enat Health Center" className="h-12 w-auto mb-4" />
            <p className="text-blue-400 font-semibold text-xl mt-4 max-w-md drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] animate-pulse">
              Enat Health Center
            </p>
            <p className="text-gray-400 mt-4 max-w-md">
              Providing world-class healthcare services to distinguished clientele. 
              Your health and privacy are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Doctors', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>African Union Street</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>+251 911 123 456</li>
              <li>contact@enathealth.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Enat Health Center. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 