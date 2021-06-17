import React from "react";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/ava.png';

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            props.setUsers(response.data.items)
        });
    }


    return (
        <div>
            {
                props.users.map(u => <div className={s.content} key={u.id}>
                    <div className={s.ava}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user"/>
                        </div>
                        <div>
                            <button
                                className={u.followed ? s.follow : 'unfollow'}
                                onClick={() => {props.toggleFollow(u.id, u.followed)}}>{u.followed ? 'unfollow' : 'follow'}</button>
                            {/*{u.followed*/}
                            {/*    ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>*/}
                            {/*    : <button onClick={() => {props.follow(u.id)}}>follow</button>}*/}
                        </div>
                    </div>
                    <div className={s.description}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;