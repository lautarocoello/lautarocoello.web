import React from 'react'
import Typical from 'react-typical'
import './header.css'
import Curriculum from './CTA'
import ME from '../../assets/lautaro-coello.png'
import SocialIcons from './SocialIcons'

export default function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h4 className='text-light'>Bienvenidxs </h4>
        <h1 className='text-light'>Full Stack Developer 💻</h1>
        <h2 className="text-light">Lautaro Coello</h2>
        {" "}
        <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
             "Creacion, diseño y mantenimiento de sitios web 🌐",
              1000,
              "Proyectos, UX|UI Diseños 🎨",
              1000,
              "Estrategias Digitales 🎯",
              1000,
              ]}
            />
        </h3>
        <Curriculum />
        <SocialIcons />
        <div className="me">
          <img src={ME} alt="Fullstack developer, full stack developer" className='me'/>
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll
        </a>
      </div>
    </header>
  )
}