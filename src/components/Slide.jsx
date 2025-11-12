import React from 'react'
import { motion } from 'framer-motion'

const Slide = ({ eyebrow, title, points = [], image, dark = false, id }) => {
  return (
    <section id={id} className={`${dark ? 'bg-gray-950 text-white' : 'bg-white'} px-6`}>
      <div className="max-w-6xl mx-auto py-16 md:py-24">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className={`text-xs uppercase tracking-wider font-semibold ${dark ? 'text-rose-300' : 'text-rose-600'}`}
          >
            {eyebrow}
          </motion.p>
        )}
        <div className="mt-3 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              {title}
            </motion.h2>
            <ul className="mt-6 space-y-3">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${dark ? 'bg-rose-400' : 'bg-rose-500'}`}></span>
                  <p className="text-base md:text-lg opacity-90">{p}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img src={image} alt="slide visual" className="w-full rounded-xl shadow-2xl" />
              <div className="pointer-events-none absolute -z-10 inset-0 rounded-xl bg-gradient-to-tr from-rose-500/10 via-transparent to-orange-400/10 blur-2xl" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Slide
