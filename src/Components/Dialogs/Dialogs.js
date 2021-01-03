import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
  )
}

const MessageItem = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return <div className={s.dialogs}>
      <div className={s.dialogItem}>
        <DialogItem id="1" name="Ivan" />
        <DialogItem id="2" name="Petro" />
        <DialogItem id="3" name="Pavlo" />
        <DialogItem id="4" name="Stepan" />
        <DialogItem id="5" name="Vasia" />
        
      </div>
      <div className={s.messages}>
       <MessageItem message="Hello" />
       <MessageItem message="Bla bla bla" />
       <MessageItem message="What's up" />
      </div>
  </div>
}

export default Dialogs;