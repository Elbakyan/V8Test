import {GET_SCORE_DATA} from '../types'

const initialState = {
    status: false,

}

export default function userReducer(state = initialState, action) {

        switch (action.type) {
            case GET_SCORE_DATA:
               return  action.payload
            default:
                return state


    }
    return state
}
