import React from 'react'
import Navbar from '../Components/Navbar'
import ctImg from '../assets/Wall1.jpg'
import ctbody from '../assets/contact.jpg'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import Footer from '../Components/Footer'

function Contact() {
    return (
        <div className='w-full'>
            <Navbar />
            <div className='relative w-full overflow-x-hidden'>
                <img
                    src={ctImg}
                    alt="About CrovaTech"
                    className="w-full md:h-[400px] object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-white text-4xl md:text-6xl font-medium text-center px-4">
                        Contact Us
                    </h1>
                </div>
            </div>

            <div className='w-full bg-dbrown pb-10'>
                <div className='max-w-[1240px] mx-auto items-center justify-center gap-7 grid md:grid-cols-3'>
                    <div className='flex flex-col mt-8'>
                        <h1 className='text-2xl md:text-3xl text-cream'>
                            Contact us
                        </h1>
                        <div className='flex gap-4 mt-5'>
                            <FaLocationPin size={20} className='text-cream' />
                            <p className='text-cream'>49, Featherstone Street, Ontario, Canada</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <FaEnvelope size={20} className='text-cream' />
                            <p className='text-cream'>officialsteamcoffee@gmail.com</p>
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <FaPhone size={20} className='text-cream' />
                            <p className='text-cream'>1234-567-8900</p>
                        </div>
                    </div>

                    <div className="max-w-[600px] mx-auto bg-transparent border border-cream p-8 rounded-xl shadow-lg mt-10">

                        <h1 className="text-3xl md:text-4xl text-center text-cream font-medium mb-8">
                            Get In Touch
                        </h1>

                        <form className="flex flex-col gap-5">

                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-4 rounded-md border text-cream"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-4 rounded-md border text-cream"
                            />

                            {/* Contact Number */}
                            <input
                                type="tel"
                                placeholder="Contact Number"
                                className="p-4 rounded-md border text-cream"
                            />

                            {/* Message */}
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="p-4 rounded-md border text-cream resize-none"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-dbrown border cursor-pointer text-cream py-3 rounded-md font-medium tracking-wide
                       hover:bg-cream hover:text-dbrown transition duration-300"
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                    <div>
                        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
  <iframe
    title="Ontario Canada Map"
    src="https://www.google.com/maps?q=Ontario,Canada&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact