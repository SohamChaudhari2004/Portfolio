import React from 'react';

const projects = [
  { id: 1, title: "Project 1", description: "A cool project with some awesome features.", imageUrl: "/placeholder.svg?height=150&width=250", githubUrl: "https://github.com/username/project1", liveUrl: "https://project1.example.com" },
  { id: 2, title: "Project 2", description: "An innovative solution to a common problem.", imageUrl: "/placeholder.svg?height=150&width=250", githubUrl: "https://github.com/username/project2", liveUrl: "https://project2.example.com" },
  { id: 3, title: "Project 3", description: "Cutting-edge technology meets user-friendly design.", imageUrl: "/placeholder.svg?height=150&width=250", githubUrl: "https://github.com/username/project3", liveUrl: "https://project3.example.com" },
  { id: 4, title: "Project 4", description: "Revolutionizing the way we interact with data.", imageUrl: "/placeholder.svg?height=150&width=250", githubUrl: "https://github.com/username/project4", liveUrl: "https://project4.example.com" },
  { id: 5, title: "Project 5", description: "Empowering users with seamless integration.", imageUrl: "/placeholder.svg?height=150&width=250", githubUrl: "https://github.com/username/project5", liveUrl: "https://project5.example.com" },
  { id: 6, title: "Project 6", description: "Transforming ideas into reality with code.", imageUrl: "/placeholder.svg?height=150&width=250", githubUrl: "https://github.com/username/project6", liveUrl: "https://project6.example.com" },
  { id: 7, title: "Project 7", description: "Pushing the boundaries of what's possible.", imageUrl: "/placeholder.svg?height=150&width=250", githubUrl: "https://github.com/username/project7", liveUrl: "https://project7.example.com" },
];

const ProjectCard = ({ project }) => (
  <div className="project-card" style={{
    width: '250px',
    height: '350px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }}>
    <img src={project.imageUrl} alt={project.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
    <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>{project.title}</h3>
      <p style={{ margin: '0 0 16px', fontSize: '14px', flex: 1 }}>{project.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>GitHub</a>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={buttonStyle}>Live</a>
      </div>
    </div>
  </div>
);

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#0070f3',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '14px',
};

// Predefined positions for the staggered layout
const cardPositions = [
  { top: '5%', left: '10%' },    // Top left
  { top: '5%', right: '10%' },   // Top right
  { top: '25%', left: '35%' },   // Middle center
  { top: '50%', left: '10%' },   // Middle left
  { top: '45%', left: '35%' },   // Lower middle
  { top: '45%', right: '10%' },  // Middle right
  { top: '65%', right: '10%' }   // Bottom right
];

export default function Component() {
  return (
    <div className='h-full' style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: '#1a1a1a',
      padding: '20px',
      overflow: 'hidden'
    }}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          style={{
            position: 'absolute',
            ...cardPositions[index],
            transform: 'scale(0.9)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(0.95)',
            }
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}