import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';





const Dialogs = (props) => {

  let dialogs = [
    {id: 1,name:"Ivan"},
    {id: 2,name:"Petro"},
    {id: 3,name:"Stepan"},
    {id: 4,name:"Pavlo"},
    {id: 5,name:"Vova"}
  ]

  let messages = [
     {message: "Hello"},
     {message: "Bla bla bla"},
     {message: "What's up"},
     {message: "Zdorova"}
  ]

  let messagesData = messages
  .map( m => <MessageItem message={m.message} />)

  let dialogsData = dialogs
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