import React from 'react';
import './Header.css'

function BoxHeader() {
  return (
    <div className='boxes-header'>
        <div className="boxes">
            <div className='icon-header'><img className='shop-solid' src={'shop-solid.svg'} alt="shop" /></div>
            <p className='description-title'>Dramatic text</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={'chart-simple-solid.svg'} alt="shop" /></div>
            <p className='description-title'>Qualitative chart</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={'calendar-solid.svg'} alt="shop" /></div>
            <p className='description-title'>portfolio</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={'paint-roller-solid.svg'} alt="shop" /></div>
            <p className='description-title'>Final functions</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={'database-solid.svg'} alt="shop" /></div>
            <p className='description-title'>Stored information</p>
        </div>
    </div>
  )
}

export default BoxHeader