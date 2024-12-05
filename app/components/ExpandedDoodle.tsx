'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ExpandedDoodleProps {
  image: string;
  title: string;
  onClose: () => void;
}

const ExpandedDoodle: React.FC<ExpandedDoodleProps> = ({ image, title, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedDoodle;
