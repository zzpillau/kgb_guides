import logo from '/logo.png'
import '../../styles/MainPage.scss'

const MainPage = () => {
  console.log('mnmn')

  return (
    <>
      <div>
        <a href="https://vk.com" target="_blank" rel="noopener">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Клуб Гидов Балтики</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Начинаем работу над сайтом КГБ 2 марта 2026
      </p>
    </>
  )
}

export default MainPage
