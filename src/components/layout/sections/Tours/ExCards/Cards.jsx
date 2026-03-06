import Card from './Card.jsx'
import config from './config.js'

const Cards = ({ activeTab }) => {
  const { excursions } = config.find(({ id }) => id === activeTab)
  console.log(excursions)

  excursions.forEach((e) => {
    console.log(e.title)
  })

  return (
    <div className="tours__cards flex-row">
      {excursions.map((ex) => (
        <Card key={ex.id} {...ex} />
      ))}
    </div>
  )
}

export default Cards
