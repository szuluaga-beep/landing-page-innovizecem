import BannerComponent from '../../components/Banner/BannerComponent'
import NavBar from '../../components/header/NavBar'
import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='sectionHero' id='Hero'>
        <div>
          <NavBar/>
        </div>
        <div>
          <BannerComponent/>
        </div>
      </section>
    </>
  )
}

export default Hero