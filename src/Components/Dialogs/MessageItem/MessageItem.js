import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';



const MessageItem = (props) => {
  return (
    <div>
    {/* <textarea></textarea>
    <br></br>
    <button>Add post</button> */}
  
    <div className={s.message}>{props.message}</div>
    </div>
  )
}

export default MessageItem;