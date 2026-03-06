import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Tabs from './Tabs/Tabs.jsx'

const Tours = () => {
  const { t } = useTranslation()

  const [activeTab, setActiveTab] = useState(1)

  return (
    <section>
      <div className="wrapper">
        <div className="tours__container">
          <div className="tours__content flex-column">
            <div className="tours__header">
              <h2 className="tours__title">{t('titles.tours__title')}</h2>
            </div>

            {/* tabs */}

            <div className="tours__tabs">
              <Tabs activeTab={activeTab} onChange={setActiveTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tours
