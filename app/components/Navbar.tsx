'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 z-10 w-full px-1 py-1 transition-all duration-500 ${
        scrollDirection === 'down'
          ? 'bg-white/10 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image
            src="/logoo.png"
            alt="Logo"
            width={200} // Updated width for a wider logo
            height={100} // Updated height to maintain proportions
            className="h-16 w-auto sm:h-20 sm:w-auto" // Responsive styling for width
          />
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-white hover:text-pink-400 transition-colors duration-300 font-Tallica text-lg"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Explore Doodles Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Link
            href="#"
            className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-6 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
          >
            Explore Doodles
          </Link>
        </motion.div>

        {/* Mobile Navigation and Hamburger */}
        <div className="block md:hidden flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#"
              className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
            >
              Explore Doodles
            </Link>
          </motion.div>

          <button
            className="ml-4 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block md:hidden mt-4 bg-white/90 p-4 rounded-lg shadow-md"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-black hover:text-pink-400 transition-colors duration-300 font-Tallica text-base"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
