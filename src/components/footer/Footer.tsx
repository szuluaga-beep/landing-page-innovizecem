import React from 'react'

import "./footer.css"
import Image from 'next/image';
import imageFooter from "../../../public/assets/logotipo_footer.png"

import { InstagramLogo, LinkedinLogo, WhatsappLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';
import { useTranslations } from 'next-intl';


const Footer = () => {

  const t = useTranslations("footer");

  return (
    <>
      <footer className='section-footer'>
        <div className='article-footer'>
            <div className='logo-footer-ctn'>
              <Image src={imageFooter} alt="logo de innova cem sección footer" loading="lazy" width={211} height={71}/>
              <p className='description-Article'>{t("textFooter")}</p>
            </div>
            <div className='politic-docs-footer'>
              <a href="" aria-label="Terminos">{t("terms")}</a>
              <a href="" aria-label="Avisos legales">{t("legal")}</a>
              <a href="" aria-label="politica de privacidad">{t("privacy")}</a>
            </div>
        </div> 

        <div className='main-footer'>
          <div>
              <p>carolaymeza.py@innovizecem.com</p>
          </div>          
          <div className='items-footer-links'>
            <a href="https://www.instagram.com/innovize_cem_?igsh=OGl1NjcwcHpkaGNh&amp;utm_source=qr" aria-label="enlace a instagram">
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
        </div> 
      </footer>
      <div className="down-footer">
          <p>&copy; 2025 Innova cem</p>
      </div>
    </>
  )
}

export default Footer