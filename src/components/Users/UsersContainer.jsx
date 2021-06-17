import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import { setUsersAC, toggleFollowAC} from "../../Redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId, followed) => {
            dispatch(toggleFollowAC(userId, followed))
        },
        // follow: (usersId) => {
        //     dispatch(followAC(usersId));
        // },
        // unfollow: (usersId) => {
        //     dispatch(unfollowAC(usersId));
        // },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);