import React from 'react'
import cof1 from '../assets/coff.jpg'
import cof2 from '../assets/coff-2.jpg'
import cof3 from '../assets/coff-3.jpg'
import cof4 from '../assets/coff-4.jpg'

function CoffeeDisplay() {
  return (
    // <div className='w-full bg-dbrown overflow-hidden'>
    //     <div className='flex w-fit '>
    //         <img src={cof1} alt='/img' className='md:w-[350px] w-[120px] shrink-0'/>
    //         <img src={cof2} alt='/img' className='md:w-[350px] w-[120px] shrink-0'/> 
    //         <img src={cof3} alt='/img' className='md:w-[350px] w-[120px] shrink-0'/>
    //         <img src={cof4} alt='/img' className='md:w-[350px] w-[120px] shrink-0'/>
    //     </div>
    // </div>

    <div className="w-full overflow-hidden">
  <div className="flex">
    <img src={cof1} alt="" className="flex-1 object-cover w-[100px] md:w-[300px] brightness-50" />
    <img src={cof2} alt="" className="flex-1 object-cover w-[100px] md:w-[300px] brightness-50" />
    <img src={cof3} alt="" className="flex-1 object-cover w-[100px] md:w-[300px] brightness-50" />
    <img src={cof4} alt="" className="flex-1 object-cover w-[100px] md:w-[300px] brightness-50" />
  </div>
</div>
  )
}

export default CoffeeDisplay