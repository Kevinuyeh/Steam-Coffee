import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { milkshakeItems } from './milkshakesData'

function Milkshakes() {
  const sliderRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.slide-track', {
        xPercent: -50,
        ease: 'none',
        duration: 45,
        repeat: -1,
      })
    }, sliderRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full bg-almond py-10 overflow-hidden">
      <h1 className="text-3xl md:text-5xl text-center text-gray-800 font-medium">
        Top Milk Shakes
      </h1>

      <p className="text-gray-800 text-center text-lg mt-5">
        Explore the recent most bought milk shakes this week
      </p>

      {/* SLIDER */}
      <div ref={sliderRef} className="mt-10 overflow-hidden">
        <div className="slide-track flex w-max">
          {/* First set */}
          {milkshakeItems.map((item) => (
            <div
              key={item.id}
              className=" mx-4 p-4 rounded-xl w-[250px] flex-shrink-0 text-center cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-[300px] rounded-xl"
              />
              <h1 className="text-lg text-gray-800 font-medium mt-3">
                {item.title}
              </h1>
              <p className="text-gray-800 font-medium">{item.price}</p>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {milkshakeItems.map((item, index) => (
            <div
              key={`dup-${index}`}
              className="mx-4 p-4 rounded-xl w-[250px] flex-shrink-0 text-center cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-[300px] rounded-xl"
              />
              <h1 className="text-lg text-gray-800 font-medium mt-3">
                {item.title}
              </h1>
              <p className="text-gray-800 font-medium">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Milkshakes
