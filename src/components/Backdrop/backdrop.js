import React from 'react'

const backdrop = ({ backdrop, setbackdrop, open, setOpen, toggle, setToggle }) => {

    const backdropHandler = () => {
        setbackdrop(!backdrop)
        setOpen(!open)
        setToggle(!toggle)
    }

    return (
        <div className={open ? 'backdrop' : 'backdrop-hide'}
            onClick={backdropHandler}>

        </div>
    )
}

export default backdrop
