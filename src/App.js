import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import Ideas from './components/Ideas';
import IdeasItem from './components/IdeasItem';
import Nosotros from './components/Nosotros';
import Trabajos from './components/Trabajos';
import Casos from './components/Casos';
import Contacto from './components/Contacto';
import NavBar from './components/NavBar';

function App() {
  return (
   <BrowserRouter>
   <NavBar />
    <Switch>
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
