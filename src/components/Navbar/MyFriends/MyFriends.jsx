import React from 'react';
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {

    let friendsElements = props.friends.map(f => <Friend key={f.id} id={f.id} name={f.name} avatar={f.avatar}/>);

    return (
        <div className={s.content}>
            {friendsElements}
        </div>
    );
}

export default MyFriends;