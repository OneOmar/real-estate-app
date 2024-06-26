import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

export const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className='popup'>
          <img src={item.img} alt='' />
          <div className='popupText'>
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} beds</span>
            <b>{item.price} $</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}
