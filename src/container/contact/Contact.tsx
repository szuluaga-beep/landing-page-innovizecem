import React from 'react'
import Image from "next/image"
import imagesContact from "../../../public/imagencontact.svg"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='container-contact' id='Contact'>
        <main className='card-contact'>
          <div className='description-container-contact'>
            <div className='title-contact'>
              <h3>Contact Us</h3>   
            </div>
            <div className='description-contact'>
              <p>Connect with us to revolutionize your business with our innovative solutions. </p>
              <p>Together, we will drive your digital transformation. </p>
            </div>
            <div className='content-btn-contact'>
              <a href="" className='btn-contact' aria-label='Contact Us Now!'>Contact Us Now!</a>
            </div>               
          </div>
          
          <Image className="image-contact" src={imagesContact} alt="imagen de contacto" width={511} height={411}/>
         
        </main>
      </section>
    </>
  )
}

export default Contact