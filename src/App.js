import logo from "./logo.svg";
import "./App.css";
import {HOME, BROWSE, SIGN_IN, SIGN_UP} from './constants/routes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={SIGN_IN}>
          <p> I WIll be the sign in page</p>
        </Route>
        <Route path={SIGN_UP}>
          <p> I WIll be the sign up page</p>
        </Route>
        <Route path={BROWSE}>
          <p> I WIll be the browse page</p>
        </Route>
        <Route path={HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
