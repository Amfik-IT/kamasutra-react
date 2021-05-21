import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"></img>
      </div>
      <div>
        Ava + Description
      </div>
      <div>
        My post
        <div>
          New post
        </div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
        <div className={s.item}>Post 3</div>
      </div>
    </div>
    );
}

export default Profile;