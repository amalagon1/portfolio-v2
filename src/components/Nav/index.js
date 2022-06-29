import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {

    const [open, setOpen] = useState(false);

    const showMenu = () => {
        setOpen(!open)
    }

    const MenuItems = [
        {
            title: 'About me',
            url: '/About',
            class: 'nav-links'
        },

        {
            title: 'View Work',
            url: '/Projects',
            class: 'work-btn'
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
            <button className='burger' onClick={showMenu}>
                <span className='burger-line'></span>
                <span className='burger-line'></span>
                <span className='burger-line'></span>
            </button>

            <nav className='main-nav'>
                <ul className='main-nav__items'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className='main-nav__item'>
                                <a className={item.class} href={item.url}>
                                    {item.title}
                                </a>

                            </li>
                        )

                    })}

                </ul>

            </nav>
            <nav className={open ? "mobile-show" : "mobile-nav"}>
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