import { useCallback, useEffect, useRef, useState } from 'react'

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const hasImages = images.length > 0

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const next = () => {
    if (!hasImages) return
    setIndex((i) => (i + 1) % images.length)
    stopAutoplay()
  }

  const prev = () => {
    if (!hasImages) return
    setIndex((i) => (i - 1 + images.length) % images.length)
    stopAutoplay()
  }

  // автоплей
  useEffect(() => {
    if (!hasImages) return

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3000)

    return () => stopAutoplay()
  }, [hasImages, images.length, stopAutoplay])

  if (!hasImages) return null

  return (
    <div className="carousel">
      <button type="button" className="carousel-btn" onClick={prev}>
        ◀
      </button>

      <div className="carousel-inner">
        {images.map((src, i) => (
          <div
            key={i}
            className={`carousel-item ${i === index ? 'active' : ''}`}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <button type="button" className="carousel-btn" onClick={next}>
        ▶
      </button>
    </div>
  )
}

export default Slider
