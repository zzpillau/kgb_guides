import logo from '/logo.png'

const MainPage = () => {

  return (
    <>
      <div>
        <a href="https://vk.com" target="_blank" rel="noopener">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>Клуб Гидов Балтики</h1>
      <p>
        Начинаем работу над сайтом КГБ 2 марта 2026
      </p>
    </>
  )
}

export default MainPage
