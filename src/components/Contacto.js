import React, {useState} from 'react';
import imgContacto1 from "../assets/img/img-contacto-1.jpg";
import imgContacto2 from "../assets/img/img-contacto-2.jpg";
import Footer from './Footer';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import ContactModal1 from "./ContactModal1"
import ContactModal2 from "./ContactModal2"


export default function Contacto() {
    const [modal1, setModal1] = useState(false);
    const toggle1 = () => setModal1(!modal1);

    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);
    return(
        <React.Fragment>
             <Modal isOpen={modal1} toggle={toggle1} >
                <ModalHeader>
                </ModalHeader>
                
                <ModalBody className="modalBody">
                        <ContactModal1 />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle1} className="button">→ CERRAR</Button>
                </ModalFooter>
            </Modal>

             <Modal isOpen={modal2} toggle={toggle2} >
                <ModalHeader>
                </ModalHeader>
                
                <ModalBody className="modalBody">
                        <ContactModal2 />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle2} className="button">→ CERRAR</Button>
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
                                <img src={imgContacto1} alt="imagen contacto" onClick={toggle1} className="nosotros-img cursor-pointer" />
                            </div>
                            <div className="col-md-6">
                                <img src={imgContacto2} alt="imagen contacto" onClick={toggle2} className="nosotros-img mt-4 pt-2 cursor-pointer" />
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
                                <Button onClick={toggle1} className="button">→ VER FOTOS</Button>
                            </div>
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
                                <Button onClick={toggle2} className="button">→ VER FOTOS</Button>
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