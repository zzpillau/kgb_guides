import { useTranslation } from 'react-i18next'
import Button from '../../../../ui/Button.jsx'

const Card = ({ id, src, title, desc, time, cost }) => {
  const { t } = useTranslation()

  return (
    <div className="ex-card" id={id}>
      <div className="ex-card__media">
        <img src={src} alt={title} loading="lazy" decoding="async" />
      </div>

      <h3 className="ex-card__title">{title}</h3>

      <p className="ex-card__desc">{desc}</p>

      <div className="ex-card__info">
        <p className="ex-card__duration">{time}</p>
        <div className="ex-card__cost">
          <span className="label">от</span>
          <span className="cost">{cost}</span>
          <span className="ruble">₽</span>
        </div>
      </div>

      <div className="ex-card__actions">
        <Button
          className="ex-card__action"
          onClick={() => console.log(title, '-', id)}
        >
          {t('buttons.request')}
        </Button>
      </div>
    </div>
  )
}

export default Card
