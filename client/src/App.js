import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Posts from './components/Posts';
import { getPosts } from './util.js';

class App extends Component {
  state = {
    posts: []
  };

  // componentDidMount() {
  //   getPosts().then(posts => {
  //     this.setState({
  //       posts: posts.data
  //     });
  //   });
  // }

  render() {
    const PostsC = routeprops => <Posts {...routeprops} state={this.state} />;

    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" render={PostsC} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
