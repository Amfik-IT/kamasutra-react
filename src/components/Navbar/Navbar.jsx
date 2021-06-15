import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import MyFriends from "./MyFriends/MyFriends";
import StoreContext from "../../StoreContext";

const Navbar = (props) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().sidebar;
                return(<nav className={s.nav}>
                    <div className={`${s.item} ${s.active}`}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                    </div>
                    <div className={s.friends}>
                        <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                        {/*<MyFriends friends={props.state.friends}/>*/}
                        <MyFriends friends={state.friends}/>
                    </div>
                </nav>)
            }
        }
        </StoreContext.Consumer>

    );
}

export default Navbar;