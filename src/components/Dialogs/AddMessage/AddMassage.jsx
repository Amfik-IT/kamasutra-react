import React from 'react';
import s from './AddMessage.module.css'
import {addMassageActionCreator, updateNewMessageTextActionCreator} from "../../../Redux/State";

const AddMessage = (props) => {

    // let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMassageActionCreator());
    }

    let onPostChange = (e) => {
       let text = e.target.value
        // let text = newMessageElement.current.value;
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