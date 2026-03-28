import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="home" className="section">
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