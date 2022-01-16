import './App.css';
import ProjectShowcase from './components/ProjectShowcase';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <>
      <header className="flex flex-col" >
        <h1 className='text-center text-cyan-600 font-bold text-5xl'>
          Dardila.dev
        </h1>
        <div className="flex justify-center text-2xl text-white text-center">
          <p>Hi, I'm Daniel Ardila. I'm a Software Engineer.</p>
        </div>
        <SocialIcons />
      </header>
      <main>
        {/* Experiences and Personal Projects */}
        <section className='section-projects'>
          <h2 className='text-center text-cyan-600 font-bold text-4xl'>Projects</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 m-1'>
          <ProjectShowcase/>
          <ProjectShowcase/>
          <ProjectShowcase/>

          </div>
        </section>
      </main>
    </>
  );
}

export default App;
