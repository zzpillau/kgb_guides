import { useTranslation } from 'react-i18next'
import Button from '../../../ui/Button.jsx'

const comunity = () => {
  const { t } = useTranslation()

  return (
    <section className="section comunity">
      <div className="wrapper">
        <div className="comunity__container container">
          <div className="comunity__content flex-column">
            <div className="comunity__header">
              <h2 className="comunity__title">
                {t('comunity_section.comunity_title')}
              </h2>
            </div>
            <div className="comunity__body">
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
    </section>
  )
}

export default comunity
