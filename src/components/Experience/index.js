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
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import 'font-awesome/css/font-awesome.min.css';





function Experience() {
    return (
        <section className='experience' id='about'>
            <div className='experience-items'>
                <div className="experience-title">
                    <h1>About Me</h1>
                </div>

                <div className='experience__content'>

                    {/* <div className="left">
                        <div className='summary'>
                            <p>Front-end developer with a passion for creating dynamic and beautiful user experiences.   </p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="icons">
                            <h2>My technologies :</h2>
                            <FontAwesomeIcon className="icon" icon={faReact} />
                            <FontAwesomeIcon className="icon" icon={faJs} />
                            <FontAwesomeIcon className="icon" icon={faCss3} />
                            <FontAwesomeIcon className="icon" icon={faHtml5} />
                            <FontAwesomeIcon className="icon" icon={faGithub} />
                        </div>
                    </div> */}

                    <div className='summary'>

                        <p>Front-end developer based in NYC, passionate about creating dynamic and beautiful user experiences with Javascript, CSS, HTML, and React. Continually looking to expand my knowledge and help bring great ideas to life.   </p>
                    </div>
                    <div className='line'></div>
                    <div className="icons">
                        <h2>My technologies :</h2>
                        <FontAwesomeIcon className="icon" icon={faReact} />
                        <TbBrandNextjs className="icon" />
                        <FontAwesomeIcon className="icon" icon={faJs} />
                        <FontAwesomeIcon className="icon" icon={faCss3} />
                        <FontAwesomeIcon className="icon" icon={faHtml5} />
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                        <SiTailwindcss className="icon" />
                        <FaSass className="icon" />
                    </div>
                </div>

            </div>
        </section>


    )


}






export default Experience;