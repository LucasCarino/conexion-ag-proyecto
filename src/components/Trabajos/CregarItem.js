import React from 'react';
import CregarCarousel from './CregarCarousel';
import Footer from '../Footer';
import portfolioCregar1 from '../../assets/img/portfolio-cregar-1.jpg';
import portfolioCregar2 from '../../assets/img/portfolio-cregar-2.jpg';
import portfolioCregar3 from '../../assets/img/portfolio-cregar-3.jpg';
import portfolioCregar4 from '../../assets/img/portfolio-cregar-4.jpg';
import portfolioCregar5 from '../../assets/img/portfolio-cregar-5.jpg';

export default function SmilesItem() {
    return(
        <React.Fragment>
            <section id="portfolio">
                <div className="container">
                <hr />
                    <div className="row">
                        <CregarCarousel />
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-md-4 padding-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>CERÀMICA CREGAR</p>
                                            <h4 className="xbold black">Líder en refractarios</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3">
                                            Creamos y coordinamos el Departamento de Comunicaciones 
                                            Cregar, donde gestionamos, junto a un equipo, la totalidad de la 
                                            imagen de Cerámica Cregar, lider en cerámicos refractarios.
                                        </p>
                                    </div>
                                </div>
                                <img src={portfolioCregar1} alt="Imagen principal" className="img-fluid-2" />
                                <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <p className="ml-3 pt-5">
                                        De esta forma Cerámica Cregar logró su posicionamiento
                                        y liderazgo en el mercado de los ladrillos y refractarios. Una
                                        comunicación emitida diariamente por parte de AG, de 
                                        competencia efectiva en el sector de la construcción.
                                    </p>
                                </div>
                                <div className="md-3">
                                    <img src={portfolioCregar2} className="m-3 img-fluid-2" alt="Porfolio Cregar" />    
                                </div>

                                <img src={portfolioCregar3} className="m-3 img-fluid-2" alt="Porfolio Cregar" />
                                <img src={portfolioCregar4} className="m-3 img-fluid-2" alt="Porfolio Cregar" />
                                <p className="small ml-3"> 
                                    Gestión, diseño y contenidos del sitio institucional de Cregar
                                </p>
                                <img src={portfolioCregar5} className="m-3 img-fluid-2" alt="Porfolio Cregar" />
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                De esta forma Cerámica Cregar logró su posicionamiento
                                                y liderazgo en el mercado de los ladrillos y refractarios. Una
                                                comunicación emitida diariamente por parte de AG, de 
                                                competencia efectiva en el sector de la construcción.
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
