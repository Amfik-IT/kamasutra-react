import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} likeIcon="&#9829;"/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
      <div className={s.postBlock}>
          <h3>My post</h3>
          <div className={s.new_post}>
              <div className={s.textarea}>
                  <textarea onChange={onPostChange} value={props.newPostText}/>
              </div>
              <div className={s.button}>
                  <button onClick={ onAddPost }>Send</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElement}
          </div>
      </div>
    );
}

export default MyPosts;