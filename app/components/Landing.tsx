'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import DoodleBox from './Doodlebox';
import ExpandedDoodle from './ExpandedDoodle';

const Landing = () => {
  const [selectedDoodle, setSelectedDoodle] = useState<number | null>(null);

  const doodles = [
    {
      image: '/doodle1.jpg',
      title: 'Whimsical Creatures',
      description: 'Explore a world of fantastical beings and charming critters.',
    },
    {
      image: '/doodle2.jpg',
      title: 'Abstract Patterns',
      description: 'Dive into mesmerizing shapes and intricate designs.',
    },
    {
      image: '/doodle3.jpg',
      title: 'Nature Inspired',
      description: 'Discover the beauty of flora and fauna in doodle form.',
    },
    {
      image: '/doodle4.jpg',
      title: 'Everyday Objects',
      description: 'See the extraordinary in ordinary items through doodles.',
    },
    {
      image: '/doodle5.jpg',
      title: 'Doodle Characters',
      description: 'Meet quirky personalities brought to life through simple lines.',
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-bl from-[#0f3460] via-[#16213e] to-[#1a1a2e] overflow-hidden relative">
      <div className="w-full max-w-screen-xl p-4 relative">
        <div className="relative z-10 flex flex-col lg:flex-row">
          <motion.div
            className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Crafting Doodles that Delight
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Dive into a world of vibrant doodles, where creativity flows through every design.
            </p>
            <div className="mt-6 flex items-center text-pink-400 hover:text-pink-300 cursor-pointer">
              <span className="mr-2">Discover More</span>
              <ChevronRight size={20} />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 bg-[#0f3460]/50 backdrop-blur-md border border-white/20 shadow-lg rounded-lg overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 1.5 }}
          >
            <div className="w-full h-full flex flex-col p-6">
              <h2 className="text-2xl font-bold text-pink-400 mb-4">Doodle Delights</h2>
              <p className="text-base text-pink-400 mb-6">
                Explore our collection of whimsical and creative doodles
              </p>
              <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                {doodles.map((doodle, index) => (
                  <DoodleBox
                    key={index}
                    image={doodle.image}
                    title={doodle.title}
                    description={doodle.description}
                    index={index}
                    onClick={() => setSelectedDoodle(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {selectedDoodle !== null && (
          <ExpandedDoodle
            image={doodles[selectedDoodle].image}
            title={doodles[selectedDoodle].title}
            onClose={() => setSelectedDoodle(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;
