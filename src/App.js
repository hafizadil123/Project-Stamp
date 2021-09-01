import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Containers/HomeScreen';
import Login from './Containers/LoginScreen';
import Dashboard from './Containers/DashboardScreen';
import Error from './Containers/Error';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
