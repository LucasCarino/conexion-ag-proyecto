import React from 'react';
import trabajo1 from '../assets/img/img-trabajo-1.jpg';
import trabajo2 from '../assets/img/img-trabajo-2.jpg';
import trabajo3 from '../assets/img/img-trabajo-3.jpg';
import trabajo4 from '../assets/img/img-trabajo-4.jpg';
import trabajo5 from '../assets/img/img-trabajo-5.jpg';
import trabajo6 from '../assets/img/img-trabajo-6.jpg';
import trabajo7 from '../assets/img/img-trabajo-7.jpg';
import trabajo8 from '../assets/img/img-trabajo-8.jpg';

function Proyectos(){
    return(
        <React.Fragment>
            <div className="container d-flex justify-content-center flex-wrap">
                <div id="portfolio" className="row portfolio-details">
                    <div className="col-md-6">
                        <hr />
                        <a href="https://www.smiles.com.ar/">
                            <img src={trabajo1} alt="smiles" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">SMILES</p>
                            <h4 className="xbold black">Cultura de millas</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <hr />
                        <a href="https://wilo.com/ar/es/">
                            <img src={trabajo2} alt="wilo" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">WILO</p>
                            <h4 className="xbold black">Soluciones verdes</h4>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-details">
                    <div className="col-md-6">
                        <hr />
                        <a href="https://www.smc360.com.ar/">
                            <img src={trabajo3} alt="smc360" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">SMC360</p>
                            <h4 className="xbold black">Sponsorship y contenidos</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <hr />
                        <a href="https://www.ceramica-cregar.com.ar/">
                            <img src={trabajo4} alt="ceramica cregar" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">CERÁMICA CREGAR</p>
                            <h4 className="xbold black">Líder en refractarios</h4>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-details">
                    <div className="col-md-6">
                        <hr />
                        <a href="https://www.unraf.edu.ar/">
                            <img src={trabajo5} alt="unraf" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">UNIVERSIDAD DE RAFAELA</p>
                            <h4 className="xbold black">Colección de ideas</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <hr />
                        <a href="https://www.realmadrid.com">
                            <img src={trabajo6} alt="real madrid" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">REAL MADRID</p>
                            <h4 className="xbold black">MKT deportivo</h4>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-details">
                    <div className="col-md-6">
                        <hr />
                        <a href="https://cerini.net/">
                            <img src={trabajo7} alt="cerini" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">CERINI</p>
                            <h4 className="xbold black">Para hombres</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <hr />
                        <a href="https://www.nexx-helmets.com/es/">
                            <img src={trabajo8} alt="nexx" className="trabajo-img"/>
                        </a>
                        <div className="portfolio-info">
                            <p className="black">NEXX</p>
                            <h4 className="xbold black">Humanizando datos</h4>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Proyectos;