import React from 'react'
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";


const SocialIcons = () => {
  return (
    <div className='flex flex-row justify-center'>
      <div className="social-icons">
        <a href="https://github.com/Dardila11" target="_blank" rel='noreferrer'>
          <FaGithubAlt size={48} color='white' />
        </a>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/danieleardila" target="_blank" rel="noreferrer">
          <FaLinkedinIn size={48} color='white' />
        </a>
      </div>
    </div>
  )
}

export default SocialIcons