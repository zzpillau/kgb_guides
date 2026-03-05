const GuideCard = ({ src, name, specs, desc }) => {
  const placeholder = 'img/guide-placeholder.svg'
  const imageSrc = src ? src : placeholder

  return (
    <div className="guide-card">
      <div className="guide-card__container">
        <div className="guide-card__content flex-column">
          <div className="guide-card__image">
            <img src={imageSrc} alt={name} loading="lazy" decoding="async" />
          </div>
          <h3 className="guide-card__title">{name}</h3>
          <p className="guide-card__spec-label">Специализация:</p>
          <p className="guide-card__spec">{specs}</p>
          <p className="guide-card__desc">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default GuideCard
