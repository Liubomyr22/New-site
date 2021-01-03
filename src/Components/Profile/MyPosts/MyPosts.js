import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let posts = [
    {message: "Hello programer", like: '42'},
    {message: "Bla bla bla", like: '0'},
    {message: "2 + 2 = 4", like: '4'},
    {message: "What's up dude", like: '15'},
  ]

  let postsData = posts
  .map( m => <Post message={m.message} like={m.like} /> )

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <br></br>
        <button>Add post</button>
      </div>
      <br></br>
      <div className={s.posts}>
        {postsData}
      </div>
    </div>
  );
};

export default MyPosts;
