import React from 'react';
import './contact.css'

function Contact() {
    return (
        <section className='contact'>
            <h1>Contact me!</h1>
            <div className='contact-form'>
                <div className='form-items'>
                    <label for="name">Name</label>
                    <input type="text" id="first-name"></input>
                    <label for="email">E-Mail</label>
                    <input type="email" id="email"></input>
                    <div className="message-container">
                        <label for="message">Message</label>
                        <input type="text" id="message"></input>
                    </div>
                    <button type="submit" class="button">Submit</button>
                </div>

            </div>

        </section>
    )
}


export default Contact;
