import React from 'react';
import example from '../../images/example.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';

function About() {
    return (
        <section className='intro'>

            <div className='intro-text'>
                {/* <h1>Hi, my name is</h1>
                <h1>Andres Malagon</h1> */}
                <h1 className="subtitle">Front-End Web Developer with a passion for creating beautiful and user friendly applications</h1>
                <button> View Work</button>
            </div>

            {/* <div className='intro-image'>
            </div> */}
            {/* <img src={example} alt="me" className='myImg' /> */}

            <FontAwesomeIcon className="linked" icon={faLinkedin} />


        </section>
    )
}


export default About;