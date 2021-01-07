const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
let store = {
  _state: {
    messagesPage: {
      posts: [
        { message: "Hello programer", like: "42" },
        { message: "Bla bla bla", like: "0" },
        { message: "2 + 2 = 4", like: "4" },
        { message: "What's up dude", like: "15" },
      ],
      newPostText: "bla bla",
    },
    profilePage: {
      dialogs: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Petro" },
        { id: 3, name: "Stepan" },
        { id: 4, name: "Pavlo" },
        { id: 5, name: "Vova" },
      ],

      messages: [
        { id:1, message: "Hello" },
        { id:2, message: "Bla bla bla" },
        { id:3, message: "What's up" },
        { id:4, message: "Zdorova" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("k");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        message: this._state.messagesPage.newPostText,
        like: "0",
      };
      this._state.messagesPage.posts.push(newPost);
      this._state.messagesPage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.messagesPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
        this._state.profilePage.newMessageBody = action.body;
        this._callSubscriber(this._state)
    }else if(action.type === SEND_MESSAGE){
        let body = this._state.profilePage.newMessageBody;
        this._state.profilePage.newMessageBody = '';
        this._state.profilePage.messages.push({id: 6,message: body});
        this._callSubscriber(this._state)
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageCreator = () => {
   return {
       type: SEND_MESSAGE
   }
}
export const updateNewMessageBodyCreator = (body) => {
  return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
  }
} 
export default store;
