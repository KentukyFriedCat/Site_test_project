import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-icon">
                <img src="/logo.gif" alt="logo" style={{ height: '40px' }} />
            </div>
            <div className="navbar-links">
                <a href="#home" className="nav-button">Главная</a>
                <a href="#portfolio" className="nav-button">Портфолио</a>
                <a href="#about" className="nav-button">Услуги</a>
                <a href="#contacts" className="nav-button">Контакты</a>
            </div>
        </nav>
    );
};

export default Navbar;