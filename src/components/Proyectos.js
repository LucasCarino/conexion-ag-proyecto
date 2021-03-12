import React from 'react';
import { Link } from 'react-router-dom';
import { TrabajosData } from "../data/TrabajosData";

function Proyectos(){

    return(
        <React.Fragment>
            <div className="container d-flex justify-content-center flex-wrap">
                <div id="portfolio" className="row portfolio-details">
                     {TrabajosData.map((trabajo, key) => {   
                         return(
                            <div className="col-md-6" key={key}>
                                <hr />
                                <Link to={'/trabajos/' + trabajo.name}>
                                <img src={trabajo.mainImg.default} key={key} className="trabajo-img" alt={trabajo.title} />
                                </Link>
                                <div className="portfolio-info">
                                    <p className="black text-uppercase">{trabajo.title}</p>
                                    <h4 className="xbold black">{trabajo.subtitle}</h4>
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