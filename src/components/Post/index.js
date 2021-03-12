import React, { Component } from 'react';

import './style.css';

class Post extends Component {
  render() {

    const {author,content} = this.props.post;
    return (
      <div className="post">
          <h1 className="author">{author}</h1>
          <p className="content">{content}</p>
      </div>
    );
  }

}

export default Post;