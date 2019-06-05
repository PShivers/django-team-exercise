import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <h1>Comments</h1>

        <h4>
          <Link to="/comments/create">Create Comment</Link>
        </h4>

        <div className="listOfComments">
          <ul>
            {this.props.state.comments.map(comments => {
              let linkVar = `/comments/${comments.id}`;
              return (
                <li key={comments.id}>
                  <h2>
                    <Link to={linkVar}>{comments.title}</Link>
                  </h2>
                  <p>{comments.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
