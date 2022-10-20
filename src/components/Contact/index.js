import React, { useRef } from 'react';
import './contact.css'
import emailjs from 'emailjs-com';

// import { faJs } from '@fortawesome/fontawesome-free-brands';


// function Contact() {

//     const form = useRef
//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_bwnthdo', 'template_dlsr9fy', form.current, 'mtdwzfDkEsaYJ8qJS')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };


//     return (
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//         </form>
//     );

// };

function Contact() {
    return (
        <section className='contact'>
            <h1>Contact me!</h1>
            <div className='contact-form'>
                <div className='form-items'>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="your name here"></input>
                    <label for="email">E-Mail</label>
                    <input type="email" id="email" name="email" placeholder='your email here'></input>
                    <label for="subject">Subject</label>
                    <input type="subject" id="subject" name="email" placeholder='your email here'></input>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your message here"></textarea>
                    <button type="submit" className="button">Submit</button>
                </div>
            </div>
            {/* <div className="mobile-contact">
                <h1>Contact me</h1>
                <label></label>
            </div> */}
        </section>
    )

}



export default Contact;


