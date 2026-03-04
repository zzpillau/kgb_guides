import i18next from 'i18next'
import React from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import App from './components/App.jsx'
import resources from './locales/index.js'

const init = async () => {
  await i18next.use(initReactI18next).init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  )
}

export default init
