'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://picsum.photos/600/400?random=1',
    title: 'Doodle Adventure',
    description: 'Embark on a whimsical journey through hand-drawn worlds.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/600/400?random=2',
    title: 'Sketch Safari',
    description: 'Explore the wild side of imagination with pencil and paper.',
  },
  {
    id: 3,
    image: 'https://picsum.photos/600/400?random=3',
    title: 'Doodle Dreams',
    description: 'Where reality meets fantasy in a world of endless creativity.',
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-bl from-[#0f3460] via-[#16213e] to-[#1a1a2e] overflow-hidden relative">
      <div className="relative w-full max-w-4xl h-[500px] overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1,
              },
              exit: (direction: number) => ({
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <div className={`relative w-full h-full bg-gradient-to-r ${slides[currentIndex]}`}>
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
              >
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50"
                />
              </motion.div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-4 text-center"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {slides[currentIndex].title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-center max-w-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {slides[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-10 h-10 text-white filter drop-shadow-lg" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="w-10 h-10 text-white filter drop-shadow-lg" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
