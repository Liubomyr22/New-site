import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  let state = props.profilePage;

  let messagesData = state.messages.map((m) => (
    <MessageItem message={m.message} />
  ));
  let dialogsData = state.dialogs.map((m) => (
    <DialogItem id={m.id} name={m.name} imgUrl={m.imgUrl} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
      <span>{dialogsData}</span>
        
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="Text your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
      <div className={s.messages}>{messagesData}</div>
    </div>
  );
};

export default Dialogs;
