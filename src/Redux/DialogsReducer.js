import SidebarReducer from "./SidebarReducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Vova", avatar: 'https://bit.ly/3waIwov'},
        {id: 2, name: "Dimych", avatar: 'https://bit.ly/3waIwov'},
        {id: 3, name: "Slava", avatar: 'https://bit.ly/3waIwov'},
        {id: 4, name: "Ilia", avatar: 'https://bit.ly/3waIwov'},
        {id: 5, name: "Andrey", avatar: 'https://bit.ly/3waIwov'},
        {id: 6, name: "Sasha", avatar: 'https://bit.ly/3waIwov'},
    ],
    messages: [
        {id: 1, message: "Hi!", avatar: 'https://bit.ly/3waIwov', author: 'me'},
        {id: 2, message: "How is your it-kamasutra?", avatar: 'https://bit.ly/3waIwov', author: 'collocutor'},
        {id: 3, message: "I am fine =)", avatar: 'https://bit.ly/3waIwov', author: 'me'},
        {id: 4, message: "Nice ;)", avatar: 'https://bit.ly/3waIwov', author: 'collocutor'},
        {id: 5, message: "Yo ;)", avatar: 'https://bit.ly/3waIwov', author: 'me'},
    ],
    newMessagesText: 'Новое сообщение',
};

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessagesText,
                avatar: 'https://bit.ly/3waIwov',
                author: 'me',
            };
            state.messages.push(newMessage);
            state.newMessagesText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessagesText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMassageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text,})

export default DialogsReducer;