import React from 'react';
import './Author.css';

const Author = () => {
    return (
        <section className="author-section">
            <div className="author-container">
                <h2>Об авторе</h2>
                <div className="author-photo">
                    <img src="/images/author.jpg" alt="Фото автора" />
                </div>
                <p className="author-bio">
                    Привет! Меня зовут ... Я веб-разработчик с ... годами опыта. Специализируюсь на React и создании современных, отзывчивых интерфейсов. Люблю решать сложные задачи и постоянно изучаю новые технологии.
                </p>
            </div>
        </section>
    );
};

export default Author;