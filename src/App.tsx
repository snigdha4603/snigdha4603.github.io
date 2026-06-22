import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Leadership } from './components/Leadership';
import { Skills } from './components/Skills';
import { Awards } from './components/Awards';
import { Projects } from './components/Projects';
import { NewsUpdates } from './components/NewsUpdates';
import { Contact } from './components/Contact';

function App() {
  return (
    <div id="top" style={{ background: '#080808', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Leadership />
        <Skills />
        <NewsUpdates />
        <Projects />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

export default App;
