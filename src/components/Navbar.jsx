import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const githubRedirect = () => {
    window.open('https://github.com/SohamChaudhari2004', '_blank');
  };

  const linkedinRedirect = () => {
    window.open('https://www.linkedin.com/in/soham-chaudhari-5214501b2/', '_blank');
  };

  return (
    <>
      <div 
        className={`sticky top-0 z-50 flex justify-between items-center py-4 px-4 md:px-20 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/70 backdrop-blur-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="invert font-bold font-mono border cursor-pointer border-gray-500 p-2 text-xl md:text-2xl">
          <Link to="/home">PORTFOLIO</Link>
        </div>

        {/* Menu for small screens */}
        <div className="md:hidden">
          <button 
            onClick={toggleSidebar} 
            className="text-white" 
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Navbar for medium and large screens */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-gray-300 font-semibold font-mono">
            {['Home','Projects','AboutMe','Achievements', 'Skills', 'Contact'].map((item) => (
              <li 
                key={item} 
                className="hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer"
              >
                <Link to={`/${item.toLowerCase() === 'aboutme' ? 'aboutme' : item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons for large screens only */}
        <div className="hidden lg:flex space-x-4">
          <Github 
            className="text-white cursor-pointer" 
            size={24} 
            onClick={githubRedirect} 
          />
          <Linkedin 
            className="text-white cursor-pointer" 
            size={24} 
            onClick={linkedinRedirect} 
          />
        </div>
      </div>

      {/* Overlay and Sidebar for small screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-gray-800 p-5 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end">
              <button 
                onClick={toggleSidebar} 
                className="text-white" 
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-4">
                {['Home', 'Projects','AboutMe', 'Skills', 'Contact','Achievements'].map((item) => (
                  <li key={item} className="border border-gray-600 rounded-lg">
                    <Link 
                      to={`/${item.toLowerCase() === 'aboutme' ? 'aboutme' : item.toLowerCase()}`} 
                      className="block px-4 py-2 text-white hover:bg-gray-700" 
                      onClick={toggleSidebar}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex justify-center hover:scale-[175%] space-x-4">
              <FaGithub 
                className="text-black w-20 h-20 hover:scale-[175%] rounded-full p-2 cursor-pointer bg-slate-400" 
                size={24} 
                onClick={githubRedirect} 
              />
              <Linkedin 
                className="text-black w-20 h-20  rounded-full p-2 cursor-pointer bg-slate-400" 
                size={24} 
                onClick={linkedinRedirect} 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;