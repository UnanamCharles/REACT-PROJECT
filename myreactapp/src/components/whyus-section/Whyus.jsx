import React from 'react'
import './whyus.css'

function Whyus() {
  return (
    <section id='whyus-section' className='section'>
        <div className='left-side'>
        </div>
        <div className=' right-side'>
            <p className=' text-primary m-3'>we are the best!</p>
            <h2 className='header-style m-3'>
                We Provide Innovative Solution For You 
            </h2>
            <p className=' text-primary m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem, ipsum dolor.</p>
            <div class="accordion mx-2" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            AI Powered Features 
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure debitis magni voluptate nobis voluptatem porro voluptas alias nostrum saepe rem! <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Cloud Aided Computing/Security
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure debitis magni voluptate nobis voluptatem porro voluptas alias nostrum saepe rem! <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Sustainable Services 
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure debitis magni voluptate nobis voluptatem porro voluptas alias nostrum saepe rem! <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whyus
