import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
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
        <Post message="Hello Programer!" like="15" />
        <Post message="Bla bla bla..." like="23" />
        <Post message="I can use props!" like="42" />
      </div>
    </div>
  );
};

export default MyPosts;
