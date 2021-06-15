import React from 'react';
import {addMassageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addMassageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    );
};

export default DialogsContainer;