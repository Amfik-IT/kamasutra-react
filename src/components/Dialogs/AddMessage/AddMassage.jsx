import React from 'react';
import s from './AddMessage.module.css'

const AddMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    let onPostChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text});
    }

    return (
        <div className={s.content}>
            <div className={s.textarea}>
                <textarea ref={newMessageElement} onChange={onPostChange} value={props.newMessagesText}/>
            </div>
            <div className={s.button}>
                <button onClick={ addMessage }>Send</button>
            </div>
        </div>
    );
}

export default AddMessage;