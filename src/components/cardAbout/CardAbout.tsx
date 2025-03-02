import React from 'react'
import './cardAbout.css'
import Image from "next/image"
import aboutData from "../../data/about.json"
import ejemplophono from "../../../public/assets/imageejemploworkers.svg"
import { Hand } from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'

interface opinion {
  id: string;
  image: string;
}

const CardAbout = () => {
  const data: opinion = aboutData; 
  const t = useTranslations("about");

  return (
    <>
        <article>
            <main className='fondoCard'>
              <div className='containerImageWorkers'>
                <div className='containerIconWorkers'><i className='IconWorkers'><Hand size={32} /></i></div>
                <Image className="image-worker" src={ejemplophono} alt={data.id} width={300} height={300} loading='lazy'/>
                <p className='helloWorkers'>{t("hello")}</p>
              </div>
              <div className='containerOpinionWorkers'>
                <p className='opinionWorkers'>{t('worker.opinion')}</p>
              </div>
            </main>
        </article>
    </>
  )
}

export default CardAbout