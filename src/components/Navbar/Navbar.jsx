import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import nav_logo from "../../assets/menu-icon.png"
const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    const [isOpen, seIsOpen] = useState(false);
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className='logo' />
            <ul className={`${isOpen ? "" : "toggle-menu "}`}>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button> </li>
            </ul>
            <img onClick={() => seIsOpen(prev => !prev)} className='menu_icon' src={nav_logo} alt="nav_logo" />
        </nav >
    )
}

export default Navbar