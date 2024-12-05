'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface DoodleBoxProps {
  image: string;
  title: string;
  description: string;
  index: number;
  onClick: () => void;
}

const DoodleBox: React.FC<DoodleBoxProps> = ({ image, title, description, index, onClick }) => {
  return (
    <motion.div
      className="flex items-center bg-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
    >
      <div className="flex-shrink-0 mr-4">
        <Image src={image} alt={title} width={60} height={60} className="rounded-md" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#0f3460]">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default DoodleBox;
