
import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, PortfolioIcon, MailIcon, PhoneIcon, LocationIcon } from '../components/icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/dataviz/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="min-h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white p-8 max-w-4xl mx-auto"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold font-heading tracking-tight">
            Okoronkwo Francis Ifeanyi
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-4 text-xl md:text-2xl text-secondary font-accent">
            Data Scientist | Data Analyst
          </motion.p>
          <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Transforming raw data into actionable insights through advanced analytics, machine learning, and artificial intelligence.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-300">
              <div className="flex items-center space-x-2">
                  <MailIcon className="w-5 h-5 text-secondary"/>
                  <span>okoronkwofrancis01@gmail.com</span>
              </div>
               <div className="flex items-center space-x-2">
                  <MailIcon className="w-5 h-5 text-secondary"/>
                  <span>francisroyce12@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                  <PhoneIcon className="w-5 h-5 text-secondary"/>
                  <span>+234 816 219 6793</span>
              </div>
              <div className="flex items-center space-x-2">
                  <LocationIcon className="w-5 h-5 text-secondary"/>
                  <span>Abuja & Asaba, Nigeria</span>
              </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/okoronkwo-francis-832986233/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-transform duration-300 hover:scale-125"><LinkedinIcon className="w-8 h-8"/></a>
            <a href="https://github.com/Francisroyce?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-transform duration-300 hover:scale-125"><GithubIcon className="w-8 h-8"/></a>
            <a href="https://www.datascienceportfol.io/Francisroyce12" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-transform duration-300 hover:scale-125"><PortfolioIcon className="w-8 h-8 stroke-current"/></a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
