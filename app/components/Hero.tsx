'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

export default function Hero() {
  const headings = [
    'Crafting Art with Love and Doodles',
    'Unleashing Creativity Through Lines',
    'Bringing Ideas to Life with Sketches',
    'Transforming Thoughts into Visual Art',
  ]
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length)
    }, 3000) // Change heading every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const paragraphText =
    'Welcome to the world of doodles! Explore vibrant and fun doodles that inspire creativity and spark joy in every stroke.'
  const paragraphWords = paragraphText.split(' ')

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <Navbar />
      <div className="relative flex min-h-screen items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute"
        >
          <div className="relative h-[400px] w-[400px]">
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                rotate: -360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Globe className="h-full w-full text-purple-500/30" />
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/20"
            />
          </div>
        </motion.div>

        <motion.h2
          key={currentHeadingIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl font-Tallica"
        >
          {headings[currentHeadingIndex].split(' ').map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="inline-block mr-2"
            >
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {word}
              </span>
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-12 right-12 max-w-md text-right text-sm text-white font-Tallica"
        >
          {paragraphWords.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  )
}
