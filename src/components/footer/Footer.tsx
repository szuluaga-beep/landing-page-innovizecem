import React from 'react'

import "./footer.css"
import Image from 'next/image';
import imageFooter from "@/../public/logotipo_footer.png"

import { InstagramLogo, LinkedinLogo, WhatsappLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';


const Footer = () => {
  return (
    <>
      <section>
        <article>
            <div>
              <Image src={imageFooter} alt="logo de innova cem sección footer" loading="lazy" width={150} height={80}/>
              <p className='descriptionArticle'>Leaders in technological innovation, offering customized 
              strategies in consulting, software development, and training to optimize business processes.</p>
            </div>
            <div>
              <p>carolaymeza.py@innovizecem.com</p>
            </div>
        </article> 

        <main>
          <div>
            <a href="" aria-label="Terminos">Terminos</a>
            <a href="" aria-label="Avisos legales">Avisos legales</a>
            <a href="" aria-label="politica de privacidad">Politica de privacidad</a>
          </div>
          <div>
            <a href="" aria-label="enlace a instagram">
              <InstagramLogo size={32} />
            </a>
            <a href="" aria-label="enlace a linkedin">
              <LinkedinLogo size={32} />
            </a>
            <a href="" aria-label="enlace a whatsapp">
              <WhatsappLogo size={32} />
            </a>
            <a href="" aria-label="enlace a Facebook">
              <FacebookLogo size={32} />
            </a>
          </div>
        </main> 
      </section>

      <div className="downfooter">
          <p>&copy; 2025 Innova cem</p>
      </div>
    </>
  )
}

export default Footer