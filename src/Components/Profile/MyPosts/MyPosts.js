import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
// import MyPostsContainer from "./MyPostsContainer"


const MyPosts = (props) => {

  let postsData = props.posts.map((m) => (
    <Post message={m.message} like={m.like} />
  ));

  let newPostElement = React.createRef();

  let addPostEl = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <br></br>
        <button onClick={addPostEl}>Add post</button>
      </div>
      <br></br>
      <div className={s.posts}>{postsData}</div>
    </div>
  );
};

export default MyPosts;
