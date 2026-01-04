// import React from 'react'
// import img1 from '../assets/cappuccino.webp'
// import img2 from '../assets/espresso.jpg'
// import img3 from '../assets/americano.webp'

// function TopCategories() {
//     return (
//         <div className='w-full p-4 bg-dbrown pb-10'>
//             <h1 className='text-3xl md:text-5xl text-center text-cream font-medium mt-10'>Top Coffees</h1>
//             <div className='relative p-6'>
//                 <div className="absolute bottom-0 left-0 w-full">
//                     <div className="h-0.5 bg-cream w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
//                     <div className="h-0.5 bg-cream w-12 mx-auto"></div> {/* Short line on bottom */}
//                 </div>
//             </div>
//             <p className='text-cream text-center text-lg mt-5'>Explore the recent most bought coffees this week</p>

//             <div className="max-w-[1240px] grid md:grid-cols-3 gap-5 mt-10 mx-auto">
//                 <div className="relative flex justify-center items-center cursor-pointer">
//                     <img
//                         src={img1}
//                         alt="Cappuccino"
//                         className="rounded-4xl filter brightness-50 w-[250px] transition duration-300 ease-in-out hover:brightness-100"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition duration-300 ease-in-out">
//                         <h1 className="text-slate-200 hover:underline hover:tracking-widest hover:underline-offset-4 transition-all duration-300 ease-in-out text-xl tracking-wider font-medium">
//                             Cappuccino
//                         </h1>
//                     </div>
//                 </div>

//                 <div className="relative flex justify-center items-center cursor-pointer">
//                     <img
//                         src={img2}
//                         alt="Espresso"
//                         className="rounded-4xl filter brightness-50 w-[250px] transition duration-300 ease-in-out hover:brightness-100"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition duration-300 ease-in-out">
//                         <h1 className="text-slate-200 hover:underline hover:tracking-widest hover:underline-offset-4 transition-all duration-300 ease-in-out text-xl tracking-wider font-medium">
//                             Espresso
//                         </h1>
//                     </div>
//                 </div>

//                 <div className="relative flex justify-center items-center cursor-pointer">
//                     <img
//                         src={img3}
//                         alt="Americano"
//                         className="rounded-4xl filter brightness-50 w-[250px] transition duration-300 ease-in-out hover:brightness-100"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition duration-300 ease-in-out">
//                         <h1 className="text-slate-200 hover:underline hover:tracking-widest hover:underline-offset-4 transition-all duration-300 ease-in-out text-xl tracking-wider font-medium">
//                             Americano
//                         </h1>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default TopCategories



import React, { useEffect, useRef, useState } from 'react'
import img1 from '../assets/cappuccino.webp'
import img2 from '../assets/espresso.jpg'
import img3 from '../assets/americano.webp'

function TopCategories() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
         setVisible(entry.isIntersecting)
      },
      {
        threshold: 0.4, // 👈 triggers when 40% is visible
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className='w-full p-4 bg-dbrown pb-10'>
      <h1 className='text-3xl md:text-5xl text-center text-cream font-medium mt-10'>
        Top Coffees
      </h1>

      <div className='relative p-6'>
        <div className='absolute bottom-0 left-0 w-full'>
          <div className='h-0.5 bg-cream w-[200px] md:w-[400px] mx-auto mb-2'></div>
          <div className='h-0.5 bg-cream w-12 mx-auto'></div>
        </div>
      </div>

      <p className='text-cream text-center text-lg mt-5'>
        Explore the recent most bought coffees this week
      </p>

      {/* Animated Grid */}
      <div
        ref={sectionRef}
        className={`
          max-w-[1240px] grid md:grid-cols-3 gap-5 mt-10 mx-auto
          transition-all duration-1000 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
      >
        {/* Card 1 */}
        <div className='relative flex justify-center items-center cursor-pointer'>
          <img
            src={img1}
            alt='Cappuccino'
            className='rounded-xl filter brightness-50 w-[250px] transition duration-300 hover:brightness-100'
          />
          <div className='absolute inset-0 flex justify-center items-center'>
            <h1 className='text-slate-200 text-xl tracking-wider font-medium hover:underline hover:tracking-widest transition-all'>
              Cappuccino
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className='relative flex justify-center items-center cursor-pointer'>
          <img
            src={img2}
            alt='Espresso'
            className='rounded-xl filter brightness-50 w-[250px] transition duration-300 hover:brightness-100'
          />
          <div className='absolute inset-0 flex justify-center items-center'>
            <h1 className='text-slate-200 text-xl tracking-wider font-medium hover:underline hover:tracking-widest transition-all'>
              Espresso
            </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className='relative flex justify-center items-center cursor-pointer'>
          <img
            src={img3}
            alt='Americano'
            className='rounded-xl filter brightness-50 w-[250px] transition duration-300 hover:brightness-100'
          />
          <div className='absolute inset-0 flex justify-center items-center'>
            <h1 className='text-slate-200 text-xl tracking-wider font-medium hover:underline hover:tracking-widest transition-all'>
              Americano
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCategories
