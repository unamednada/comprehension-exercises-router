import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/">Back to Homepage</Link></li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </BrowserRouter>
    );
  }
}

export default App;
