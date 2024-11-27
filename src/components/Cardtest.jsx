import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GithubIcon from '../assets/github.svg'; // replace with the correct path for your assets
import LinkIcon from '../assets/link.png'; // replace with the correct path for your assets
import '../components/Cardtest.css';

function Card({ title, description, githubLink, liveLink, image }) {

  const handleClick = () => {
    if (liveLink === '') {
      window.open(githubLink, '_blank');
    } else {
      window.open(liveLink, '_blank');
    }
  };

  return (
    <div className="parent">
      <div onClick={handleClick} className="cursor-pointer">
        <div
          className="card"
          style={{
            background: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.9,
          }}
        >
          <div className="content-box">
            <span className="card-title">{title}</span>
            <p className="card-content">{description}</p>
            <div className="card-btn">
              {githubLink && (
                <span className="see-more">
                  <FaGithub />
                  <p>Github</p>
                </span>
              )}
              {liveLink && (
                <span className="see-more">
                  <FaExternalLinkAlt />
                  <p>Live</p>
                </span>
              )}
            </div>
          </div>
          <div className="date-box">
            <span className="month">JUNE</span>
            <span className="date">29</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
