import React from 'react';
import SMC360Carousel from './SMC360Carousel';
import Footer from '../Footer';
import portfolioSMC3601 from '../../assets/img/portfolio-smc360-1.jpg';
import portfolioSMC3602 from '../../assets/img/portfolio-smc360-2.jpg';
import portfolioSMC3603 from '../../assets/img/portfolio-smc360-3.jpg';
import portfolioSMC3604 from '../../assets/img/portfolio-smc360-4.jpg';
import portfolioSMC3605 from '../../assets/img/portfolio-smc360-5.jpg';
import portfolioSMC3606 from '../../assets/img/portfolio-smc360-6.jpg';



// import { TrabajosData } from "../../data/TrabajosData";
// import { useParams } from "react-router-dom";


export default function SmilesItem() {
    return(
        <React.Fragment>
            <section id="portfolio">
                <div className="container">
                <div className="col-md-6">
                     <hr />
                </div>
                    <div className="row">
                        <div className="col-md-12">
                            <SMC360Carousel />
                        </div>
                        <div className="container col-md-11">
                            <div className="row mt-3">
                                <div className="col-md-4 p-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 p-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>SMC360</p>
                                            <h4 className="xbold black">Marcas y contenidos</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3">
                                        Diseñamos y gestionamos la identidad de marca, la comunicación y el ecosistema 
                                        de redes sociales desde SMC360. Nuestro aporte en ideas, diseño, 
                                        contenidos para una agencia siempre innovadora.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={portfolioSMC3601} alt="Imagen principal" className="img-fluid-2" />
                                    <img src={portfolioSMC3602} className="img-fluid-2" alt="Porfolio SMC360" />    
                                </div>
                                <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <p className="ml-3 pt-5">
                                    En AG creamos contenidos propios para las distintas necesidades de la agencia, activando visión 
                                    y estrategia de marca y aportando valor de mercado. En la filosofía de SMC360, más y mejores 
                                    historias orientadas a nuevas audiencias.
                                    </p>
                                </div>
                                <div>
                                    <img src={portfolioSMC3603} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio SMC360" />
                                    <img src={portfolioSMC3604} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio SMC360" />
                                </div>
                                <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <p className="small ml-3"> 
                                        Según Guillermo Roma, Director de Cuentas de SMC360, “el sponsorship es una 
                                        unidad de negocios clave. Desde el inicio trazamos como objetivo integrar 
                                        marcas y eventos generando conversación. Como resultado, la visibilidad se 
                                        potencia y acerca los atributos de marca al usuario."
                                    </p>
                                </div>
                                <div>
                                    <img src={portfolioSMC3605} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio SMC360" />
                                    <img src={portfolioSMC3606} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio SMC360" />
                                </div>
                                {/* <p className="small ml-3"> 
                                    Contenidos diario para redes sociales
                                </p> */}
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                Centrados en la comunicación de marcas, AG ayuda 
                                                a SMC360 a orientar sus acciones de sponsorship y 
                                                contenidos a una audiencia cada vez más especializada.
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <Footer />
        </React.Fragment>
    )
}
