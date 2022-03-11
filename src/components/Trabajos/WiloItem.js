import React from 'react';
import WiloCarousel from './WiloCarousel';
import Footer from '../Footer';
import portfolioWilo2 from '../../assets/img/portfolio-wilo-2.jpg';
import portfolioWilo3 from '../../assets/img/portfolio-wilo-3.jpg';
import portfolioWilo4 from '../../assets/img/portfolio-wilo-4.jpg';
import portfolioWilo5 from '../../assets/img/portfolio-wilo-5.jpg';
import portfolioWilo6 from '../../assets/img/portfolio-wilo-6.jpg';


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
                            <WiloCarousel />
                        </div>
                        <div className="container col-md-11">
                            <div className="row mt-3">
                                <div className="col-md-4 padding-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p className="text-uppercase">wilo</p>
                                            <h4 className="xbold black">Soluciones verdes</h4>
                                        </div>
                                    <br />
                                    <p className="pl-3">
                                        La empresa alemana Wilo confía en AG para la totalidad 
                                        de su comunicación para Argentina y LATAM, desde catálogos 
                                        y material impreso, a su estrategia en redes sociales, pauta online 
                                        y contenidos. Un servicio integral para un líder en tecnología de 
                                        bombas de agua. Desde Argentina, AG ayuda a definir y a posicionar 
                                        la visión global de Wilo “Pioneering for You” para el cono sur.
                                    </p>
                                    <h4 className="pl-3 black xbold mt-4 pt-3">Lo que hacemos para Wilo</h4>
                                    <p className="pl-3 black">
                                        → Definición, dirección y desarrollo de conceptos. <br/>
                                        → Ejecuciones creativas para redes sociales. <br/>
                                        → Piezas impresas. <br/>
                                        → Comunicaciones institucionales. <br/>
                                        → Apoyo visual y señalética para stands y puntos de venta. <br/>
                                        → Resizing y adaptación de piezas promocionales. <br/>
                                        → Copywriting de campañas y acciones. <br/>
                                        → Flota de vehículos. <br/>
                                    </p>
                                    </div>
                                </div>
                                <img src={portfolioWilo6} alt="Imagen autos de Wilo" className="img-fluid-2 w-100" />
                                <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">
                                </div>
                                {/* <div className="col-md-8 padding-0">
                                    <p className="pl-3 pt-5">
                                        Ejecuciones creativas para las redes sociales de Wilo, además de piezas 
                                        impresas como avisos, catálogos y listas de precios, entre otras comunicaciones 
                                        institucionales. Apoyo visual en stands, puntos de venta y flota de vehículos.
                                    </p>
                                </div> */}
                                <div>
                                    <img src={portfolioWilo2} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio Wilo 2" />    
                                    <img src={portfolioWilo3} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio Wilo 3" />
                                </div>
                                {/* <p className="small pl-3"> 
                                    Folleto Water Management & Industry 2019
                                </p> */}
                                <img src={portfolioWilo4} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio Wilo 4" />
                                {/* <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                Un servicio integral para un líder en tecnología de bombas 
                                                de agua. Desde Argentina, AG ayuda a definir y a posicionar la 
                                                visión global de Wilo 'Pioneering for You' para el cono sur.
                                            </b>
                                        </h5>
                                    </div>
                                </div> */}
                                <img src={portfolioWilo5} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio Wilo 5" /> 
                                {/* <p className="small ml-3"> 
                                    Presentación de productos Wilo en redes sociales
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <Footer />
        </React.Fragment>
    )
}
