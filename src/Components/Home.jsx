import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import TopCategories from './TopCategories'
import Milkshakes from './Milkshakes'
import Blogs from './Blogs'
import Footer from './Footer'
import Homemade from './Homemade'
import Socials from './Socials'
import CoffeeDisplay from './CoffeeDisplay'
// import Brussels from './Brussels'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Homemade />
        <Socials />
        <CoffeeDisplay />
        <TopCategories />
        <Milkshakes />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home