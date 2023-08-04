import React from "react";

import project1 from '../../images/project-1.jpg'
import project2 from '../../images/weather-app-img.png'
import project3 from '../../images/project-3.jpg'
import project4 from '../../images/project-4.jpg'
import project5 from '../../images/trivia-game.png'
import project6 from '../../images/todo-app.png'
import project7 from '../../images/piano.png'
import project8 from '../../images/weather.png'
import project9 from '../../images/myflix-main.png'


function Projects() {
    //array with project data//
    const ProjectItems = [
        // {
        //     title: "Password Generator",
        //     image: project1,
        //     github: "https://github.com/amalagon1/password-generator",
        //     deployment: "https://amalagon1.github.io/password-generator/"
        // },
        {
            // title: "WWII Trivia Game",
            image: project9,
            description: "Netflix clone app made with React, SCSS, and Firebase",
            github: "https://github.com/amalagon1/myflix",
            deployment: "https://myflix-a04d0.web.app/"
        },


        {
            title: "Weather Dashboard",
            image: project8,
            description: "Weather application built with React.JS, utilizes the openweathermap API and Google Places API.",
            github: "https://github.com/amalagon1/react-weather-dashboard",
            deployment: "https://weathernow123.netlify.app/"
        },

        {
            // title: "Todo App (Glass Theme)",
            description: "Todo app built with React and Css.",
            image: project6,
            github: "https://github.com/amalagon1/todo-app-glass-theme",
            deployment: "https://glass-todo.netlify.app/"
        },
        // {
        //     title: "The Javascript Piano Experience",
        //     image: project7,
        //     description: "Virtual piano keyboard made with javascript and css",
        //     github: "https://github.com/amalagon1/keyboard-app",
        //     deployment: "https://amalagon1.github.io/keyboard-app/"
        // },
        {
            // title: "WWII Trivia Game",
            image: project5,
            description: "Trivia game made with vanilla javascript",
            github: "https://github.com/amalagon1/trivia-quiz",
            deployment: "https://amalagon1.github.io/trivia-quiz/"
        },
    ]
    //added projects-grid div//
    return (
        <section id="work" className='projects'>
            <div className="title-container">
                <h1> Projects </h1>
            </div>
            <div className='projects-grid'>
                {ProjectItems.map((item) =>
                    <div className='card'>
                        <div className='title'>
                            <h2>{item.title}</h2>
                        </div>
                        <img src={item.image}></img>
                        {/* <div className="middle">
                            <div className='title'><h2>{item.title}</h2></div>
                            <div className='btn'>
                                <a href={item.github}>Github</a>
                            </div>
                            <div className='btn'>
                                <a href={item.deployment}>Deployment</a>
                            </div>
                        </div> */}
                        <div className="slider">
                            <p>{item.description}</p>
                            <div className="links">
                                <a className="project-link" target="_blank" rel="noopener noreferrer" href={item.deployment}>
                                    Deployment
                                </a>
                                <a className="project-link" target="_blank" rel="noopener noreferrer" href={item.github}>Github</a>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Projects