import {useState} from 'react'
import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript, SiRedux, SiFlask, SiFirebase, SiMysql, SiMongodb} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {TbBrandReactNative} from 'react-icons/tb'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaNodeJs} from 'react-icons/fa'


const skills = [
    {
        class: 'frontend',
        name: 'HTML',
        icon: <AiFillHtml5/>,
        level: 'Intermediate'
    },

    {
        class: 'frontend',
        name: 'CSS',
        icon: <DiCss3/>,
        level: 'Intermediate'
    },

    {
        class: 'frontend',
        name: 'Javascript',
        icon: <SiJavascript/>,
        level: 'Intermediate'
    },

    {
        class: 'frontend',
        name: 'React JS',
        icon: <GrReactjs/>,
        level: 'Intermediate'
    },

    {
        class: 'frontend',
        name: 'React Native',
        icon: <TbBrandReactNative/>,
        level: 'Intermediate'
    },

    {
        class: 'frontend',
        name: 'Redux',
        icon: <SiRedux/>,
        level: 'Intermediate'
    },

    {
        class: 'frontend',
        name: 'Bootstrap',
        icon: <BsBootstrapFill/>,
        level: 'Basic'
    },
    
    {
        class: 'backend',
        name: 'Node JS',
        icon: <FaNodeJs/>,
        level: 'Intermediate'
    },

    {
        class: 'backend',
        name: 'Flask',
        icon: <SiFlask/>,
        level: 'Intermediate'
    },

    {
        class: 'backend',
        name: 'Firebase',
        icon: <SiFirebase/>,
        level: 'Intermediate'
    },

    {
        class: 'backend',
        name: 'MySQL',
        icon: <SiMysql/>,
        level: 'Basic'
    },

    {
        class: 'backend',
        name: 'MongoDB',
        icon: <SiMongodb/>,
        level: 'Basic'
    },

]

function Skills() {
  const [active, setActive] = useState(0)
  return (
    <section id='skills'>
        <h5>I Can Do What?</h5>
        <h2>My Skills</h2>
        
        <div className='container skills_container'>
            <div className='skills_frontend'>
                <div className='skills_title'>
                    <h3 onClick={() => setActive(0)} className={active === 0 ? 'active-title': 'title'}>Frontend Technologies</h3>
                    <h3 onClick={() => setActive(1)} className={active === 1 ? 'active-title': 'title'}>Backend Technologies</h3>
                </div>
                <div className='skills_content'>
                    {active === 0 && skills.map((el, i) => {
                        if(el.class === 'frontend') {
                            return (
                                <article className='skill_detail'>
                                    {el.icon}
                                    <div>
                                        <h4>{el.name}</h4>
                                        <small className='text-light'>{el.level}</small>
                                    </div>
                                </article>
                            )
                        }
                    })}
                    {active === 1 && skills.map((el, i) => {
                        if(el.class === 'backend') {
                            return (
                                <article className='skill_detail'>
                                    {el.icon}
                                    <div>
                                        <h4>{el.name}</h4>
                                        <small className='text-light'>{el.level}</small>
                                    </div>
                                </article>
                            )
                        }
                    })}
                </div>
            </div>      
        </div>
        
    </section>
  )
}

export default Skills