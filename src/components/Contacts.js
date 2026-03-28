import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-container">
            <h2>Свяжитесь со мной</h2>
            <form
                action="mailto:example@gmail.com"
                method="post"
                encType="text/plain"
                className="contact-form"
            >
                <div className="form-row">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Ваш email"
                        required
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    rows="5"
                    required
                ></textarea>
                <button type="submit">Отправить сообщение</button>
            </form>
        </div>
    );
};

export default Contacts;