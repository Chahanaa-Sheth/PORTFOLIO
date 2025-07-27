import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
