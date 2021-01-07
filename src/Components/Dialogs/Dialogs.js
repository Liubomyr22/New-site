import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/State';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {

  let messagesData = props.state.profilePage.messages
  .map( m => <MessageItem message={m.message} />)
  let dialogsData = props.state.profilePage.dialogs
  .map( m => <DialogItem id={m.id} name={m.name} /> )
 
  let newMessageBody = props.state.newMessageBody;

 let onSendMessageClick = () => {
   props.store.dispatch(sendMessageCreator())
 }

 let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.store.dispatch(updateNewMessageBodyCreator(body) )
 }

  return <div className={s.dialogs}>
      <div className={s.dialogItem}>
        {dialogsData}
      </div>
      <div className={s.messages}>
       {messagesData}
       <div>
       <div><textarea onChange={onNewMessageChange}
        value={newMessageBody} placeholder="Text your message"></textarea></div>
       <div><button onClick={onSendMessageClick}>Send</button></div>
       </div>
      </div>
  </div>
}

export default Dialogs;