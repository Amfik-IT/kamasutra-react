import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Massage";


const Dialogs = (props) => {

    // let dialogs = [
    //     {id: 1, name: "Vova"},
    //     {id: 2, name: "Dimych"},
    //     {id: 3, name: "Slava"},
    //     {id: 4, name: "Ilia"},
    //     {id: 5, name: "Andrey"},
    //     {id: 6, name: "Sasha"},
    // ];
    //
    // let messages = [
    //     {id: 1, message: "Hi"},
    //     {id: 2, message: "How is your it-kamasutra"},
    //     {id: 3, message: "Yo"},
    //     {id: 4, message: "Yo"},
    //     {id: 5, message: "Yo"},
    // ];

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} />);

    return (
        <div  className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;