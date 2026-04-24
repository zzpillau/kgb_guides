import { useTranslation } from 'react-i18next'
import GuideCard from './GuidesCards/GuideCard.jsx'
import guides from './GuidesCards/guides.js'

const About = () => {
  const { t } = useTranslation()

  return (
    <section className="section about" id="about">
      <div className="wrapper">
        <div className="about__container container">
          <div className="about__content flex-column">
            {/* Header */}
            <div className="about__header flex-column">
              <h3 className="about__title">{t('titles.about_title')}</h3>
              <h2 className="about__subtitle">{t('titles.about_subtitle')}</h2>
            </div>

            {/* Cards */}
            <div className="about__cards flex-row">
              {guides.map((guide) => (
                <GuideCard
                  key={guide.id}
                  id={guide.id}
                  src={guide.src}
                  name={guide.name}
                  specs={guide.specs}
                  desc={guide.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
