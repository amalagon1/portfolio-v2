import React from 'react';
import example from '../../images/example.png'

function About() {
    return (
        <section className='intro'>

            <div className='intro-text'>
                <p>Hi, my name is</p>
                <h1>Andres Malagon</h1>
                <h1 className="subtitle">I am a Front-End Web Developer</h1>
            </div>
            {/* <div className='intro-image'>
            </div> */}
            {/* <img src={example} alt="me" className='myImg' /> */}

        </section>
    )
}


export default About;