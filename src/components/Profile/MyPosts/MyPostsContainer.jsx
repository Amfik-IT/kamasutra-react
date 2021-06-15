import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    // let state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator()); // передаем action сразу не помещая в переменную
    // }
    //
    // let onPostChange = (text) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(text));
    // }

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator()); // передаем action сразу не помещая в переменную
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>)
                }
            }
        </StoreContext.Consumer>

    );
}

export default MyPostsContainer;