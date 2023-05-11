import {useRef, useState} from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

function Contact() {
  const [success, setSuccess] = useState(false)
  const ref = useRef(null)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n9my0ug', 'template_u846x9n', ref.current, 'lEivcozFByi2JuMQL')
    setSuccess(true)
  }
  return (
    <section id='contact'>
      <h5>Get In Touch!!</h5>
      <h2>Contact</h2>
      <div className='container contact_container'>
        <form ref={ref} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='text' name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
          {success && <h4>Thanks for sending email! Have a nice day</h4>}
        </form>
        <div className='contact_option'>
          <div className='contact_email'>
            <h4>My email:</h4>
            <span>dangnguyennamanh206@gmail.com</span>
          </div>
          <div className='contact_phone'>
            <h4>My phone number:</h4>
            <span>(+84) 0765047739</span>
          </div>
          <div className='contact_linkedin'>
            <h4>My linkendin:</h4>
            <a href='https://www.linkedin.com/in/noahdang/'>noahdang</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact