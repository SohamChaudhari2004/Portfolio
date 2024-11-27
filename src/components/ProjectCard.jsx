import React from 'react';
import { MagicCard } from './magicui/magic-card';
import Github from '../assets/github.svg';
import Link from '../assets/link.png';

const ProjectCard = ({ title, description, githubLink, liveLink, image }) => {
  const handleClick = () => {
    if (liveLink === '') {
      window.open(githubLink, '_blank');
    } else {
      window.open(liveLink, '_blank');
    }
  };

  return (
    <div  className="cursor-pointer">
      <MagicCard
        className="relative p-4 h-[450px] m-3 w-[450px]  flex flex-col bg-transparent border border-gray-800 rounded-xl shadow-slate-300 transition-shadow duration-300 hover:shadow-2xl"
        style={{
          background: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
          color: 'white',
        }}
      >
        <div className="absolute inset-0 opacity-50"></div> {/* Layer for opacity */}
        <div className="relative text-start flex w-full h-full items-start flex-col justify-between">
          {/* Image section above description */}
          <div className="w-full mb-20">
            <img
              src={image}
              alt={title}
              className="w-full h-52 object-cover rounded-md"
            />
          </div>

          {/* Title and Description */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-red-400">{title}</h3>
            <p className="text-gray-200">{description}</p>
          </div>

          {/* GitHub and Live Link Buttons */}
          <div className="flex justify-between items-center mt-4 gap-3 w-full">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full p-2 bg-gray-400 rounded-md hover:invert hover:bg-gray-500"
              >
                <img
                  src={Github}
                  alt="GitHub"
                  className="w-6 h-6 mr-2 text-white"
                />
                GITHUB  
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex  items-center justify-center p-2 w-full bg-gray-400 rounded-md hover:invert hover:bg-gray-500 "
              >
                <img
                  src={Link}
                  alt="Live"
                  className="w-6 h-6 mr-2 text-white"
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
