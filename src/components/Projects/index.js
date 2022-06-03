import React from "react";

import project1 from '../../images/project-1.jpg'
import project2 from '../../images/project-2.jpg'
import project3 from '../../images/project-3.jpg'
import project4 from '../../images/project-4.jpg'


function Projects() {
    //array with project data//
    const ProjectItems = [
        {
            title: "Password Generator",
            image: project1,
            github: "https://github.com/amalagon1/password-generator",
            deployment: "https://amalagon1.github.io/password-generator/"
        },

        {
            title: "Weather Dashboard",
            image: project2,
            github: "https://github.com/amalagon1/weather-dashboard"
            // deployment:
        },

        {
            title: "Best-seller book list",
            image: project3,
            github: "https://github.com/MarcosManresa/08-Interactive-Project",
            deployment: "https://marcosmanresa.github.io/08-Interactive-Project/"
        },

        {
            title: "README generator",
            image: project4,
            github: "https://github.com/amalagon1/readme-generator"
            // deployment:
        }
    ]

    return (
        <section className='projects'>
            <h1> Here are some of my amazing projects! </h1>
            {ProjectItems.map((item) =>
                <div className='card'>
                    <img src={item.image}></img>
                    <div className="middle">
                        <div className='title'><p>{item.title}</p></div>
                        <div className='btn'>
                            <a href={item.github}>Github</a>
                        </div>
                        <div className='btn'>
                            <a href={item.github}>Deployment</a>
                        </div>
                    </div>

                </div>
            )}



        </section>
    )
}

export default Projects