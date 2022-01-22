import react from "react"

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center" >
      <h1 className='text-center text-cyan-600 font-bold text-5xl'>
        Dardila
      </h1>
      <nav className="flex justify-center up">
        <a href="#projects" className="text-white mx-2 hover:text-cyan-600">Projects</a>
        <a href="#experiences" className="text-white mx-2 hover:text-cyan-600">Experiences</a>
        <a className="text-white mx-2 hover:text-cyan-600">Contact</a>
      </nav>
    </header>)
}

export default Header