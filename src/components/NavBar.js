import React, {useState} from 'react';
import image from '../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import '../assets/css/style.css';

function NavBar(){
    const [header, setHeader] = useState(false);

    const changeHeader = () => {
        if(window.scrollY >= 10) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    window.addEventListener('scroll', changeHeader);
    return(
        <React.Fragment>
            <body>
                <header id="header" className={`fixed-top p-3 ${header ? 'header active' : 'header'}`}>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-11 d-flex align-items-center">
                                <NavLink className="logo mr-auto" to="/" exact>
                                    <img src={image} width="80" alt='imagen' />
                                </NavLink>
                                <nav className="nav-menu active d-none d-lg-block">
                                    <NavLink to="/nosotros" className="m-3 text-body font-weight-bold text-uppercase nounderline">
                                        nosotros
                                    </NavLink>
                                    <NavLink to="/trabajos" className="m-3 text-body font-weight-bold text-uppercase nounderline">
                                        trabajos
                                    </NavLink>
                                    <NavLink to="/casos" className="m-3 text-body font-weight-bold text-uppercase nounderline">
                                        casos
                                    </NavLink>
                                    <NavLink to="/ideas" className= "m-3 text-body font-weight-bold text-uppercase nounderline">
                                        ideas
                                    </NavLink>
                                    <NavLink to="/contacto" className="m-3 text-body font-weight-bold text-uppercase nounderline">
                                        contacto
                                    </NavLink>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </body>
        </React.Fragment>
    )
}

export default NavBar;