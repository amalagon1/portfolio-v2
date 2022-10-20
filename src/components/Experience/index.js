import React from 'react';
import './experience.css';
import me from '../../images/me.JPG';
import ReactDom from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faCss3, faHtml5, faGithub, } from '@fortawesome/fontawesome-free-brands';
import 'font-awesome/css/font-awesome.min.css';




function Experience() {
    return (
        <section className='experience'>
            <div className='experience-items'>
                {/* <div className="img-container">
                    <img src={me}></img>
                </div> */}
                <div className='summary'>
                    <p>I am passionate about creating beautiful and dynamic UI. My experience at the University of Miami coding bootcamp exposed me to a wide variety of technologies and began my passion for programming. I want to build something for you!  </p>
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