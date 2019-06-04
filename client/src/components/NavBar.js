import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <h1>appBay</h1>
        <Link to="/">About appBay</Link>

        <Link to="/ideaists">Ideaists</Link>

        <Link to="/devs">Developers</Link>
      </div>
    );
  }
}

export default Nav;
