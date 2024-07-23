import React, { useState } from 'react'
import './Header.css'
const Header = () => {
    const [toggle , setToggle] = useState(false)
    const [active,setActive] = useState(0);
    const chngActive =(query) =>{
            setActive(query);
    }
    return (
        <div className="header">
            <nav className="nav container">
                <a href="index.html" className='nav__logo'>Nikilhari</a>
                <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className={active ==0 ?"nav__link active-link":"nav__link"} onClick={chngActive(0)}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={active ==1 ?"nav__link active-link":"nav__link"} onClick={chngActive(1)}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={active ==2 ?"nav__link active-link":"nav__link"} onClick={chngActive(2)}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className={active ==3 ?"nav__link active-link":"nav__link"} onClick={chngActive(3)}>
                                <i className="uil uil-briefcase nav__icon">
                                </i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className={active ==4 ?"nav__link active-link":"nav__link"} onClick={chngActive(4)}>
                                <i className="uil uil-scenery nav__icon">
                                </i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#certifications" className={active ==5 ?"nav__link active-link":"nav__link"} onClick={chngActive(5)}>
                                <i className="uil uil-scenery nav__icon">

                                </i> Certifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={active ==6 ?"nav__link active-link":"nav__link"} onClick={chngActive(6)}>
                                <i className="uil uil-message nav__icon">
                                </i>Contact
                            </a>
                        </li>

                    </ul>
                    <i className="uil uil-times nav__close" onClick={( )=>{
                        setToggle(!toggle)
                    }}></i>
                </div>
                <div className="nav__toggle">
                    <i className="uil uil-apps" onClick={()=>{
                        setToggle(!toggle)
                    }}></i>
                </div>
            </nav>
        </div>
    )
}

export default Header