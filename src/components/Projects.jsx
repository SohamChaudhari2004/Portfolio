import React from 'react';
import ProjectCard from './ProjectCard';
// import { describe } from 'node:test';
import GeminiBg from '../assets/GeminiClone.png'
const Projects = () => {
  const projectData = [
    {
      title: 'Gemini Clone',
      description: "A clone of google's gemini using gemini-1.5-flash API ",
      githubLink: 'https://github.com/SohamChaudhari2004/Gemini_Clone',
      liveLink: 'https://gemini-clone-three-bay.vercel.app/',
      image:GeminiBg
    },
    {
      title: 'Cold email generator',
      description: 'A generative Ai project using langchain and llama 3.1',
      githubLink: 'https://github.com/SohamChaudhari2004/Cold_Email_Generator',
      liveLink: '',
      image:{}
    },
    {
      title: 'Sociolair ',
      description: 'Social media for sociopaths . A Web application using MERN stack ',
      githubLink: 'https://github.com/SohamChaudhari2004/SocioLair',
      liveLink: '',
      image:{}
    },
    {
      title: 'FilmWare ',
      description: 'A movie flashcard website using reactJs and css frameworks',
      githubLink: 'https://github.com/SohamChaudhari2004/FilmWare', 
      liveLink: '',
      image:{}
    },
    {
      title: 'Food Saver',
      description: 'A Dynamic web application for effective districution of surplus food.',
      githubLink: 'https://github.com/SohamChaudhari2004/MiniProjSE_2k24',
      liveLink: 'https://adorable-starlight-3a663d.netlify.app/',
      image:{}
    }
    // Add more projects as needed
  ];

  return (
    <div className="p-8 bg-transparent min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
