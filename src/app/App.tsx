import { useEffect } from 'react';
import { Cursor } from './components/portfolio/Cursor';
import { Loader } from './components/portfolio/Loader';
import { Nav } from './components/portfolio/Nav';
import { Hero } from './components/portfolio/Hero';
import { Ticker } from './components/portfolio/Ticker';
import { About } from './components/portfolio/About';
import { Skills } from './components/portfolio/Skills';
import { Experience } from './components/portfolio/Experience';
import { Projects } from './components/portfolio/Projects';
import { Contact } from './components/portfolio/Contact';
import { Footer } from './components/portfolio/Footer';

export default function App() {
  /* Scroll reveal via IntersectionObserver */
  useEffect(() => {
    const rvEls = document.querySelectorAll('.rv');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.07 }
    );
    rvEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Parallax on the hero name + rotated label */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const name = document.querySelector('.h-name') as HTMLElement | null;
      if (name) name.style.transform = `translateY(${y * 0.08}px)`;
      const rot = document.querySelector('.h-rotated') as HTMLElement | null;
      if (rot) rot.style.transform = `translateY(calc(-50% + ${y * 0.1}px)) rotate(-90deg)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Cursor />
      <Loader />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
