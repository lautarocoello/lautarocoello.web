import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialIcons = () => {
    return (
        <div className="header__socialicons">          
            <a href="https://www.linkedin.com/in/lautarocoello/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>        
            <a href="https://github.com/lautarocoello" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
        </div>
  )
}

export default SocialIcons
