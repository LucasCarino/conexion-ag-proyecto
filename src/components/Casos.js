import React from 'react';
import CarouselComponent from './Carousel';
import Footer from './Footer';

import casosMain from '../assets/img/casos-main.png';
import cai2 from '../assets/img/portfolio-cai-2.jpg';
import cai3 from '../assets/img/portfolio-cai-3.jpg';
import cai4 from '../assets/img/portfolio-cai-4.jpg';
import cai5 from '../assets/img/portfolio-cai-5.jpg';
import cai6 from '../assets/img/portfolio-cai-6.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

export default function Casos() {
    return(
        <React.Fragment>
            <CarouselComponent />
            <div className="portfolio">
                <div className="container">
                    <div className="row mt-3 justify-content-center">
                        <div className="col-md-4 p-0 margin-top-90 d-none d-sm-block">

                        </div>
                        <div className="col-md-8 pl-4">
                            <div>
                                <div className="portfolio-info">
                                    <p className="text-uppercase">club atlético independiente.</p>
                                    <h3 className="position-relative h3 xbold">
                                    Será siempre Independiente,
                                    <br />
                                    el orgullo nacional
                                    </h3>
                                </div>
                            </div>
                            <p>  
                                Bajo dirección creativa de Martín Laksman, y como parte del 
                                equipo de marketing del Club Atlético Independiente, acompañamos 
                                a la institución desde comienzos de 2017 en la construcción y emisión
                                de su identidad, comunicación e imagen global.
                            </p>
                        </div>
                        <img src={casosMain} alt="Imagen principal" className="nosotros-img" />
                        <div className="col-md-8 p-0 w-5 my-5">
                            <h5 class="xbold text-center">
                                Una estrategia que hace foco en contenidos digitales 
                                actualizados, con el fin de una comunicación directa, transparente 
                                y efectiva entre la institución, sus dirigentes y sus hinchas.
                            </h5>
                        </div>
                        <div className="col-md-12 p-0 d-flex justify-content-center">
                            <img src={cai2} alt="foto independiente" className="nosotros-img"/>
                        </div>
                        <div className="col-md-12 p-0 d-flex justify-content-start ml-4">
                        <p className="small">
                            2020. Efemérides de logros internacionales del club.
                        </p>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">

                            </div>
                            <div className="col-md-8 padding-0">
                                <div>
                                    <p className="pl-3">                                   
                                        Piezas de diseño que evocan el pasado glorioso del club, 
                                        reivindican el presente y construyen el futuro de uno de los 
                                        clubes más ganadores del mundo. Estas piezas de comunicación 
                                        seleccionadas conforman un porcentaje mínimo entre la decena 
                                        de piezas diseñadas por el equipo de mkt de la institución. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5 justify-content-center">
                            <div className="col-md-12 padding-0">
                                <img src= {cai3} className="w-100 mb-5" alt="cai3" />
                                <img src= {cai4} className="w-100 mb-5" alt="cai4" />
                                <img src= {cai5} className="w-100" alt="cai5"/>
                            </div>
                            <div></div>
                            <div className="col-md-12 p-0 d-flex justify-content-start ml-4">
                                <p className="small">
                                    <br />
                                    2020. Conmemoración del Día de la Futbolista Argentina.
                                </p>
                            </div>
                            <div className="col-md-12 padding-0">
                                <img src= {cai6} className="w-100" alt="cai6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}