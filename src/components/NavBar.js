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
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" className={navBar ? 'navbar active' : 'navbar'}>
                    <NavLink className="logo mr-auto ml-2 pl-5" to="/" exact>
                        <img src={image} width="75" className="mb-2 mt-2" alt='imagen' />
                    </NavLink>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav className="pt-1">
                        <NavLink to="/nosotros" className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            nosotros
                        </NavLink>
                        <NavLink to="/trabajos" className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            trabajos
                        </NavLink>
                        <NavLink to="/casos" className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            casos
                        </NavLink>
                        <NavLink to="/ideas" className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            ideas
                        </NavLink> 
                        <NavLink to="/contacto" className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            contacto
                        </NavLink>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
        </React.Fragment>
    )
}

export default NavBarComponent;