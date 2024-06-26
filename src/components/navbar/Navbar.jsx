import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const user = true

  const toggleMenu = () => {
    setMenu((prev) => !prev)
  }

  const renderMenuLinks = () => (
    <>
      <a href='/'>Home</a>
      <a href='/'>About</a>
      <a href='/'>Contact</a>
      <a href='/'>Agents</a>
      <a href='/'>Sign in</a>
      <a href='/'>Sign up</a>
    </>
  )

  return (
    <nav>
      <div className='left'>
        <a href='/' className='logo'>
          <img src='/logo.png' alt='logo' />
          <span>myEstate</span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        {user === true ? (
          <div className='user'>
            <img
              src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='user'
            />
            <span>John Doe</span>
            <Link to='/profile' className='userProfile'>
              <span className='notification'>3</span>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href='/'>Login</a>
            <a href='/' className='register'>
              Sign Up
            </a>
          </>
        )}
        <div className='menuIcon' onClick={toggleMenu}>
          <img src='/menu.png' alt='menu' />
        </div>
        <div className={`menu ${menu ? 'active' : ''}`}>
          {renderMenuLinks()}
        </div>
      </div>
    </nav>
  )
}
