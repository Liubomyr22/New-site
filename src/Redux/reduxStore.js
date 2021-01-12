import {combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import messagesPageReducer from "./messagesPageReducer";
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesPageReducer,
    usersPage:usersReducer


})


let store = createStore(reducers)



export default store;