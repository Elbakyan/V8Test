import {combineReducers} from "redux";
import userReducer from "./userReducer";
import locationReducer from './locationReducer'
import autoReducer from "./autoReducer";
import serviceReducer from "./serviceReducer";
import linkReducer from "./linkReducer";
import scoreReducer from "./scoreReducer";

export  default combineReducers({
    userLink: linkReducer,
    user: userReducer,
    location: locationReducer,
    auto: autoReducer,
    services:serviceReducer,
    score: scoreReducer
})

