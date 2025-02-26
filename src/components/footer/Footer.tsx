import React from 'react'

import "./footer.css"
import Image from 'next/image';
import imageFooter from "@/../public/logotipo_footer.png"

import { InstagramLogo, LinkedinLogo, WhatsappLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';


const Footer = () => {
  return (
    <>
      <section className='section-footer'>
        <article className='article-Footer'>
            <div>
              <Image src={imageFooter} alt="logo de innova cem sección footer" loading="lazy" width={211} height={71}/>
              <p className='description-Article'><strong>Leaders in technological innovation,</strong> offering customized 
              strategies in consulting, software development, and training to optimize business processes.</p>
            </div>

            <div>
              <p>carolaymeza.py@innovizecem.com</p>
            </div>
        </article> 

        <main className='items-Footer'>
          <div className='politic-docs-footer'>
            <a href="" aria-label="Terminos">Terms</a>
            <a href="" aria-label="Avisos legales">Legal Notices</a>
            <a href="" aria-label="politica de privacidad">Privacy Policy</a>
          </div>

          <div className='items-footer-links'>
            <a href="https://www.instagram.com/innovize_cem_?igsh=OGl1NjcwcHpkaGNh&amp;ut
m_source=qr" aria-label="enlace a instagram">
              <InstagramLogo size={18} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/company/innovize-cem" aria-label="enlace a linkedin">
              <LinkedinLogo size={18} weight="fill" />
            </a>
            <a href="https://wa.me/+573104300153/" aria-label="enlace a whatsapp">
              <WhatsappLogo size={18} weight="fill" />
            </a>
            <a href="https://www.facebook.com/" aria-label="enlace a Facebook">
              <FacebookLogo size={18} weight="fill" />
            </a>
          </div>
        </main> 
      </section>

      <div className="down-footer">
          <p>&copy; 2025 Innova cem</p>
      </div>
    </>
  )
}

export default Footer