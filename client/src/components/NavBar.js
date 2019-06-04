import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <h1>Redditish</h1>
        <Link to="/">About</Link>

        <Link to="/posts">Posts</Link>

        <Link to="/users">Users</Link>
      </div>
    );
  }
}

export default Nav;
