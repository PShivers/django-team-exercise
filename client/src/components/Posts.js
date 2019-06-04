import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {};
  render() {
    return (
      <div className="posts">
        <h1>Posts</h1>

        <h4>
          <Link to="/posts/create">Create Post</Link>
        </h4>

        <div className="listOfPosts">
          <List>
            {this.props.state.posts.map(posts => {
              let linkVar = `/posts/${posts._id}`;
              return (
                <li key={posts._id}>
                  <h2>
                    <Link to={linkVar}>{posts.name}</Link>
                  </h2>
                </li>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}

export default Posts;
