import { useState } from 'react'
import './searchbar.scss'

export const Searchbar = () => {
  const [values, setValues] = useState({
    type: 'buy',
    city: '',
    minPrice: 0,
    maxPrice: 0
  })

  const switchType = (val) => {
    setValues((prev) => ({ ...prev, type: val }))
  }

  return (
    <div className='searchBar'>
      <div className='type'>
        <button
          className={values.type === 'buy' ? 'active' : ''}
          onClick={() => switchType('buy')}
        >
          Buy
        </button>
        <button
          className={values.type === 'rent' ? 'active' : ''}
          onClick={() => switchType('rent')}
        >
          Rent
        </button>
      </div>
      <form>
        <input type='text' name='city' placeholder='City location' />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={1000000}
          placeholder='Min Price'
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={1000000}
          placeholder='Max Price'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
