import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import {connect ,Provider} from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
// import {logger} from "redux-logger/src";


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk)
    ));
const MakeStateToProps = (state) => {
    return state
}
const Main = connect(MakeStateToProps)(App)
const app = (
    <Provider store={store}>
            <Main/>
    </Provider>
)
ReactDOM.render(app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
