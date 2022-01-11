import './App.css';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <>
      <header className="flex flex-col" >
        <h1 className='text-center text-cyan-600 font-bold text-5xl'>
          Dardila.dev
        </h1>
        <div className="flex justify-center text-2xl">
          <p>Hi, I'm Daniel Ardila. I'm a Software Engineer.</p>
        </div>
        <SocialIcons />
      </header>
      <main>
        {/* Experiences and Personal Projects */}
        <section>

        </section>
      </main>
    </>
  );
}

export default App;
