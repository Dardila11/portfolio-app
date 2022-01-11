import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const SocialIcons = () => {
  return (
    <div className='flex flex-row justify-center'>
      <div className="m-1 py-2 px-2 cursor-pointer hover:drop-shadow-md">
        <a href="https://github.com/Dardila11" target="_blank" rel='noreferrer'>
          <FaGithub size={48} />
        </a>
      </div>
      <div className="m-1 py-2 px-2 cursor-pointer hover:drop-shadow-md">
        <a href="https://www.linkedin.com/in/danieleardila" target="_blank" rel="noreferrer">
          <FaLinkedin size={48} />
        </a>
      </div>
    </div>
  )
}

export default SocialIcons