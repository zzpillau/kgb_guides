import TabList from './TabList.jsx'
import TabPanel from './TabPanel.jsx'

const Tabs = ({ activeTab, onChange }) => {
  return (
    <>
      <TabList activeTab={activeTab} onChange={onChange} />
      <div className="tours__tabpanels">
        <TabPanel activeTab={activeTab} />
      </div>
    </>
  )
}

export default Tabs
