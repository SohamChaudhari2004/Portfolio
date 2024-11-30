import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Hack2Futbg from "../assets/hack2fut.png"

const achievementsData = [
  {
    id: 1,
    title: "Top 10 @Hack2Future",
    description: "Achieved top 10 position in hack2future hackathon at IIIT Dharwad amongst more than 1700 participants",
    backgroundImage: Hack2Futbg
  },
  
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === achievementsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? achievementsData.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 mb-16 flex justify-center items-center  ">
      <div className=" w-[70vw] mx-auto m-10 h-[60vh]">
        <div className="relative rounded-[20px] sm:rounded-[30px] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full flex items-center justify-center dark:bg-gray-900 bg-transparent overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-stretch"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter brightness-75 w-full h-full"
                style={{ 
                  backgroundImage: `url(${achievementsData[currentIndex].backgroundImage})` 
                }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 w-full mt-40 flex items-center justify-center sm:justify-start">
                <div className="max-w-md sm:max-w-xl w-full sm:ml-8 md:ml-16 bg-black/40 p-4 sm:p-6 md:p-8 rounded-lg mx-4 sm:mx-0">
                  <motion.h2 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg text-white"
                  >
                    {achievementsData[currentIndex].title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-8 drop-shadow-md text-gray-200"
                  >
                    {achievementsData[currentIndex].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {achievementsData.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                bg-white/20 hover:bg-white/40 rounded-full p-1 sm:p-2 transition-colors"
              >
                <ChevronLeft className="text-black" size={24} sm:size={32} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
                bg-white/20 hover:bg-white/40 rounded-full p-1 sm:p-2 transition-colors"
              >
                <ChevronRight className="text-black" size={24} sm:size={32} />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {achievementsData.map((_, index) => (
                  <motion.div 
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;