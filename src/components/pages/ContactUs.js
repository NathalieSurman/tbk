import React from 'react'
import '../../App.css'
import "./ContactUs.css"

export const ContactUs = () => {
  return (
    // ---- Section ----//
    <section className='contactUs'>
      {/* -------Contact Container -------*/}
      <div className='contact-container'>
           {/* --------- Form ----------- */}
        <div className='form-container'>
          <h3>Message Us</h3>
          <form action='' className='contact-form'>
            <input type='text' placeholder='Your Name' required/>
            <input type='email' name='' id='' placeholder='Enter Your Email...' required/>
            <textarea name='' id='' cols="30" rows="10" placeholder='Write Message Here...' required></textarea>
            <input type='submit' value="send" className='send-button' />
          </form>
        </div>
        {/*-------- Map From Google------*/}
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d92356.200400557!2d-79.37053372700989!3d43.666239818568776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89d4cbf9e9996849%3A0xaff59a67fbbccca9!2s77%20Kewbeach%20Ave%2C%20Toronto%2C%20ON%20M4L%201B8!3m2!1d43.6662612!2d-79.30049389999999!5e0!3m2!1sen!2sca!4v1680537412724!5m2!1sen!2sca" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}
