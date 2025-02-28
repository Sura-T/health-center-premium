import React from 'react';
import drSaraImage from '../assets/images/Dr. Sara.webp';
import drJamesImage from '../assets/images/Dr.James.webp';
import drEmilyImage from '../assets/images/Dr. EmilyChen.webp';
import drMichaelImage from '../assets/images/Dr. MichaelRoberts.webp';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer',
    image: drSaraImage,
    specialization: 'Internal Medicine',
    credentials: 'MD, PhD, FACP',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Head of Cardiology',
    image: drJamesImage,
    specialization: 'Cardiology',
    credentials: 'MD, FACC',
  },
  {
    name: 'Dr. Emily Chen',
    role: 'Head of Neurology',
    image: drEmilyImage,
    specialization: 'Neurology',
    credentials: 'MD, PhD',
  },
  {
    name: 'Dr. Michael Roberts',
    role: 'Head of Oncology',
    image: drMichaelImage,
    specialization: 'Oncology',
    credentials: 'MD, FASCO',
  },
];

const Doctors = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">World-Class Medical Team</span>
            <span className="block text-primary-600">Leaders in Their Fields</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Our distinguished team of medical professionals brings decades of experience from the world's leading institutions.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium">{doctor.role}</p>
                  <p className="text-gray-500 mt-1">{doctor.specialization}</p>
                  <p className="text-gray-400 text-sm">{doctor.credentials}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors; 