import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  const styles = {
    width:'100px',
    height:'80px'
  }
  return (
    <div className={s.dialog + ' ' + s.active}>
      <img style={styles} src={props.imgUrl} />
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
  )
}

export default DialogItem;