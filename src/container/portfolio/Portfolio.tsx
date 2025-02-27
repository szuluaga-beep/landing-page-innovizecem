"use client"
import React from 'react'
import "./portfolio.css"
import Image from "next/image"
import images from "../../../public/logotipo_footer.png"

const Portfolio = () => {
  return (
    <>
      <section className='section-portfolio' id='Portfolio'>
        <div className="container-description-ptf">
          <h1 className="title-ptf">Portfolio</h1>
          <p className='description-ptf'>We present a selection of our outstanding projects, illustrating the positive impact of our technological solutions on companies from various sectors.</p>
        </div>
        <div className='carrusel-ptf'>
          <div className='logos-carrusel-ptf'>
            <Image className="img-ptf" src={images} alt='empresas aliadas' width={150} height={150}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio