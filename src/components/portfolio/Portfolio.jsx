import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/excursionapp.jpg'
import IMG2 from '../../assets/infopaises.jpg'
// import { Certifications } from '../certifications/Certifications'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4 className='text-light'>Trabajos recientes</h4>
      <h2 className="text-light">
        Portfolio
      </h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="infopaises" title='infopaises' />
          </div>
          <h3>infopaises</h3>
          <a href="https://youtu.be/fNoajLCDSFE">Video</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Repositorio</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="excursionapp" title='excursionapp' />
          </div>
          <h3>ExcursionApp</h3>
          <a href="https://www.youtube.com/watch?v=3-HB5SKCRtg">Video</a>
          <a href="https://excursionapp.vercel.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Sitio web</a>
        </article>
        
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article> */}
      </div>
      {/* <Certifications/> */}
    </section>
  )
}

export default Portfolio