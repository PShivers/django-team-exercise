import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
  render() {
    return (
      <div className="posts">
        <h1>Posts</h1>

        <h4>
          <Link to="/posts/create">Create Post</Link>
        </h4>

        <div className="listOfPosts">
          <ul>
            {this.props.state.posts.map(posts => {
              let linkVar = `/posts/${posts.id}`;
              return (
                <li key={posts.id}>
                  <h2>
                    <Link to={linkVar}>{posts.title}</Link>
                  </h2>
                  <p>{posts.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Posts;
