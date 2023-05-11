import React from 'react'
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs'

function ContactSm() {
  return (
    <div className='header_socials'>
       <a href='https://www.linkedin.com/in/noahdang/' target='_blank'><BsLinkedin/></a> 
       <a href='https://github.com/namanh2310' target='_blank'><BsGithub/></a> 
       <a href='https://www.facebook.com/profile.php?id=100016974122598' target='_blank'><BsFacebook/></a> 

    </div>
  )
}

export default ContactSm