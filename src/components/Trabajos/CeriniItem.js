import React from 'react';
import Footer from '../Footer';
import portfolioCerini1 from '../../assets/img/slider-cerini.jpg';
import portfolioCerini2 from '../../assets/img/portfolio-cerini-1.jpg';
import portfolioCerini3 from '../../assets/img/portfolio-cerini-2.jpg';
import portfolioCerini4 from '../../assets/img/portfolio-cerini-3.jpg';


export default function SmilesItem() {
    return(
        <React.Fragment>
            <section id="portfolio">
                <div className="container">
                    <div className="col-md-6">
                        <hr />
                    </div>
                    <div className="col-md-12">
                        <img src={portfolioCerini1} alt="Imagen principal" className="img-fluid-2 p-1" />
                    </div>
                        <div className="row mt-3">
                            <div className="col-md-4 p-0 d-none d-sm-block">
                            </div>
                            <div className="col-md-8 p-0">
                                <div>
                                    <div className="portfolio-info pl-3">
                                        <p>CERINI</p>
                                        <h4 className="xbold black">Para hombres</h4>
                                    </div>
                                    <br />
                                    <p className="pl-3">
                                    En AG ayudamos a Claudio Cerini en la identidad de marca y piezas gráficas 
                                    de su nuevo salón Club De Caballeros, inaugurado en Paseo Alcorta Shopping. 
                                    Diseñamos la marca gráfica, manual de aplicación y avisos para medios
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container col-md-11">
                            <div className="row">
                                <img src={portfolioCerini2} alt="Imagen principal" className="mb-3 img-fluid-2 p-1" />
                            </div>
                            {/* <p className="small pl-3"> 
                                Aviso en medios
                            </p> */}
                            <div className="row">
                                <img src={portfolioCerini3} className="mb-3 p-1 img-fluid-2" alt="Porfolio Cerini" />    
                            </div>
                            {/* <p className="small pl-3"> 
                                Marca principal 
                            </p> */}
                            <div className="row">
                                <img src={portfolioCerini4} className="mb-3 p-1 img-fluid-2" alt="Porfolio Cerini" />
                            </div>
                            {/* <p className="small pl-3"> 
                                Aplicación en pantallas
                            </p> */}
                        </div>
                    </div>  
            </section>
                    <Footer />
        </React.Fragment>
    )
}
