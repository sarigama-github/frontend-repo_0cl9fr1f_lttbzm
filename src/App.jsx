import React from 'react'
import Hero from './components/Hero'
import Agenda from './components/Agenda'
import Slide from './components/Slide'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero with Spline globe */}
      <Hero />

      {/* Agenda */}
      <Agenda />

      {/* Presentation Slides */}
      <div id="presentation">
        <Slide
          eyebrow="Brand Heritage"
          title="A trusted icon in writing and creativity"
          points={[
            'Over 160 years of craftsmanship and brand recognition.',
            'Distinctive design language with the STABILO swan emblem.',
            'Loved by students, teachers, artists, and professionals worldwide.',
          ]}
        />

        <Slide
          dark
          eyebrow="Product Portfolio"
          title="Highlighters, Fineliners, Color Pencils and more"
          points={[
            'STABILO BOSS ORIGINAL – the classic highlighter recognized globally.',
            'STABILO point 88 – iconic fineliner for precision and color variety.',
            'Ergonomic options for learning to write, creative sets, and accessories.',
          ]}
        />

        <Slide
          eyebrow="Sustainability"
          title="Designed with responsibility and long-term value"
          points={[
            'Commitment to sustainable materials and long-lasting products.',
            'Refillable formats to minimize waste and maximize product lifespan.',
            'Responsible production and packaging initiatives.',
          ]}
        />

        <Slide
          dark
          eyebrow="Education & Community"
          title="Supporting learning, classrooms, and creative communities"
          points={[
            'Tools that help children learn to write with comfort and control.',
            'Resources for educators and programs for schools.',
            'Collaborations with artists and content creators.',
          ]}
        />

        <Slide
          eyebrow="Innovation & Technology"
          title="From ergonomics to color science"
          points={[
            'Product design focused on grip, durability, and precision.',
            'Broad color systems for consistent creative workflows.',
            'Exploring digital-analog bridges for modern creativity.',
          ]}
        />

        <Slide
          dark
          eyebrow="Global Presence"
          title="A brand recognized across continents"
          points={[
            'Distribution in many regions with localized product ranges.',
            'Clear, vibrant brand identity centered on red and white.',
            'Strong retail partnerships and community outreach.',
          ]}
        />

        <section className="bg-gradient-to-b from-white to-rose-50 px-6">
          <div className="max-w-6xl mx-auto py-16 md:py-24 text-center">
            <h3 className="text-3xl md:text-4xl font-bold">Thank you</h3>
            <p className="mt-3 text-gray-600">Questions? Let’s discuss opportunities and next steps.</p>
            <div className="mt-6 flex justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-lg shadow transition-colors">Get in touch</a>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-700 hover:text-gray-900 border border-gray-200 px-5 py-3 rounded-lg shadow-sm">Download deck</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
