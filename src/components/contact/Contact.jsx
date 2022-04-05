import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'


const Contact = () => {
  return (
    <section id='contact'>    
      <h5>Antes de irte!</h5>
      <h2>Contáctame</h2>

        <div className='container contact__container'>
          <div className="contact__options">
            <article className='contact__option'>
              <FiMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>lautarocoello@gmail.com</h5>
              <a href="mailto:lautarocoello@gmail.com">Envíame un email</a>
            </article>
          </div>
        </div>
      </section>
  )
}

export default Contact