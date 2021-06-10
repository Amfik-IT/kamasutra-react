import React from 'react';
import s from './AddMessage.module.css'

const AddMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.content}>
            <div className={s.textarea}>
                <textarea ref={newMessageElement} placeholder="Новое сообщение"></textarea>
            </div>
            <div className={s.button}>
                <button onClick={ addMessage }>Send</button>
            </div>
        </div>
    );
}

export default AddMessage;