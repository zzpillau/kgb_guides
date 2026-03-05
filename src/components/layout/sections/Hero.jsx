import { useTranslation } from 'react-i18next'
import Button from '../../ui/Button.jsx'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="section hero">
      <div className="wrapper">
        <div className="hero__container">
          <div className="hero__content flex-column">
            <div className="hero__titles flex-column">
              <h1 className="hero__title ta-center">
                {t('titles.hero_title')}
              </h1>
              <h2 className="hero__subtitle ta-center">
                {t('titles.hero_subtitle')}
              </h2>
            </div>
            <div className="hero__actions flex-row">
              <Button
                className="hero__action"
                onClick={() => console.log(t('buttons.pick_tour'))}
              >
                {t('buttons.pick_tour')}
              </Button>
              <Button
                className="hero__action"
                onClick={() => console.log(t('buttons.pick_guide'))}
              >
                {t('buttons.pick_guide')}
              </Button>
            </div>
            <div className="hero__labels flex-row">
              <span className="hero__label">
                {t('labels.hero_no_middlemen')}
              </span>
              <span className="hero__separator"></span>

              <span className="hero__label">{t('labels.hero_individual')}</span>
              <span className="hero__separator"></span>

              <span className="hero__label">
                {t('labels.hero_team_support')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
