import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <Switch />
        </Router>
      </div>
    );
  }
}

export default App;
