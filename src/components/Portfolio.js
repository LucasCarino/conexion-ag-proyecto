import React from 'react';
import { Link } from 'react-router-dom';
import nosotros1 from '../assets/img/nosotros-1.jpg';
import nosotros2 from '../assets/img/nosotros-2.jpg';
import nosotros3 from '../assets/img/nosotros-3.jpg';
import nosotros4 from '../assets/img/nosotros-4.jpg';
import nosotros5 from '../assets/img/nosotros-5.jpg';
import nosotros6 from '../assets/img/nosotros-6.jpg';
import nosotros7 from '../assets/img/nosotros-7.jpg';
import nosotros8 from '../assets/img/nosotros-8.jpg';

function Portfolio(){
    return(
        <div className="container">
            <section id="portfolio">
                <div>
                    <div className="col-md-6">
                        <hr />
                        <h2 className="xbold black">
                            Somos AG. Una pequeña gran agencia con grandes y pequeños proyectos.
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="portfolio-info">
                            <h6 className="xbold black pb-2 pt-3">
                                Nuestro plan de trabajo
                            </h6>
                            <p className="pb-3">
                                En AG proveemos ideas, diseño y contenidos al 
                                negocio de nuestros clientes, con foco en productos 
                                y servicios digitales. Hoy más que nunca, trabajamos 
                                atentos a las demandas de nuestros clientes, 
                                en línea y comunicados de forma permanente. 
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="portfolio-info">
                            <h6 className="xbold black pb-2 pt-3">
                                Hiperconectados
                            </h6>
                            <p> 
                                Todos los canales son útiles para el feedback 
                                y para mantener el liderazgo en los proyectos.
                                En AG creemos en la mejora continua de nuestro 
                                equipo de diseñadores y desarrolladores, para 
                                tiempos de cambio desafiantes y llenos 
                                de oportunidades.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <h4 className="xbold black">
                            Clientes que confían.
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="portfolio-info">
                            <p className="black pb-3"> 
                                <Link to='/trabajos/smiles'>
                                    <u className="link-hover">Smiles Argentina</u>
                                </Link>
                                <br />
                                <Link to='/trabajos/wilo'>
                                <u className="link-hover">Wilo LATAM</u>
                                </Link>
                                <br />
                                <Link to='/trabajos/SMC360'>
                                <u className="link-hover">SMC360</u>
                                </Link>
                                <br />
                                <Link to='/trabajos/ceramica-cregar'>
                                <u className="link-hover">Cerámica Cregar</u>
                                </Link>
                                <br />
                                Cerámica Industrial Avellaneda
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="portfolio-info">
                            <p className="black"> 
                                Clarín
                                <br />
                                <Link to="/trabajos/unraf">
                                    <u className="link-hover">Universidad Nacional de Rafaela</u>
                                </Link>
                                <br />
                                Universidad de Palermo
                                <br />
                                Gráffica (España)
                                <br />
                                entre otros.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <h4 className="xbold black">
                            Un equipo adaptado a las demandas de la nueva normalidad.
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <img src={nosotros1} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                        —<span className="xbold black"> Lucas López</span>
                        </p>
                        <p className="mb-0 black">Fundador y director de AG, agencia especializada en branding, diseño y contenidos.</p>
                        <p className="black">
                            <i>
                                “En AG combinamos nuestra experiencia en diseño y comunicación orientados a las nuevas demandas del mercado, con una respuesta ágil para los negocios de hoy. Aportamos soluciones creativas a la estrategia de nuestros clientes.”
                            </i>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={nosotros2} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                            —<span className="xbold black"> Candela Iglesias</span>
                        </p>
                        <p className="mb-0 black"><b>Líder de proyectos.</b> Contenido gráfico y animado para distintas marcas, creatividad de identidades visuales.
                        Forma parte del equipo de la agencia desde fines de 2019.
                        <br />
                            <i>
                                “En AG, diseño y creación de contenidos digitales, además de adaptaciones para los distintos formatos de redes y pautas gráficas.”
                            </i>
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <img src={nosotros3} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                            —<span className="xbold black"> Kevin Hernández</span>
                        </p>
                        <p className="mb-0 black">
                        <b>Líder de proyectos.</b> Soluciones creativas con foco en redes sociales y digital.
                        Nacido en Venezuela, tras un paso laboral por Perú, forma parte del equipo desde mediados de 2019.
                        <br />
                            <i>
                                “Creamos y adaptamos piezas gráficas que establecen el marco de comunicación necesario para las demandas del cliente.”
                            </i>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={nosotros5} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                            —<span className="xbold black"> Débora Jael Janavel</span>
                        </p>
                        <p className="black mb-0">
                            <b>Diseñadora UX, creatividad y Design Thinking.</b> Forma parte del equipo desde mediados de 2020.
                            <br />
                            <i>
                                “Mi objetivo está puesto en empatizar con clientes y usuarios, entender sus necesidades, idear estrategias y diseñar soluciones trabajando con equipos interdisciplinarios.”
                            </i>
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <img src={nosotros6} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                            —<span className="xbold black"> Florencia Pak</span>
                        </p>
                        <p className="mb-0">
                            <b>Diseñadora especializada en editorial y entornos digitales.</b> Forma parte del equipo de AG desde fines de 2020.
                            <br />
                            <i>
                                “Proactividad, organización y responsabilidad son las herramientas personales para cualquier proyecto que desempeñe, atenta a cada etapa del trabajo.”
                            </i>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={nosotros4} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                            —<span className="xbold black"> Pablo Faro</span>
                        </p>
                        <p className="mb-0">
                            <b>Director audiovisual, diseño de motion graphics y efectos.</b> Ayuda a AG desde mediados de 2019.
                        <br />
                        <i>
                            “Más y mejores proyectos, aportando desde las herramientas y tecnologías de pantalla para animación de piezas promocionales”
                        </i>
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <img src={nosotros7} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                            —<span className="xbold black"> Lucas Carino</span>
                        </p>
                        <p className="mb-0">
                        <b>Desarrollador web.</b> Forma parte del equipo de AG desde fines de 2020.
                            <br />
                            <i>
                            “Mi objetivo es desarrollar mis capacidades en los distintos lenguajes de programación y lograr los mejores resultados en las prácticas y proyectos asignados.”
                            </i>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={nosotros8} className="nosotros-img" alt="nosotros"/>
                        <p className="mt-3">
                            —<span className="xbold black"> Inés Gallo</span>
                        </p>
                        <p className="mb-0">
                            <b>Diseñadora.</b> Forma parte del equipo de AG desde mediados de 2021.
                            <br />
                            <i>
                                "La práctica diaria, las demandas del cliente y la dinámica digital es un incentivo y un desafío en mi formación profesional."
                            </i>
                        </p>
                    </div>
                </div>
                {/* <div className="row"> */}
                {/* </div> */}
        </section>
        </div>
    )
}

export default Portfolio;