import React from 'react';
import { Link } from 'react-router-dom';
import { TrabajosData } from "../data/TrabajosData";

function Proyectos(){

    return(
        <React.Fragment>
            <div className="container">
                <div id="portfolio" className="row">
                    <div>
                        <div className="col-md-7">
                            <hr />
                        </div>
                        <div className="col-md-6">
                            <h2 className="xbold black">
                                Branding, diseño y contenidos con foco en servicios digitales.
                            </h2>
                            <br />
                        </div>
                    </div>
                     {TrabajosData.map((trabajo, key) => {   
                         return(
                            <div className="col-md-6" key={key}>
                                <hr />
                                <Link to={'/trabajos/' + trabajo.name}>
                                    <div>
                                        <img src={trabajo.mainImg.default} key={key} className="trabajo-img" alt={trabajo.title} /> 
                                    </div>
                                </Link>
                                <div className="portfolio-info pt-2 pb-1">
                                    <p className="black text-uppercase">{trabajo.title}</p>
                                    <h4 className="xbold black pb-2">{trabajo.subtitle}</h4>
                                </div>
                            </div>
                         )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Proyectos;