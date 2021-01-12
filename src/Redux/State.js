import messagesPageReducer from "./messagesPageReducer";
import profileReducer from "./profileReducer";


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
     
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state)
   
  },
};


export default store;
