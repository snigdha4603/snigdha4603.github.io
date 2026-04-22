import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Leadership } from './components/Leadership';
import { Skills } from './components/Skills';
import { Awards } from './components/Awards';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Leadership />
      <Skills />
      <Awards />
      <Projects />

      <Contact />
    </div>
  );
}

export default App;
