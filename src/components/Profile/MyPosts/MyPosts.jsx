import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} likeIcon="&#9829;"/>)

    // let newPostElement = React.createRef(); // ссылка на textarea что быее можно было находить и пользоваться
    // в textarea был еще в атрибутах ref который равен newPostElement

    let addPost = () => {
        props.dispatch(addPostActionCreator()); // передаем action сразу не помещая в переменную
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}; // можно вынести action отдельно или так как в функции чуть выше
        // let action = updateNewPostTextActionCreator(text);
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
      <div className={s.postBlock}>
          <h3>My post</h3>
          <div className={s.new_post}>
              <div className={s.textarea}>
                  <textarea onChange={onPostChange} value={props.newPostText}/>
              </div>
              <div className={s.button}>
                  <button onClick={ addPost }>Send</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElement}
          </div>
      </div>
    );
}

export default MyPosts;