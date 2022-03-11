import React from 'react';
import UnrafCarousel from './UnrafCarousel';
import Footer from '../Footer';
import portfolioUnraf1 from '../../assets/img/portfolio-unraf-1.png';
import portfolioUnraf2 from '../../assets/img/portfolio-unraf-2.jpg';

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
                            <UnrafCarousel />
                        </div>
                        <div className="container col-md-11">
                            <div className="row mt-3">
                                <div className="col-md-5 p-0 d-none d-sm-block w-75">
                                </div>
                                <div className="col-md-7 p-0">
                                    <div>
                                        <div className="portfolio-info pl-5">
                                            <p className="pt-2">UNIVERSIDAD NACIONAL DE RAFAELA</p>
                                            <h2 className="h1 black">Colección de ideas</h2>
                                        </div>
                                        <br />
                                        <p className="pl-5 px-2 ls-1">
                                            En AG ayudamos en la identidad visual y el desarrollo <br />
                                            editorial de las colecciones Ficción, Diseño e IDi (Investigación,<br />
                                            Desarrollo e innovación) de la Universidad Nacional de Rafaela.<br />
                                            Además, desarrollamos sus diferentes manuales de estilo<br />
                                            y comunicaciones universitarias, entre otros servicios.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={portfolioUnraf1} alt="Imagen principal" className="img-fluid-2 p-1 pt-4 w-100" />
                                </div>
                                <div className="col-md-3 p-0 d-none d-sm-block w-75">
                                </div>
                                <div className="col-md-5 p-0 d-none d-sm-block w-75">
                                    <p className="small text-right">
                                        Portadas de la colección IDi
                                    </p>
                                </div>

                                <div className="col-md-5 p-0 d-none d-sm-block w-75">
                                </div>
                                <div className="col-md-7 p-0">
                                    <div>
                                        <br />
                                        <p className="pl-5 pb-4 px-2 ls-1">
                                            El objetivo principal de Ediciones UNRaf, la editorial<br />
                                            de la Universidad de Rafaela, es la difusión<br />
                                            de obras científicas, artísticas y literarias producidas por<br />
                                            docentes, investigadores y escritores de la comunidad<br />
                                            universitaria y de la región.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <img src={portfolioUnraf2} className="p-1 img-fluid-2 w-100" alt="Porfolio Unraf" />
                                </div>
                                <div className="col-12">
                                    <p className="small text-right">
                                        Marca gráfica y portada de la colección Diseño
                                    </p>
                                </div>
                                <div className="col-md-5 p-0 d-none d-sm-block w-75">
                                </div>
                                <div className="col-md-7 pt-4 p-0">
                                    <div>
                                        <div className="portfolio-info pl-5">
                                            <h2 className="h2 xbold black">Lo que hacemos para UNRAF</h2>
                                        </div>
                                        <br />
                                        <p className="pl-5 px-2 ls-1">
                                            → Desarrollo de editoriales para las distintas colecciones.<br/>
                                            → Manuales de estilo y pautas básicas.<br/>
                                            → Diseño de identidad para los productos de la editorial.<br/>
                                            → Maquetación de cuadernos académicos.<br/>
                                            → Desarrollos digitales de las colecciones.<br/>
                                            → Otros servicios editoriales.<br/>
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="row mt-3 justify-content-center">
                                    <div className="col-md-8 padding-0">
                                        <h5 className="text-center">
                                            <b>
                                                AG ayuda a Ediciones UNRaf en su principal objetivo, la difusión de
                                                obras científicas, artísticas y literarias producidas por docentes,
                                                investigadores y escritores de la comunidad universitaria y de la región.
                                            </b>
                                        </h5>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}
