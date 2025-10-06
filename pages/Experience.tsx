
import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../constants/data';
import type { ExperienceItem } from '../types';

const CardContent = ({ item }: { item: ExperienceItem }) => (
    <>
      <h3 className="font-bold text-primary dark:text-white text-xl">{item.role}</h3>
      <p className="text-md leading-snug tracking-wide text-secondary font-semibold mb-2">{item.company} | {item.period}</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
        {item.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
      </ul>
    </>
);

interface ExperienceItemCardProps {
  item: ExperienceItem;
  index: number;
}

// FIX: Explicitly type ExperienceItemCard as React.FC to resolve typing issues with the 'key' prop.
const ExperienceItemCard: React.FC<ExperienceItemCardProps> = ({ item, index }) => {
  const isLeft = index % 2 !== 0;

  // Animation variants for desktop
  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // Animation variants for mobile
  const mobileCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative">
      {/* --- Desktop View --- */}
      <div className="mb-8 hidden md:flex justify-between items-center w-full">
        {isLeft ? (
          <>
            <motion.div className="w-5/12" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4 border border-gray-200 dark:border-gray-700">
                <CardContent item={item} />
              </div>
            </motion.div>
            <div className="z-10 w-2/12 flex justify-center">
              <div className="h-4 w-4 rounded-full bg-secondary shadow-xl"></div>
            </div>
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            <div className="w-5/12"></div>
            <div className="z-10 w-2/12 flex justify-center">
              <div className="h-4 w-4 rounded-full bg-secondary shadow-xl"></div>
            </div>
            <motion.div className="w-5/12" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
               <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4 border border-gray-200 dark:border-gray-700">
                <CardContent item={item} />
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* --- Mobile View --- */}
       <div className="mb-8 md:hidden flex items-start w-full">
        <div className="z-10 w-[2rem] flex-shrink-0 flex justify-center pt-1">
            <div className="h-4 w-4 rounded-full bg-secondary shadow-xl"></div>
        </div>
        <motion.div className="w-full" variants={mobileCardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4 border border-gray-200 dark:border-gray-700 ml-4">
            <CardContent item={item} />
          </div>
        </motion.div>
      </div>
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
      <div className="relative p-4 md:p-10">
        {/* The timeline bar */}
        <div 
          className="absolute top-0 bottom-0 border-r-2 border-gray-300 dark:border-gray-700 left-[1.3rem] md:left-1/2 md:-translate-x-1/2"
        ></div>
        {experienceData.map((item, index) => (
          <ExperienceItemCard key={index} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
