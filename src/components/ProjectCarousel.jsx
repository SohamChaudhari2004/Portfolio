import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] mx-auto h-[70vh] sm:h-[60vh] lg:h-[75vh] overflow-hidden rounded-3xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-center mb-6 text-red-400">
        MY PROJECTS
      </h1>

      {/* Image & Content */}
      <AnimatePresence initial={true}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={projects[currentIndex].image || "/placeholder.svg"}
            alt={projects[currentIndex].title}
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end p-6 sm:p-12">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              {projects[currentIndex].title}
            </h3>
            <p className="text-white mb-20 text-sm sm:text-base md:text-lg max-w-3xl">
              {projects[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-all duration-200"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-all duration-200"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
