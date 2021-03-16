import React, { useEffect, useState } from 'react';

import './style.css';

const Post = (props) => {

  const [newComment, setNewComment] = useState('')
  const { post: { id, author, content, isClicked, comments }, onCLickPost } = props;

  useEffect(() => {
    console.log(`Posr with content: ${isClicked}`)
  }, [isClicked])

  const hendleSubmit = (event) => {
    event.preventDfault();
    console.log('comment', newComment)
    setNewComment('');
  }

  const rederComment = (comment) => {
    return (
      <div className="post__comment">
        <div className="post__comment">{comment.author}</div>
        <div className="post__comment">{comment.content}</div>
      </div>
    )
  }

  return (
    // <div className="post">
    //   <h1 className="author">{author}</h1>
    //   <p className="content">{author}</p>
    // </div>


    <div>
      <p>{author}</p>
      <p>{content}</p>
      <form onSubmit={hendleSubmit}>
        <input
         className=""
         type="text"
        />
        <button>
          
        </button>
      </form>
    </div>
  );

}

export default Post;