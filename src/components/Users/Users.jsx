import React from "react";
import s from './Users.module.css';
let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUpl: 'https://bit.ly/3waIwov', followed: false, fullName: "Dmitry", status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 2, photoUpl: 'https://bit.ly/3waIwov', followed: true, fullName: "Vova", status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 3, photoUpl: 'https://bit.ly/3waIwov', followed: false, fullName: "Sasha", status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id: 4, photoUpl: 'https://bit.ly/3waIwov', followed: true, fullName: "Vanya", status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        ]);
    }


    return (
        <div>
            {
                props.users.map(u => <div className={s.content} key={u.id}>
                    <div className={s.ava}>
                        <div>
                            <img src={u.photoUpl} alt="user"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                        </div>
                    </div>
                    <div className={s.description}>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;