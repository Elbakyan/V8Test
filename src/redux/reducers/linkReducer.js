import {GET_USER_LINK} from "../types";
const initialState = {
    link:'user'
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case GET_USER_LINK:
        return {...state, link: action.payload};
        default:
            return state


    }
    return state
}