import React from 'react';
import example from '../../images/example.png'

function About() {
    return (
        <section className='intro'>

            <div className='intro-text'>
                <h1>Hi, my name is</h1>
                <h1>Andres Malagon</h1>
                <h1 className="subtitle">I am a Front-End Web Developer</h1>
                <button> View Work</button>
            </div>

            {/* <div className='intro-image'>
            </div> */}
            {/* <img src={example} alt="me" className='myImg' /> */}


        </section>
    )
}


export default About;