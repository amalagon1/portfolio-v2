import React from 'react';
import './experience.css';
import me from '../../images/me.JPG';
import ReactDom from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faCss3, faHtml5, faGithub, faBootstrap } from '@fortawesome/fontawesome-free-brands';
import 'font-awesome/css/font-awesome.min.css';




function Experience() {
    return (
        <section className='experience'>
            <div className='experience-items'>
                {/* <div className="img-container">
                    <img src={me}></img>
                </div> */}
                <div className='summary'>
                    <p>My interest in web development led me to enroll in the University of Miami Coding Bootcamp in the fall of 2021, and since then I have been honing my skills and working to expand my knowledge on a daily basis. Here are some of the technologies and frameworks I am comfortable working with: </p>
                </div>
                <div className="icons">
                    <FontAwesomeIcon className="icon" icon={faReact} />
                    <FontAwesomeIcon className="icon" icon={faJs} />
                    <FontAwesomeIcon className="icon" icon={faCss3} />
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </div>
            </div>
        </section>


    )


}






export default Experience;