
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, PortfolioIcon } from '../components/icons';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a mock submission as we can't use Formspree or a backend.
        setStatus('Message sent successfully!');
        const form = e.target as HTMLFormElement;
        form.reset();
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
        >
            <h1 className="text-4xl font-bold text-center font-heading text-primary dark:text-white mb-4">
                Get In Touch
            </h1>
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
                I welcome opportunities for collaboration, consultations, or discussions on data science projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Contact Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-center text-green-500">{status}</p>}
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Connect With Me</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Connect with me via LinkedIn or explore my work on GitHub and my Data Science Portfolio.
                    </p>
                    <div className="space-y-4">
                        <a href="https://www.linkedin.com/in/okoronkwo-francis-832986233/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors">
                            <LinkedinIcon className="w-8 h-8"/>
                            <span className="text-lg">LinkedIn</span>
                        </a>
                         <a href="https://github.com/Francisroyce?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors">
                            <GithubIcon className="w-8 h-8"/>
                            <span className="text-lg">GitHub</span>
                        </a>
                         <a href="https://www.datascienceportfol.io/Francisroyce12" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors">
                            <PortfolioIcon className="w-8 h-8 stroke-current"/>
                            <span className="text-lg">Data Science Portfolio</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
