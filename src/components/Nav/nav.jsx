import {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {FaMedal} from 'react-icons/fa'

function Nav() {
  const [click, setClick] = useState(1)
  return (
    <nav>
      <a onClick={() => setClick(1)} className={click === 1 ? 'active' : ''} href='#'><AiOutlineHome/></a>
      <a onClick={() => setClick(2)} className={click === 2 ? 'active' : ''} href='#about'><AiOutlineUser/></a>
      <a onClick={() => setClick(3)} className={click === 3 ? 'active' : ''} href='#skills'><FaMedal/></a>
      <a onClick={() => setClick(4)} className={click === 4 ? 'active' : ''} href='#portfolio'><BiBook/></a>
      <a onClick={() => setClick(5)} className={click === 5 ? 'active' : ''} href='#services'><RiServiceLine/></a>
      <a onClick={() => setClick(6)} className={click === 6 ? 'active' : ''} href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav