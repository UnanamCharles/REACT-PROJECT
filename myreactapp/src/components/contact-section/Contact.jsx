import React from 'react'
import './Contact.css'
import profile from '../../assets/Leonardo_Phoenix_A_professional_thumbnail_image_featuring_a_pe_2.jpg'

function Contact() {
  return (
    <section className='section container' id='contact-section'>
        <div className='contact-left'>
            
        </div>
        <div className='contact-right '>
            <p className='text-primary mt-4'>
                <strong>
                    Lets work together to shape both your business and the digital ecosystem
                </strong>
            </p>
            <div class="mb-3">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"> <strong>Name</strong></span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
            </div>
            <div class="mb-3">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><strong>Email</strong></span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
            </div>
            <div class="mb-3">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3"><strong>Password</strong></span>
                    <input type='password' class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
            </div>
            <div class="input-group">
                <div class="input-group">
                    <span class="input-group-text"><strong>Message</strong></span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact
