import { useTranslation } from 'react-i18next'
import lists from './lists.js'

const Work = () => {
  const { t } = useTranslation()

  return (
    <section className="section work" id="work">
      <div className="wrapper">
        <div className='work__container container'> 
        <div className="process__wrapper flex-column">
          <div className="process__content flex-column">
            <div className="process__header">
              <h2 className="process__title">
                {t('work_section.process_title')}
              </h2>
            </div>
            <div className="work__process">
              <ul className="process-list flex-column">
                {lists.process.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Work
