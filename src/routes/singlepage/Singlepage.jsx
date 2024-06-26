import { Slider } from '../../components/slider/Slider.jsx'
import { Map } from '../../components/map/Map.jsx'
import { singlePostData, userData } from '../../lib/dummyData.js'
import './singlepage.scss'

export const Singlepage = () => {
  return (
    <div className='singlePage'>
      <div className='details'>
        <div className='wrapper'>
          <Slider images={singlePostData.images} />
          <div className='info'>
            <div className='top'>
              <div className='postInfo'>
                <h1>{singlePostData.title}</h1>
                <div className='address'>
                  <img src='/pin.png' alt='address' />
                  <span>{singlePostData.address}</span>
                </div>
                <span className='price'>${singlePostData.price}</span>
              </div>
              <div className='userInfo'>
                <img src={userData.img} alt='user' />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className='bottom'>{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className='features'>
        <div className='wrapper'>
          <h2 className='title'>General</h2>
          <div className='verticalFeatures'>
            <div className='feature'>
              <img src='/utility.png' alt='' />
              <div className='featureText'>
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='featureText'>
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='featureText'>
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <h2 className='title'>Sizes</h2>
          <div className='sizes'>
            <div className='size'>
              <img src='/size.png' alt='' />
              <span>80 sqft</span>
            </div>
            <div className='size'>
              <img src='/bed.png' alt='' />
              <span>2 beds</span>
            </div>
            <div className='size'>
              <img src='/bath.png' alt='' />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className='horizontalFeatures'>
            <div className='feature'>
              <img src='/school.png' alt='' />
              <div className='featureText'>
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/pet.png' alt='' />
              <div className='featureText'>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src='/fee.png' alt='' />
              <div className='featureText'>
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <h2 className='title'>Location</h2>
          <div className='mapContainer'>
            <Map items={[singlePostData]} />
          </div>
          <div className='buttons'>
            <button>
              <img src='/chat.png' alt='' />
              Send a Message
            </button>
            <button>
              <img src='/save.png' alt='' />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
