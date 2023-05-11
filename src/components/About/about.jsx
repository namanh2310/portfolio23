import React from 'react'
import './about.css'
import ME from '../../assets/me5.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMath} from 'react-icons/bi'

function About() {
  return (
    <section id='about'>
      <h5>Who Am I?</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='me'  />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <div className='about_card_text'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>4 Months Internship</small>
              </div>
            </article>

            <article className='about_card'>
              <div className='about_card_text'>
                <BiMath className='about_icon'/>
                <h5>Grade Point Average</h5>
                <small>3.1/4 or 74/100</small>
              </div>
            </article>

            <article className='about_card'>
              <div className='about_card_text'>
                <AiOutlineFundProjectionScreen className='about_icon'/>
                <h5>Project</h5>
                <small>4+ Completed Projects</small>
              </div>
            </article>
          </div>

            <p>
            Hello, my name is Nam Anh, and I am a senior student studying at International 
            University in HCMC. I have a strong passion for creating beautiful and functional 
            websites and applications, and I am proficient in frontend technologies and have a 
            basic knowledge in backend field. I'm willing to learn many aspects of IT to improve 
            my hardskills.
            </p>
              
            <a href='#contact' className='btn btn-primary'>Hire me</a>

          </div>
        </div>
    </section>
  )
}

export default About