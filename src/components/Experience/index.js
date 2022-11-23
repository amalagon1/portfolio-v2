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
        <section className='experience' id='about'>
            <div className='experience-items'>
                {/* <div className="img-container">
                    <img src={me}></img>
                </div> */}
                <div className='experience__content'>
                    <div className='summary'>
                        <p>Recent graduate of a full-stack bootcamp where I was introduced  to a wide variety of technologies and began my love for web development. My background as a jazz musician has made me adept at improvisation and finding creative solutions to problems.   </p>
                    </div>
                    <div className='line'></div>
                    <div className="icons">
                        <h2>Technologies I enjoy :</h2>
                        <FontAwesomeIcon className="icon" icon={faReact} />
                        <FontAwesomeIcon className="icon" icon={faJs} />
                        <FontAwesomeIcon className="icon" icon={faCss3} />
                        <FontAwesomeIcon className="icon" icon={faHtml5} />
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </div>
                </div>

            </div>
        </section>


    )


}






export default Experience;