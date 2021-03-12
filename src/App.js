import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
import NavBar from './components/NavBar';

function App() {
  return (
   <BrowserRouter>
   <NavBar />
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
   </BrowserRouter>
  );
}

export default App;
