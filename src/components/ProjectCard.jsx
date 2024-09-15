import React from 'react';
import { MagicCard } from './magicui/magic-card';
import Github from '../assets/github.svg';
import Link from '../assets/link.png';

const ProjectCard = ({ title, description, githubLink, liveLink, image }) => {
  const handleCardClick = () => {
    if (liveLink) {
      window.open(liveLink, '_blank');
    } else if (githubLink) {
      window.open(githubLink, '_blank');
    }
  };

  return (
    <MagicCard 
      className="relative p-20 h-full  flex flex-col bg-transparent border border-gray-800 rounded-xl shadow-slate-300 transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
      style={{
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
        color: 'white',
      }}
      onClick={handleCardClick}
    >
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative text-start flex w-full h-full items-start flex-col justify-center">
        <h3 className="text-2xl font-bold mb-2 text-red-400">{title}</h3>
        <p className="text-gray-200 flex items-start">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4 top-28  flex gap-3">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={Github} alt="GitHub" className="w-8 h-8 bg-gray-400 rounded-full" />
          </a>
        )}
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={Link} alt="Live" className="w-8 h-8 p-1 bg-gray-400 rounded-full" />
          </a>
        )}
      </div>
    </MagicCard>
  );
};

export default ProjectCard;