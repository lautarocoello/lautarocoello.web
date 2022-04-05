import React from 'react'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import {BsBootstrap} from 'react-icons/bs'
import { GrReactjs } from 'react-icons/gr'
import { SiRedux, SiBabel, SiExpress, SiJavascript, SiSequelize, SiPostgresql, SiPython, SiMysql, SiNumpy, SiPandas} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { BiGitMerge } from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='text-light'>Principales habilidades</h5>
      <h2 className="text-light">
       Experiencia con herramientas
      </h2>
      <div className="container experience__container">
        <div className="experience__title-ti">
          <h3>Front-end Skills</h3>
          <div className="experience__content">
            <article className="experience__details" title='Web Semântica, XML, Web Standards'>
              <div>
                <AiFillHtml5 className='experience__details-icon' />
                <h5>HTML5</h5>
              </div>              
            </article>
            <article className="experience__details" >
              <div>
                <DiCss3 className='experience__details-icon' />
                <h5>CSS</h5>
              </div>
            </article>
            <article className="experience__details" title='DOM, APIs, JSON'>
              <div>
                <BsBootstrap className='experience__details-icon' />
                <h5>Bootstrap</h5>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <GrReactjs className='experience__details-icon' />
                <h5>React JS</h5>
              </div>
            </article>
            <article className="experience__details" >
              <div>
                <SiRedux className='experience__details-icon' />
                <h5>Redux</h5>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiBabel className='experience__details-icon' />
                <h5>Babel</h5>
              </div>
            </article>     
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Back-end Skills</h3>
          <div className="experience__content">
          <article className="experience__details" title=''>
              <div>
                <SiExpress className='experience__details-icon' />
                <h5>Express JS</h5>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiJavascript className='experience__details-icon' />
                <h5>JavaScript</h5>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <FaNode className='experience__details-icon' />
                <h5>Node JS</h5>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiSequelize className='experience__details-icon' />
                <h5>Sequelize</h5>
              </div>
            </article>
                        
            <article className="experience__details" title='SEO técnico, local, otimizações'>
              <div>
                <SiPostgresql className='experience__details-icon' />
                <h5>PostgreSQL</h5>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BiGitMerge className='experience__details-icon' />
                <h5>Git</h5>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>En aprendizaje</h3>
          <div className="experience__content">
          <article className="experience__details" title='Edição e tratamento'>
              <div>
                <SiPython className='experience__details-icon' />
                <h5>Pyhton</h5>
              </div> 
            </article>
            <article className="experience__details">
              <div>
                <SiMysql className='experience__details-icon' />
                <h5>MySQL</h5>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiNumpy className='experience__details-icon' />
                <h5>Numpy</h5>
              </div>
            </article>
            
            <article className="experience__details">
              <div>
                <SiPandas className='experience__details-icon' />
                <h5>Pandas</h5>
              </div>
            </article>
                       
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Experience