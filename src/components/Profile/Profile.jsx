import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
        <img src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"/>
      </div>
      <div>
        Ava + Description
      </div>
      <MyPosts />
    </div>
    );
}

export default Profile;