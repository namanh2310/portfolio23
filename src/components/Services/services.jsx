import React from 'react'
import './services.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript, SiRedux, SiFlask, SiFirebase, SiMysql, SiMongodb} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandReactNative} from 'react-icons/tb'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaNodeJs} from 'react-icons/fa'


function Services() {
  return (
    <section id='services'>
        <h5>I Can Do What?</h5>
        <h2>My services</h2>
        
        <div className='container services_container'>
            <div className='services_frontend'>
                <h3>Frontend Dev</h3>
                <div className='services_content'>
                    <p><span className='bold'>1. Frontend developer</span> - Be able to generate the interactive and easy-on-the-eye website 
                      and mobile application
                    </p>
                    <br></br>
                    <p><span className='bold'>2. Responsive design</span> - Have ability optimize the user's experience by applying the responsive design
                      to product
                    </p>
                    <br></br>

                    <p><span className='bold'>3. Web/app design</span> - With a basic knowledge of web/app design, I'm willing to learn
                      and work in this aspect if needed
                    </p>
                    <br></br>

                    <p><span className='bold'>4. Frontend-Backend communication</span> - Can use HTTP protocol for the connection between 
                    Frontend and Backend
                    </p>
                </div>
            </div>
            

            <div className='services_backend'>
                <h3>Backend Dev</h3>
                <div className='services_content'>
                <p><span className='bold'>1. Database Development and Management:</span> - Creating and managing databases using SQL or NoSQL technologies
                    </p>
                    <br></br>
                    <p><span className='bold'>2. Cloud Computing</span> - Developing and deploying applications on cloud platforms, such as Cloudinary, Firebase, etc
                    </p>
                    <br></br>

                    <p><span className='bold'>3. Backend Frameworks</span> - Developing server-side applications using popular backend frameworks
                    </p>
                </div>
            </div>

            
        </div>
        
    </section>
  )
}

export default Services