import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Password from "./Password";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/reset">
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
