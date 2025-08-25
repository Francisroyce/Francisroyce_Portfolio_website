
import React from 'react';
import { motion } from 'framer-motion';
import profilePic from "./Royce.jpg";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-center font-heading text-primary dark:text-white mb-12">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="md:col-span-1 flex justify-center"
        >
          <img
            src={profilePic}
            alt="Okoronkwo Francis Ifeanyi"
            className="rounded-full h-64 w-64 object-cover shadow-lg border-4 border-secondary"
          />
        </motion.div>
        <div className="md:col-span-2 space-y-6 text-lg">
          <p>
            As a dynamic and results-oriented Data Scientist and Analyst, I excel in leveraging advanced modeling techniques, predictive analytics, and data visualization to uncover meaningful patterns and drive strategic business outcomes.
          </p>
          <p>
            With a proven track record in processing large-scale datasets, deploying scalable machine learning solutions, and translating complex data into actionable recommendations, I empower organizations to achieve sustainable growth.
          </p>
          <p>
            Proficient in Python, SQL, Power BI, Tableau, and deep learning frameworks such as TensorFlow and PyTorch, my expertise spans exploratory data analysis (EDA), model optimization, and data-informed decision-making processes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://raw.githubusercontent.com/Francisroyce/CV/refs/heads/main/cv.zip"
              download
              className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Download CV
            </a>
            <a
              href="https://github.com/Francisroyce?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              View my GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/okoronkwo-francis-832986233/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
