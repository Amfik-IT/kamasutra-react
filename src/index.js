import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State.js';
// let dialogs = [
//     {id: 1, name: "Vova"},
//     {id: 2, name: "Dimych"},
//     {id: 3, name: "Slava"},
//     {id: 4, name: "Ilia"},
//     {id: 5, name: "Andrey"},
//     {id: 6, name: "Sasha"},
// ];
//
// let messages = [
//          {id: 1, message: "Hi"},
//          {id: 2, message: "How is your it-kamasutra"},
//          {id: 3, message: "Yo"},
//          {id: 4, message: "Yo"},
//          {id: 5, message: "Yo"},
// ];
//
// let posts = [
//     {id: 1, message: "Hi? how are you", likeCount: 15, likeIcon: "&#9829;"},
//     {id: 1, message: "It's my firs post", likeCount: 20, likeIcon: "&#9829;"},
// ];

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
