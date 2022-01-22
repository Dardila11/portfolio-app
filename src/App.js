import './App.css';
import Header from './components/Header';
import ProjectShowcase from './components/ProjectShowcase';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <div className=''>
      <Header/>
      <main>
        {/* Intro */}
        <secion className="section-fprojects">
          <p className='flex flex-wrap text-2xl text-white text-center'>
            Hi, I'm Daniel Ardila. I'm a Software Engineer. Focused in React and Flutter development
          </p>
          <SocialIcons />
        </secion>
        {/* Experiences and Personal Projects */}
        <section id='projects' className='section-projects'>
          <h2 className='text-center text-cyan-600 font-bold text-4xl'>Web Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-2 m-1'>
            <ProjectShowcase />
            <ProjectShowcase />
            <ProjectShowcase />
          </div>
        </section>
        <section id='experiences' className='section-fprojects'>
          <h2 className='text-center text-cyan-600 font-bold text-4xl'>Web Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-2 m-1'>
            <ProjectShowcase />
            <ProjectShowcase />
            <ProjectShowcase />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
