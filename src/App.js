import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  const homeRef = useRef(null);

  useEffect(() => {
    const homeSection = homeRef.current;
    if (!homeSection) return;

    let rafId = null;

    const updateParallax = () => {
      const rect = homeSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      let scrolledPast = -sectionTop;
      if (scrolledPast < 0) scrolledPast = 0;
      const maxScroll = sectionHeight;
      let progress = scrolledPast / maxScroll;
      progress = Math.min(1, Math.max(0, progress));

      let translate = 0;
      if (progress > 0.2) { // начало эффекта на 20%
        const effectProgress = (progress - 0.2) / (1 - 0.2);
        const maxTranslate = sectionHeight * 0.2;
        translate = effectProgress * maxTranslate;
      }

      homeSection.style.setProperty('--parallax-offset', `${translate}px`);
    };

    const animate = () => {
      updateParallax();
      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // первичный запуск

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []); // пустой массив зависимостей – эффект выполнится один раз

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section ref={homeRef} id="home" className="section home-section">
          <div className="section-content">
            <Home />
          </div>
        </section>
        <section id="portfolio" className="section">
          <div className="section-content">
            <Portfolio />
          </div>
        </section>
        <section id="about" className="section">
          <div className="section-content">
            <About />
          </div>
        </section>
        <section id="contacts" className="section">
          <div className="section-content">
            <Contacts />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;