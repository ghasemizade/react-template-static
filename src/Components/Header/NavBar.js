import React from 'react'
import './Header.css'

function NavBar() {
  return (
    <div className='navbar'>
        <h1 className='logo'><a href="#">Falcon</a></h1>
        <ul className='nav-items'>
            <li className="items"><a href="#">Home</a></li>
            <li className="items"><a href="#">AboutUs</a></li>
            <li className="items"><a href="#">Services</a></li>
            <li className="items item-drop"><a href="#">SampleWorks</a>
              <ul className='dropdown-content'>
                <li><a href="">dentice</a></li>
                <li><a href="">worker</a></li>
                <li><a href="">programmer</a></li>
              </ul>
            </li>
            <li className="items"><a href="#">Teams</a></li>
            <li className="items"><a href="#">Contacts</a></li>
            {/* <li className="items"><a href="#"></a></li> */}
        </ul>
        <div className='nav-btn-start'><a href="#"> S t a r t </a></div>
    </div>
  )
}

export default NavBar