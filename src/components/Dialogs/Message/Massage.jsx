import React from 'react';
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div>
            <div className={props.author === 'me' ? `${s.message} ${s.me}` : `${s.message} ${s.collocutor}`}>
                <div className={s.ava}><img src={props.avatar} alt="avatar"/></div>
                <div className={s.text}>{props.message}</div>
            </div>
        </div>
    );
}

export default Message;