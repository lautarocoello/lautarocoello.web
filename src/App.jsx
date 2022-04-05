// import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Certifications  from './components/certifications/Certifications'
import Footer from './components/footer/Footer'




const App = () => {
  return (
    <div>
     <Header/>
     <Nav/>
     <Experience/>
     <Services/>
     <Certifications/>
     <About/>
     <Portfolio/>
     <Contact/>
     <Footer/>
     </div>
  )
}

export default App
