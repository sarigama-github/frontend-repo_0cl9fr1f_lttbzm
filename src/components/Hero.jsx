import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-orange-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Animated gradient + vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_95%)]" />

      {/* Soft animated glow accents */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl animate-pulse-slower" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="backdrop-blur-sm/0"
        >
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full shadow-sm"
          >
            STABILO • Creative Tools
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Color the World with Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600"
          >
            A concise brand presentation inspired by STABILO — innovation in writing instruments, sustainability, and education. Spin the red globe and explore key highlights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a href="#presentation" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-lg shadow transition-colors will-change-transform hover:scale-[1.02] active:scale-[0.99]">
              Start Presentation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#agenda" className="inline-flex items-center gap-2 bg-white text-gray-700 hover:text-gray-900 border border-gray-200 px-5 py-3 rounded-lg shadow-sm hover:shadow will-change-transform hover:scale-[1.02] active:scale-[0.99]">
              View Agenda
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
