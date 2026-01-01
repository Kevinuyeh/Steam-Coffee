import React from 'react'
import img1 from '../assets/blog1.webp'
import img2 from '../assets/blog2.jpg'
import img3 from '../assets/blog3.png'

function Blogs() {
  return (
    <div className='w-full p-4 bg-dbrown'>
      <h1 className='text-3xl md:text-5xl text-center text-cream font-medium mt-10 '>Steam in Comfort</h1>
      <div className='relative p-6'>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-0.5 bg-cream w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
          <div className="h-0.5 bg-cream w-12 mx-auto"></div> {/* Short line on bottom */}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto justify-items-center grid gap-5 md:grid-cols-3 mt-10 pb-10">
        <div className='flex flex-col bg-almond rounded-xl'>
            <img src={img1} alt='/img' className='w-full p-5'/>
            <h1 className='text-dbrown font-medium p-3 text-2xl md:text-3xl'>
              Colleagues Space
            </h1>
            <p className='text-dbrown p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis repellat perferendis repellendus. Molestiae delectus at, incidunt voluptates dolorum magnam excepturi cupiditate, perspiciatis qui exercitationem ratione alias facere rem dolorem.</p>
        </div>

        <div className='flex flex-col bg-almond rounded-xl '>
            <img src={img2} alt='/img' className='w-full p-5'/>
            <h1 className='text-dbrown font-medium p-3 text-2xl md:text-3xl'>
              Couples Space
            </h1>
            <p className='text-dbrown p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis repellat perferendis repellendus. Molestiae delectus at, incidunt voluptates dolorum magnam excepturi cupiditate, perspiciatis qui exercitationem ratione alias facere rem dolorem.</p>
        </div>

        <div className='flex flex-col bg-almond rounded-xl '>
            <img src={img3} alt='/img' className='w-full p-5'/>
            <h1 className='text-dbrown font-medium p-3 text-2xl md:text-3xl'>
              Friends Space
            </h1>
            <p className='text-dbrown p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis repellat perferendis repellendus. Molestiae delectus at, incidunt voluptates dolorum magnam excepturi cupiditate, perspiciatis qui exercitationem ratione alias facere rem dolorem.</p>
        </div>
      </div>
    </div>
  )
}

export default Blogs