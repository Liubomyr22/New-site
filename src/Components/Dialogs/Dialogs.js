import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {

  let messagesData = props.messages
  .map( m => <MessageItem message={m.message} />)

  let dialogsData = props.dialogs
  .map( m => <DialogItem id={m.id} name={m.name} /> )

  return <div className={s.dialogs}>
      <div className={s.dialogItem}>
        {dialogsData}
      </div>
      <div className={s.messages}>
       {messagesData}
      </div>
  </div>
}

export default Dialogs;