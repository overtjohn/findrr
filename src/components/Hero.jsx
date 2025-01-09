import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Logo from './Logo'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center hero-gradient">
      <div className="text-center max-w-4xl px-4 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Welcome to <span className="gradient-text">Findr</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 font-light tracking-wide"
        >
          The next generation social phenomenon
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors tracking-tight">
            Buy Now
          </button>
          <a
            href="https://github.com/findr"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500/10 transition-colors flex items-center gap-2 tracking-tight"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <Logo />
      </motion.div>
    </div>
  )
}
