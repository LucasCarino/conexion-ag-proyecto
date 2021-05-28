import React from 'react';
import imgContacto1 from "../assets/img/img-contacto-1.jpg";
import imgContacto2 from "../assets/img/img-contacto-2.jpg";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

export default function Contacto() {
    return(
        <React.Fragment>
            <div id="portfolio">
                <div className="container">
                        <div className="col-md-6">
                            <hr />
                        </div>
                        <div className="col-md-12">
                            <h2 className="xbold">
                            Nuestras oficinas.
                            <br />
                            Un especio ideal, nuestro
                            <br />
                            lugar en el mundo
                            </h2>
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <hr />
                                <img src={imgContacto1} alt="imagen contacto" className="nosotros-img" />
                            </div>
                            <div className="col-md-6">
                                <img src={imgContacto2} alt="imagen contacto" className="nosotros-img mt-4 pt-2" />
                            </div>
                        </div>
                    <br />
                    <div className="row portfolio-container">
                        <div className="col-md-6">
                            <div className="mb-5">
                                <h4 className="black h5">
                                    Vuelta de Obligado 2273
                                    <br />
                                    CPA 1428 CABA
                                    <br />
                                    <a href="tel:+5491141739703" className="black link-hover">+54 9 11 4173 9703</a>
                                    <br />
                                    <a href="mailto:info@conexionag.com.ar" className="black link-hover">info@conexionag.com.ar</a>
                                </h4>
                            </div>
                            <hr />
                            <a href="https://www.facebook.com/ConexionAG" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="h3 mx-3 black link-hover"/>
                            </a>
                            <a href="https://www.instagram.com/conexionag/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="h3 mx-3 black link-hover"/>
                            </a>
                            <a href="https://www.linkedin.com/company/conexionag/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} className="h3 mx-3 black link-hover"/>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h4 className="black h5">
                                    Cabildo 2040 Piso 3
                                    <br />
                                    CPA 1428 CABA
                                    <br />
                                    <a href="tel:+5491141739703" className="black link-hover">+54 9 11 4173 9703</a>
                                    <br />
                                    <a href="mailto:info@conexionag.com.ar" className="black link-hover">info@conexionag.com.ar</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </React.Fragment>
    )
}