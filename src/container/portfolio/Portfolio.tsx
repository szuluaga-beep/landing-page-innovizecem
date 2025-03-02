"use client"
import React from 'react'
import "./portfolio.css"
import Image from "next/image"
import dataimage from "../../data/portafolio.json"
import { useTranslations } from 'next-intl'

interface bussinelogo {
  id: string,
  image: string,
  name: string
}

const Portfolio = () => {

  const t = useTranslations("portfolio")

  return (
    <>
      <section className='section-portfolio' id='Portfolio'>
        <div className="container-description-ptf">
          <h1 className="title-ptf">{t("title")}</h1>
          <p className='description-ptf'>{t("subtile")}</p>
        </div>
        <div className='carrusel-ptf'>
          {dataimage.map((data: bussinelogo ) => (
            <div className='logos-carrusel-ptf' key={data.id}>
              <Image className="img-ptf" src={data.image} alt={data.name} width={110} height={100} loading='lazy'/>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio