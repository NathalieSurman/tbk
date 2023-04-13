import React from 'react'
import '../../App.css'
import "./ContactUs.css"

export const ContactUs = () => {
  return (
<>
	<div className="containerCon">
		<div class="innerwrap">
		
			<section class="section1 clearfix">
				<div class="textcenter">
					<span class="shtext">Contact Us</span>
					<span class="seperator"></span>
					<h1>Our kayaks will be ready and waiting for you to launch right on the beach!</h1>
				</div>
			</section>
		
			<section class="section2 clearfix">
				<div className="col2 column1 first">
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d92356.200400557!2d-79.37053372700989!3d43.666239818568776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89d4cbf9e9996849%3A0xaff59a67fbbccca9!2s77%20Kewbeach%20Ave%2C%20Toronto%2C%20ON%20M4L%201B8!3m2!1d43.6662612!2d-79.30049389999999!5e0!3m2!1sen!2sca!4v1680537412724!5m2!1sen!2sca" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
       
				</div>
				<div class="col2 column2 last">
					<div class="sec2innercont">
						<div class="sec2addr">
							<p>We are located beachside of the Kew Gardens Tennis Club at the foot of Waverley Road in Toronto's east beaches. </p>
              <p>If driving, turn south on Waverley Rd & look for on-street parking (no parking lots), if no spots available, follow Waverley Rd to the right and look for on-street parking there.</p>
                <p>Parking and traffic can be difficult, particularly on weekends, so plan accordingly as we must respect the paddling time for all our customers!</p>
							<p><span class="collig">Phone :</span> +416 629 6040</p>
							<p><span class="collig">Email :</span> team@torontobeachkayak.ca</p>
							<p><span class="collig">Address :</span> 77 Kew Beach Ave, Toronto, Ontario, Canada</p>
              
						</div>
					</div>
					<div class="sec2contactform">
						<h3 class="sec2frmtitle">Want to Know More?? Don't be afraid to reach out</h3>
						<form action="">
							<div class="clearfix">
								<input class="col2 first" type="text" placeholder="FirstName" required/>
								<input class="col2 last" type="text" placeholder="LastName" required/>
							</div>
							<div class="clearfix">
								<input  class="col2 first" type="Email" placeholder="Email" required/>
								<input class="col2 last" type="text" placeholder="Contact Number"/>
							</div>
							<div class="clearfix">
								<textarea name="textarea" id="" cols="30" rows="7" required>Your message here...</textarea>
							</div>
							<div class="clearfix"><input className='submit-con' type="submit" value="Send"/></div>
						</form>
					</div>

				</div>
			</section>
		
		</div>
	</div>
</>
  
  )
}




        // {/*-------- Map From Google------*/}
        // <div className='map'>
        // <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d92356.200400557!2d-79.37053372700989!3d43.666239818568776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89d4cbf9e9996849%3A0xaff59a67fbbccca9!2s77%20Kewbeach%20Ave%2C%20Toronto%2C%20ON%20M4L%201B8!3m2!1d43.6662612!2d-79.30049389999999!5e0!3m2!1sen!2sca!4v1680537412724!5m2!1sen!2sca" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        // </div>




    //      // ---- Section ----//
    // <section className='contactUs'>
    // {/* -------Contact Container -------*/}
    // <div className='contact-container'>
    //      {/* --------- Form ----------- */}
    //   <div className='form-container'>
    //     <h3>Message Us</h3>
    //     <form action='' className='contact-form'>
    //       <input type='text' placeholder='Your Name' required/>
    //       <input type='email' name='' id='' placeholder='Enter Your Email...' required/>
    //       <textarea name='' id='' cols="30" rows="10" placeholder='Write Message Here...' required></textarea>
    //       <input type='submit' value="send" className='send-button' />
    //     </form>
    //   </div>