import React from 'react';
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import *as ReactBootstrap from 'react-bootstrap'
import { Button, ButtonToolbar, Form, Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
      
      <Switch>
        <Route exact path='/' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
