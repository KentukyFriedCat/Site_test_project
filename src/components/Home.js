import React from 'react';
import './Home.css';

const Home = () => {
    const scrollToContacts = () => {
        const contactsSection = document.getElementById('contacts');
        if (contactsSection) {
            contactsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-content">
            <blockquote className="quote">
                «Создаю современные веб-приложения с любовью к деталям»
            </blockquote>
            <button className="contact-btn" onClick={scrollToContacts}>
                Связаться со мной
            </button>
        </div>
    );
};

export default Home;