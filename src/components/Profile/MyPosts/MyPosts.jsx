import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi? how are you", likeCount: 15, likeIcon: "&#9829;"},
        {id: 1, message: "It's my firs post", likeCount: 20, likeIcon: "&#9829;"},
    ];

    let postsElement = posts.map(post => <Post message={post.message} likeCount={post.likeCount} likeIcon="&#9829;"/>)

    return (
      <div className={s.postBlock}>
          <h3>My post</h3>
          <div>
              <div>
                  <textarea>Текст поста</textarea>
              </div>
              <div>
                  <button>Add post</button>
              </div>
          </div>
          <div className={s.posts}>
              {postsElement}
          </div>
      </div>
    );
}

export default MyPosts;