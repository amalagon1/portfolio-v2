import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import CloseIcon from '@mui/icons-material/Close';

function Nav() {

    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

    const showMenu = () => {
        setOpen(!open)
    }

    const toggleHandler = () => {
        setToggle(!toggle)
        showMenu()
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
            {/* <div className="backdrop"></div> */}
            <div className='initials'>
                <h1>A.M</h1>
                <h2>Andres Malagon</h2>
            </div>
            <button
                onClick={toggleHandler}
                className={toggle === true ? "fa-solid fa-x" : "fa-sharp fa-solid fa-bars"} />

            {/* <button onClick={showMenu, toggleHandler}><i className={toggle === true ? "fa-solid fa-x" : "fa-sharp fa-solid fa-bars"} ></i></button> */}

            {/* <button className='burger' onClick={showMenu, toggleHandler}>
                <span className='burger-line'></span>
                <span className='burger-line'></span>
                <span className='burger-line'></span>
            </button> */}


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