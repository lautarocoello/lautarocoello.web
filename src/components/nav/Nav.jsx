import React from 'react'
import './nav.css'
import { IoHome } from 'react-icons/io5'
import { SiAboutdotme } from 'react-icons/si'
import { GiPuzzle } from 'react-icons/gi'
import { RiServiceLine } from 'react-icons/ri'
import { MdConnectWithoutContact } from 'react-icons/md'
import { VscFolderActive } from 'react-icons/vsc'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><IoHome /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><GiPuzzle /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : '' }><RiServiceLine /></a>
      <a href="#certifications" onClick={() => setActiveNav('#certifications')} className={activeNav === '#certifications' ? 'active' : '' }><SiAboutdotme /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><VscFolderActive /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><MdConnectWithoutContact /></a>
    </nav>
  )
}

export default Nav