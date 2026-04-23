import { useTranslation } from 'react-i18next'
import logo from '../../assets/icons/logo_dark.png'
import max from '../../assets/icons/max_dark.svg'
import telegram from '../../assets/icons/telegram_dark.svg'
import telephone from '../../assets/icons/telephone_dark.svg'
import Burger from '../ui/Burger.jsx'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header__wrapper flex-row">
        <div className="header__container">
          <div className="header__content flex-row">
            <div className="header__logo-container">
              <img
                className="logo"
                src={logo}
                alt="logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <nav className="header__nav nav">
              <ul className="nav__list flex-row">
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    {t('header.team')}
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#tours" className="nav__link">
                    {t('header.tours')}
                  </a>
                </li>

                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    {t('header.benefits')}
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    {t('header.process')}
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#footer" className="nav__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>

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
        </div>

        <Burger />
      </div>
    </header>
  )
}

export default Header
