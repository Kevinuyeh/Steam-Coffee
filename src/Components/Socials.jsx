import React from 'react'

import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Socials() {
  return (
    <div className='w-full bg-mondo p-4'>
          <div className='max-w-[1240px] mx-auto grid grid-cols-2 place-items-center gap-8'>
      <div className='flex items-center justify-center'>
                <FaInstagram className='ml-3 text-cream text-3xl md:text-5xl' />
                <div className='flex flex-col text-center'>
                <p className='text-cream font-bold mx-5'>#Brusselscoffee</p>
                <p className='text-cream text-sm mx-5'>official_steam_coffee</p>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <FaFacebook className='text-cream text-3xl md:text-5xl'/>
                <div className='flex flex-col text-center'>
                <p className='text-cream mx-5 font-bold'>#Brusselscoffee</p>
                <p className='text-cream text-sm mx-5'>official_steam_coffee</p>
                </div>
            </div>
            
            </div>
        </div>
  )
}

export default Socials