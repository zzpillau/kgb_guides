import { useState } from 'react'
import logo from '/logo.png'
import './styles/App.scss'

function App() {
  // const [date, setDate] = useState('')

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank" rel="noopener">
          <img src={logo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank" rel="noopener">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Клуб Гидов Балтики</h1>
      <div className="card">
        {/* <button type="button" onClick={() => setDate(new Date().toLocaleDateString('ru'))}>
          сегодня {date}
        </button> */}
      </div>
      <p className="read-the-docs">
        Начинаем работу над сайтом
      </p>
    </>
  )
}

export default App
