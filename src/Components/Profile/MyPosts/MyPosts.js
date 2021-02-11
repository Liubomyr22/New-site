import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
// import MyPostsContainer from "./MyPostsContainer"

const MyPosts = (props) => {
  const [x, setX] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_page=499&_limit=4")
      .then((response) => response.json())
      .then((json) => setX(json));
  }, []);

  let postsData = props.posts.map((m) => (
    <Post message={m.message} like={m.like} />
  ));

  let newPostElement = React.createRef();

  let addPostEl = () => {
    props.addPostActionCreator();
    // props.dispatch(addPostActionCreator())
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />

          <button onClick={addPostEl}>Add post</button>
        </div>

        <div className={s.posts}>{postsData}</div>
      </div>
      <div className={s.jsonPlaceholderPosts}>
        <h2>JSONPlaceholder Posts</h2>
        {x.map((m) => {
          return (
            <div className={s.jsonPlaceholderPostsPosition}>
              <img src={m.thumbnailUrl} />
              <p>{m.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
