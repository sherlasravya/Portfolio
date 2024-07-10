import React from "react";
import './navbar.css';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeclass="active" to="Intro" spy={true} offset={-50} smooth={true} duration={500} className="desktopMenuListItem" >Home</Link>
                <Link activeclass="active" to="skills" spy={true} offset={-50} smooth={true} duration={500} className="desktopMenuListItem" >About</Link>
                <Link activeclass="active" to="works" spy={true} offset={-50} smooth={true} duration={500} className="desktopMenuListItem" >Projects</Link>
                <Link activeclass="active" to="experience" spy={true} offset={-50} smooth={true} duration={500} className="desktopMenuListItem" >Experience</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    );
}

export default Navbar;
