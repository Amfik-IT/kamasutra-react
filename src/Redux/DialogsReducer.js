import SidebarReducer from "./SidebarReducer";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const DialogsReducer = (state, action) => {

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