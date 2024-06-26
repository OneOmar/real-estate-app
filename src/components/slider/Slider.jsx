import { useState } from 'react'
import './slider.scss'

export const Slider = ({ images }) => {
  const [index, setIndex] = useState(null)

  const nextSlide = () => {
    if (index === images.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index === 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className='slider'>
      {index !== null && (
        <div className='fullSlider'>
          <div className='arrow' onClick={prevSlide}>
            <img src='/arrow.png' alt='Previous' />
          </div>
          <div className='imgContainer'>
            <img src={images[index]} alt='Slider' />
          </div>
          <div className='arrow' onClick={nextSlide}>
            <img className='right' src='/arrow.png' alt='Next' />
          </div>
          <div className='close' onClick={() => setIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className='bigImage'>
        <img src={images[0]} alt='Slider' onClick={() => setIndex(0)} />
      </div>
      <div className='smallImages'>
        {images.slice(1).map((image, i) => (
          <img
            key={i}
            src={image}
            alt='Thumbnail'
            onClick={() => setIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  )
}
