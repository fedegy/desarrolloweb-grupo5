import SignUp from "../pages/SignUp";
import Password from "../pages/Password";
import Principal from '../PagesLogics/LoginLogic'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>

          <Route exact path="/Registro">
            <Principal />

          </Route>
        </Switch>
        <Switch>
          <Route exact path="/reiniciar-contraseña">
            <Password />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Nuevo-Usuario">
            <SignUp />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
} 

export default App;
