import React from 'react'
import './about.css'
import { FiAward, FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";


const About = () => {
  return (
    <section id='about'>
      <h2 className='text-light'>Sobre mi</h2>

        <div className="container about__container">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiAward className='about__icon'/>
                <h5>Experiencia</h5>
                <small>+1 año</small>
              </article>
              <article className="about__card">
                <VscFolderActive className='about__icon'/>
                <h5>Proyectos</h5>
                <small>Academicos y personales</small>
              </article>
              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Trabajos</h5>
                <small>- Creacion y manejo de web a clientes personales, algunos tambien con
                manejo de redes sociales</small>
              </article>              
            </div>
            <p>
              Desde que conozco la tecnologia, su crecimiento exponencial y las oportunidaes que brinda no paro de asombrarme de lo maravillosa que es las cosas que se pueden lograr con ella. Actualmente estoy refozando las habilidades técnicas adquiridas en búsqueda de proyectos que me permitan 
              crecer y seguir aprendiendo. Si te interesó mi perfil y queres saber mas sobre mi contáctame!
            </p>
            <a href="#contact" className="btn btn-primary">Concer más</a>
          </div>
        </div>
    </section>
  )
}

export default About