import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostActionCreator, addPostActionCreator} from "../../../Redux/State"



const MyPosts = (props) => {

  let postsData = props.state.messagesPage.posts.map((m) => (
    <Post message={m.message} like={m.like} />
  ));

  let newPostElement = React.createRef();

  let addPostEl = () => {
    props.dispatch(addPostActionCreator())
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text)
    props.dispatch(action)
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.state.messagesPage.newPostText}
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
