import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Password from "../pages/Password";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/registro">
            <SignUp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/reiniciar-contraseña">
            <Password />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
