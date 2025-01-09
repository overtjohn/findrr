import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20"
      >
        <div>
          <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
            Create Account
          </h2>
          <p className="text-center text-gray-400">
            Join the future of AI-powered finance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/40 text-white"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/40 text-white"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
