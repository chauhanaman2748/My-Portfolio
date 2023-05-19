import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import AboutContent from '../components/AboutContent'
import Form from '../components/Form'

const home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <AboutContent/>
      <Work/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default home