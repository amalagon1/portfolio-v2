import React from "react";

import project1 from '../../images/project-1.jpg'
import project2 from '../../images/weather-app-img.png'
import project3 from '../../images/project-3.jpg'
import project4 from '../../images/project-4.jpg'
import project5 from '../../images/trivia-game.png'
import project6 from '../../images/todo-app.png'


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

        {
            title: "Best-seller book list",
            image: project3,
            description: "This app displays a list of NY Times best-selling books, utilizing vanilla javascript and the NYT API.",
            github: "https://github.com/MarcosManresa/08-Interactive-Project",
            deployment: "https://marcosmanresa.github.io/08-Interactive-Project/"
        },

        {
            title: "README generator",
            image: project4,
            description: "Node.Js application that runs off-browser und utilizes Inquirer to create professional-grade Readme's.",
            github: "https://github.com/amalagon1/readme-generator",
            deployment: "https://github.com/amalagon1/readme-generator"
        },
        {
            title: "WWII Trivia Game",
            image: project5,
            description: "Trivia game made with vanilla javascript",
            github: "https://github.com/amalagon1/trivia-quiz",
            deployment: "https://amalagon1.github.io/trivia-quiz/"
        },
        {
            title: "Todo App (Glass Theme)",
            description: "Todo app with layout inspired by glassmorphism",
            image: project6,
            github: "https://github.com/amalagon1/todo-app-glass-theme"
        }
    ]
    //added projects-grid div//
    return (
        <section id="work" className='projects'>
            <h1> Check out my projects </h1>
            <div className='projects-grid'>
                {ProjectItems.map((item) =>
                    <div className='card'>
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

                            <a className="project-link" target="_blank" rel="noopener noreferrer" href={item.deployment}>
                                Deployment
                            </a>



                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Projects