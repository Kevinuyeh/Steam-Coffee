import React, { useEffect, useRef, useState } from 'react'
import img1 from '../assets/blog1.webp'
import img2 from '../assets/blog2.jpg'
import img3 from '../assets/blog3.png'

function Blogs() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
         if (entry.isIntersecting) {
  setVisible(true)
}
      },
      {
        threshold: 0.5, // 👈 triggers when 50% is visible
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className='w-full p-4 bg-dbrown overflow-hidden'>
      <h1 className='text-3xl md:text-5xl text-center text-cream font-medium mt-10'>
        Steam in Comfort
      </h1>

      <div className='relative p-6'>
        <div className='absolute bottom-0 left-0 w-full'>
          <div className='h-0.5 bg-cream w-[200px] md:w-[400px] mx-auto mb-2'></div>
          <div className='h-0.5 bg-cream w-12 mx-auto'></div>
        </div>
      </div>

      {/* Animated Cards */}
      <div
        ref={sectionRef}
        className='max-w-[1240px] mx-auto grid gap-5 md:grid-cols-3 mt-10 pb-10'
      >
        {/* Colleagues — Left → Center */}
        <div
          className={`
            flex flex-col bg-almond rounded-xl
            transition-all duration-2000 ease-out
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}
          `}
        >
          <img src={img1} alt='/img' className='w-full p-5' />
          <h1 className='text-dbrown font-medium p-3 text-2xl md:text-3xl'>
            Colleagues Space
          </h1>
          <p className='text-dbrown p-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus itaque id maiores earum consequatur voluptatibus ex quo mollitia, esse incidunt?
          </p>
        </div>

        {/* Couples — Bottom → Top */}
        <div
          className={`
            flex flex-col bg-almond rounded-xl
            transition-all duration-2000 ease-out delay-150
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          <img src={img2} alt='/img' className='w-full p-5' />
          <h1 className='text-dbrown font-medium p-3 text-2xl md:text-3xl'>
            Couples Space
          </h1>
          <p className='text-dbrown p-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus itaque id maiores earum consequatur voluptatibus ex quo mollitia, esse incidunt?
          </p>
        </div>

        {/* Friends — Right → Center */}
        <div
          className={`
            flex flex-col bg-almond rounded-xl
            transition-all duration-2000 ease-out delay-300
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
          `}
        >
          <img src={img3} alt='/img' className='w-full p-5' />
          <h1 className='text-dbrown font-medium p-3 text-2xl md:text-3xl'>
            Friends Space
          </h1>
          <p className='text-dbrown p-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus itaque id maiores earum consequatur voluptatibus ex quo mollitia, esse incidunt?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blogs
