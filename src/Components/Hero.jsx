import React from 'react';
import Back from '../assets/Coffee-bg.jpg';

function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img src={Back} className="w-full h-full object-cover rounded-xl brightness-50" alt="Background" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-end items-center px-6 md:px-14">

        <div className="max-w-3xl w-full text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-cream">
            Brewed To Perfection, Served With Love
          </h1>

          <div className="flex justify-center">
            <button className="bg-white cursor-pointer text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-lbrown hover:text-white font-medium transition">
              Order Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Hero;
