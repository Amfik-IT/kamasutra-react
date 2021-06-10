import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Massage";
import AddMessage from "./AddMessage/AddMassage";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} avatar={m.avatar} author={m.author}/>);

    return (
        <div  className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessage />
            </div>
        </div>
    );
};

export default Dialogs;