import React from 'react';
import WiloCarousel from './WiloCarousel';
import Footer from '../Footer';
import portfolioWilo1 from '../../assets/img/portfolio-wilo-1.jpg';
import portfolioWilo2 from '../../assets/img/portfolio-wilo-2.jpg';
import portfolioWilo3 from '../../assets/img/portfolio-wilo-3.jpg';
import portfolioWilo4 from '../../assets/img/portfolio-wilo-4.jpg';
import portfolioWilo5 from '../../assets/img/portfolio-wilo-5.jpg';


// import { TrabajosData } from "../../data/TrabajosData";
// import { useParams } from "react-router-dom";


export default function SmilesItem() {
    return(
        <React.Fragment>
            <section id="portfolio">
                <div className="container">


                <hr />
           
                    <div className="row">
                        <WiloCarousel />
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-md-4 padding-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>Wilo</p>
                                            <h4 className="xbold black">Soluciones verdes</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3">
                                            La empresa alemana Wilo confía en AG para la totalidad de su comunicación 
                                            para Argentina y LATAM, desde catálogos y material impreso, a su estrategia 
                                            en redes sociales, pauta online y contenidos.
                                        </p>
                                    </div>
                                </div>
                                <img src={portfolioWilo1} alt="Imagen principal" className="img-fluid-2" />
                                <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <p className="ml-3 pt-5">
                                        Ejecuciones creativas para las redes sociales de Wilo, además de piezas 
                                        impresas como avisos, catálogos y listas de precios, entre otras comunicaciones 
                                        institucionales. Apoyo visual en stands, puntos de venta y flota de vehículos.
                                    </p>
                                </div>
                                <div className="md-3">
                                    <img src={portfolioWilo2} className="m-3 img-fluid-2" alt="Porfolio Wilo 2" />    
                                </div>

                                <img src={portfolioWilo3} className="m-3 img-fluid-2" alt="Porfolio Wilo 3" />
                                <p className="small ml-3"> 
                                    Folleto Water Management & Industry 2019
                                </p>
                                <img src={portfolioWilo4} className="m-3 img-fluid-2" alt="Porfolio Wilo 4" />
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                Un servicio integral para un líder en tecnología de bombas 
                                                de agua. Desde Argentina, AG ayuda a definir y a posicionar la 
                                                visión global de Wilo 'Pioneering for You' para el cono sur.
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                                <img src={portfolioWilo5} className="m-3 img-fluid-2" alt="Porfolio Wilo 5" />
                                <p className="small ml-3"> 
                                    Presentación de productos Wilo en redes sociales
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <Footer />
        </React.Fragment>
    )
}
