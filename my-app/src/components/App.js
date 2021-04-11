import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewUsuario from "../PagesLogics/NewUserLogic";
import Password from "../PagesLogics/PasswordLogic";
import Registro from "../PagesLogics/LoginLogic";
import Post from "../pages/Exercises";
import New from "../pages/ExercisesNew";
import tablas from "../pages/Comentarios";
import Dashboard from "../pages/Dashboard";

import Usuarios from "../pages/Usuarios";
import Perfil from "../pages/Perfil";

import DROPS from "../components/DropProfesores";
import DropCursos from "../components/DropCursos";

import test from '../pages/test'


import tablasCA from "../components/CAPerfil";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>

      <Route exact path="/Registro" component={Registro} />
      <Route exact path="/reiniciar-contraseña" component={Password} />
      <Route exact path="/Nuevo-Usuario" component={NewUsuario} />

      <Route exact path="/Publicaciones" component={test} />
      <Route exact path="/exercise/new" component={New} />

      <Route exact path="/Usuarios" component={Usuarios} />
      <Route exact path="/Perfil" component={Perfil} /> 

      <Route exact path="/Comentarios" component={tablas} />
      <Route exact path="/tablaCA" component={tablasCA} />
     
       
        
      <Route exact path="/drops" component={DROPS} />
      <Route exact path="/DropCursos" component={DropCursos} />

   

      <Route exact path="/Post" component={Post} />
      <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
