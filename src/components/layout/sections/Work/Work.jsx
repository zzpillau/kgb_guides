import { useTranslation } from 'react-i18next'
import lists from './lists.js'

const Work = () => {
  const { t } = useTranslation()

  return (
    <div className="section benefits" id="benefits">
      <div className="wrapper">
        <div className="work__container container flex-row">
          <div className="work__content">
            <div className="benefits__header">
              <h2 className="benefits__title">
                {t('work_section.benefits_title')}
              </h2>
            </div>
            <div className="work__benefits">
              <ul className="benefits-list">
                {lists.benefits.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="process__content">
            <div className="process__header">
              <h2 className="process__title">
                {t('work_section.process_title')}
              </h2>
            </div>
            <div className="process__list">
              <ul className="benefits-list">
                {lists.process.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
