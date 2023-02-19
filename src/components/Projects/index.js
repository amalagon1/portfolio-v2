import React from "react";

import project1 from '../../images/project-1.jpg'
import project2 from '../../images/weather-app-img.png'
import project3 from '../../images/project-3.jpg'
import project4 from '../../images/project-4.jpg'
import project5 from '../../images/trivia-game.png'
import project6 from '../../images/todo-app.png'
import project7 from '../../images/piano.png'


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
            title: "Weather Dashboard",
            image: project2,
            description: "Weather application made with vanilla javascript, utilizes the openweathermap API.",
            github: "https://github.com/amalagon1/weather-dashboard",
            deployment: "https://amalagon1.github.io/weather-dashboard/"
        },

        // {
        //     title: "README generator",
        //     image: project4,
        //     description: "Node.Js application that runs off-browser und utilizes Inquirer to create professional-grade Readme's.",
        //     github: "https://github.com/amalagon1/readme-generator",
        //     deployment: "https://github.com/amalagon1/readme-generator"
        // },
        {
            // title: "WWII Trivia Game",
            image: project5,
            description: "Trivia game made with vanilla javascript",
            github: "https://github.com/amalagon1/trivia-quiz",
            deployment: "https://amalagon1.github.io/trivia-quiz/"
        },
        {
            // title: "Todo App (Glass Theme)",
            description: "Todo app with layout inspired by glassmorphism",
            image: project6,
            github: "https://github.com/amalagon1/todo-app-glass-theme",
            deployment: "https://glass-todo.netlify.app/"
        },
        {
            title: "The Javascript Piano Experience",
            image: project7,
            description: "Virtual piano keyboard made with javascript and css",
            github: "https://github.com/amalagon1/keyboard-app",
            deployment: "https://amalagon1.github.io/keyboard-app/"
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