import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import state from './Redux/State.js';
import store from './Redux/State.js';
import ReactDOM from 'react-dom';
import App from './App';
// import {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./Redux/State";

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 appStore={store}
                 // addPost={addPost}
                 // updateNewPostText={updateNewPostText}
                 // addMessage={addMessage}
                 // updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store);
store.subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
