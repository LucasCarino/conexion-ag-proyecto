import React from "react";
import MidiosCarousel from "./MidiosCarousel";
import Footer from "../Footer";

import portfolioMidios1 from "../../assets/img/portfolio-midios-1.png";
import portfolioMidios2 from "../../assets/img/portfolio-midios-2.jpg";
import portfolioMidios3 from "../../assets/img/portfolio-midios-3.png";
import portfolioMidios4 from "../../assets/img/portfolio-midios-4.png";
import portfolioMidios5 from "../../assets/img/portfolio-midios-5.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Casos() {
    return (
        <React.Fragment>
            <MidiosCarousel />
            <div className="row mt-3 justify-content-center">
                <div className="col-md-5 p-0 margin-top-90 d-none d-sm-block"></div>
                <div className="col-md-7 pl-4">
                    <div>
                        <div className="portfolio-info">
                            <p className="text-uppercase">MIDIOS</p>
                            <h2 className="position-relative h1 xbold">
                                Planificación y estrategia
                            </h2>
                            <br />
                        </div>
                    </div>
                    <h6 className="custom-lh pb-5">
                        En AG ayudamos a la agencia Midios de Argentina
                        <br />
                        y México en sus distintas campañas gráficas, identidad
                        <br />
                        de marca, comunicación y ecosistema de redes sociales,
                        <br />
                        aportando ideas, contenidos y recursos.
                    </h6>
                </div>
                <div>
                    <img
                        src={portfolioMidios1}
                        alt="Imagen principal"
                        className="nosotros-img pb-5"
                    />
                    <img
                        src={portfolioMidios2}
                        alt="foto midios"
                        className="nosotros-img"
                    />
                </div>
                <div className="row">
                    <div className="d-flex align-items-center my-5">
                        <div className="col-md-6 padding-0 margin-top-90 d-none d-sm-block">
                            <img
                                src={portfolioMidios4}
                                alt="Imagen principal"
                                className="img-fluid-2 w-100"
                            />
                        </div>
                        <div className="col-md-6">
                            <h4 className="pl-3 black xbold mt-4 pt-3">
                                Lo que hacemos para Midios
                            </h4>
                            <h6 className="pl-3 black custom-lh">
                                → Comunicación interna.
                                <br />
                                → Activaciones para redes sociales.
                                <br />
                                → Diseño de avisos para medios.
                                <br />
                                → Copywriting de campañas publicitarias.
                                <br />
                                → Definición, dirección y desarrollo de
                                conceptos.
                                <br />
                                → Otros servicios creativos.
                                <br />
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5 justify-content-center">
                    <div className="col-md-12 p-0">
                        <img src={portfolioMidios3} className="w-100 mb-5" alt="midios4" />
                        <img src={portfolioMidios5} className="w-100 mb-5" alt="midios5" />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
