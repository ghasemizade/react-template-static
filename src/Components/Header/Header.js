import React from 'react'
import NavBar from './NavBar'
import './Header.css'
import MainContentHeader from './MainContentHeader'


function Header() {
  return (
    <div className='header-section'>
        <NavBar/>
        <MainContentHeader/>
    </div>
  )
}

export default Header