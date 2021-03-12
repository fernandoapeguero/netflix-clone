import "./App.css";
import {HOME, BROWSE, SIGN_IN, SIGN_UP} from './constants/routes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, Signin, Signup, Browse} from './pages'


function App() {
  return (
    <Router>
      <Switch>
        <Route path={SIGN_IN}>
          <Signin />
        </Route>
        <Route path={SIGN_UP}>
          <Signup />
        </Route>
        <Route path={BROWSE}>
          <Browse />
        </Route>
        <Route path={HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
