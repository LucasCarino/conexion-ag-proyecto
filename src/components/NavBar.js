import React, { useState } from 'react';
import image from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import '../assets/css/style.css';
import * as ReactBootStrap from 'react-bootstrap'

function NavBarComponent(){
    const [navBar, setNavBar] = useState(false);
    const changeNavBar = () => {
        if(window.scrollY >= 10) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeNavBar);
    return(

        <React.Fragment>
            <body>
                            <ReactBootStrap.Navbar collapseOnSelect expand="lg" className={navBar ? 'navbar active' : 'navbar'}>
                                <NavLink className="logo mr-auto" to="/" exact>
                                    <img src={image} width="80" alt='imagen' />
                                </NavLink>
                            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                                <ReactBootStrap.Nav className="mr-auto">
                                </ReactBootStrap.Nav>
                                <ReactBootStrap.Nav>
                                    <NavLink to="/nosotros" className="m-3 text-body font-weight-bold text-uppercase nounderline black">
                                        nosotros
                                    </NavLink>
                                    <NavLink to="/trabajos" className="m-3 text-body font-weight-bold text-uppercase nounderline black">
                                        trabajos
                                    </NavLink>
                                    <NavLink to="/casos" className="m-3 text-body font-weight-bold text-uppercase nounderline black">
                                        casos
                                    </NavLink>
                                    <NavLink to="/ideas" className="m-3 text-body font-weight-bold text-uppercase nounderline black">
                                        ideas
                                    </NavLink>
                                    <NavLink to="/contacto" className="m-3 text-body font-weight-bold text-uppercase nounderline black">
                                        contacto
                                    </NavLink>
                                </ReactBootStrap.Nav>
                            </ReactBootStrap.Navbar.Collapse>
                            </ReactBootStrap.Navbar>
            </body>
        </React.Fragment>
    )
}

export default NavBarComponent;