import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <div className={s.ava}><img src={props.avatar} alt="photo user"/></div>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;