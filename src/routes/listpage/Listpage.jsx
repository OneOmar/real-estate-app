import { Filter } from '../../components/filter/Filter'
import { Card } from '../../components/card/Card'
import { listData } from '../../lib/dummyData'
import './listpage.scss'
import { Map } from '../../components/map/Map'

export const Listpage = () => {
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          {listData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className='mapContainer'>
        <Map items={listData} />
      </div>
    </div>
  )
}
