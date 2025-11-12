import React from 'react'

const Agenda = () => {
  const items = [
    'Brand Heritage & Recognition',
    'Product Portfolio Highlights',
    'Sustainability & Responsibility',
    'Education & Community',
    'Innovation & Technology',
    'Global Presence & Next Steps',
  ]

  return (
    <section id="agenda" className="bg-white px-6">
      <div className="max-w-6xl mx-auto py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Agenda</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-4 shadow-sm bg-gradient-to-br from-white to-gray-50">
              <div className="text-rose-600 text-sm font-semibold">{String(i + 1).padStart(2, '0')}</div>
              <div className="mt-1 font-medium text-gray-800">{it}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agenda
