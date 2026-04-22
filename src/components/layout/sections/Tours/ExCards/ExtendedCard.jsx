import { useTranslation } from 'react-i18next'
//example slider
import img1 from '../../../../../assets/img/slider/1.jpg'
import img2 from '../../../../../assets/img/slider/2.jpg'
import img3 from '../../../../../assets/img/slider/3.jpg'
import img4 from '../../../../../assets/img/slider/4.jpg'
import Button from '../../../../ui/Button.jsx'
import Slider from '../Slider.jsx'
import config from './config.js'

const ExtendedCard = ({ id }) => {
  const { t } = useTranslation()

  const ex = config.find((ex) => ex.id === id)
  console.log(ex)

  return (
    <div className="extended__container flex-column">
      <div className="extended__header">
        <Slider images={[img1, img2, img3, img4]} />

        <div className="extended__header-text flex-column">
          <div className="extended__title">
            <h3>{ex.ext.title}</h3>
          </div>

          <div className="extended__format flex-row">
            {ex.ext.format.map((f, i) => (
              <p key={i}>{f}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="extended__subtitle">
        <h3>{ex.ext.subtitle}</h3>
      </div>

      <div className="extended__caption flex-column">
        <div className="extended__text  flex-column">
          {ex.ext.desc.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>

        <div className="extended__profit flex-column">
          <h3>{t('header.profit')}</h3>
          <ul className="ext-profit">
            {ex.ext.profit.map((p, i) => (
              <li className="ta-left" key={i}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="extended__actions flex-row">
        <Button
          className="extended__action"
          onClick={() => {
            console.log(title, '-', id)
            setIsOpen(true)
          }}
        >
          {t('buttons.add_to_list')}
        </Button>
      </div>
    </div>
  )
}

export default ExtendedCard
