import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/LinkedIn.svg';
import Notionicon from '../assets/notion.svg';
import TwitterIcon from '../assets/twitter.svg';

const Footer = () => {
  const githubRedirect = () => {
    window.open('https://github.com/SohamChaudhari2004', '_blank');
  };

  const linkedinRedirect = () => {
    window.open('https://www.linkedin.com/in/soham-chaudhari-5214501b2/', '_blank');
  };

  const notionRedirect = () => {
    window.open('https://www.notion.so/', '_blank');
  };

  const twitterRedirect = () => {
    window.open('https://twitter.com/', '_blank');
  };

  return (
    <div className="bg-gray-800 text-white py-6 px-4">
      <div className="border-b border-gray-700 mb-6"></div>
      <footer className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:sohamrc@gmail.com" className="text-gray-400 hover:text-gray-300">sohamrc@gmail.com</a></p>
          <p>Phone: <a href="tel:+917499787431" className="text-gray-400 hover:text-gray-300">+91 7499787431</a></p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-4 mb-6 md:mb-0 w-full md:w-1/2">
          <img
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={githubRedirect}
            src={GithubIcon}
            alt="GitHub"
          />
          <img
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={linkedinRedirect}
            src={LinkedInIcon}
            alt="LinkedIn"
          />
          <img
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={notionRedirect}
            src={Notionicon}
            alt="Notion"
          />
          <img
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={twitterRedirect}
            src={TwitterIcon}
            alt="Twitter"
          />
        </div>
        
        {/* Navigation Links */}
        <div className="text-center md:text-right w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <ul className=" flex justify-center gap-2 items-center  space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-gray-100">About</Link></li>
            <li><Link to="/projects" className="text-gray-400 hover:text-gray-100">Projects</Link></li>
            <li><Link to="/skills" className="text-gray-400 hover:text-gray-100">Skills</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-gray-100">Contact</Link></li>
          </ul>
        </div>
      </footer>

      {/* Copyright Notice */}
      <div className="text-center mt-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Soham Chaudhari. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
