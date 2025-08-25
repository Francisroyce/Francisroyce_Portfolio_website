
import React from 'react';
import { LinkedinIcon, GithubIcon, PortfolioIcon } from './icons';

const socialLinks = [
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/okoronkwo-francis-832986233/', label: 'LinkedIn' },
  { icon: GithubIcon, href: 'https://github.com/Francisroyce?tab=repositories', label: 'GitHub' },
  { icon: PortfolioIcon, href: 'https://www.datascienceportfol.io/Francisroyce12', label: 'Portfolio' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <p>&copy; {currentYear} Okoronkwo Francis Ifeanyi. All Rights Reserved.</p>
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary dark:hover:text-secondary transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
