let rerenderEntireTree = () => {

}

let state = {
  messagesPage: {
    posts: [
      { message: "Hello programer", like: "42" },
      { message: "Bla bla bla", like: "0" },
      { message: "2 + 2 = 4", like: "4" },
      { message: "What's up dude", like: "15" },
    ],
    newPostText: 'bla bla'
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
      { message: "Hello" },
      { message: "Bla bla bla" },
      { message: "What's up" },
      { message: "Zdorova" },
    ],
  },
};

export const addPost = () => {
    let newPost = {
        message: state.messagesPage.newPostText, 
        like: '0'
    }
    state.messagesPage.posts.push(newPost)
    state.messagesPage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    
    state.messagesPage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
