import CardAbout from '../../components/cardAbout/CardAbout'
import React from 'react'
import "./about.css"
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations("about");
  return (
    <>
      <section className='sectionAbout' id='About'>
        <div>
          <CardAbout/>
        </div>
        <div className='containerDescriptionAbout'>
          <h5>{t("title")}</h5>
          <p>{t('descriptionAbout')}</p>
        </div>
      </section>
    </>
  )
}

export default About