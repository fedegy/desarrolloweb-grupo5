import {BrowserRouter, Route, Switch } from 'react-router-dom'
import NewUsuario from "../PagesLogics/NewUserLogic";
import Password from "../PagesLogics/PasswordLogic";
import Registro from '../PagesLogics/LoginLogic'
import Post from '../pages/Exercises'
import New from '../pages/ExercisesNew'
import tablas from '../pages/Comentarios'



const App = () =>  { 
  return (
<BrowserRouter>
  <Switch>
  <Route exact path="/Comentarios" component={tablas}/>
    <Route exact path="/Post" component={Post}/>
    <Route exact path="/exercise/new" component={New}/>
    <Route exact path="/Registro" component={Registro}/>
    <Route exact path="/reiniciar-contraseña" component={Password}/>
    <Route exact path="/Nuevo-Usuario" component={NewUsuario}/>
  </Switch>
</BrowserRouter>
 

  
  );
} 

export default App;
