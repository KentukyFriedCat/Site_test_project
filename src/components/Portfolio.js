import React from 'react';
import Gallery from './Gallery';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-content">
            {/* <h2>Мои работы</h2> */}
            <Gallery />
        </div>
    );
};

export default Portfolio;