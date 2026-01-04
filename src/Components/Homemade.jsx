// import React from 'react'
// import homemade from '../assets/home.jpg'
// import brussel from '../assets/Brussel.jpg'

// function Homemade() {
//   return (
//     <div className='w-full bg-dbrown p-4'>
//           <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 px-4  mt-10'>
//             <img src={homemade} alt='/img' className='md:w-[400px] mx-auto rounded-xl' />
    
//             <div className='flex flex-col justify-center p-4'>
//                 <h1 className='text-cream font-bold text-3xl md:text-4xl p-4'>Homemade Just For You</h1>
//                 <p className='text-cream p-4'>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia at mollitia, delectus perspiciatis tenetur, facilis distinctio odio, amet placeat tempore rem deleniti. Natus, ipsa, maiores nemo magnam veniam qui similique aperiam totam inventore velit culpa reprehenderit minus itaque omnis eum eos laborum sapiente suscipit excepturi. Saepe eaque blanditiis amet fugit!
//                 </p>
//                 <div className='p-4'>
//                 <button className='bg-transparent border-cream border-2 max-w-28  p-2 text-cream tracking-wider hover:bg-cream hover:text-dbrown transition cursor-pointer'>Read More</button>
//                 </div>
//             </div>
//           </div>


//           <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 px-4 mt-10 md:mt-20'>
    
//             <div className='flex flex-col justify-center p-4'>
//                 <h1 className='text-cream font-bold text-3xl md:text-4xl p-4'>Made in Brussels</h1>
//                 <p className='text-cream p-4'>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia at mollitia, delectus perspiciatis tenetur, facilis distinctio odio, amet placeat tempore rem deleniti. Natus, ipsa, maiores nemo magnam veniam qui similique aperiam totam inventore velit culpa reprehenderit minus itaque omnis eum eos laborum sapiente suscipit excepturi. Saepe eaque blanditiis amet fugit!
//                 </p>
//                 <div className='p-4'>
//                 <button className='bg-transparent border-cream border-2 max-w-28  p-2 text-cream tracking-wider hover:bg-cream hover:text-dbrown transition cursor-pointer'>Read More</button>
//                 </div>
//             </div>
//             <img src={brussel} alt='/img' className='w-[400px] mx-auto mo rounded-xl' />
//           </div>
//         </div>
//   )
// }

// export default Homemade



import React, { useEffect, useRef, useState } from 'react'
import homemade from '../assets/home.jpg'
import brussel from '../assets/Brussel.jpg'

function Homemade() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
      }
    },
    {
      threshold: 0.6 // 👈 wait until 60% of section is visible
    }
  )

  if (leftRef.current) observer.observe(leftRef.current)
  if (rightRef.current) observer.observe(rightRef.current)

  return () => observer.disconnect()
}, [])


  return (
    <div className="w-full bg-dbrown p-4">

      {/* SECTION 1 — SLIDE FROM LEFT */}
      <div
        ref={leftRef}
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-4 mt-10"
      >
        <img
          src={homemade}
          alt="/img"
          className="md:w-[400px] mx-auto rounded-xl"
        />

        <div
          className={`
            flex flex-col justify-center p-4
            transition-all duration-2000 delay-150 ease-out
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}
          `}
        >
          <h1 className="text-cream font-bold text-3xl md:text-4xl p-4">
            Homemade Just For You
          </h1>

          <p className="text-cream p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repudiandae praesentium quidem quas voluptates autem commodi a rem dolorem deleniti? Dolore voluptates quisquam numquam explicabo reiciendis facilis repudiandae in laudantium?
          </p>

          <div className="p-4">
            <button className="bg-transparent border-cream border-2 max-w-28 p-2 text-cream tracking-wider hover:bg-cream hover:text-dbrown transition cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2 — SLIDE FROM RIGHT */}
      <div
        ref={rightRef}
        className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-4 mt-10 md:mt-20"
      >
        <div
          className={`
            flex flex-col justify-center p-4
            transition-all duration-2000 delay-150 ease-out
            ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
          `}
        >
          <h1 className="text-cream font-bold text-3xl md:text-4xl p-4">
            Made in Brussels
          </h1>

          <p className="text-cream p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad animi maiores iusto dolorem natus veritatis, sint atque numquam ut aut quae, repellendus doloremque accusantium provident libero? Illo mollitia modi perspiciatis!
          </p>

          <div className="p-4">
            <button className="bg-transparent border-cream border-2 max-w-28 p-2 text-cream tracking-wider hover:bg-cream hover:text-dbrown transition cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        <img
          src={brussel}
          alt="/img"
          className="w-[400px] mx-auto rounded-xl"
        />
      </div>
    </div>
  )
}

export default Homemade
