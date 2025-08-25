
import React from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../constants/data';
import type { Project } from '../types';
import { GithubIcon } from '../components/icons';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
                <span key={tech} className="bg-secondary/20 text-secondary text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
            ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-semibold">Live Demo</a>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-white transition-colors"><GithubIcon className="w-6 h-6"/></a>
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-center font-heading text-primary dark:text-white mb-4">
        Projects
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">A selection of my recent work.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

       <p className="text-center text-md text-gray-500 dark:text-gray-400 mt-12">
        Many more projects in development—explore my <a href="https://github.com/Francisroyce?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">GitHub</a> for updates.
      </p>

    </motion.div>
  );
};

export default Projects;
