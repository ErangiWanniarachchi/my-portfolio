// App.jsx
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Technologies from './components/Technologies.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <div>
      <div className="flixed top-0 -z-10 h h-full w w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div className="conainer mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
