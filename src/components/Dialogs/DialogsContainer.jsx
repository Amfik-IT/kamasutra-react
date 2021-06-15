import React from 'react';
import {addMassageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    // let state = props.store.getState().dialogsPage;
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(addMassageActionCreator());
    // }
    //
    // let onMessageChange = (text) => {
    //     props.store.dispatch(updateNewMessageTextActionCreator(text));
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(addMassageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }
                    return (<Dialogs updateNewMessageText={onMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogsPage={state}/>)
                }
            }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;