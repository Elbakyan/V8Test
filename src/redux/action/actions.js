import {Url} from '../../components/config/Url'
import {
    USER_STATUS_EXIST,
    GET_SIRCLE,
    GET_CITY,
    GET_AUTO_MARK,
    GET_AUTO_MODEL,
    GET_MY_AUTO,
    GET_SERVICE_NAME,
    GET_SCORE_DATA
} from "../types";
import {POST} from "../../components/config/Requsest";


export function userExist() {
    return async (dispach) => {
        const response = await fetch(Url.existUser)
        const json = await response.json();
        dispach({
            type: USER_STATUS_EXIST,
            payload: json
        })
    }
}

export function Location() {
    return async (dispach) => {
        const response = await fetch(Url.location)
        const json = await response.json();
        dispach({
            type: GET_SIRCLE,
            payload: json
        })
    }
}
export function City(e) {
    return async (dispach) => {
        let data = new FormData();

            data.append('id', e.target.selectedIndex+1);

        POST(Url.city, data).then(data=> {
            dispach({
                type: GET_CITY,
                payload: data
            })
        })

    }
}
export function Auto() {
    return async (dispach) => {
        const response = await fetch(Url.auto)
        const json = await response.json();
        dispach({
            type: GET_AUTO_MARK,
            payload: json
        })
    }
}

export function Model(e) {
    return async (dispach) => {
        let data = new FormData();
        data.append('id', e.target.selectedIndex+1);
        POST(Url.model, data).then(data=> {
            dispach({
                type: GET_AUTO_MODEL,
                payload: data
            })
        })

    }
}

export function GetMyAuto(id) {
    return async (dispach) => {
        let data = new FormData();
        data.append('user_id', id);
        POST(Url.getUserAuto,data).then(res => {
            dispach({
                type: GET_MY_AUTO,
                payload: res
            })
        })

    }
}

export function Services() {
    return async (dispach) => {
        const response = await fetch(Url.service)
        const json = await response.json();
        dispach({
            type: GET_SERVICE_NAME,
            payload: json
        })
    }
}

export function ScoreAction(id) {
    return async (dispach) => {
        let data = new FormData();
        data.append('id', id)
        POST(Url.getscore,data).then(res => {
            dispach({
                type: GET_SCORE_DATA,
                payload: res
            })
        })
    }
}


