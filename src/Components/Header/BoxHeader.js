import React from 'react';
import './Header.css'
import shop from '../../assets/shop-solid.svg'
import chart from '../../assets/chart-simple-solid.svg'
import calendar from '../../assets/calendar-solid.svg'
import paint from '../../assets/paint-roller-solid.svg'
import database from '../../assets/database-solid.svg'


function BoxHeader() {
  return (
    <div className='boxes-header'>
        <div className="boxes">
            <div className='icon-header'><img className='shop-solid' src={shop} alt="shop"/></div>
            <p className='description-title'>Dramatic text</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={chart} alt="shop" /></div>
            <p className='description-title'>Qualitative chart</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={calendar} alt="shop" /></div>
            <p className='description-title'>portfolio</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={paint} alt="shop" /></div>
            <p className='description-title'>Final functions</p>
        </div>
        <div className="boxes">
            <div className='icon-header'><img src={database} alt="shop" /></div>
            <p className='description-title'>Stored information</p>
        </div>
    </div>
  )
}

export default BoxHeader