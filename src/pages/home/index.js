import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './style.css';
import Post from '../../components/Post';
import Counter from '../../components/Counter';
// import { post } from '../../../api/persons.route';

const postList = [{
  id: uuidv4(),
  author: "Quý",
  content: "khong the tin dduocj bay gio laf 22h hown",
  isClicked: false,
  comments: [{
    author: "Minh",
    content: "mà không nói chắc tao không biết"
  },
  {
    author: "Trân",
    content: "Vậy luôn"
  },
  {
    author: "Nam",
    content: "vậy đó hả"
  }]

},
{
  id: uuidv4(),
  author: "minh",
  content: "bala bla ba la moas",
  isClicked: false,
  comments: [{
    author: "Minh",
    content: "mà không nói chắc tao không biết"
  },
  {
    author: "Trân",
    content: "Vậy luôn"
  },
  {
    author: "Nam",
    content: "vậy đó hả"
  }
  ]
},
{
  id: uuidv4(),
  author: "tran",
  content: "hoom nay laf thuws 7",
  isClicked: false,
  comments: [{
    author: "Minh",
    content: "mà không nói chắc tao không biết"
  },
  {
    author: "Trân",
    content: "Vậy luôn"
  },
  {
    author: "Nam",
    content: "vậy đó hả"
  }
  ]
}
]


const Home = () => {

  const [posts, setPosts] = useState(postList)

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //     posts: posts,
  //     comment: ''
  //   };
  // }

  // onClickPost = (postId) => {
  //   const newPosts = this.state.posts.map((post) => {
  //     if (post.id === postId) return { ...post, isClicked: !post.isClicked };
  //     return post;
  //   });

  //   this.setState({
  //     posts: newPosts,
  //   });
  // };

  const handleClickPost = (postId) => {
    const newPosts = posts.map(post => {
      if (post.id === postId) return { ...post, isClicked: !post.isClicked };
      return post;
    })

    setPosts(newPosts)
  }



  return (
    <div className="home" >
      <Counter />
      { posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          comment={post.comments}
          onClickPost />
      ))}
    </div >
  );



}

export default Home;