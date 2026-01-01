import React from 'react'
import homemade from '../assets/home.jpg'
import brussel from '../assets/Brussel.jpg'

function Homemade() {
  return (
    <div className='w-full bg-dbrown p-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 px-4  mt-10'>
            <img src={homemade} alt='/img' className='w-[400px] mx-auto rounded-xl' />
    
            <div className='flex flex-col justify-center p-4'>
                <h1 className='text-cream font-bold text-3xl md:text-4xl p-4'>Homemade Just For You</h1>
                <p className='text-cream p-4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia at mollitia, delectus perspiciatis tenetur, facilis distinctio odio, amet placeat tempore rem deleniti. Natus, ipsa, maiores nemo magnam veniam qui similique aperiam totam inventore velit culpa reprehenderit minus itaque omnis eum eos laborum sapiente suscipit excepturi. Saepe eaque blanditiis amet fugit!
                </p>
                <div className='p-4'>
                <button className='bg-transparent border-cream border-2 max-w-28  p-2 text-cream tracking-wider hover:bg-cream hover:text-dbrown transition cursor-pointer'>Read More</button>
                </div>
            </div>
          </div>


          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 px-4 mt-10 md:mt-20'>
    
            <div className='flex flex-col justify-center p-4'>
                <h1 className='text-cream font-bold text-3xl md:text-4xl p-4'>Made in Brussels</h1>
                <p className='text-cream p-4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia at mollitia, delectus perspiciatis tenetur, facilis distinctio odio, amet placeat tempore rem deleniti. Natus, ipsa, maiores nemo magnam veniam qui similique aperiam totam inventore velit culpa reprehenderit minus itaque omnis eum eos laborum sapiente suscipit excepturi. Saepe eaque blanditiis amet fugit!
                </p>
                <div className='p-4'>
                <button className='bg-transparent border-cream border-2 max-w-28  p-2 text-cream tracking-wider hover:bg-cream hover:text-dbrown transition cursor-pointer'>Read More</button>
                </div>
            </div>
            <img src={brussel} alt='/img' className='w-[400px] mx-auto mo rounded-xl' />
          </div>
        </div>
  )
}

export default Homemade