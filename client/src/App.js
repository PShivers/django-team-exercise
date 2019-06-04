import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from './components/NavBar';
import Posts from './components/Posts';
import { getPosts } from './util.js';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    getPosts().then(posts => {
      this.setState({
        posts: posts.data
      });
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Posts />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
