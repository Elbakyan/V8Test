import {GET_USER_LINK} from "../types";

export function Link(name){
    return{
        type:GET_USER_LINK,
        payload:name
    }
}