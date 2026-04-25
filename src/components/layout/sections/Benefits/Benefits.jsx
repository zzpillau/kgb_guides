import { useTranslation } from 'react-i18next'
import Button from '../../../ui/Button.jsx'
import lists from './lists.js'

const Benefits = () => {
  const { t } = useTranslation()

  return (
    <section className="section benefits" id="benefits">
      <div className="wrapper">
        <div className="benefits__container container">
          <div className="benefits__wrapper flex-column">
            <div className="benefits__content flex-column">
              <div className="benefits__header">
                <h2 className="benefits__title">
                  {t('work_section.benefits_title')}
                </h2>
              </div>
              <div className="benefits__list-container flex-row">
                <ul className="benefits-list flex-row">
                  {lists.benefits.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </div>

              <div className="comunity__container">
                <div className="comunity__content flex-column">
                  <div className="comunity__header">
                    <h2 className="comunity__title">
                      {t('comunity_section.comunity_title')}
                    </h2>
                  </div>
                  <div className="comunity__body flex-row">
                    <p className="comunity__body-text">
                      {t('comunity_section.comunity_text')}
                    </p>
                  </div>
                  <div className="comunity__actions flex-row">
                    <Button className="comunity__action">
                      {t('comunity_section.public_VK')}
                    </Button>
                    <Button className="comunity__action">
                      {t('comunity_section.public_expert')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
