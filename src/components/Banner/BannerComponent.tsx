import React from 'react'
import Image from "next/image"
import ImageBanner from "../../../public/assets/imagenhero.svg"
import "./banner.css"
import Link from "next/link"

const BannerComponent = () => {
  return (
    <>
    <section className="sectionBanner">
       <article className='containerTextHero'>
         <h1>Driving Digital Transformation</h1>
         <p>
          <strong>Advanced technological solutions for a more efficient future.</strong>
          <br/>
          At InnovizeCEM, we are leaders in technological innovation, offering customized strategies
          in consulting, software development, and training to optimize business processes.
         </p>
         <Link className="buttonsectionBanner" href="#solutions" aria-label='Descubre nuestras soluciones'>Discover Our Solutions</Link>
       </article>
       <main>
         <Image src={ImageBanner} className="image-hero-banner" alt="Hola" width={450} height={467} loading='lazy'/>
       </main>
    </section>
    </>
  )
}

export default BannerComponent