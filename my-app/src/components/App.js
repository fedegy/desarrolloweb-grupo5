import NewUsuario from "../PagesLogics/NewUserLogic";
import Password from "../PagesLogics/PasswordLogic";
import Registro from '../PagesLogics/LoginLogic'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>

          <Route exact path="/Registro">
            <Registro />

          </Route>
        </Switch>
        <Switch>
          <Route exact path="/reiniciar-contraseña">
            <Password />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Nuevo-Usuario">
            <NewUsuario />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
} 

export default App;
