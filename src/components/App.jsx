import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '../routes/index.js'

import Layout from './layout/Layout.jsx'
import MainPage from './pages/MainPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


const App = () => {

  return (
    <BrowserRouter basename="/kgb_guides">
      <Routes>
        <Route path={routes.mainPage()} element={<Layout />}>
          <Route index path={routes.mainPage()} element={<MainPage />} />
          <Route path={routes.pageNotFound()} element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
