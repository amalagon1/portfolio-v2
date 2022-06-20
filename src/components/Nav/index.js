import React from 'react';
import { Link } from "react-router-dom";

function Nav() {

    const MenuItems = [
        {
            title: 'About me',
            url: '/About',
            class: 'nav-links'
        },

        {
            title: 'Projects',
            url: '/Projects',
            class: 'nav-links'
        },
        {
            title: 'Contact Me',
            url: '/Contact',
            class: 'nav-links'
        }
    ]
    return (
        <header className='main-header'>
            <div className='initials'>
                <h1>A.M</h1>
            </div>
            {/* <div className="name"> Andres Malagon</div> */}
            <div className='burger'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>

            <nav className='main-nav'>
                <ul className='main-nav__items'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className='main-nav__item'>
                                {item.title}
                                {/* <a className={item.class} href={item.url}>
                                    {item.title}
                                </a> */}

                            </li>
                        )

                    })}

                </ul>

            </nav>
            <nav className='mobile-nav'>
                <ul className='mobile-nav__items'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className='mobile-nav__item'>
                                <a className={item.class}
                                    href={item.url}>
                                    {item.title}</a>
                            </li>

                        )

                    })}
                </ul>
            </nav>
        </header>

    )
}


export default Nav;