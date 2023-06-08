import React from 'react'
import './Clients.css'

function Clients() {
  return (
    <div className='container'>
        <ul>
            <li className='item1'><img src={"clients/client-1.png"} alt="" /></li>
            <li className='item2'><img src={"clients/client-2.png"} alt="" /></li>
            <li className='item3'><img src={"clients/client-3.png"} alt="" /></li>
            <li className='item4'><img src={"clients/client-4.png"} alt="" /></li>
            <li className='item5'><img src={"clients/client-5.png"} alt="" /></li>
        </ul>
    </div>
  )
}

export default Clients