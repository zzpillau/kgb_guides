import Cards from '../ExCards/Cards.jsx'

const TabPanel = ({ activeTab }) => {
  return (
    <div className="tours__tabpanel">
      <Cards activeTab={activeTab} />
    </div>
  )
}

export default TabPanel
