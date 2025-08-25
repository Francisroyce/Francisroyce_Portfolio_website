
import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../constants/data';
import type { EducationItem } from '../types';

const EducationCard = ({ item }: { item: EducationItem }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex items-center space-x-6">
    {item.logoUrl && <img src={item.logoUrl} alt={`${item.institution} logo`} className="w-20 h-20 rounded-full object-cover"/>}
    <div>
      <h3 className="text-xl font-bold text-primary dark:text-white">{item.degree}</h3>
      <p className="text-secondary font-semibold">{item.institution}</p>
      <p className="text-gray-500 dark:text-gray-400 mt-1">{item.period}</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-center font-heading text-primary dark:text-white mb-4">
        Education & Certifications
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">My academic background and professional qualifications.</p>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <EducationCard item={item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
