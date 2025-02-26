"use client"
import React from 'react'
import "./portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Portfolio = () => {
  return (
    <>
      <section className='section-portfolio' id='Portfolio'>
        <div className="container-description-portfolio">
          <h1>Portfolio</h1>
          <p>We present a selection of our outstanding projects, illustrating the positive impact of our technological solutions on companies from various sectors.</p>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
        >;
          <SwiperSlide>

          </SwiperSlide>
        </Swiper>
        </div>
      </section>
    </>
  )
}

export default Portfolio