import max from '../../assets/icons/max_white.svg'
import telegram from '../../assets/icons/telegram.svg'
import vk from '../../assets/icons/vk.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container flex-row">
          <div className="footer__contacts flex-column">
            <div className="footer__title">
              <h3>Контакты:</h3>
            </div>
            <div className="footer__items flex-column">
              <div className="footer__contacts-item">
                <a className="contact-link" href="#footer">
                  +7 999 1234567
                </a>
              </div>
              <div className="footer__contacts-item">
                <a className="contact-link" href="#footer">
                  +7 911 7654321
                </a>
              </div>
            </div>
          </div>

          <div className="footer__socials flex-column">
            <div className="social-items flex-row">
              <a href="#footer">
                <img className="social-item-icon" src={max} alt="" />
              </a>
              <a href="#footer">
                <img className="social-item-icon" src={telegram} alt="" />
              </a>
              <a href="#footer">
                <img className="social-item-icon vk" src={vk} alt="" />
              </a>
            </div>
            <div className="social__text">
              <p>
                При использовании материалов ссылка на официальнй сайт
                обязательна
              </p>
            </div>
            <div className="year">
              <p>© {new Date().getFullYear()}</p>
            </div>
          </div>

          <div className="footer__policy flex-column">
            <div className="privacy">
              <a href="#footer">Политика конфиденциальности</a>
            </div>
            <div className="privacy">
              <a href="#footer">Клиентское соглашение</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
