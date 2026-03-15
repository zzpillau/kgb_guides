import { useTranslation } from 'react-i18next'
import detailsImg from '../../../../../assets/icons/details.svg'
import Button from '../../../../ui/Button.jsx'

const Card = ({ id, src, title, desc, time, cost }) => {
  const { t } = useTranslation()

  return (
    <div className="ex-card flex-column" id={id}>
      <div className="ex-card__media">
        <img
          className="ex-card__img"
          src={src}
          alt={title}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="ex-card__caption flex-column">
        <div className="ex-card__body flex-column">
          <div className="ex-card__title">
            <h3>{title}</h3>
          </div>

          <p className="ex-card__desc">{desc}</p>

          <div className="ex-card__details">
            <p className="ex-card__details-text">{t('details')}</p>
            <div className="ex-card__details-arrow">
              <img src={detailsImg} alt="arrow" />
            </div>
          </div>
        </div>

        <div className="ex-card__footer flex-row">
          <div className="ex-card__info flex-column">
            <p className="ex-card__duration">{time}</p>
            <div className="ex-card__cost flex-row">
              <div className="label">от</div>
              <div className="cost">{cost}₽</div>
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
      </div>
    </div>
  )
}

export default Card
