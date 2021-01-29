import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/signin' >
             <p> I WIll be the sign in page</p>
          </Route>
          <Route path='/signup' >
             <p> I WIll be the sign up page</p>
          </Route>
          <Route path='/browse' >
             <p> I WIll be the browse page</p>
          </Route>
          <Route path='/' >
             <p>I am going to be a cloned Netflix Application</p>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
