import React from 'react';
import MidiosCarousel from './MidiosCarousel';
import Footer from '../Footer';
import portfolioMidios1 from '../../assets/img/portfolio-midios-1.png';
import portfolioMidios2 from '../../assets/img/portfolio-midios-2.jpg';
import portfolioMidios3 from '../../assets/img/portfolio-midios-3.png';
import portfolioMidios4 from '../../assets/img/portfolio-midios-4.png';
import portfolioMidios5 from '../../assets/img/portfolio-midios-5.png';
import portfolioMidios6 from '../../assets/img/portfolio-midios-6.jpg';


export default function SmilesItem() {
    return (
        <React.Fragment>
            <section id="portfolio">
                <div className="container">
                    <div className="col-md-6">
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <MidiosCarousel />
                        </div>
                        <div className="container col-md-11">
                            <div className="row mt-3">
                                <div className="col-md-4 p-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 p-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>MIDIOS</p>
                                            <h4 className="xbold black">Planificación y estrategia</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3 w-75">
                                            En AG ayudamos a la agencia Midios de Argentina
                                            y México en sus distintas campañas gráficas, identidad
                                            de marca, comunicación y ecosistema de redes sociales,
                                            aportando ideas, contenidos y recursos.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-12 pt-2">
                                    <img src={portfolioMidios1} alt="Imagen principal" className="img-fluid-2 w-100 mb-5" />
                                    <img src={portfolioMidios2} alt="Imagen principal" className="img-fluid-2 w-100" />
                                </div>
                                <div className="d-flex align-items-center my-5">

                                    <div className="col-md-5 padding-0 margin-top-90 d-none d-sm-block">
                                        <img src={portfolioMidios4} alt="Imagen principal" className="img-fluid-2 w-100" />
                                    </div>
                                    <div className="col-md-7">

                                        <h4 className="pl-3 black xbold mt-4 pt-3">Lo que hacemos para Midios</h4>
                                        <p className="pl-3 black">
                                            → Comunicación interna.<br />
                                            → Activaciones para redes sociales.<br />
                                            → Diseño de avisos para medios.<br />
                                            → Copywriting de campañas publicitarias.<br />
                                            → Definición, dirección y desarrollo de conceptos.<br />
                                            → Otros servicios creativos.<br />
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={portfolioMidios3} className="mb-5 pb-3 pl-5 img-fluid-2 w-100" alt="Porfolio Nexx" />
                                    <img src={portfolioMidios5} className="pl-5 img-fluid-2 w-100" alt="Porfolio Nexx" />
                                    <img src={portfolioMidios6} className="pl-5 img-fluid-2 w-100" alt="Porfolio Nexx" />
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
