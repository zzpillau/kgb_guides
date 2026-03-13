import { useTranslation } from 'react-i18next'
import Button from '../../../../ui/Button.jsx'
import DropCapWord from '../../../../utils/DropCapWord.jsx'

const GuideCard = ({ id, src, name, specs, desc }) => {
  const { t } = useTranslation()

  const placeholder = 'img/guide-placeholder.svg'
  const imageSrc = src || placeholder

  return (
    <div className="guide-card flex-column">
      <div className="guide-card__media">
        <img src={imageSrc} alt={name} loading="lazy" decoding="async" />
      </div>

      <h3 className="guide-card__name flex-column">
        <DropCapWord word={name[0]} />
        <DropCapWord word={name[1]} />
      </h3>

      <div className="guide-card__specs ta-right">
        <p className="guide-card__specs-label">{t('guide.specs')}</p>
        <p className="guide-card__specs-value">{specs}</p>
      </div>

      <p className="guide-card__desc ta-left">{desc}</p>

      <div className="guide-card__actions">
        <Button
          className="guide-card__action"
          onClick={() => console.log(t('buttons.request'), '-', id)}
        >
          {t('buttons.request')}
        </Button>
      </div>
    </div>
  )
}

export default GuideCard
