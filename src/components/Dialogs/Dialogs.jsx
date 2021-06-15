import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Massage";
// import AddMessage from "./AddMessage/AddMassage";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} avatar={m.avatar} author={m.author}/>);

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div  className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                {/*<AddMessage dispatch={props.store.dispatch}*/}
                {/*            newMessagesText={state.newMessagesText}*/}
                {/*/>*/}
                <div className={s.content}>
                    <div className={s.textarea}>
                        <textarea onChange={onMessageChange} value={props.dialogsPage.newMessagesText}/>
                    </div>
                    <div className={s.button}>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;