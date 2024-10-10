import React from 'react'
import './Footer.css'
import navimage from '../../assets/iot-core-svgrepo-com.svg';



function Footer() {
  return (
    <section id='footer-section' className='section' >
        <div className='footer-style'>
          <img src={navimage} alt="Logo" width="80" height="64" className="d-inline-block align-text-top" />
        </div>
        <div className='footer-style'>
          <h3 className='h3 fw-bold '>
            CONTACT INFORMATION
          </h3 >
          <ul>
              <li><a href="#">Nacro Business Internationak</a></li>  
              <li><a href="#">Reservations and booking</a></li>  
              <li><a href="#">info@Nacro.com</a></li>  
      
          </ul>
        </div>
        <div className='footer-style'>
          <h3 className='h3 fw-bold '>
            CUSTOMER SERVICE
          </h3>
          <ul>
              <li><a href="#">Lagos customer care line</a></li>  
              <li><a href="#">Abuja customer care line</a></li>  
              <li><a href="#">Calabar customer care line</a></li>  
              <li><a href="#">Akwa Ibom customer care line</a></li>  
          </ul>
        </div>
        <div className='footer-style'>
          <img src={navimage} alt="Logo" width="60" height="54" className="d-inline-block align-text-top" />
          <p>
            &copy; 2024 Nacro business PLC
          </p>    
          {/* <li><a href="#">Lagos customer care line</a></li>   */}

        </div>
    </section>
  )
}

export default Footer
