import React from 'react'
import './header.css'
import ContactBtn from './contact_btn'
import ContactSm from './contact_sm'
import ME from '../../assets/me3.png'

function myheader() {
  return (
    <header>
      <div className='container header_container'>
        <div className='my_picture'>
          <img className='me' src={ME} alt='my_picture' />
        </div>
        <br/>
        <h5>Hello I'm</h5>
        <h1>Nam Anh</h1>
        <h5>Frontend Developer</h5>
        <ContactBtn />
        <ContactSm />
        
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default myheader