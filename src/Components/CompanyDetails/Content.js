import React from 'react'
import './Content.css'
import about from '../../assets/about.jpg'

function Content() {
  return (
    <div>
        <div className="container">
            <div className='left-side-text'>
                <h3>Falcon Digital Co</h3>
                <p>Noad Marketing Company, as a leading company in the digital marketing industry, is trying to play an important role in the economic prosperity of Iran with the advancement of digital business and internal works by using modern technical knowledge and providing new marketing and branding solutions. show As the most specialized digital market brand in Iran and expanding its name in global markets, Noad has taken steps to exploit services based on modern technologies. Noad owes its progress during a decade of activity to transparency, coherence and results to the predicted results of its foot. Investing in new technologies, adherence and quality to values, customer satisfaction and loyalty, human and dynamic human resources are the inherent values of Noad. The digital space has created a tremendous transformation in communication and how people interact with each other. The tools and platforms available in this era have increased the power of combing and choosing for people and made it easier to evaluate and compare different brands and products. We consider this change of attitude in choosing a brand and product as an opportunity for us and our customers. In the digital space, it is easy to identify the target market, discover their needs, desires, and interests, and use the information obtained to create and develop products, brands, and appropriate experiences that come from the integration of technology and creativity along with The marketing method pays. Novin comes, took action. At Noad, we are ready to accept new things and stick to our work at any cost.</p>
            </div>
            <div className='right-side-img'>
                <img src={about} alt="about img" />
            </div>
        </div>
    </div>
  )
}

export default Content