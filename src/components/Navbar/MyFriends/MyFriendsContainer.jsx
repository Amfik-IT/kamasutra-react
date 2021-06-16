import React from 'react';
import {connect} from "react-redux";
import MyFriends from "./MyFriends";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         },
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextActionCreator(text));
//         },
//     }
// };
const MyFriendsContainer = connect(mapStateToProps)(MyFriends);

export default MyFriendsContainer;