import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Author from './components/Author';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ParallaxSection from './components/ParallaxSection';
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
      if (progress > 0.05) {
        // const effectProgress = (progress - 0.2) / (1 - 0.2);
        const effectProgress = progress;
        const maxTranslate = sectionHeight * 0.4;
        translate = effectProgress * maxTranslate;
      }

      homeSection.style.setProperty('--parallax-offset', `${translate}px`);
    };

    const animate = () => {
      updateParallax();
      rafId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        {/* Главная секция */}
        <section ref={homeRef} id="home" className="section home-section">
          <div className="section-content">
            <Home />
          </div>
        </section>

        {/* Секция об авторе */}
        <Author />

        {/* Параллакс-секция портфолио */}
        <ParallaxSection id="portfolio-parallax" imageUrl="/images/bg2_section2.jpg" height="360px" />

        {/* Блок с галереей — добавляем id для якоря */}
        <div id="portfolio" className="content-block">
          <Portfolio />
        </div>

        {/* Параллакс-секция обо мне */}
        <ParallaxSection id="about-parallax" imageUrl="/images/bg3_section3.jpg" height="360px" />

        {/* Блок с таблицами — добавляем id */}
        <div id="about" className="content-block">
          <About />
        </div>

        {/* Параллакс-секция контактов */}
        <ParallaxSection id="contacts-parallax" imageUrl="/images/bg5_section5.jpg" height="360px" />

        {/* Блок с формой — добавляем id */}
        <div id="contacts" className="content-block">
          <Contacts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;