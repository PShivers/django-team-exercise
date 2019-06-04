import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from './components/NavBar'

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch />
        </Router>
      </div>
    );
  }
}

export default App;
