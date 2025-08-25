
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../constants/data';
import type { ExperienceItem } from '../types';

const ExperienceItemCard = ({ item, isLeft }: { item: ExperienceItem; isLeft: boolean }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="mb-8 flex justify-between items-center w-full">
      {isLeft && <div className="order-1 w-5/12"></div>}
      <div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">&nbsp;</h1>
      </div>
      <motion.div 
        className="order-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-200 dark:border-gray-700"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-primary dark:text-white text-xl">{item.role}</h3>
        <p className="text-md leading-snug tracking-wide text-secondary font-semibold mb-2">{item.company} | {item.period}</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
            {item.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
        </ul>
      </motion.div>
      {!isLeft && <div className="order-1 w-5/12"></div>}
    </div>
  );
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-center font-heading text-primary dark:text-white mb-12">
        Professional Experience
      </h1>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-400 h-full border" style={{ left: '50%' }}></div>
        {experienceData.map((item, index) => (
          <ExperienceItemCard key={index} item={item} isLeft={index % 2 !== 0} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
