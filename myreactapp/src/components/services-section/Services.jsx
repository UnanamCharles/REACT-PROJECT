import React from 'react';
import './Services.css';
import tea from '../../assets/tea-cup-svgrepo-com.svg';
import bulb from '../../assets/bulb-2-svgrepo-com.svg'
import support from '../../assets/support-svgrepo-com.svg'
import star from '../../assets/star-svgrepo-com.svg'
import design from '../../assets/web-design-svgrepo-com.svg'
import file from '../../assets/file-plus-svgrepo-com.svg'

function Services() { 
  return (
    <section id="service-section" className="section container">
      <div className="services-header">
        <p className="text-primary mt-4 ">Our Services</p>
        <h2 className="headerstyling text-light">
          Creative Design & Development
        </h2>
      </div>
      <div className='container for-cards'> 
        <div className="card">
            <img src={design} alt="logo" className="card-image"/>
            <div className="category">Graphic design</div>
            <div className="heading">A heading that must span over two lines</div>
        </div>
        <div className="card">
            <img src={star} alt="logo" className="card-image"/>
            <div className="category">Web design</div>
            <div className="heading">A heading that must span over two lines</div>
        </div>
        <div className="card">
            <img src={file} alt="logo" className="card-image"/>
            <div className="category">Branding</div>
            <div className="heading">A heading that must span over two lines</div>
        </div>
        <div className="card">
            <img src={bulb} alt="logo" className="card-image"/>
            <div className="category">Consultant</div>
            <div className="heading">A heading that must span over two lines</div>
        </div>
        <div className="card">
            <img src={tea} alt="logo" className="card-image"/>
            <div className="category">Interior design</div>
            <div className="heading">A heading that must span over two lines</div>
        </div>
        <div className="card">
            <img src={support} alt="logo" className="card-image"/>
            <div className="category">24/7 support</div>
            <div className="heading">A heading that must span over two lines</div>
        </div>
      </div>
    </section>
  );
}

export default Services;

