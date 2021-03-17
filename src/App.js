import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import ScrollToTop from './ScrollToTop'

import Index from './components/Index';
import Ideas from './components/Ideas';
import IdeasItem from './components/IdeasItem';
import Nosotros from './components/Nosotros';
import Trabajos from './components/Trabajos';
import Casos from './components/Casos';
import Contacto from './components/Contacto';
import SmilesItem from './components/Trabajos/SmilesItem';
import WiloItem from './components/Trabajos/WiloItem';
import SMC360Item from './components/Trabajos/SMC360Item';
import CregarItem from './components/Trabajos/CregarItem';
import UnrafItem from './components/Trabajos/UnrafItem';
import RealMadridItem from './components/Trabajos/RealMadridItem';
import CeriniItem from './components/Trabajos/CeriniItem';
import NexxItem from './components/Trabajos/NexxItem';
import NavBarComponent from './components/NavBar';

class App extends Component {
  render () {
    return (
     <BrowserRouter >
      <ScrollToTop />
      <NavBarComponent />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition 
            key={location.key}
            timeout={500}
            classNames="fade"
            >
            <Switch>
              <Route component={SmilesItem} path="/trabajos/smiles" />
              <Route component={WiloItem} path="/trabajos/wilo" />
              <Route component={SMC360Item} path="/trabajos/smc360" />
              <Route component={CregarItem} path="/trabajos/ceramica-cregar" />
              <Route component={UnrafItem} path="/trabajos/unraf" />
              <Route component={RealMadridItem} path="/trabajos/real-madrid" />
              <Route component={CeriniItem} path="/trabajos/cerini" />
              <Route component={NexxItem} path="/trabajos/nexx" />
              <Route component={Index} path='/' exact />
              <Route component={IdeasItem} path='/ideas/:slug' />
              <Route component={Ideas} path='/ideas' />
              <Route component={Nosotros} path='/nosotros' />
              <Route component={Trabajos} path='/trabajos' />
              <Route component={Casos} path='/casos' />
              <Route component={Contacto} path='/contacto' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
     </BrowserRouter>
    );
  }
}

export default App;
