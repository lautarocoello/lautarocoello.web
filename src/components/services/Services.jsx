import React from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h4 className="text-light">
        ¿En que puedo ayudarte?
      </h4>
      <h2 className="text-light">
        Servicios
      </h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full-Stack skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Sitios institucionales, <br/> personales o blogs
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                E-commerce
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Landing pages
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Actualización de sitio
              </p>
            </li>
           </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimiento Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Desarrollo <br/> y hospedaje web
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                React
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                E-mail Corporativo
              </p>
            </li>   
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Modelación de proyectos
              </p>
            </li>          
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Marketing y Planeamiento</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                SEO -  Tráfico web
              </p>
            </li>          
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Mail Marketing
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Lanzamientos
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Análisis de concurrencia
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Analisis de uso de su web
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div>
     </div>
    </section>
  )
}

export default Services