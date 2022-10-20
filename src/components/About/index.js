import React from 'react';
import example from '../../images/example.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import myFace from '../../images/my-face.PNG';

function About() {

    const scrollDown = () => {
        window.scrollTo({
            top: 850,
            behavior: 'smooth',
        });
    };

    return (
        <section className='intro'>
            <div className='photo-container'>
                {/* <img src={myFace} /> */}
            </div>
            <div className='intro-text'>

                <h1 className="subtitle">Andres Malagon</h1>
                <h2>Front-end Web Developer</h2>

            </div>
            {/* <button class='btn-view'> View Work</button> */}
            <FontAwesomeIcon className="icon-arrow" icon={faChevronDown}
                onClick={scrollDown} />



            {/* <div className='intro-image'>
            </div> */}
            {/* <img src={example} alt="me" className='myImg' /> */}

            <FontAwesomeIcon className="linked" icon={faLinkedin} />


        </section>
    )
}


export default About;