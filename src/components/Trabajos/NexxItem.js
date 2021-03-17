import React from 'react';
import NexxCarousel from './NexxCarousel';
import Footer from '../Footer';
import portfolioNexx1 from '../../assets/img/portfolio-nexx-1.jpg';
import portfolioNexx2 from '../../assets/img/portfolio-nexx-2.jpg';
import portfolioNexx3 from '../../assets/img/portfolio-nexx-3.jpg';


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
                            <NexxCarousel />    
                        </div>
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-md-4 padding-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>NEXX</p>
                                            <h4 className="xbold black">Humanizando datos</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3">
                                            Creamos NEXX, la agencia de estrategia digital 360° que acompaña a AG en su estructura de servicios. 
                                            Un equipo interdisciplinario que cree en el valor de los datos y en medir para mejorar campañas 
                                            de posicionamiento y performance.
                                        </p>
                                    </div>
                                </div>
                                <img src={portfolioNexx1} alt="Imagen principal" className="img-fluid-2" />
                                <p className="small"> 
                                    Marca gráfica
                                </p>
                                <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">
                                </div>
                                
                                <div className="col-md-7 padding-0">
                                    <p className="ml-3 pt-5">
                                        <b>NEXX es una consultoría de estrategia digital orientada 100% a performance:</b> social listening, comunicación 
                                        segmentada (orgánica y pautada), UX+UI y CRO (Conversion Rate Optimization) y campañas, 
                                        entre otros servicios digitales.
                                    </p>
                                </div>
                                <div className="md-3">
                                    <img src={portfolioNexx2} className="m-3 img-fluid-2" alt="Porfolio Nexx" />    
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                            NEXX acompaña al cliente en todo el proceso del ecosistema digital: desde el diseño y lanzamiento de sitios y campañas 
                                            digitales en buscadores hasta comprender mejor el comportamiento en línea de los usuarios, 
                                            bajo el claim Humanizamos Datos.
                                            </b>
                                        </h5>
                                    </div>
                                </div>

                                <img src={portfolioNexx3} className="m-3 img-fluid-2" alt="Porfolio Nexx" />

                                <p className="small ml-3"> 
                                    Presentaciones
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
