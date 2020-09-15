// import {USER_STATUS_EXIST, USER_STATUS_NO_EXIST} from "../types";
import {USER_STATUS_EXIST} from "../types";

const initialState = {
    status: undefined,

}

export default function userReducer(state = initialState, action) {

        switch (action.type) {
            case USER_STATUS_EXIST:
               return  action.payload
            default:
                return state


    }
    return state
}
