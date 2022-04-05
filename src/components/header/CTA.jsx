import React from 'react'
import CV from '../../assets/CV.pdf'

const Curriculum = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn" download='CV-LautaroCoello.pdf'>
            Descargar CV
        </a>
        <a href="#contact" className="btn btn-primary">
        Contactame
        </a>
    </div>
  )
}

export default Curriculum
