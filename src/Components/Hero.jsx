import React from 'react';
import Back from '../assets/Wall1.jpg';

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img src={Back} className="w-full h-full object-cover rounded-xl brightness-50" alt="Background" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-slate-300">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Freshly Roasted <span className='text-lbrown'>Coffee</span></h1>
        <button className="bg-white cursor-pointer text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-lbrown font-medium transition">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
