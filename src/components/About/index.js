import React from 'react';
import example from '../../images/example.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import myFace from '../../images/my-face.PNG';

function About() {
    return (
        <section className='intro'>
            <div className='photo-container'>
                <img src={myFace} />
            </div>
            <div className='intro-text'>
                {/* <h1>Hi, my name is</h1>
                <h1>Andres Malagon</h1> */}
                <h1 className="subtitle">Andres Malagon...</h1>
                <h2>Front-end Web Developer</h2>
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