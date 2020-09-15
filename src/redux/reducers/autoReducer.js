import {GET_AUTO_MARK, GET_AUTO_MODEL, GET_MY_AUTO} from "../types";


const initialState = {
    mark:[],
    model: [
        {
            id: "1",
            id_mark: "1",
            name: "Audi A5"
        },
        {
            id: "2",
            id_mark: "1",
            name: "Audi A6"
        },
        {
            id: "3",
            id_mark: "1",
            name: "Audi A6 (C7)"
        },
        {
            id: "4",
            id_mark: "1",
            name: "Audi A6 C5"
        },
        {
            id: "5",
            id_mark: "1",
            name: "Audi A7"
        },
        {
            id: "6",
            id_mark: "1",
            name: "Audi A8"
        },
        {
            id: "7",
            id_mark: "1",
            name: "Audi Q3"
        },
        {
            id: "8",
            id_mark: "1",
            name: "Audi Q5"
        },
        {
            id: "9",
            id_mark: "1",
            name: "Audi Q7"
        },
        {
            id: "10",
            id_mark: "1",
            name: "Audi R8"
        },
        {
            id: "11",
            id_mark: "1",
            name: "Audi RS4"
        },
        {
            id: "12",
            id_mark: "1",
            name: "Audi S3"
        },
        {
            id: "13",
            id_mark: "1",
            name: "Audi S4"
        },
        {
            id: "14",
            id_mark: "1",
            name: "Audi TT"
        },
        {
            id: "15",
            id_mark: "1",
            name: "Audi V8"
        }
    ],
    color:[
        {

            color: 'white',
            name: 'Սպիտակ'
        },
        {
            color: 'black',
            name: 'Սև'
        },
        {
            color: 'silver',
            name: 'Արծաթագույն'
        },
        {
            color: 'blue',
            name: 'Կապույտ'
        },
        {
            color: 'red',
            name: 'Կարմիր'
        },
        {
            color: 'green',
            name: 'Կանաչ'
        },
        {
            color: 'grey',
            name: 'Մոխրագույն'
        },
        {
            color: '#f512d0',
            name: 'Վարդագույն'
        },
        {
            color: 'yellow',
            name: 'Դեղին'
        },
        {
            color: 'gold',
            name: 'Ոսկեգույն'
        },
        {
            color: 'brown',
            name: 'Շագանակագույն'
        },
        {
            color: 'purple',
            name: 'Մանուշակագույն'
        },
        {
            color: 'orange',
            name: 'Նարնջագույն'
        },
        {
            color: 'beige',
            name: 'Բեժ'
        },
        {
            color: '#4d3b15',
            name: 'Սմբակագույն'
        },
        {
            color: '#790604',
            name: 'Բալագույն'
        },
        {
            color: 'silver',
            name: 'Այլ'
        }

    ],
    year: (() => {
        let temp = [];
        let year = new Date().getFullYear();
        for (let i = year; i >= 1915; i--){
            temp.push(i);
        }
        return temp;
    })(),
    engine: (() => {
        let temp = [];
        let year = new Date().getFullYear();
        for (let i = 0; i < 7; i++){
            if(i> 0 ){
                temp.push(i + '.0')
            }
            for (let j = 1; j < 10; j++){
                temp.push(i + '.' + j)
            }
        }
        temp.push("7.0")
        return temp;
    })(),
    data:''
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case GET_AUTO_MARK:
            return {...state, mark: action.payload};
        case GET_AUTO_MODEL:
            return {...state, model: action.payload};
        case GET_MY_AUTO:
            return {...state, data: action.payload};
        default:
            return state


    }
    return state
}
