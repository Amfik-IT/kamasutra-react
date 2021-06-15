import React from 'react';
import s from './AddMessage.module.css'
import {addMassageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/DialogsReducer";

const AddMessage = (props) => {

    let addMessage = () => {
        props.dispatch(addMassageActionCreator());
    }

    let onPostChange = (e) => {
       let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.content}>
            <div className={s.textarea}>
                <textarea onChange={onPostChange} value={props.newMessagesText}/>
            </div>
            <div className={s.button}>
                <button onClick={ addMessage }>Send</button>
            </div>
        </div>
    );
}

export default AddMessage;