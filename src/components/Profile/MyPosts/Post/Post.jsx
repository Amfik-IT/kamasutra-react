import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
      <div className={s.item}>
        <img src="https://lh3.googleusercontent.com/proxy/Qhc0voQxtb4itV1bdB910nqxHWW-3cEbCIobdt2cYsCPkEEIP1eeilSWSmPfAye-xSM6zBGax9Un-u1sve6NRCmnKSNim4465q7W-cKxQ-PEZiQDWFuxrQ"/>
        Post 1
        <div>
          <span>like</span>
        </div>
      </div>
    );
}

export default Post;