import {GET_CITY, GET_SIRCLE} from "../types";

const initialState = {
    sircle:[],
    city: [
        {
            id: "1",
            sircle_id: "1",
            name: "Աջափնյակ"
        },
        {
            id: "2",
            sircle_id: "1",
            name: "Արաբկիր"
        },
        {
            id: "3",
            sircle_id: "1",
            name: "Ավան"
        },
        {
            id: "4",
            sircle_id: "1",
            name: "Դավիթաշեն"
        },
        {
            id: "5",
            sircle_id: "1",
            name: "Էրեբունի"
        },
        {
            id: "6",
            sircle_id: "1",
            name: "Քանաքեռ Զեյթուն"
        },
        {
            id: "7",
            sircle_id: "1",
            name: "Կենտրոն"
        },
        {
            id: "8",
            sircle_id: "1",
            name: "Մալաթիա Սեբաստիա"
        },
        {
            id: "9",
            sircle_id: "1",
            name: "Նոր Նորք"
        },
        {
            id: "10",
            sircle_id: "1",
            name: "Նորք Մարաշ"
        },
        {
            id: "11",
            sircle_id: "1",
            name: "Նուբարաշեն"
        },
        {
            id: "12",
            sircle_id: "1",
            name: "Շենգավիթ"
        }
    ]
}

export default function locationReducer(state = initialState, action) {

    switch (action.type) {
        case GET_SIRCLE:
            return {...state, sircle: action.payload};
        case GET_CITY:
            return {...state, city: action.payload};
        default:
            return state


    }
    return state
}
