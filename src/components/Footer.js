import React from 'react';
import Isologo from '../assets/img/isologo.png';

function Footer(){
    return(
        <footer id="footer">
            <div className="container">
                <div className="row flex-nowrap">
                    <div className="mt-4 isologo">
                        <img src={Isologo} alt="isologo"/>
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