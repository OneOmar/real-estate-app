import { Link } from 'react-router-dom'
import './card.scss'

export const Card = ({ item }) => {
  const { id, img, title, address, price, bed, bath } = item

  return (
    <div className='card'>
      <Link to={`/${id}`} className='imgContainer'>
        <img src={img} alt={title} />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${id}`}>{title}</Link>
        </h2>
        <div className='address'>
          <img src='/pin.png' alt='pin' />
          <p>{address}</p>
        </div>
        <div className='price'>${price}</div>
        <div className='bottom'>
          <div className='features'>
            <Feature icon='/bed.png' text={`${bed} beds`} />
            <Feature icon='/bath.png' text={`${bath} baths`} />
          </div>
          <div className='icons'>
            <Icon src='/save.png' alt='save' />
            <Icon src='/chat.png' alt='chat' />
          </div>
        </div>
      </div>
    </div>
  )
}

const Feature = ({ icon, text }) => (
  <div className='feature'>
    <img src={icon} alt={text} />
    <p>{text}</p>
  </div>
)

const Icon = ({ src, alt }) => (
  <div className='icon'>
    <img src={src} alt={alt} />
  </div>
)
