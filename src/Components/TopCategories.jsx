import React from 'react'
import img1 from '../assets/Cappuccino.webp'
import img2 from '../assets/espresso.jpg'
import img3 from '../assets/americano.webp'

function TopCategories() {
    return (
        <div className='w-full p-4 bg-lbrown pb-10'>
            <h1 className='text-3xl md:text-5xl text-center text-gray-800 font-medium mt-10'>Top Categories</h1>
            <div className='relative p-6'>
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
                    <div className="h-0.5 bg-gray-800 w-12 mx-auto"></div> {/* Short line on bottom */}
                </div>
            </div>
            <p className='text-gray-800 text-center text-lg mt-5'>Explore the recent most bought drinks this week</p>

            <div className="max-w-[1240px] grid md:grid-cols-3 gap-5 mt-10 mx-auto">
                <div className="relative flex justify-center items-center cursor-pointer">
                    <img
                        src={img1}
                        alt="Cappuccino"
                        className="rounded-4xl filter brightness-50 w-[250px] transition duration-300 ease-in-out hover:brightness-100"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition duration-300 ease-in-out">
                        <h1 className="text-slate-200 hover:underline hover:tracking-widest hover:underline-offset-4 transition-all duration-300 ease-in-out text-xl tracking-wider font-medium">
                            Cappuccino
                        </h1>
                    </div>
                </div>

                <div className="relative flex justify-center items-center cursor-pointer">
                    <img
                        src={img2}
                        alt="Espresso"
                        className="rounded-4xl filter brightness-50 w-[250px] transition duration-300 ease-in-out hover:brightness-100"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition duration-300 ease-in-out">
                        <h1 className="text-slate-200 hover:underline hover:tracking-widest hover:underline-offset-4 transition-all duration-300 ease-in-out text-xl tracking-wider font-medium">
                            Espresso
                        </h1>
                    </div>
                </div>

                <div className="relative flex justify-center items-center cursor-pointer">
                    <img
                        src={img3}
                        alt="Americano"
                        className="rounded-4xl filter brightness-50 w-[250px] transition duration-300 ease-in-out hover:brightness-100"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition duration-300 ease-in-out">
                        <h1 className="text-slate-200 hover:underline hover:tracking-widest hover:underline-offset-4 transition-all duration-300 ease-in-out text-xl tracking-wider font-medium">
                            Americano
                        </h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TopCategories