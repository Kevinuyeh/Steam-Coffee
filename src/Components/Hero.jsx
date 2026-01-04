import React, { useEffect, useState } from 'react'
import Back from '../assets/Coffee-bg.jpg'

function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={Back}
        className="w-full h-full object-cover rounded-xl brightness-50"
        alt="Background"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-end items-center px-6 md:px-14">
        <div className="max-w-3xl w-full text-right">

          {/* Fade-in Text */}
          <h1
            className={`
              text-4xl md:text-6xl
              font-bold mb-6 leading-tight
              text-cream
              md:w-[40rem] ml-auto
              transition-all duration-2000 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            Brewed To Perfection, Served With Love
          </h1>

          <div className="flex justify-center">
            <button
              className={`
                bg-white cursor-pointer text-gray-800 px-6 py-3
                rounded-lg shadow-lg font-medium transition-all duration-1000
                hover:bg-lbrown hover:text-white
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: '300ms' }}
            >
              Order Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
