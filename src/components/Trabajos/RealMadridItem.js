import React from 'react';
import RealMadridCarousel from './RealMadridCarousel';
import Footer from '../Footer';
import portfolioMadrid1 from '../../assets/img/portfolio-madrid-1.jpg';
import portfolioMadrid2 from '../../assets/img/portfolio-madrid-2.jpg';
import portfolioMadrid3 from '../../assets/img/portfolio-madrid-3.jpg';
import portfolioMadrid4 from '../../assets/img/portfolio-madrid-4.jpg';
import portfolioMadrid5 from '../../assets/img/portfolio-madrid-5.jpg';


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
                            <RealMadridCarousel />  
                        </div>
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-md-4 padding-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>REAL MADRID</p>
                                            <h4 className="xbold black">MKT Deportivo</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3">
                                            Lanzada en mayo y junio de 2019 bajo el hashtag <b>UnaExperienciaParaTodaLaVida</b>#, la activación creada 
                                            para las clínicas de Fundación Real Madrid México incluyó más de 100 piezas gráficas de 
                                            comunicación para redes sociales, pauta publicitaria, y señalética para campos de 
                                            deportes.
                                        </p>
                                    </div>
                                </div>
                                <img src={portfolioMadrid1} alt="Imagen principal" className="img-fluid-2" />
                                <p className="small"> 
                                    Contenidos de apoyo para redes sociales
                                </p>
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                Las ejecuciones creativas de AG, por encargo de las agencias mexicanas AVG Business y 
                                                Plataforma Sports, junto a la logística desde Buenos Aires de SMC360, tuvieron como 
                                                objetivo comunicar en redes sociales las Clínicas Puebla y Fresnillo, en México.
                                            </b>
                                        </h5>
                                    </div>
                                </div>

                                <div className="md-3">
                                    <img src={portfolioMadrid2} className="m-3 img-fluid-2" alt="Porfolio Unraf" />    
                                </div>

                                <img src={portfolioMadrid3} className="m-3 img-fluid-2" alt="Porfolio Unraf" />
                                <img src={portfolioMadrid4} className="m-3 img-fluid-2" alt="Porfolio Unraf" />
                                <p className="small ml-3"> 
                                    Call to action
                                </p>
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                Siguiendo normas gráficas de marca del club, la potencia y prestigio del Real Madrid como firma, 
                                                sin duda, consolidan el conjunto de piezas gráfcas creadas para la activación, que apelan a un 
                                                tono local con espíritu global, con la educación y práctica del fútbol infantil y juvenil como eje.
                                            </b>
                                        </h5>
                                    </div>
                                </div>
                                <img src={portfolioMadrid5} className="m-3 img-fluid-2" alt="Porfolio Unraf" />
                                

                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    <Footer />
        </React.Fragment>
    )
}
