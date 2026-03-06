import { useTranslation } from 'react-i18next'
import Button from '../../../../ui/Button.jsx'
import tabs from './config.js'

const TabList = ({ activeTab, onChange }) => {
  const { t } = useTranslation()

  return (
    <div className="tours__tablist flex-row">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          className={`tours__tab ${activeTab === tab.id ? 'tours__tab--active' : ''}`}
          onClick={() => {
            console.log('Направление -', tab.id)
            onChange(tab.id)
          }}
        >
          {t(tab.title)}
        </Button>
      ))}
    </div>
  )
}

export default TabList
