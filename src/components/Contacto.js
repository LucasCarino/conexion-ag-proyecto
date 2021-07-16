import React, {useState} from 'react';
import imgContacto1 from "../assets/img/img-contacto-1.jpg";
import imgContacto2 from "../assets/img/img-contacto-2.jpg";
import Footer from './Footer';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import instagramIcon from "../assets/img/icon_instagram.png"
import facebookIcon from "../assets/img/icon_facebook.png"
import linkedInIcon from "../assets/img/icon_linkedin.png"
import spotifyIcon from "../assets/img/icon_spotify.png"

import ContactModal from "./ContactModal"


export default function Contacto() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <React.Fragment>
             <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader>
                    <h2 className="xbold text-center">
                    Nuestras oficinas
                    </h2>
                </ModalHeader>
                <ModalBody className="modalBody">
                        <ContactModal />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle}>OK</Button>
                </ModalFooter>
            </Modal>
            <div id="portfolio">
                <div className="container">
                        <div className="col-md-6">
                            <hr />
                        </div>
                        <div className="col-md-12">
                            <h2 className="xbold">
                            Nuestras oficinas.
                            <br />
                            Un espacio ideal, nuestro
                            <br />
                            lugar en el mundo.
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
                            <div>
                                <Button onClick={toggle} className="button">→ VER FOTOS</Button>
                            </div>
                            <hr />
                            <a href="https://www.instagram.com/conexionag/" target="_blank" rel="noreferrer">
                                <img src={instagramIcon} alt="Instagram Icon" className="socialIcon mx-1"/>
                            </a>
                            <a href="https://www.facebook.com/ConexionAG" target="_blank" rel="noreferrer">
                                <img src={facebookIcon} alt="Facebook Icon" className="socialIcon mx-1" />
                            </a> 
                            <a href="https://open.spotify.com/playlist/2xme35BDcRXUYAjIpV7xNI/" target="_blank" rel="noreferrer">
                                <img src={spotifyIcon} alt="Spotify Icon" className="socialIcon mx-1"/>
                            </a>
                            <a href="https://www.linkedin.com/company/conexionag/" target="_blank" rel="noreferrer">
                                <img src={linkedInIcon} alt="LinkedIn icon" className="socialIcon mx-1"/>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-5">
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
                            <div>
                                <Button onClick={toggle} className="button">→ VER FOTOS</Button>
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