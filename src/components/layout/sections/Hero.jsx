import { useTranslation } from 'react-i18next'
import Button from '../../ui/Button.jsx'

const Accented = ({ first, last }) => {
  return (
    <div className="accented-str flex-row">
      <span className="lower">{first}</span>
      <span className="accented">{last}</span>
    </div>
  )
}

const Hero = () => {
  const { t } = useTranslation()

  const mainTitle = t('titles.hero_title')

  const chunkTitle = mainTitle.split(' ')
  console.log(chunkTitle)

  const firstString = [chunkTitle[0], chunkTitle[1]].join(' ')
  console.log(firstString)

  const thirdString = [chunkTitle[4], chunkTitle[5]].join(' ')
  console.log(thirdString)

  return (
    <section className="section hero" id="hero">
      <div className="wrapper">
        <div className="hero__container">
          <div className="hero__content flex-column">
            {/* Header */}
            <div className="hero__header flex-column">
              <h1 className="hero__title ta-center  flex-column">
                <span>{firstString}</span>
                <div className="flex-row">
                  <Accented first={chunkTitle[2]} last={chunkTitle[3]} />
                  <span className="thirdString">{thirdString}</span>
                </div>
              </h1>

              {/* Actions */}
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
            </div>

            <div className="hero__footer flex-column">
              <h2 className="hero__subtitle ta-center">
                {t('titles.hero_subtitle')}
              </h2>
              <div className="about__text">{t('texts.about_text')}</div>
              {/* Labels */}
              <div className="hero__labels flex-row">
                <span className="hero__label">
                  {t('labels.hero_no_middlemen')}
                </span>
                <span className="hero__separator"></span>

                <span className="hero__label">
                  {t('labels.hero_individual')}
                </span>
                <span className="hero__separator"></span>

                <span className="hero__label">
                  {t('labels.hero_team_support')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
