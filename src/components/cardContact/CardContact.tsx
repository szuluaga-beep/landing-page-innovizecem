import React from 'react'
import Image from 'next/image'

import images from "../../../public/next.svg"

const CardContact = () => {
  return (
    <>
        <div>
            <h3>Contact Us</h3>
            <p>Connect with us to revolutionize your business with our innovative solutions.</p>
            <p>Together, we will drive your digital transformation.</p>
            <button>Contact Us Now!</button>
        </div>
        <div>
            <Image src={images} alt="" width={100} height={100}/>
        </div>
    </>
  )
}

export default CardContact