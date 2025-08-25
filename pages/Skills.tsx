
import React from 'react';
import { motion } from 'framer-motion';
import { skillData } from '../constants/data';
import type { Skill } from '../types';

const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            <span className="text-sm font-medium text-secondary">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <motion.div
                className="bg-secondary h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
        </div>
    </div>
);


const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-center font-heading text-primary dark:text-white mb-4">
        My Skills
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">A collection of my technical and professional abilities.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold font-heading text-primary dark:text-secondary mb-4">
              {category.category}
            </h2>
            <div>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
