import React, { useState } from 'react';
import image from '../assets/img/logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../assets/css/style.css';
import * as ReactBootStrap from 'react-bootstrap';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

function NavBarComponent(){
    const [navBar, setNavBar] = useState(false);
    const changeNavBar = () => {
        if(window.scrollY >= 10) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    const [dropdown, setDropdown]=useState(false);

    const [expanded, setExpanded] = useState(false);

    const toggleDropdown=()=>{
        setDropdown(!dropdown);
    }
    window.addEventListener('scroll', changeNavBar);
    return(
        <React.Fragment>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" className={navBar ? 'navbar active' : 'navbar'} expanded={expanded}>
                    <NavLink className="logo mr-auto ml-2" to="/" onClick={() => setExpanded(false)} exact>
                        <img src={image} width="75" className="mb-2 mt-2" alt='imagen' />
                    </NavLink>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav className="pt-1">
                        <NavLink to="/nosotros" 
                        activeClassName="active-section"
                        onClick={() => setExpanded(false)}
                        className="m-3 text-body font-weight-bold text-uppercase nounderline black">
                            <h6 className="navbar-font">nosotros</h6>
                        </NavLink>
                        <NavLink to="/trabajos" 
                        onClick={() => setExpanded(false)}
                        activeClassName="active-section"
                        className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            <h6 className="navbar-font">trabajos</h6>
                        </NavLink>
                        <Dropdown isOpen={dropdown} toggle={toggleDropdown} className="m-3 text-body font-weight-bold text-uppercase nounderline black">
                            <DropdownToggle activeClassName="active-section" className="botonDropdown" caret>
                                CASOS
                            </DropdownToggle>
                            <DropdownMenu className="dropdownMenu">
                                <DropdownItem className="dropdownItem" tag={Link} onClick={() => setExpanded(false)} to="/club-atletico-independiente">→ club atlético independiente</DropdownItem>
                                <DropdownItem className="dropdownItem" tag={Link}  onClick={() => setExpanded(false)} to="/trabajos/real-madrid">→ fundación real madrid méxico</DropdownItem>
                                <DropdownItem className="dropdownItem" disabled>→ club manuel belgrano (soon)</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavLink to="/ideas" 
                        activeClassName="active-section"
                        onClick={() => setExpanded(false)}
                        className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            <h6 className="navbar-font">ideas</h6>
                        </NavLink> 
                        <NavLink to="/contacto" 
                        activeClassName="active-section"
                        onClick={() => setExpanded(false)}
                        className="m-3 text-body font-weight-bold text-uppercase nounderline black navbar-font">
                            <h6 className="navbar-font">contacto</h6>
                        </NavLink>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
        </React.Fragment>
    )
}

export default NavBarComponent;