const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        { message: "Hello programer", like: "42" },
        { message: "Bla bla bla", like: "0" },
        { message: "2 + 2 = 4", like: "4" },
        { message: "What's up dude", like: "15" },
      ],
      newPostText: "bla bla",
}

 const messagesPageReducer = (state = initialState,action) => {
    
    switch(action.type) {
        case ADD_POST :
            let newPost = {
                message: state.newPostText,
                like: "0",
              };
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;    
    }
   
}

export const addPostActionCreator = () => {
    return {
      type: ADD_POST,
    };
  };
  
  export const updateNewPostText = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    };
  };

export default messagesPageReducer;