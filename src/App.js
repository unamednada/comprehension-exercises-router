import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/1">Users</Link></li>
          <li><Link to="/">Back to Homepage</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>
        <Switch>
          <Route path="/strict-access" render={(props) => <StrictAccess {...props} user={ { username: 'joao', password: '1234'} } /> } />
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good morning"/>} />
          <Route path="/about" component={About} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
