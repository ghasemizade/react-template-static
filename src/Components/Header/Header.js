import React from 'react'
import NavBar from './NavBar'
import './Header.css'
import MainContentHeader from './MainContentHeader'
import BoxHeader from './BoxHeader'


function Header() {
  return (
    <div className='header-section'>
        <NavBar/>
        <MainContentHeader/>
        <BoxHeader/>
    </div>
  )
}

export default Header