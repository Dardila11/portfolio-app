import React from 'react'
import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'

import superheroesimg from '../images/superheroes.png';
const ProjectShowcase = () => {
  return (
    <div className='relative flex w-[450px] h-[220px] my-2 bg-[#282b36] rounded-md drop-shadow-lg overflow-hidden'>
      {/* white background */}
      <div className='absolute bg-white w-[400px] h-[400px] rounded-full left-auto -top-20 -right-48'></div>
      {/* app sample image  */}
      <img src={superheroesimg} alt='superheroes-app' className='absolute inset-0 w-44 left-auto right-2 top-6 object-cover rounded-lg' />
      
      {/* Title & Description */}
      <div className='flex flex-col justify-start items-start w-60'>
        <h3 className='text-cyan-600 text-center my-2 mx-2 font-bold uppercase tracking-wider'>Superheroes App</h3>
        <p className='text-white my-2 mx-2 semi-bold'>Simple app that list superheroes and have an option to filter by the ability to fly</p>
      </div>

      {/* Stack Used */}
      <div className='absolute bg-white w-1/3 h-6 top-auto bottom-0 rounded' >
        <div className='flex space-x-1 mt-1 mb-1 justify-center'>
          <FaHtml5 color='#e34c26' />
          <FaCss3Alt color='#0074d9' />
          <FaJs color='#f0db4f' />
          <FaReact color='#00d8ff' />
        </div>
      </div>
      {
      /* 
      <p className='text-white text-center text-sm'>App Description</p>
      <p className='text-white'>Stack Used</p>
      <p className='text-white'>Github Link</p>
      <p className='text-white'>Live Site Link</p> */}
    </div>
  )
}

export default ProjectShowcase