import max from '../../assets/icons/max_white.svg'
import telegram from '../../assets/icons/telegram.svg'
import telephone from '../../assets/icons/telephone.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__container">
          <div className="header__content flex-row">
            <div className="header__logo-container">
              <img
                className="logo"
                src="./logo.png"
                alt="logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <nav className="header__nav nav">
              <ul className="nav__list flex-row">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Маршруты
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Команда
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Почему мы
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Как заказать
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__contacts flex-row">
              <a href="#">
                <img className="header__contacts-icon" src={telephone} alt="" />
              </a>
              <a href="#">
                <img className="header__contacts-icon" src={max} alt="" />
              </a>
              <a href="#">
                <img className="header__contacts-icon" src={telegram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
