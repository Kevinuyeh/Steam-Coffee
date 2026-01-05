// import React from 'react'
// import back from '../assets/Wall2.jpg'
// import { Link } from 'react-router-dom'
// import { FaEnvelope, FaPhone } from 'react-icons/fa'

// function Footer() {
//   return (
//     <div className='relative w-full bg-black'>
//       {/* Background Image */}
//       <img
//         src={back}
//         className='absolute inset-0 w-full h-full object-cover brightness-50'
//         alt='background'
//       />

//       {/* Content */}
//       <div className='relative w-full mx-auto grid lg:grid-cols-3 gap-6 text-slate-100 tracking-wide py-[2rem] px-4'>
//         <div>
//           <h1 className='w-full text-3xl tracking-wide font-galada'>
//             Steam Coffee
//           </h1>
//           <p className='py-4 font-medium'>
//           At Steam Coffee, we craft rich, aromatic brews to fuel your day. From bold espressos to creamy lattes, every cup is made with passion. Visit us for a cozy ambiance, quality beans, and unmatched flavor. Stay energized—sip, savor, and steam ahead! 
//           </p>
//         </div>

//         <div className='lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8 mt-6'>
//           <div className='mr-2'>
//             <h1 className='cursor-pointer font-medium text-3xl md:text-4xl'>
//               <Link to='/about'>About</Link>
//             </h1>
//             <h1 className='cursor-pointer font-medium text-3xl md:text-4xl'>
//               <Link to='/services'>Blog</Link>
//             </h1>
//             <h1 className='cursor-pointer font-medium text-3xl md:text-4xl'>
//               <Link to='/contact'>Contact</Link>
//             </h1>
//           </div>

//           <div>
//             <h6 className='font-medium text-slate-300'>Keep in Touch</h6>
//             <ul>
//               <li className='py-2 text-sm flex gap-2'>
//                 <FaPhone className='text-slate-300' /> +(234)123-456-7890
//               </li>
//               <li className='py-2 text-sm flex gap-2'>
//                 <FaEnvelope className='text-slate-300' /> steamcoffee@gmail.com
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h6 className='font-medium text-gray-300'>Customer Care</h6>
//             <ul>
//               <li className='p-2 rounded-md text-sm hover:bg-almond hover:text-gray-800 cursor-pointer'>
//                 <Link to='/contact'>Contact Us</Link>
//               </li>
//               <li className='p-2 rounded-md text-sm hover:bg-almond hover:text-gray-800 cursor-pointer'>
//                 <Link to='/faq'>FAQ</Link>
//               </li>
//             </ul>
//           </div>

//           <div> 
//             <h6 className='font-medium text-gray-300'>Service Hours</h6>
//             <ul>
//               <li className='py-2 text-sm'><span className='font-bold'>MON-FRI:</span> 8AM-10PM</li>
//               <li className='py-2 text-sm'><span className='font-bold'>SATURDAY:</span> 8AM-10PM</li>
//               <li className='py-2 text-sm'><span className='font-bold'>SUN:</span> CLOSED</li>
//             </ul>
//           </div>
//         </div>

//         <div className='col-span-3 text-center mt-6'>
//           <hr className='w-full border-slate-300' />
//           <h1 className='mt-4'>© 2024 Steam Coffee. All Rights Reserved.</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer





import React from 'react'
import back from '../assets/Wall2.jpg'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <div className="relative w-full bg-black">
      {/* Background Image */}
      <img
        src={back}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-4 py-10 text-slate-100">

        {/* TOP SECTION */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <h1 className="text-2xl md:text-3xl font-galada">
              Steam Coffee
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-200">
              At Steam Coffee, we craft rich, aromatic brews to fuel your day.
              From bold espressos to creamy lattes, every cup is made with passion.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 md:grid-cols-4">

            {/* NAV */}
            <div>
              <h6 className="mb-3 text-slate-300 font-semibold">Navigate</h6>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h6 className="mb-3 text-slate-300 font-semibold">Keep in Touch</h6>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FaPhone /> 1234-567-8900
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> steamcoffee@gmail.com
                </li>
              </ul>
            </div>

            {/* CUSTOMER CARE */}
            <div>
              <h6 className="mb-3 text-slate-300 font-semibold">Customer Care</h6>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* HOURS */}
            <div>
              <h6 className="mb-3 text-slate-300 font-semibold">Service Hours</h6>
              <ul className="space-y-2 text-sm">
                <li><span className="font-semibold">Mon-Fri:</span> 8AM-10PM</li>
                <li><span className="font-semibold">Saturday:</span> 8AM-10PM</li>
                <li><span className="font-semibold">Sunday:</span> Closed</li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 text-center text-xs text-slate-300">
          <hr className="mb-4 border-slate-600" />
          © 2024 Steam Coffee. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
