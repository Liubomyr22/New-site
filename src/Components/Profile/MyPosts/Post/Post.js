import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return <div>
    <div className={s.posts}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" />
      <div className={s.postContent}>{props.message}</div>
      </div>
      <div className={s.postsLike}>
         {props.like} likes
      </div>
      
        </div>
    
}

export default Post;