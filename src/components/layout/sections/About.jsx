import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import guides from '../../cards/GuidesCards/guides.js'

const GuideCard = lazy(() => import('../../cards/GuidesCards/GuideCard.jsx'))

const About = () => {
  const { t } = useTranslation()

  return (
    <section className="section about">
      <div className="wrapper">
        <div className="about__container">
          <div className="about__content flex-column">
            <div className="about__titles flex-column">
              <h3 className="about__title">{t('titles.about_title')}</h3>
              <h2 className="about__subtitle">{t('titles.about_subtitle')}</h2>
              <p className="about__text">{t('texts.about_text')}</p>
            </div>
            <div className="about__cards flex-row">
              <Suspense
                fallback={<div className="cards-loading">{t('loading')}</div>}
              >
                {guides.map((guide) => (
                  <GuideCard
                    key={guide.id}
                    src={guide.src}
                    name={guide.name}
                    specs={guide.specs}
                    desc={guide.desc}
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
