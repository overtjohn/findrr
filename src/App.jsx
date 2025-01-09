import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignUpPage from './pages/SignUpPage'
import AboutPage from './pages/AboutPage'
import VisionPage from './pages/VisionPage'
import AIFeaturesPage from './pages/AIFeaturesPage'
import PersonalityTest from './pages/PersonalityTest'
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      <ParticleBackground />
      <div className="relative z-10 flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/ai" element={<AIFeaturesPage />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
        </Routes>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
