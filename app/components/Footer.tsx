'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Send } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className="relative w-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
      {/* Doodle overlay */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-20 w-20 border-4 border-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 relative inline-block">
            Keep Doodling, Keep Discovering!
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 "
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </h2>
          <motion.button
            className="bg-white text-purple-600 px-4  py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-100 hover:text-purple-700 hover:scale-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More Doodles
          </motion.button>
        </motion.div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Explore', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white hover:text-purple-200 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={32} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <motion.div
                  className="absolute inset-0 border-2 border-white rounded-full pointer-events-none"
                  initial={false}
                  animate={{ scale: email ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.button
                type="submit"
                className="flex items-center justify-center bg-white text-purple-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-purple-100 hover:text-purple-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <Send size={18} className="ml-2" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center text-white text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>© 2024 Doodle Chronicles. All rights reserved.</p>
          <p className="mt-2 font-light italic">Made with creativity and doodles!</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

