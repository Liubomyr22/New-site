import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (<div>
    <div className={s.posts}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" />
      {props.message}
      <div>
         {props.like} likes
      </div>
      </div>
        </div>
    )
}

export default Post;