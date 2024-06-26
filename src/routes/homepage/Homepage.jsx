import { Searchbar } from '../../components/searchbar/Searchbar'
import './homepage.scss'

export const Homepage = () => {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <Searchbar />
          <div className='boxes'>
            <div className='box'>
              <h2>16+</h2>
              <p>Year of Experience</p>
            </div>
            <div className='box'>
              <h2>200</h2>
              <p>Award Gained</p>
            </div>
            <div className='box'>
              <h2>2000+</h2>
              <p>Property Ready</p>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='background' />
      </div>
    </div>
  )
}
