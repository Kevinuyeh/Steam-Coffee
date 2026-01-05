import { useEffect, useState, useRef } from 'react'
import Back from '../assets/about.jpg'
import Navbar from '../Components/Navbar'
import img1 from '../assets/green-energy.png'
import img2 from '../assets/latte-art.png'
import img3 from '../assets/coffee-bag.png'
import Socials from '../Components/Socials'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

const useFadeOnScroll = (threshold = 0.6) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target) // 👈 stops future triggers
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
function About() {
    const { ref: aboutRef, visible: aboutVisible } = useFadeOnScroll(0.6)
    const { ref: whyRef, visible: whyVisible } = useFadeOnScroll(0.6)

    const [visible, setVisible] = useState(false)
    
      useEffect(() => {
        setVisible(true)
      }, [])


  return (
    <div className='w-full relative h-screen'>
        <Navbar />
        <img
                src={Back}
                className="w-full h-[600px] object-cover brightness-50"
                alt="Background"
              />

                 {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-start items-center px-6 md:px-14">
        <div className="max-w-3xl w-full text-left pb-10">

          {/* Fade-in Text */}
          <h1
            className={`
              text-4xl md:text-6xl
              font-bold mb-6 leading-tight
              text-cream
              md:w-[40rem] mr-auto
              transition-all duration-2000 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            Experience the <span className='text-slate-200'>Art of Coffee</span>
          </h1>
          <p className={`
              mb-6 leading-tight font-bold tracking-wider
              text-cream
              md:w-[40rem] mr-auto
              transition-all duration-2000 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}> Explore our premium selection of handcrafted coffee beans brewed to perfection.</p>

          <div className="flex justify-start">
            <button
              className={`
                bg-white cursor-pointer text-gray-800 px-6 py-3
                rounded-lg shadow-lg font-medium transition-all duration-1000
                hover:bg-lbrown hover:text-white
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: '300ms' }}
            >
              Order Now
            </button>
          </div>

        </div>
      </div>
      

      <div ref={aboutRef} className="bg-cream w-full flex flex-col items-center mx-auto pb-10">
  
  <h1
    className={`
      text-center text-3xl md:text-5xl text-brown mx-auto mt-10
      transition-all duration-[3000ms] ease-out
      ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `}
  >
    <span className='text-dbrown'>About Us</span> Our Story
  </h1>

  <p
    className={`
      tracking-wider text-dbrown mt-10 p-4 max-w-7xl
      transition-all duration-[3000ms] ease-out delay-150
      ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, necessitatibus delectus provident eveniet aut explicabo laboriosam consequatur fugit officiis! Vel totam laborum temporibus vitae libero. Dolorum eaque cumque ab quaerat consequuntur laboriosam, libero nihil a nesciunt eius magni blanditiis explicabo.
  </p>

  <p
    className={`
      tracking-wider text-dbrown p-4 max-w-7xl
      transition-all duration-[3000ms] ease-out delay-300
      ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora, maiores, molestiae sapiente mollitia ipsam expedita rem reiciendis dolorem laudantium dolore natus beatae error obcaecati nostrum quaerat debitis cumque odit id facere soluta repudiandae. Hic iste dignissimos illum adipisci dolorem.
  </p>

  <p
    className={`
      font-bold tracking-wider text-brown text-center text-2xl
      transition-all duration-[3000ms] ease-out delay-500
      ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `}
  >
    Steam Coffee Team....
  </p>

</div>


    <div ref={whyRef} className="bg-dbrown w-full flex flex-col items-center mx-auto pb-10">

  <h1
    className={`
      text-center text-3xl md:text-5xl text-brown mx-auto mt-10
      transition-all duration-[3000ms] ease-out
      ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
    `}
  >
    <span className='text-cream'>Why</span> <span className='text-brown'>Choose Us</span>
  </h1>

  <div className='max-w-[1240px] grid md:grid-cols-3 gap-20 mx-auto p-4'>

    <div
      className={`
        flex flex-col items-center text-center mx-auto mt-10
        transition-all duration-[3000ms] ease-out delay-100
        ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <img src={img1} alt='/img' className='w-[70px]' />
      <h1 className='text-cream text-xl font-bold tracking-wider mt-10'>
        Sustainably sourced
      </h1>
      <p className='text-cream tracking-wide max-w-xl mt-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    <div
      className={`
        flex flex-col items-center text-center mx-auto mt-10
        transition-all duration-[3000ms] ease-out delay-250
        ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <img src={img2} alt='/img' className='w-[70px]' />
      <h1 className='text-cream text-xl font-bold tracking-wider mt-10'>
        Expert Craftsmanship
      </h1>
      <p className='text-cream tracking-wide max-w-xl mt-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    <div
      className={`
        flex flex-col items-center text-center mx-auto mt-10
        transition-all duration-[3000ms] ease-out delay-400
        ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <img src={img3} alt='/img' className='w-[70px]' />
      <h1 className='text-cream text-xl font-bold tracking-wider mt-10'>
        Premium Quality
      </h1>
      <p className='text-cream tracking-wide max-w-xl mt-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

  </div>
</div>

      <Socials />
      <Blogs />
      <Footer />
    </div>
  )
}

export default About