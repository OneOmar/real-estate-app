import './list.scss'
import { Card } from '../card/Card'

export const List = ({ items }) => {
  return (
    <div className='list'>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
