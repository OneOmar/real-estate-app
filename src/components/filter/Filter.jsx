import './filter.scss'

export const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search results for:</h1>
      <div className='top'>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
      </div>
      <div className='bottom'>
        <div className='item'>
          <label htmlFor='type'>Type</label>
          <select name='type' id='type'>
            <option value=''>any</option>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </select>
        </div>
        <div className='item'>
          <label htmlFor='property'>Property</label>
          <select name='property' id='property'>
            <option value=''>any</option>
            <option value='apartment'>Apartment</option>
            <option value='house'>House</option>
            <option value='condo'>Condo</option>
            <option value='land'>Land</option>
          </select>
        </div>
        <div className='item'>
          <label htmlFor='minPrice'>Min Price</label>
          <input
            type='number'
            id='minPrice'
            name='minPrice'
            placeholder='any'
          />
        </div>
        <div className='item'>
          <label htmlFor='maxPrice'>Max Price</label>
          <input
            type='number'
            id='maxPrice'
            name='maxPrice'
            placeholder='any'
          />
        </div>
        <div className='item'>
          <label htmlFor='bedroom'>Bedroom</label>
          <input type='text' id='bedroom' name='bedroom' placeholder='any' />
        </div>
        <button>
          <img src='/search.png' alt='search' />
        </button>
      </div>
    </div>
  )
}

// import './filter.scss'

// const fields = [
//   { label: 'Type', id: 'type', options: ['any', 'buy', 'rent'] },
//   {
//     label: 'Property',
//     id: 'property',
//     options: ['any', 'apartment', 'house', 'condo', 'land']
//   },
//   { label: 'Min Price', id: 'minPrice', type: 'number', placeholder: 'any' },
//   { label: 'Max Price', id: 'maxPrice', type: 'number', placeholder: 'any' },
//   { label: 'Bedroom', id: 'bedroom', type: 'text', placeholder: 'any' }
// ]

// export const Filter = () => {
//   return (
//     <div className='filter'>
//       <h1>Search results for:</h1>
//       <div className='top'>
//         <div className='item'>
//           <label htmlFor='city'>Location</label>
//           <input
//             type='text'
//             id='city'
//             name='city'
//             placeholder='City Location'
//           />
//         </div>
//       </div>
//       <div className='bottom'>
//         {fields.map((field, index) => (
//           <div className='item' key={index}>
//             <label htmlFor={field.id}>{field.label}</label>
//             {field.options ? (
//               <select name={field.id} id={field.id}>
//                 {field.options.map((option) => (
//                   <option key={option} value={option === 'any' ? '' : option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             ) : (
//               <input
//                 type={field.type}
//                 id={field.id}
//                 name={field.id}
//                 placeholder={field.placeholder}
//               />
//             )}
//           </div>
//         ))}
//         <button>
//           <img src='/search.png' alt='search' />
//         </button>
//       </div>
//     </div>
//   )
// }
