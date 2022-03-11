import React from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from '../assets/img/logo-footer.png';

import instagramIcon from "../assets/img/icon_instagram.png"
import facebookIcon from "../assets/img/icon_facebook.png"
import linkedInIcon from "../assets/img/icon_linkedin.png"
import spotifyIcon from "../assets/img/icon_spotify.png"

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row bg-dark p-5">
                    <div className="col-md-6">
                        <hr className="footer-hr mx-4" />
                        <div className="d-flex justify-content-between mx-4 pb-4">
                            <h4 className="text-white font-weight-bold">¡Sigamos en contacto!</h4>
                            <h4 className="text-white mr-3">→</h4>
                        </div>
                        <hr className="footer-hr mx-4" />
                        <div>
                        </div>
                        <div className="d-flex mx-4">
                            <div className="w-25 mr-5">
                                <img src={LogoFooter} alt="logo del footer" className="w-75 pt-3" />
                            </div>
                            <div className="ml-5 pl-3">
                                <p className="text-white mr-3">
                                    <Link to='/nosotros'>
                                        <u className='footer-link position-absolute'>→ Nosotros</u>
                                    </Link>
                                    <br />
                                    <Link to='/trabajos'>
                                        <u className='footer-link position-absolute'>→ Trabajos</u>
                                    </Link>
                                    <br />
                                    <Link to='/ideas'>
                                        <u className='footer-link position-absolute'>→ Ideas</u>
                                    </Link>
                                    <br />
                                    <Link to='/club-atletico-independiente'>
                                        <u className='footer-link position-absolute'>→ Casos</u>
                                    </Link>
                                    <br />
                                    <Link to='/contacto'>
                                        <u className='footer-link position-absolute'>→ Contacto</u>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <hr className="footer-hr mx-4" />
                        <div className="mx-4">
                            <p className="text-secondary">AG © Copyright 2021. Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <hr className="footer-hr mx-4" />
                        <div className="d-flex justify-content-between mx-4 pb-4">
                            <p className="text-white position-relative pos-4">info@conexionag.com.ar</p>
                        </div>
                        <hr className="footer-hr mx-4" />
                        <div>
                        </div>
                        <div className="mx-4">
                            <h6 className="text-white font-weight-bold">Nuestras redes, siempre actualizadas</h6>
                            <div className="h-94">
                                <a href="https://www.instagram.com/conexionag/" target="_blank" rel="noreferrer">
                                    <img src={instagramIcon} alt="Instagram Icon" className="socialIcon mx-1" />
                                </a>
                                <a href="https://www.facebook.com/ConexionAG" target="_blank" rel="noreferrer">
                                    <img src={facebookIcon} alt="Facebook Icon" className="socialIcon mx-1" />
                                </a>
                                <a href="https://open.spotify.com/playlist/74P5hzf1OIR0npXHfXg730" target="_blank" rel="noreferrer">
                                    <img src={spotifyIcon} alt="Spotify Icon" className="socialIcon mx-1" />
                                </a>
                                <a href="https://www.linkedin.com/company/conexionag/" target="_blank" rel="noreferrer">
                                    <img src={linkedInIcon} alt="LinkedIn icon" className="socialIcon mx-1" />
                                </a>
                            </div>
                        </div>
                        <hr className="footer-hr mx-4" />
                        <div className="mx-4">
                            <h5 className="text-white h6">#Branding&nbsp;&nbsp;&nbsp;#Diseño&nbsp;&nbsp;&nbsp;#Contenidos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;