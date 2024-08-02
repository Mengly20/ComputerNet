import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import TopProducts from './TopProducts/TopProducts'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TopProducts/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home
