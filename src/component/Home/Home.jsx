import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Analytics from './Analytics'
import Newsletter from './Newsletter'
import Cards from './Cards'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-[#000300]'>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
