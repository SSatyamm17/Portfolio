import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <a href="#contact" aria-label="Quick contact" className="floating-cta">
        <Mail size={20} />
      </a>
    </div>
  );
}

export default App;
