const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        { message: "Can you imagine a new color that hasn’t been discovered before?", like: "42" },
        { message: "What came first? The chicken or the egg?", like: "0" },
        { message: "Red paper under a blue light appears black. Is the paper still red?", like: "4" },
        { message: "Can vegetables feel pain?", like: "15" },
      ],
      newPostText: "Add your post...",
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