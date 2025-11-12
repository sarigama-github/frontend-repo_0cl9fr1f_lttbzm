import React from 'react'

const Slide = ({ eyebrow, title, points = [], image, dark = false, id }) => {
  return (
    <section id={id} className={`${dark ? 'bg-gray-900 text-white' : 'bg-white'} px-6`}>
      <div className="max-w-6xl mx-auto py-16 md:py-24">
        {eyebrow && (
          <p className={`text-xs uppercase tracking-wider font-semibold ${dark ? 'text-rose-300' : 'text-rose-600'}`}>
            {eyebrow}
          </p>
        )}
        <div className="mt-3 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
            <ul className="mt-6 space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${dark ? 'bg-rose-400' : 'bg-rose-500'}`}></span>
                  <p className="text-base md:text-lg opacity-90">{p}</p>
                </li>
              ))}
            </ul>
          </div>

          {image && (
            <div className="relative">
              <img src={image} alt="slide visual" className="w-full rounded-xl shadow-2xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Slide
