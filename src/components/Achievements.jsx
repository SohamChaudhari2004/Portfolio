import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hack2Futbg from "../assets/hack2fut.png";
import WordPullUp from "./magicui/word-pull-up";
import IITRoparHackBg from "../assets/IITRoparhack2nd.png"
const achievementsData = [
  {
    id: 1,
    title: "2nd Position IIT Ropar @Medino'sXAdvitiya'25",
    description: "Secured Runner Up(2nd) position at Medino'sXAdvitiya'25 2025,Hosted at IIT Ropar. The event was a online hackathon that challenged my AI/ML skills and I was able to create a symptom analyzer chatbot and a OCR based prescription reader. ",
    backgroundImage: IITRoparHackBg,
  },
  {
    id: 2,
    title: "Top 10 @Hack2Future",
    description:
      "Secured a top 10 position in the Hack2Future 2024 hackathon at IIIT Dharwad, competing among 1,700+ participants. Developed Vision AI, an advanced AI-powered solution for efficient video and image analysis, leveraging machine learning to enhance visual data processing. The project showcased innovation in real-time object detection, scene recognition, and automated insights.",
    backgroundImage: Hack2Futbg,
  },
];

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return; // Pause auto-slide when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievementsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + achievementsData.length) % achievementsData.length
    );
  };

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        className="md:text-6xl lg:text-7xl text-5xl font-bold font-mono tracking-[-0.02em] text-red-400 dark:text-white mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <WordPullUp words="MY ACHIEVEMENTS" />
      </motion.div>

      <div
        className="relative w-full px-4 sm:px-6 lg:px-8 mb-16 flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-[70vw] mx-auto m-10 h-[60vh]">
          <div className="relative rounded-3xl h-[60vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat filter brightness-75"
                  style={{
                    backgroundImage: `url(${achievementsData[currentIndex].backgroundImage})`,
                  }}
                />
                <div className="relative ml-20 mb-20 mt-60 z-10 w-full flex items-center justify-center sm:justify-start">
                  <div className="max-w-lg bg-black/50 p-6 rounded-lg mx-4">
                    <motion.h2
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-3xl font-bold text-white mb-4"
                    >
                      {achievementsData[currentIndex].title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-lg text-gray-200"
                    >
                      {achievementsData[currentIndex].description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 bg-black/50 p-2 rounded-full hover:bg-black/70 z-20"
            >
              <ChevronLeft className="text-white" size={32} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 z-20"
            >
              <ChevronRight className="text-white" size={32} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 flex space-x-2 z-20">
              {achievementsData.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;