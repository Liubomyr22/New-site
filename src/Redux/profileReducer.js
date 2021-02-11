const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        { id: 1, name: "Ivan", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNLx7Ly59I6yE6FiVanuAPlJR4PQHTEQFIg&usqp=CAU" },
        { id: 2, name: "Petro", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XnXNotX8jvaFRSghSKKU5eMa8JWT1NWUww&usqp=CAU" },
        { id: 3, name: "Stepan", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnw9HtiCBi2yxjHYAbRumrmLf4894fawLxbQ&usqp=CAU" },
        { id: 4, name: "Vova", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HRow7SZK6mRDFp1H-Hriw9bgEyVgIObJfw&usqp=CAU" },
      ],

      messages: [
        { id:1, message: "Please remember, do not take life too seriously. You will never get out of it alive." },
        { id:2, message: "Please remember, do not take life too seriously. You will never get out of it alive." },
        { id:3, message: "Please remember, do not take life too seriously. You will never get out of it alive." },
        { id:4, message: "Please remember, do not take life too seriously. You will never get out of it alive." },
      ],
      newMessageBody: ""
}


const profileReducer = (state = initialState,action) => {
  
    switch(action.type) {
        case SEND_MESSAGE :
            let body = state.newMessageBody;
         return {
             ...state,
             messages: [...state.messages,{id: 6,message: body}],
        newMessageBody: ""
         }
        case UPDATE_NEW_MESSAGE_BODY :
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state;    
    }
     
}

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

export default profileReducer;