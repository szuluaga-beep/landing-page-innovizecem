import React from 'react'
import './cardAbout.css'
import Image from "next/image"
import aboutData from "../../helpers/data/about.json"
import ejemplophono from "../../../public/imageejemploworkers.svg"
import { Hand } from '@phosphor-icons/react/dist/ssr'

interface opinion {
  name: string;
  image: string;
  description: string;
}

const CardAbout = () => {

  const data: opinion = aboutData; 

  return (
    <>
        <article>
            <main className='fondoCard'>
              <div className='containerImageWorkers'>
                <div className='containerIconWorkers'><i className='IconWorkers'><Hand size={32} /></i></div>
                <Image className="image-worker" src={ejemplophono} alt={data.name} width={300} height={300} loading='lazy'/>
                <p className='helloWorkers'>Hello!</p>
              </div>
              <div className='containerOpinionWorkers'>
                <p className='opinionWorkers'>{data.description}</p>
              </div>
            </main>
        </article>
    </>
  )
}

export default CardAbout