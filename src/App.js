import "./App.css";
import {HOME, BROWSE, SIGN_IN, SIGN_UP} from './constants/routes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, Signin, Signup, Browse} from './pages'
import {IsUserRedirect, Protectedroute} from './helpers/routes'
import { useAuthListener } from "./hooks";


function App() {

const {user} = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={BROWSE} path={SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={BROWSE} path={SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <Protectedroute user={user} path={BROWSE}>
          <Browse />
        </Protectedroute>
        <IsUserRedirect user={user} loggedInPath={Browse} path={HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
