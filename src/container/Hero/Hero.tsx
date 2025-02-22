import BannerComponent from '@/components/Banner/BannerComponent'
import NavBar from '@/components/header/NavBar'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section>
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