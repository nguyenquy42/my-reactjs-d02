import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './style.css';
import Post from '../../components/Post';

class Home extends Component {
  render() {

    const posts = [{
      id : uuidv4(),
      author: "quys",
      content: "khong the tin dduocj bay gio laf 22h hown"
    },
    {
      id : uuidv4(),
      author: "minh",
      content: "bala bla ba la moas"
    },
    {
      id : uuidv4(),
      author: "tran",
      content: "hoom nay laf thuws 7"
    }
    ]

    return (
      <div className="home">
        {posts.map(post=> <Post key={post.id} post={post}/>)}
      </div>
    );
  }

}

export default Home;