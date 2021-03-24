import React from 'react';
import SmilesCarousel from './SmilesCarousel';
import Footer from '../Footer';
import portfolioSmiles2 from '../../assets/img/portfolio-smiles-2.jpg';
import portfolioSmiles3 from '../../assets/img/portfolio-smiles-3.jpg';



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
                            <SmilesCarousel />
                        </div>
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-md-4 p-0 pt-4 mt-5 d-none d-sm-block">
                                    <img src={portfolioSmiles2} alt="Imagen principal" className="img-fluid-2" />
                                </div>
                                <div className="col-md-8 p-0">
                                    <div>
                                        <div className="portfolio-info pl-3">
                                            <p>SMILES</p>
                                            <h4 className="xbold black">Cultura de millas</h4>
                                        </div>
                                        <br />
                                        <p className="pl-3">
                                            En AG aportamos ideas, diseño, contenidos, 
                                            redacción, asistencia, desarrollo, programación, animaciones, 
                                            estrategia, experiencia para la comunicación digital de 
                                            Smiles Argentina. Un equipo multidisciplinario que 
                                            todos los días construye y consolida la Cultura Smiles.
                                        </p>
                                        <img src={portfolioSmiles3} alt="Imagen principal" className="img-fluid-2" />

                                        <p className="pl-3 pt-3">
                                            Smiles requieren una amplia demanda de servicios, 
                                            de acuerdo al volumen y exigencias del mercado, aportando 
                                            creatividad operativa y soluciones que ayudan al desenvolvimento 
                                            diario del negocio del turismo.
                                        </p>
                                    </div>
                                    <h4 className="pl-3 black xbold mt-4 pt-3">Lo que hacemos para Smiles</h4>
                                    <p className="pl-3 black">
                                        → Resizing y adaptación de píezas promocionales. <br/>
                                        → Diseño diario de newsletters para distintas bases. <br/>
                                        → Copywriting de campañas publicitarias. <br/>
                                        → Definición, dirección y desarrollo de conceptos. <br/>
                                        → Diseño de key visual para distintas campañas diarias. <br/>
                                        → Diseño y análisis de UX Diseño y análisis de UI. <br/>
                                        → Desarrollo front-end y back-end. <br/>
                                        → Animaciones para redes sociales. <br/>
                                    </p>
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

