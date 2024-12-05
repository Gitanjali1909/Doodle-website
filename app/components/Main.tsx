'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Image data (can replace with your own image URLs)
const images = [
  '/image.png',
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png',
  '/image6.png',
];

function Main() {
  const [currentImage, setCurrentImage] = useState(0);

  // Switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-4 sm:p-10">
      <div className="flex flex-wrap gap-3 sm:gap-6 justify-center mb-20 sm:mb-40">
        {/* Cartoon Character Cards */}
        <motion.div
          className="bg-[#f8d9f6] p-3 sm:p-6 rounded-lg w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-[#0f3460] font-bold text-sm sm:text-base">Shinchan</span>
        </motion.div>

        <motion.div
          className="bg-[#007acc] p-3 sm:p-6 rounded-lg w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white font-bold text-sm sm:text-base">Donald Duck</span>
        </motion.div>

        <motion.div
          className="bg-[#FF0055] p-3 sm:p-6 rounded-lg w-32 h-24 sm:w-48 sm:h-32 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white font-bold text-sm sm:text-base">Bugs Bunny</span>
        </motion.div>

        <motion.div
          className="bg-[#06b6d4] p-3 sm:p-6 rounded-lg w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white font-bold text-sm sm:text-base">Tom & Jerry</span>
        </motion.div>

        <motion.div
          className="bg-[#2D9CDB] p-3 sm:p-6 rounded-lg w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white font-bold text-sm sm:text-base">Scooby-Doo</span>
        </motion.div>

        {/* Cartoon Character 6 */}
        <motion.div
          className="bg-[#115854] p-3 sm:p-6 rounded-lg w-32 h-24 sm:w-44 sm:h-32 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white font-bold text-sm sm:text-base">Pikachu</span>
        </motion.div>
      </div>

      {/* Main Section Title */}
      <div className="absolute bottom-20 sm:bottom-60 left-4 sm:left-10 w-full sm:w-1/2 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Doodle Your Favorite Cartoons</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-8">
          Explore the colorful world of your favorite cartoon characters through doodles and creativity.
        </p>
      </div>

      {/* Footer Content Section */}
      <div className="absolute bottom-4 sm:bottom-20 left-4 sm:left-8 flex flex-col gap-1 sm:gap-2 w-full sm:w-80">
        {/* Card for "Creative Doodles" */}
        <div className="bg-[#0f3460]/50 backdrop-blur-md p-2 sm:p-2 border border-white rounded-lg h-6 sm:h-8 flex items-center justify-center">
          <span className="text-white font-bold text-xs sm:text-sm">Creative Doodles</span>
        </div>

        {/* Card for "Cartoon Art" */}
        <div className="bg-[#0f3460]/50 backdrop-blur-md p-2 sm:p-3 border border-white rounded-lg h-6 sm:h-8 flex items-center justify-center">
          <span className="text-white font-bold text-xs sm:text-sm">Cartoon Art</span>
        </div>

        {/* Card for "Design Meets Animation" */}
        <div className="bg-[#0f3460]/50 backdrop-blur-md p-2 sm:p-3 border border-white rounded-lg h-6 sm:h-8 flex items-center justify-center">
          <span className="text-white font-bold text-xs sm:text-sm">Design Meets Animation</span>
        </div>
      </div>

      {/* Right Section for Image Switching */}
      <div className="hidden sm:block absolute bottom-20 sm:bottom-30 right-4 sm:right-10 w-full sm:w-1/2 flex justify-center gap-4">
        <div className="w-60 h-32 ml-10 sm:w-80 sm:h-40 relative">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex justify-center items-center"
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <Image
                src={src}
                alt={`image ${index + 1}`}
                height={250} 
                width={300}
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;

