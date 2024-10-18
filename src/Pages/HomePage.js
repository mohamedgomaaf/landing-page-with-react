import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider'
import Services from '../Components/Home/Services'
import BusinessSolutions from '../Components/Home/BusinessSolutions'
import About from '../Components/Home/About'
import Testimonials from '../Components/Home/Testimonials'

function HomePage() {
  return (
    <>
    <HomeSlider />
    <Services />
    <BusinessSolutions />
    <About />
    <Testimonials />
    </>
  )
}

export default HomePage
