const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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