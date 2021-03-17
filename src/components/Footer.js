import React from 'react';
import Isologo from '../assets/img/isologo.png';

function Footer(){
    return(
        <footer id="footer">
            <div className="container">
                <div className="row flex-nowrap">
                    <div className="mt-4 ml-5 pl-3">
                        <img src={Isologo} className="w-75" alt="isologo"/>
                    </div>
                    <div className="copyright">
                        <div>
                            © Copyright <strong> AG</strong>
                            . Todos los derechos reservados.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;