import React, { useState, useEffect } from 'react';
import './Hero.css';
import navimage from '../../assets/iot-core-svgrepo-com.svg';

function Hero() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect the scroll direction and update state accordingly
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setScrollDirection('down');
    } else {
      // Scrolling up
      setScrollDirection('up');
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section id='hero-section' className='section'>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${scrollDirection === 'down' ? 'hide-navbar' : 'show-navbar'}`}>
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <img src={navimage} alt="Logo" width="20" height="14" className="d-inline-block align-text-top" />
            <p className='text-primary in-line'>Nacro</p>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <span className="navbar-text">
              <img src={navimage} alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
            </span>
          </div>
        </div>
      </nav>
      <div className='hero-content'>
        <p className='hero-text text-primary'>
          Lorem ipsum dolor sit.
        </p>
        <h1 className='hero-head text-light'>
          Our Job Goes Beyond Just Imagining & Creating
        </h1>
        <a href="#" className='btn btn-primary btn-nav'>
          Get started now
        </a>
        <a href="#" className='btn btn-danger btn-nav'>
          Learn More 
        </a>
      </div>
    </section>
  );
}

export default Hero;
