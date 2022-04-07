import React from "react";
import "./contact.css";
// import { FiMail } from 'react-icons/fi'
import { useRef } from "react";
import emailjs from "emailjs-com";
import swal from 'sweetalert'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(    
        process.env.REACT_APP_YOUR_SERVICE_ID,        
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_USER_ID
       )
      swal("Consulta enviada", "Gracias por contactarte, en breve recibiras una respuesta en el email proporcionado", "success")
      e.target.reset()
        
  };

  return (
    <section id="contact">
      <h5>Antes de irte!</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        {/* <div className="contact__options">
            <article className='contact__option'>
              <FiMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>lautarocoello@gmail.com</h5>
              <a href="mailto:lautarocoello@gmail.com">Envíame un email</a>
            </article>
          </div> */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
