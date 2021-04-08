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

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Comentarios" component={tablas} />
        <Route exact path="/Post" component={Post} />
        <Route exact path="/exercise/new" component={New} />
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/reiniciar-contraseña" component={Password} />
        <Route exact path="/Nuevo-Usuario" component={NewUsuario} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Usuarios" component={Usuarios} />
        <Route exact path="/Perfil" component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
