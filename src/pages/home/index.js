import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './style.css';
import Post from '../../components/Post';
import Counter from '../../components/Counter';

const posts = [{
  id: uuidv4(),
  author: "quys",
  content: "khong the tin dduocj bay gio laf 22h hown",
  isClicked: false,
},
{
  id: uuidv4(),
  author: "minh",
  content: "bala bla ba la moas",
  isClicked: false,
},
{
  id: uuidv4(),
  author: "tran",
  content: "hoom nay laf thuws 7",
  isClicked: false,
}
]
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      posts: posts,
      comment: ''
    };
  }

  onClickPost = (postId) => {
    const newPosts = this.state.posts.map((post) => {
      if (post.id === postId) return { ...post, isClicked: !post.isClicked };
      return post;
    });

    this.setState({
      posts: newPosts,
    });
  };



  render() {



    return (
      <div className="home">
        <Counter />
        {posts.map(post => <Post key={post.id} post={post} onClickPost/>)}
      </div>
    );


  }

}

export default Home;