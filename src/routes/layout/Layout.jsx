import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navbar/Navbar'
import './layout.scss'

export const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
