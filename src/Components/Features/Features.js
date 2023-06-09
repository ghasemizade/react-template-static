import React from 'react'
import './Features.css'
import feature from '../../assets/features.jpg'
import document from '../../assets/google-docs.png'
import cube from '../../assets/dimensions.png'
import gallary from '../../assets/image.png'
import shield from '../../assets/shield.png'



function Features() {
  return (
    <div className='container'>
        <div className="left-side-img"><img src={feature} alt="" /></div>
        <div className="right-side-featurs">
            <div className="right-content">
                <div className="flex">
                    <div className="item">
                        <div className="icon"><img src={document} alt="" /></div>
                        <div className="text-content">
                            <h4 className='title'>Advertising is difficult</h4>
                            <div className='desc'>Results are achieved as a result of any of these employment objectives</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon"><img src={cube} alt="" /></div>
                        <div className="text-content">
                            <h4 className='title'>which one of these</h4>
                            <div className='desc'>Those who lust for blacks do not see, they are guilty of abandoning their services</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon"><img src={gallary} alt="" /></div>
                        <div className="text-content">
                            <h4 className='title'>or is blinded</h4>
                            <div className='desc'>Either accepts or when no one avoids all. All the pains that make them worse</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon"><img src={shield} alt="" /></div>
                        <div className="text-content">
                            <h4 className='title'>happy truth</h4>
                            <div className='desc'>They follow nothing without bearing the truth in the praise of life</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features