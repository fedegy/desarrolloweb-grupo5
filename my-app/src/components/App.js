import NewUsuario from "../PagesLogics/NewUserLogic";
import Password from "../PagesLogics/PasswordLogic";
import Registro from '../PagesLogics/LoginLogic'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () =>  {
  return (



<BrowserRouter>
  <Switch>
    <Route exact path="/Registro" component={Registro}/>
    <Route exact path="/reiniciar-contraseña" component={Password}/>
    <Route exact path="/Nuevo-Usuario" component={NewUsuario}/>
  </Switch>
</BrowserRouter>


  
  );
} 

export default App;
