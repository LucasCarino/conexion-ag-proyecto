import React from 'react';
import UnrafCarousel from './UnrafCarousel';
import Footer from '../Footer';
import portfolioUnraf1 from '../../assets/img/portfolio-unraf-1.jpg';
import portfolioUnraf2 from '../../assets/img/portfolio-unraf-2.jpg';
import portfolioUnraf3 from '../../assets/img/portfolio-unraf-3.jpg';
import portfolioUnraf4 from '../../assets/img/portfolio-unraf-4.jpg';
import portfolioUnraf5 from '../../assets/img/portfolio-unraf-5.jpg';

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
                            <UnrafCarousel />
                        </div>
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-md-4 p-0 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 p-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>UNRAF</p>
                                            <h4 className="xbold black">Colección de ideas</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3">
                                        En AG ayudamos en la identidad visual y el desarrollo editorial 
                                        de las colecciones Diseño e IDi (Investigación, Desarrollo e innovación) 
                                        de la Universidad Nacional de Rafaela.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={portfolioUnraf1} alt="Imagen principal" className="img-fluid-2 p-1 w-100" />
                                </div>
                                <p className="small pl-3"> 
                                    Marca gráfica de la colección Diseño
                                </p>
                                <div className="col-md-4 padding-0 margin-top-90 d-none d-sm-block">
                                </div>
                                <div className="col-md-8 padding-0">
                                    <p className="pl-3 pt-5">
                                    El <b>Manual de Estilo de la Colección Diseño</b> abarca las guías más importantes como el formato, 
                                    la retícula, la tipografía y el sistema de cubiertas, la cromática, la estructura y base 
                                    de contenidos, entre otros lineamientos editoriales.
                                    </p>
                                </div>
                                <div className="md-3">
                                    <img src={portfolioUnraf2} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio Unraf" />    
                                    <img src={portfolioUnraf3} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio Unraf" />
                                    <img src={portfolioUnraf4} className="p-1 mb-3 img-fluid-2 w-100" alt="Porfolio Unraf" />
                                </div>
                                <p className="small pl-3"> 
                                    Páginas del manual de estilo editorial de la colección
                                </p>
                                <div>
                                    <img src={portfolioUnraf5} className="mb-3 p-1 img-fluid-2 w-100" alt="Porfolio Unraf" />
                                </div>
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                AG ayuda a Ediciones UNRaf en su principal objetivo, la difusión de 
                                                obras científicas, artísticas y literarias producidas por docentes, 
                                                investigadores y escritores de la comunidad universitaria y de la región.
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
