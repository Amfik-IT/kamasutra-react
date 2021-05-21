import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message="Hi? how are you" likeCount="15" likeIcon="&#9829;"/>
          <Post message="It's my firs post" likeCount="20" likeIcon="&#9829;"/>
          {/* <Post />
          <Post />
          <Post />
          <Post /> */}
        </div>
      </div>
    );
}

export default MyPosts;