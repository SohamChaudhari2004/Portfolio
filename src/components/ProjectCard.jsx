// ProjectCard.jsx
import React from 'react';
import { MagicCard } from './magicui/magic-card';
import Github from '../assets/github.svg';
import Link from '../assets/link.png';

const ProjectCard = ({ title, description, githubLink, liveLink, image }) => {
  return (
    <div className="w-full cursor-pointer">
      <MagicCard
        className="relative w-full h-full flex flex-col bg-transparent border border-gray-800 rounded-xl shadow-slate-300 transition-shadow duration-300 hover:shadow-2xl overflow-hidden"
        style={{
          background: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
          color: 'white',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-between p-4 sm:p-6 h-full">
          {/* Image section */}
          <div className="w-full mb-4 sm:mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-36 sm:h-48 md:h-52 object-cover rounded-md"
            />
          </div>

          {/* Title and Description */}
          <div className="flex-grow mb-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-red-400">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-200">
              {description}
            </p>
          </div>

          {/* GitHub and Live Link Buttons */}
          <div className="flex justify-between items-center gap-3 w-full">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full p-2 bg-gray-400 rounded-md hover:invert hover:bg-gray-500 text-xs sm:text-sm"
              >
                <img
                  src={Github}
                  alt="GitHub"
                  className="w-4 h-4 sm:w-6 sm:h-6 mr-2 text-white"
                />
                GITHUB  
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 w-full bg-gray-400 rounded-md hover:invert hover:bg-gray-500 text-xs sm:text-sm"
              >
                <img
                  src={Link}
                  alt="Live"
                  className="w-4 h-4 sm:w-6 sm:h-6 mr-2 text-white"
                />
                LIVE
              </a>
            )}
          </div>
        </div>
      </MagicCard>
    </div>
  );
};

export default ProjectCard;