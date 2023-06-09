import React from 'react'
import './Clients.css'
import client1 from '../../assets/clients/client-1.png'
import client2 from '../../assets/clients/client-2.png'
import client3 from '../../assets/clients/client-3.png'
import client4 from '../../assets/clients/client-4.png'
import client5 from '../../assets/clients/client-5.png'

function Clients() {
  return (
    <div className='container'>
        <ul>
            <li className='item1'><img src={client1} alt="" /></li>
            <li className='item2'><img src={client2} alt="" /></li>
            <li className='item3'><img src={client3} alt="" /></li>
            <li className='item4'><img src={client4} alt="" /></li>
            <li className='item5'><img src={client5} alt="" /></li>
        </ul>
    </div>
  )
}

export default Clients