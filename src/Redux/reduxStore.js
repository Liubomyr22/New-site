import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from "./profileReducer";
import messagesPageReducer from "./messagesPageReducer";
import usersReducer from './usersReducer';
import thunkMiddleWare from 'redux-thunk'
let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesPageReducer,
    usersPage:usersReducer


})


let store = createStore(reducers,applyMiddleware(thunkMiddleWare))



export default store;