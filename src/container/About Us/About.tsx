import CardAbout from '../../components/cardAbout/CardAbout'
import React from 'react'
import "./about.css"

const About = () => {
  return (
    <>
      <section className='sectionAbout' id='About'>
        <div>
          <CardAbout/>
        </div>
        <div className='containerDescriptionAbout'>
          <h5>About Us</h5>
          <p>InnovizeCEM is a benchmark in technological innovation. <strong> We specialize in developing customized solutions that combine advanced analytics, digital transformation strategies, and emerging technologies to drive business growth. </strong> Our team of experts in innovation and technology has years of experience in high-impact projects.
          </p>
        </div>
      </section>
    </>
  )
}

export default About