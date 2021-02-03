import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p> I WIll be the sign in page</p>
        </Route>
        <Route path="/signup">
          <p> I WIll be the sign up page</p>
        </Route>
        <Route path="/browse">
          <p> I WIll be the browse page</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
