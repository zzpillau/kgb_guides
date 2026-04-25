import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import max from '../../assets/icons/max_dark.svg'
import telegram from '../../assets/icons/telegram_dark.svg'
import telephone from '../../assets/icons/telephone_dark.svg'

const Burger = () => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.classList.toggle('noscroll', next)
  }

  const close = () => {
    setOpen(false)
    document.body.classList.remove('noscroll')
  }

  return (
    <>
      <button
        type="button"
        className={`burger-menu ${open ? 'active' : ''}`}
        onClick={toggle}
      >
        <div className="bars flex-column">
          <div className="bar top-line"></div>
          <div className="bar bottom-line"></div>
        </div>
      </button>

      <div className={`flex-column popup ${open ? 'open' : ''}`}>
        <ul className="nav__list flex-row">
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={close}>
              {t('header.team')}
            </a>
          </li>

          <li className="nav__item">
            <a href="#benefits" className="nav__link" onClick={close}>
              {t('header.benefits')}
            </a>
          </li>

          <li className="nav__item">
            <a href="#tours" className="nav__link" onClick={close}>
              {t('header.tours')}
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={close}>
              {t('header.process')}
            </a>
          </li>
          <li className="nav__item">
            <a href="#footer" className="nav__link" onClick={close}>
              Контакты
            </a>
          </li>
        </ul>

        <div className="header__contacts flex-row">
          <a href="#hero">
            <img className="header__contacts-icon" src={telephone} alt="" />
          </a>
          <a href="#hero">
            <img className="header__contacts-icon" src={max} alt="" />
          </a>
          <a href="#hero">
            <img className="header__contacts-icon" src={telegram} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Burger
